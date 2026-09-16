import {
  COLORS, ROW_VALUES, DIE_KEY_BY_COLOR, LOCK_VAL, MIN_MARKS_TO_CLOSE
} from '../constants.js';

// Funciones puras: reciben un objeto con la forma de `state` (ver model/state.js)
// y nunca tocan el DOM ni mutan el estado.

export const targetKey = (color, val) => `${color}:${val}`;

export function isRowClosed(board, color) {
  return board.closedRows.has(color);
}

export function isRowClosingCell(color, val) {
  const values = ROW_VALUES[color];
  return values[values.length - 1] === val;
}

export function countRowMarks(board, color, { includeLock = true } = {}) {
  let count = 0;
  ROW_VALUES[color].forEach((v) => { if (board.marks[color].has(v)) count += 1; });
  if (includeLock && board.marks[color].has(LOCK_VAL)) count += 1;
  return count;
}

function maxMarkedIndex(board, color) {
  let max = -1;
  ROW_VALUES[color].forEach((v, idx) => { if (board.marks[color].has(v)) max = idx; });
  return max;
}

export function isCellMarkable(board, color, val) {
  if (val === LOCK_VAL) return false;
  if (isRowClosed(board, color)) return false;
  if (board.marks[color].has(val)) return false;

  const values = ROW_VALUES[color];
  const idx = values.indexOf(val);
  if (idx === -1) return false;
  if (idx <= maxMarkedIndex(board, color)) return false;
  if (idx === values.length - 1 && countRowMarks(board, color, { includeLock: false }) < MIN_MARKS_TO_CLOSE) return false;

  return true;
}

export function isMyTurn(st) {
  return st.myPlayerId === st.activePlayerId;
}

export function getValidTargets(st) {
  const white = new Set();
  const color = new Set();

  if (!st.gameStarted || !st.turn.hasRolled || st.turn.hasValidated || st.gameOverTriggered) {
    return { white, color };
  }

  const active = isMyTurn(st);
  const whiteSum = String(st.dice.w1 + st.dice.w2);

  COLORS.forEach((rowColor) => {
    if (isRowClosed(st.board, rowColor)) return;

    const rowHasColorMark = st.turn.marked.some((m) => m.actionType === 'color' && m.color === rowColor);

    if (!st.turn.hasMarkedWhite && !rowHasColorMark) {
      if (isCellMarkable(st.board, rowColor, whiteSum)) white.add(targetKey(rowColor, whiteSum));
    }

    if (active && !st.turn.hasMarkedColor) {
      const dieVal = st.dice[DIE_KEY_BY_COLOR[rowColor]];
      [st.dice.w1 + dieVal, st.dice.w2 + dieVal].forEach((sum) => {
        const val = String(sum);
        if (isCellMarkable(st.board, rowColor, val)) color.add(targetKey(rowColor, val));
      });
    }
  });

  return { white, color };
}

// El jugador activo sin jugadas posibles: la falta es obligatoria
export function isForcedPenalty(st) {
  if (!isMyTurn(st) || !st.turn.hasRolled || st.turn.marked.length > 0 || st.turn.hasValidated) return false;
  const targets = getValidTargets(st);
  return targets.white.size === 0 && targets.color.size === 0;
}

// Un jugador no activo sin opciones blancas (solo informativo, su pase es libre)
export function hasNoWhiteOption(st) {
  if (isMyTurn(st) || !st.turn.hasRolled || st.turn.marked.length > 0) return false;
  return getValidTargets(st).white.size === 0;
}

export function isMarkedInTurn(st, color, val) {
  return st.turn.marked.some((m) => m.color === color && m.val === val);
}

// El candado y la última casilla de un cierre ya declarado no se pueden deshacer
export function isLockedClosureCell(st, color, val) {
  return st.turn.myLockedClosures.has(color) && (val === LOCK_VAL || isRowClosingCell(color, val));
}
