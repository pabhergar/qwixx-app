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
    userId: '',
    sessionId: '',
    isHost: false,
    myPlayerId: 'P1',
    myPlayerName: '',
    gameStarted: false,
    gameOverTriggered: false,
    reconnecting: false,

    lobbyGames: [],
    sessionJoined: false,
    presence: {},

    playersList: [],
    activePlayerId: 'P1',
    validatedPlayers: new Set(),
    declaredClosures: new Set(),
    turnCounter: 0,

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

// Vuelve al estado "fuera de partida" (la identidad y el tablero se conservan)
export function resetSessionState() {
  state.sessionId = '';
  state.isHost = false;
  state.myPlayerId = 'P1';
  state.gameStarted = false;
  state.gameOverTriggered = false;
  state.sessionJoined = false;
  state.reconnecting = false;
  state.presence = {};
  state.playersList = [];
  state.activePlayerId = 'P1';
  state.validatedPlayers.clear();
  state.declaredClosures.clear();
  state.turnCounter = 0;
  state.scores = {};
}

// Restauración tras un refresco o microcorte (fuente: localStorage)

export function restoreBoard(boardData) {
  if (!boardData) return;
  COLORS.forEach((color) => {
    state.board.marks[color] = new Set(boardData.marks?.[color] || []);
  });
  state.board.penalties = boardData.penalties || 0;
  state.board.closedRows = new Set(boardData.closedRows || []);
}

export function restoreTurn(turnData) {
  if (!turnData) return;
  state.turn = {
    hasRolled: !!turnData.hasRolled,
    marked: turnData.marked || [],
    hasMarkedWhite: !!turnData.hasMarkedWhite,
    hasMarkedColor: !!turnData.hasMarkedColor,
    hasValidated: !!turnData.hasValidated,
    pendingClosedRows: new Set(turnData.pendingClosedRows || []),
    myLockedClosures: new Set(turnData.myLockedClosures || [])
  };
}

export function restoreHostState(hostState) {
  if (!hostState) return;
  state.playersList = hostState.playersList || [];
  state.activePlayerId = hostState.activePlayerId || 'P1';
  state.gameStarted = !!hostState.gameStarted;
  state.dice = hostState.dice || state.dice;
  state.turnCounter = hostState.turnCounter || 0;
  state.turn.hasRolled = !!hostState.hasRolledInTurn;
  state.validatedPlayers = new Set(hostState.validatedPlayers || []);
  state.declaredClosures = new Set(hostState.declaredClosures || []);
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
