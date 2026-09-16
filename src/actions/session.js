import { state, resetSessionState } from '../model/state.js';
import { saveSession, clearSession } from '../model/storage.js';
import * as transport from '../net/transport.js';
import { enterGame } from '../flow.js';
import {
  renderPlayers, renderGamesList, showSessionAsHost, showSessionAsClient, showGameBrowser
} from '../ui/hud.js';
import { showAlert, showConfirm } from '../ui/modals.js';

// Acciones de sesión iniciadas por el usuario: crear/unirse a partida desde el
// listado, iniciar partida, abandonar sala y salir del juego.

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
  return name;
}

function hasGameWithName(name) {
  return state.lobbyGames.some((g) =>
    g.status !== 'finished' && g.hostName && g.hostName.toLowerCase() === name.toLowerCase()
  );
}

export function createGame() {
  const name = getAndValidateName();
  if (!name) return;
  if (hasGameWithName(name)) return showAlert('Ya existe una partida creada con ese nombre.');

  state.myPlayerName = name;
  state.isHost = true;
  state.myPlayerId = 'P1';
  state.playersList = [{ id: 'P1', name }];
  state.sessionJoined = true;
  state.sessionId = transport.createSession(name);

  showSessionAsHost(name);
  renderPlayers();
  saveSession();
}

export function joinGame(sessionId) {
  const name = getAndValidateName();
  if (!name) return;
  if (state.sessionJoined) return;

  const game = state.lobbyGames.find((g) => g.id === sessionId);
  if (!game || game.status !== 'lobby') return showAlert('Esa partida ya no está disponible.');

  state.myPlayerName = name;
  state.sessionId = sessionId;
  state.isHost = false;

  transport.joinSession(sessionId);
  showSessionAsClient(game.hostName);
  // El SDK de Firebase encola la escritura hasta que haya conexión
  transport.broadcast({ type: 'HANDSHAKE', name });
}

export async function startGame() {
  if (!state.isHost) return;
  if (state.playersList.length < 2) {
    const confirmSolo = await showConfirm('¿Quieres iniciar una partida en solitario?', 'Partida Individual');
    if (!confirmSolo) return;
  }

  state.activePlayerId = state.playersList[0].id;
  state.gameStarted = true;
  saveSession();
  transport.updateLobbyEntry({ status: 'started' });
  transport.broadcast({ type: 'GAME_STARTED', players: state.playersList, activePlayerId: state.activePlayerId });
  enterGame();
}

// Salir de la sala antes de empezar la partida (vuelve al listado sin recargar)
export function leaveSession() {
  if (!state.sessionId) return;

  if (state.isHost) {
    transport.disconnect();
    transport.removeSession();
  } else {
    // Sin WELCOME aún no hay id asignado: no hay nada que notificar
    if (state.sessionJoined) {
      transport.broadcast({ type: 'PLAYER_LEFT', playerId: state.myPlayerId, playerName: state.myPlayerName });
    }
    transport.disconnect();
  }

  resetSessionState();
  showGameBrowser();
}

// Salir con la partida en marcha
export async function exitGame(force = false) {
  if (!force && !state.gameOverTriggered) {
    const confirmed = await showConfirm('¿Seguro que quieres abandonar la partida y borrar los datos guardados?', 'Salir del Juego');
    if (!confirmed) return;
  }

  if (state.isHost) {
    transport.disconnect();
    transport.removeSession();
  } else {
    // Con la partida terminada la sala ya está muerta: no se generan eventos
    if (state.sessionJoined && !state.gameOverTriggered) {
      transport.broadcast({ type: 'PLAYER_LEFT', playerId: state.myPlayerId, playerName: state.myPlayerName });
    }
    transport.disconnect();
  }

  document.body.classList.remove('in-game');
  clearSession();
  window.location.reload();
}

// La partida desapareció (el anfitrión se desconectó o la cerró)
export function handleSessionEnded() {
  if (state.gameOverTriggered) return;
  resetToStart('El anfitrión ha cerrado la partida o perdió la conexión.', 'Partida Cerrada');
}

// Volver al listado limpiando todo el estado (sin avisar a nadie: o nunca se
// entró, o la partida ya no existe)
export async function resetToStart(message, title = 'Atención') {
  if (message) await showAlert(message, title);
  transport.disconnect();
  window.location.reload();
}
