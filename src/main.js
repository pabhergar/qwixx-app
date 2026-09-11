import { state, resetTurnFlags, saveSessionState, colorNamesSpanish } from './js/state.js';
import { calculateScores } from './js/game.js';
import { updateCellHighlights, renderPlayerLists, updateTurnUI, hideWaitPanel, toggleWaitPanel, showAlert, showConfirm } from './js/ui.js';
import { broadcast, initNostrNetwork, processPlayerValidation, startGameUI, exitGame } from './js/network.js';

window.addEventListener('DOMContentLoaded', () => {
  const savedName = localStorage.getItem('qwixx_player_name');
  if (savedName) document.getElementById('player-name-input').value = savedName;

  document.getElementById('btn-create-room').addEventListener('click', createRoom);
  document.getElementById('btn-join-room').addEventListener('click', joinRoom);
  document.getElementById('btn-start-game').addEventListener('click', startGame);
  document.getElementById('btn-roll-dice').addEventListener('click', handleRollClick);
  document.getElementById('btn-validate-turn').addEventListener('click', validateTurnAction);
  document.getElementById('btn-exit-game').addEventListener('click', () => exitGame(false));
  document.getElementById('btn-modal-exit').addEventListener('click', () => exitGame(true));
  document.getElementById('btn-show-players').addEventListener('click', toggleWaitPanel);
  document.getElementById('btn-return-actions').addEventListener('click', hideWaitPanel);

  document.getElementById('game-area').addEventListener('click', (e) => {
    const cell = e.target.closest('.cell');
    if (cell) handleCellClick(cell);
  });
});

function getAndValidateName() {
  const nameInput = document.getElementById('player-name-input');
  const name = nameInput.value.trim();
  if (!name) { showAlert('Introduce tu nombre antes de empezar.'); nameInput.focus(); return null; }
  localStorage.setItem('qwixx_player_name', name);
  return name;
}

function createRoom() {
  const name = getAndValidateName();
  if (!name) return;

  state.myPlayerName = name;
  state.roomCode = Math.floor(1000 + Math.random() * 9000).toString();
  state.isHost = true;
  state.myPlayerId = 'P1';
  state.playersList = [{ id: 'P1', name: state.myPlayerName }];

  // Inicializa la red Nostr apuntando al código de sala
  initNostrNetwork(state.roomCode);

  document.getElementById('net-setup').style.display = 'none';
  document.getElementById('lobby-section').style.display = 'block';
  document.getElementById('display-room-code').innerText = state.roomCode;
  document.getElementById('host-controls').style.display = 'block';

  renderPlayerLists();
  saveSessionState();
}

function joinRoom() {
  const name = getAndValidateName();
  if (!name) return;
  const inputCode = document.getElementById('room-code-input').value.trim();
  if (!inputCode) return showAlert('Introduce un código de sala.');

  state.myPlayerName = name;
  state.roomCode = inputCode;
  state.isHost = false;

  // Inicializa los sockets Nostr hacia los relays públicos
  initNostrNetwork(inputCode);

  document.getElementById('net-setup').style.display = 'none';
  document.getElementById('lobby-section').style.display = 'block';
  document.getElementById('display-room-code').innerText = inputCode;
  document.getElementById('client-waiting').style.display = 'block';

  // Pequeño margen para asegurar que los WebSockets estén abiertos antes de emitir la solicitud
  setTimeout(() => {
    broadcast({ type: 'HANDSHAKE', name: state.myPlayerName });
  }, 500);
}

async function startGame() {
  if (!state.isHost) return;
  if (state.playersList.length < 2) {
    const confirmSolo = await showConfirm('¿Quieres iniciar una partida en solitario?', 'Partida Individual');
    if (!confirmSolo) return;
  }
  state.activePlayerId = state.playersList[0].id;
  state.gameStarted = true;
  saveSessionState();
  broadcast({ type: 'GAME_STARTED', players: state.playersList, activePlayerId: state.activePlayerId });
  startGameUI();
}

function handleRollClick() {
  if (state.myPlayerId !== state.activePlayerId || state.hasRolledInTurn) return;

  const res = {
    w1: Math.floor(Math.random() * 6) + 1, w2: Math.floor(Math.random() * 6) + 1,
    r: Math.floor(Math.random() * 6) + 1, y: Math.floor(Math.random() * 6) + 1,
    g: Math.floor(Math.random() * 6) + 1, b: Math.floor(Math.random() * 6) + 1
  };

  resetTurnFlags();
  state.hasRolledInTurn = true;
  document.getElementById('btn-roll-dice').disabled = true;
  state.currentDiceResults = res;

  updateTurnUI();
  updateCellHighlights();
  saveSessionState();
  broadcast({ type: 'DICE_ROLLED', dice: res });
}

