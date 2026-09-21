import { state, resetSessionState, restoreBoard, restoreTurn, restoreHostState } from '../model/state.js';
import { saveSession, clearSession, loadSavedSession } from '../model/storage.js';
import * as transport from '../net/transport.js';
import { enterGame, renderGame } from '../flow.js';
import { clearPresenceWatchdog } from '../net/presence.js';
import { setOnlineName, setOnlineStatus } from '../net/online.js';
import {
  renderPlayers, renderGamesList,
  showSessionAsHost, showSessionAsClient, showGameBrowser
} from '../ui/hud.js';
import { requestAutoFullscreen, exitFullscreen } from '../ui/fullscreen.js';
import { showAlert, showConfirm } from '../ui/modals.js';

// Acciones de sesión: crear/unirse desde el listado, reconectar tras un
// refresco o microcorte, iniciar partida, abandonar sala y salir del juego.

const RECONNECT_TIMEOUT_MS = 100000;

export function initLobbyListener() {
  transport.listenLobby((games) => {
    state.lobbyGames = games;
    renderGamesList();
  });

  transport.onSessionStatus((status) => {
    if (status === null && state.sessionId) handleSessionEnded();
  });
}

function getAndValidateName() {
  const nameInput = document.getElementById('player-name-input');
  const name = nameInput.value.trim();
  if (!name) {
    showAlert('Introduce tu nombre antes de empezar.');
    nameInput.focus();
    return null;
  }
  localStorage.setItem('qwixx_player_name', name);
  setOnlineName(name);
  return name;
}

function hasOwnActiveGame() {
  return state.lobbyGames.some((g) => g.hostUserId === state.userId && g.status !== 'finished');
}

export function createGame() {
  const name = getAndValidateName();
  if (!name) return;
  if (hasOwnActiveGame()) return showAlert('Ya tienes una partida creada con tu usuario.');

  state.myPlayerName = name;
  state.isHost = true;
  state.myPlayerId = 'P1';
  state.playersList = [{ id: 'P1', userId: state.userId, name }];
  state.sessionJoined = true;
  state.sessionJoined = true;
  state.sessionId = transport.createSession(name);
  transport.attachPresence();
  setOnlineStatus('playing');
  requestAutoFullscreen();

  showSessionAsHost(name);
  renderPlayers();
  saveSession();
}

export function joinGame(sessionId) {
  const name = getAndValidateName();
  if (!name) return;
  if (state.sessionJoined || state.reconnecting) return;

  const game = state.lobbyGames.find((g) => g.id === sessionId);
  if (!game || game.status !== 'lobby') return showAlert('Esa partida ya no está disponible.');
  if (game.hostOnline === false) return showAlert('El anfitrión no está conectado. Podrás unirte cuando vuelva.');

  state.myPlayerName = name;
  state.sessionId = sessionId;
  state.isHost = false;

  transport.joinSession(sessionId);
  showSessionAsClient(game.hostName);
  transport.broadcast({ type: 'HANDSHAKE', userId: state.userId, name });
  setOnlineStatus('playing');
  requestAutoFullscreen();
}

export async function startGame() {
  if (!state.isHost) return;
  if (state.playersList.length < 2) {
    const confirmSolo = await showConfirm('¿Quieres iniciar una partida en solitario?', 'Partida Individual');
    if (!confirmSolo) return;
  }

  state.activePlayerId = state.playersList[0].id;
  state.gameStarted = true;
  state.turnCounter = 1;
  saveSession();
  requestAutoFullscreen();
  transport.updateLobbyEntry({ status: 'started' });
  transport.broadcast({
    type: 'GAME_STARTED',
    players: state.playersList,
    activePlayerId: state.activePlayerId,
    turn: state.turnCounter
  });
  enterGame();
}

// Reconexión tras refresco o microcorte: el estado local se restaura del
// localStorage y el host confirma con un WELCOME
export function tryReconnect() {
  const saved = loadSavedSession();
  if (!saved || !state.userId) return false;

  state.sessionId = saved.sessionId;
  state.isHost = saved.isHost;
  state.myPlayerId = saved.myPlayerId;
  state.myPlayerName = saved.name || state.myPlayerName;
  state.turnCounter = saved.turnCounter || 0;
  setOnlineStatus('playing');

  restoreBoard(saved.board);
  restoreTurn(saved.turn);

  if (saved.isHost) {
    restoreHostState(saved.hostState);
    state.sessionJoined = true;
    transport.joinSession(saved.sessionId);
    transport.attachPresence();
    transport.armHostOnline(saved.sessionId);
    if (state.gameStarted) enterGame();
    else showSessionAsHost(state.myPlayerName);
    renderGame();
    saveSession();
  } else {
    state.reconnecting = true;
    transport.joinSession(saved.sessionId);
    if (saved.gameStarted) enterGame();
    else showSessionAsClient(sessionHostName(saved.sessionId));
    renderGame();
    transport.broadcast({ type: 'REJOIN', userId: state.userId, name: state.myPlayerName });
    setTimeout(() => {
      if (state.reconnecting) {
        state.reconnecting = false;
        resetToStart('No se pudo recuperar la partida.');
      }
    }, RECONNECT_TIMEOUT_MS);
  }

  return true;
}

function sessionHostName(sessionId) {
  const game = state.lobbyGames.find((g) => g.id === sessionId);
  return game ? game.hostName : '...';
}

// Salir de la sala antes de empezar la partida (vuelve al listado sin recargar)
export function leaveSession() {
  if (!state.sessionId) return;

  if (state.isHost) {
    transport.disconnect();
    transport.removeSession();
  } else if (state.playersList.some((p) => p.id === state.myPlayerId)) {
    transport.broadcast({ type: 'PLAYER_LEFT', playerId: state.myPlayerId, playerName: state.myPlayerName });
    transport.disconnect();
  } else {
    transport.disconnect();
  }

  clearPresenceWatchdog();
  clearSession();
  resetSessionState();
  setOnlineStatus('lobby');
  exitFullscreen();
  showGameBrowser();
}

// Salir a propósito: borra las claves de sesión para no reconectar
export async function exitGame(force = false) {
  if (!force && !state.gameOverTriggered) {
    const confirmed = await showConfirm('¿Seguro que quieres abandonar la partida?', 'Salir del Juego');
    if (!confirmed) return;
  }

  if (state.isHost) {
    transport.disconnect();
    transport.removeSession();
  } else {
    if (state.sessionJoined && !state.gameOverTriggered) {
      transport.broadcast({ type: 'PLAYER_LEFT', playerId: state.myPlayerId, playerName: state.myPlayerName });
    }
    transport.disconnect();
  }

  clearPresenceWatchdog();
  document.body.classList.remove('in-game');
  clearSession();
  window.location.reload();
}

// La partida desapareció (el anfitrión se desconectó o la cerró)
export function handleSessionEnded() {
  if (state.gameOverTriggered) return;
  clearPresenceWatchdog();
  resetToStart('El anfitrión ha cerrado la partida o perdió la conexión.', 'Partida Cerrada');
}

// Volver al listado limpiando todo el estado (sin avisar a nadie: o nunca se
// entró, o la partida ya no existe)
export async function resetToStart(message, title = 'Atención') {
  if (message) await showAlert(message, title);
  clearPresenceWatchdog();
  transport.disconnect();
  clearSession();
  window.location.reload();
}
