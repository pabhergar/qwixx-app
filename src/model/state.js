import { COLORS, MAX_PENALTIES } from '../constants.js';

// Única fuente de verdad del juego. El DOM es una proyección de este estado.
// Estructura:
//   state.board  -> mi tablero (marcas, faltas, filas cerradas)
//   state.turn   -> mi situación dentro del turno actual (dado lanzado, marcas de este turno, validación)
//   lo demás     -> sesión y sala (replicada desde el host)

export function createBoard() {
  return {
    marks: { red: new Set(), yellow: new Set(), green: new Set(), blue: new Set() },
    penalties: 0,
    closedRows: new Set()
  };
}

export function createTurn() {
  return {
    hasRolled: false,
    marked: [],
    hasMarkedWhite: false,
    hasMarkedColor: false,
    hasValidated: false,
    pendingClosedRows: new Set(),
    myLockedClosures: new Set()
  };
}

export function createState() {
  return {
    roomCode: '',
    isHost: false,
    myPlayerId: 'P1',
    myPlayerName: '',
    gameStarted: false,
    gameOverTriggered: false,

    playersList: [],
    activePlayerId: 'P1',
    validatedPlayers: new Set(),
    declaredClosures: new Set(),

    dice: { w1: 1, w2: 1, r: 1, y: 1, g: 1, b: 1 },

    board: createBoard(),
    turn: createTurn(),

    scores: {}
  };
}

export const state = createState();

export function resetTurn() {
  state.turn = createTurn();
}

export function addBoardMark(color, val) {
  if (COLORS.includes(color)) state.board.marks[color].add(val);
}

export function removeBoardMark(color, val) {
  if (COLORS.includes(color)) state.board.marks[color].delete(val);
}

export function addPenalty() {
  if (state.board.penalties < MAX_PENALTIES) state.board.penalties += 1;
}

export function closeBoardRows(colors = []) {
  colors.forEach((color) => state.board.closedRows.add(color));
}

export function nextPlayerId() {
  const max = state.playersList.reduce((acc, p) => Math.max(acc, parseInt(p.id.slice(1), 10) || 0), 0);
  return 'P' + (max + 1);
}

export function activePlayerName() {
  const p = state.playersList.find((pl) => pl.id === state.activePlayerId);
  return p ? p.name : state.activePlayerId;
}