function handleCellClick(cell) {
  if (!state.gameStarted || !state.hasRolledInTurn || state.hasValidatedTurn || state.gameOverTriggered) return;

  const row = cell.parentElement;
  if (!row || !row.id.startsWith('row-')) return;
  const color = row.id.replace('row-', '');
  const val = cell.dataset.val;

  if (cell.classList.contains('marked')) {
    if (state.myLockedClosuresThisTurn.has(color) && (val === '12' || val === '2' || val === 'lock')) {
      return showAlert(`No puedes deshacer el cierre de ${colorNamesSpanish[color]}.`);
    }
    const indexInTurn = state.markedThisTurn.findIndex(m => m.color === color && m.val === val);
    if (indexInTurn !== -1) {
      cell.classList.remove('marked', 'turn-marked');
      state.markedThisTurn.splice(indexInTurn, 1);
      state.hasMarkedWhiteThisTurn = state.markedThisTurn.some(m => m.actionType === 'white');
      state.hasMarkedColorThisTurn = state.markedThisTurn.some(m => m.actionType === 'color');
      state.hasMarkedInTurn = state.markedThisTurn.length > 0;
      updateCellHighlights();
      calculateScores();
      saveSessionState();
    }
    return;
  }

  if (!cell.classList.contains('selectable')) return;
  const isWhite = cell.classList.contains('selectable-white');
  const isColor = cell.classList.contains('selectable-color');

  let assignedAction = null;
  if (isWhite && !state.hasMarkedWhiteThisTurn) { assignedAction = 'white'; state.hasMarkedWhiteThisTurn = true; }
  else if (isColor && !state.hasMarkedColorThisTurn) { assignedAction = 'color'; state.hasMarkedColorThisTurn = true; }

  if (!assignedAction) return;

  cell.classList.add('marked', 'turn-marked');
  state.markedThisTurn.push({ color, val, actionType: assignedAction });

  const cells = Array.from(row.querySelectorAll('.cell:not(.lock)'));
  if (cells.indexOf(cell) === 10) {
    const lockCell = row.querySelector('.cell.lock');
    if (lockCell && !lockCell.classList.contains('marked')) {
      lockCell.classList.add('marked', 'turn-marked');
      state.markedThisTurn.push({ color, val: 'lock', actionType: 'lock' });
      state.pendingClosedRowsThisTurn.add(color);
    }
  }

  state.hasMarkedInTurn = true;
  calculateScores();
  updateCellHighlights();
  saveSessionState();
}

async function validateTurnAction() {
  if (!state.gameStarted || state.gameOverTriggered || state.hasValidatedTurn) return;

  const isMyTurn = (state.myPlayerId === state.activePlayerId);

  if (!state.hasRolledInTurn) {
    if (isMyTurn) return showAlert('Debes lanzar los dados antes de validar tu turno.');
    else return showAlert('Debes esperar a que el jugador activo lance los dados.');
  }

  if (isMyTurn && !state.hasMarkedInTurn) {
    if (state.isForcedPenalty) {
      await showAlert('Como no tienes combinaciones posibles con la tirada actual, cometes una falta obligatoria (-5 pts).', 'Sin Combinaciones Válidas');
    } else {
      const confirmPenalty = await showConfirm('No has marcado ninguna casilla en tu turno. ¿Deseas pasar y anotarte una falta (-5 pts)?', 'Anotar Falta');
      if (!confirmPenalty) return;
    }

    const emptyPen = Array.from(document.querySelectorAll('.penalty-box')).find(p => !p.classList.contains('marked'));
    if (emptyPen) {
      emptyPen.classList.add('marked');
      calculateScores();
    }
  }

  state.hasValidatedTurn = true;
  updateTurnUI();
  updateCellHighlights();

  const pendingArray = Array.from(state.pendingClosedRowsThisTurn);

  if (state.isHost) {
    processPlayerValidation(state.myPlayerId, state.myPlayerName, pendingArray);
  } else {
    broadcast({ type: 'PLAYER_VALIDATED', playerId: state.myPlayerId, playerName: state.myPlayerName, pendingClosedRows: pendingArray });
  }
}
