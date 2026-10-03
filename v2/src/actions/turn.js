import {
  state, addBoardMark, removeBoardMark, addPenalty
} from '../model/state.js';
import { saveSession } from '../model/storage.js';
import { broadcast } from '../net/transport.js';
import { processValidation } from '../net/host.js';
import {
  getValidTargets, isMyTurn, isForcedPenalty, isRowClosingCell,
  isMarkedInTurn, isLockedClosureCell, targetKey
} from '../logic/rules.js';
import { flowDiceRolled, renderGame } from '../flow.js';
import { showAlert, showConfirm } from '../ui/modals.js';
import { COLOR_NAMES_ES, LOCK_VAL, ROW_VALUES } from '../constants.js';

// Acciones de juego iniciadas por el usuario: lanzar dados, marcar/desmarcar
// casillas y validar el turno.

export function rollDice() {
  if (!state.gameStarted || state.myPlayerId !== state.activePlayerId || state.turn.hasRolled) return;

  const dice = {
    w1: Math.floor(Math.random() * 6) + 1, w2: Math.floor(Math.random() * 6) + 1,
    r: Math.floor(Math.random() * 6) + 1, y: Math.floor(Math.random() * 6) + 1,
    g: Math.floor(Math.random() * 6) + 1, b: Math.floor(Math.random() * 6) + 1
  };

  flowDiceRolled(dice, state.turnCounter);
  saveSession();
  broadcast({ type: 'DICE_ROLLED', dice, turn: state.turnCounter });
}

export function handleCellClick(cell) {
  if (!state.gameStarted || !state.turn.hasRolled || state.turn.hasValidated || state.gameOverTriggered) return;

  const row = cell.parentElement;
  if (!row || !row.id.startsWith('row-')) return;
  const color = row.id.replace('row-', '');
  const val = cell.dataset.val;

  if (state.board.marks[color].has(val)) {
    handleUndoClick(color, val);
    return;
  }

  const targets = getValidTargets(state);
  const key = targetKey(color, val);

  let actionType = null;
  if (targets.white.has(key) && !state.turn.hasMarkedWhite) {
    actionType = 'white';
    state.turn.hasMarkedWhite = true;
  } else if (targets.color.has(key) && !state.turn.hasMarkedColor) {
    actionType = 'color';
    state.turn.hasMarkedColor = true;
  }
  if (!actionType) return;

  addBoardMark(color, val);
  state.turn.marked.push({ color, val, actionType });

  if (isRowClosingCell(color, val)) {
    addBoardMark(color, LOCK_VAL);
    state.turn.marked.push({ color, val: LOCK_VAL, actionType: 'lock' });
    state.turn.pendingClosedRows.add(color);
  }

  renderGame();
  saveSession();
}

function handleUndoClick(color, val) {
  if (isLockedClosureCell(state, color, val)) {
    showAlert(`No puedes deshacer el cierre de ${COLOR_NAMES_ES[color]}.`);
    return;
  }
  if (!isMarkedInTurn(state, color, val)) return;

  // Deshacer la última casilla o el candado de un cierre pendiente
  // deshace ambos y cancela el cierre
  if ((val === LOCK_VAL || isRowClosingCell(color, val)) && state.turn.pendingClosedRows.has(color)) {
    const closingVal = isRowClosingCell(color, val) ? val : ROW_VALUES[color][ROW_VALUES[color].length - 1];
    removeBoardMark(color, closingVal);
    removeBoardMark(color, LOCK_VAL);
    state.turn.marked = state.turn.marked.filter((m) => !(m.color === color && (m.val === closingVal || m.val === LOCK_VAL)));
    state.turn.pendingClosedRows.delete(color);
  } else {
    removeBoardMark(color, val);
    state.turn.marked = state.turn.marked.filter((m) => !(m.color === color && m.val === val));
  }

  state.turn.hasMarkedWhite = state.turn.marked.some((m) => m.actionType === 'white');
  state.turn.hasMarkedColor = state.turn.marked.some((m) => m.actionType === 'color');

  renderGame();
  saveSession();
}

export async function validateTurn() {
  if (!state.gameStarted || state.gameOverTriggered || state.turn.hasValidated) return;

  const myTurn = isMyTurn(state);

  if (!state.turn.hasRolled) {
    if (myTurn) return showAlert('Debes lanzar los dados antes de validar tu turno.');
    return showAlert('Debes esperar a que el jugador activo lance los dados.');
  }

  if (myTurn && state.turn.marked.length === 0) {
    if (isForcedPenalty(state)) {
      await showAlert('Como no tienes combinaciones posibles con la tirada actual, cometes una falta obligatoria (-5 pts).', 'Sin Combinaciones Válidas');
    } else {
      const confirmPenalty = await showConfirm('No has marcado ninguna casilla en tu turno. ¿Deseas pasar y anotarte una falta (-5 pts)?', 'Anotar Falta');
      if (!confirmPenalty) return;
    }
    addPenalty();
  }

  state.turn.hasValidated = true;
  renderGame();

  const pendingClosedRows = Array.from(state.turn.pendingClosedRows);

  if (state.isHost) {
    processValidation(state.myPlayerId, state.myPlayerName, pendingClosedRows, state.turnCounter);
  } else {
    broadcast({
      type: 'PLAYER_VALIDATED',
      playerId: state.myPlayerId,
      playerName: state.myPlayerName,
      pendingClosedRows,
      turn: state.turnCounter
    });
  }
}
