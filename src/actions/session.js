import { state } from '../model/state.js';
import { saveSession, clearSession } from '../model/storage.js';
import { broadcast, connect, disconnect } from '../net/transport.js';
import { enterGame } from '../flow.js';
import { renderPlayers, showLobbyAsHost, showLobbyAsClient } from '../ui/hud.js';
import { showAlert, showConfirm } from '../ui/modals.js';

// Acciones de sesión iniciadas por el usuario: crear/unirse a sala, iniciar partida y salir.

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

export function createRoom() {
  const name = getAndValidateName();
  if (!name) return;

  state.myPlayerName = name;
  state.roomCode = Math.floor(1000 + Math.random() * 9000).toString();
  state.isHost = true;
  state.myPlayerId = 'P1';
  state.playersList = [{ id: 'P1', name }];

  connect(state.roomCode);
  showLobbyAsHost(state.roomCode);
  renderPlayers();
  saveSession();
}

export function joinRoom() {
  const name = getAndValidateName();
  if (!name) return;
  const inputCode = document.getElementById('room-code-input').value.trim();
  if (!inputCode) return showAlert('Introduce un código de sala.');

  state.myPlayerName = name;
  state.roomCode = inputCode;
  state.isHost = false;

  connect(inputCode);
  showLobbyAsClient(inputCode);

  // Margen para que los WebSockets abran antes de emitir la solicitud
  // (transport encola los envíos hasta la primera conexión)
  setTimeout(() => {
    broadcast({ type: 'HANDSHAKE', name: state.myPlayerName });
  }, 500);
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
  broadcast({ type: 'GAME_STARTED', players: state.playersList, activePlayerId: state.activePlayerId });
  enterGame();
}

export async function exitGame(force = false) {
  if (!force && !state.gameOverTriggered) {
    const confirmed = await showConfirm('¿Seguro que quieres abandonar la partida y borrar los datos guardados?', 'Salir del Juego');
    if (!confirmed) return;
  }

  broadcast({
    type: 'PLAYER_LEFT',
    playerId: state.myPlayerId,
    playerName: state.myPlayerName,
    players: state.playersList.filter((p) => p.id !== state.myPlayerId),
    activePlayerId: state.activePlayerId === state.myPlayerId
      ? (state.playersList.find((p) => p.id !== state.myPlayerId) || {}).id
      : state.activePlayerId
  });

  disconnect();
  document.body.classList.remove('in-game');
  clearSession();
  window.location.reload();
}
