import { COLORS, SCORE_TABLE, PENALTY_POINTS, MAX_PENALTIES, ROWS_TO_END_GAME } from '../constants.js';

// Funciones puras sobre el tablero (ver model/state.js).

export function computeScores(board) {
  const perColor = {};
  let grandTotal = 0;

  COLORS.forEach((color) => {
    const pts = SCORE_TABLE[board.marks[color].size] ?? 0;
    perColor[color] = pts;
    grandTotal += pts;
  });

  const penalty = board.penalties * PENALTY_POINTS;
  return { perColor, penalty, total: grandTotal - penalty };
}

export function getGameOverReason(board, playerName) {
  if (board.closedRows.size >= ROWS_TO_END_GAME) return '¡Se han cerrado 2 filas en el juego!';
  if (board.penalties >= MAX_PENALTIES) return `¡${playerName} ha acumulado 4 faltas!`;
  return null;
}
