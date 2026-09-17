import { state } from './state.js';

// Claves de sesión (se borran al salir a propósito); la identidad
// (qwixx_user_id) y el nombre (qwixx_player_name) sobreviven siempre.
const SESSION_KEYS = [
  'qwixx_session_id',
  'qwixx_is_host',
  'qwixx_my_id',
  'qwixx_game_started',
  'qwixx_board',
  'qwixx_host_state'
];

export function saveSession() {
  if (!state.sessionId) return;

  localStorage.setItem('qwixx_session_id', state.sessionId);
  localStorage.setItem('qwixx_is_host', state.isHost);
  localStorage.setItem('qwixx_my_id', state.myPlayerId);
  localStorage.setItem('qwixx_game_started', state.gameStarted);

  localStorage.setItem('qwixx_board', JSON.stringify({
    board: {
      marks: {
        red: [...state.board.marks.red],
        yellow: [...state.board.marks.yellow],
        green: [...state.board.marks.green],
        blue: [...state.board.marks.blue]
      },
      penalties: state.board.penalties,
      closedRows: [...state.board.closedRows]
    },
    turn: {
      ...state.turn,
      pendingClosedRows: [...state.turn.pendingClosedRows],
      myLockedClosures: [...state.turn.myLockedClosures]
    },
    turnCounter: state.turnCounter
  }));

  if (state.isHost) {
    localStorage.setItem('qwixx_host_state', JSON.stringify({
      playersList: state.playersList,
      activePlayerId: state.activePlayerId,
      gameStarted: state.gameStarted,
      dice: state.dice,
      hasRolledInTurn: state.turn.hasRolled,
      turnCounter: state.turnCounter,
      validatedPlayers: [...state.validatedPlayers],
      declaredClosures: [...state.declaredClosures]
    }));
  }
}

// Datos para reconectar tras un refresco o microcorte
export function loadSavedSession() {
  try {
    const sessionId = localStorage.getItem('qwixx_session_id');
    if (!sessionId) return null;

    const saved = JSON.parse(localStorage.getItem('qwixx_board') || 'null');
    return {
      sessionId,
      isHost: localStorage.getItem('qwixx_is_host') === 'true',
      myPlayerId: localStorage.getItem('qwixx_my_id') || 'P1',
      name: localStorage.getItem('qwixx_player_name') || '',
      gameStarted: localStorage.getItem('qwixx_game_started') === 'true',
      board: saved?.board || null,
      turn: saved?.turn || null,
      turnCounter: saved?.turnCounter || 0,
      hostState: JSON.parse(localStorage.getItem('qwixx_host_state') || 'null')
    };
  } catch {
    return null;
  }
}

// Salida manual: borra la sesión pero conserva identidad y nombre
export function clearSession() {
  SESSION_KEYS.forEach((key) => localStorage.removeItem(key));
}
