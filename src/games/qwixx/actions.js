import { state, addBoardMark, removeBoardMark, addPenalty } from '../../model/state.js';
import { saveSession } from '../../model/storage.js';
import { broadcast } from '../../net/transport.js';
import { rollDiceValues } from '../../framework/dice.js';
import {
  getValidTargets, isForcedPenalty, isRowClosingCell,
  isMarkedInTurn, isLockedClosureCell, targetKey
} from './rules.js';
import { flowDiceRolled, renderGame } from '../../flow.js';
import { showAlert, showConfirm } from '../../ui/modals.js';
import { COLOR_NAMES_ES, LOCK_VAL, ROW_VALUES } from './constants.js';
import { QWIXX_DICE } from './dice.js';

// Acciones de Qwixx iniciadas por el usuario: tirar, marcar/desmarcar y la
// penalización por pasar sin marcar. La validación (genérica) vive en el
// framework; este módulo aporta los ganchos del juego.

export function rollDice() {
  if (!state.gameStarted || state.myPlayerId !== state.activePlayerId || state.turn.hasRolled) return;

  const dice = rollDiceValues(QWIXX_DICE);
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

// Gancho del framework: el jugador activo pasa sin marcar (falta opcional
// si no hay jugadas posibles, confirmada en caso contrario)
export async function onPass() {
  if (isForcedPenalty(state)) {
    await showAlert('Como no tienes combinaciones posibles con la tirada actual, cometes una falta obligatoria (-5 pts).', 'Sin Combinaciones Válidas');
  } else {
    const confirmPenalty = await showConfirm('No has marcado ninguna casilla en tu turno. ¿Deseas pasar y anotarte una falta (-5 pts)?', 'Anotar Falta');
    if (!confirmPenalty) return false;
  }
  addPenalty();
  return true;
}
