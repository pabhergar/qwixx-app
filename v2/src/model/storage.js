import { state } from './state.js';

// Claves de sesión de la v2 (prefijo propio para no pisar a la app raíz,
// que comparte localStorage al vivir en el mismo origen). La identidad
// (qwixx_user_id) y el nombre (qwixx_player_name) sí se comparten.
const SESSION_KEYS = [
  'qwixx2_session_id',
  'qwixx2_is_host',
  'qwixx2_my_id',
  'qwixx2_game',
  'qwixx2_game_started',
  'qwixx2_board',
  'qwixx2_host_state'
];

export function saveSession() {
  if (!state.sessionId) return;

  localStorage.setItem('qwixx2_session_id', state.sessionId);
  localStorage.setItem('qwixx2_is_host', state.isHost);
  localStorage.setItem('qwixx2_my_id', state.myPlayerId);
  localStorage.setItem('qwixx2_game', state.game);
  localStorage.setItem('qwixx2_game_started', state.gameStarted);

  localStorage.setItem('qwixx2_board', JSON.stringify({
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
    localStorage.setItem('qwixx2_host_state', JSON.stringify({
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
    const sessionId = localStorage.getItem('qwixx2_session_id');
    if (!sessionId) return null;

    const saved = JSON.parse(localStorage.getItem('qwixx2_board') || 'null');
    return {
      sessionId,
      game: localStorage.getItem('qwixx2_game') || 'qwixx',
      isHost: localStorage.getItem('qwixx2_is_host') === 'true',
      myPlayerId: localStorage.getItem('qwixx2_my_id') || 'P1',
      name: localStorage.getItem('qwixx_player_name') || '',
      gameStarted: localStorage.getItem('qwixx2_game_started') === 'true',
      board: saved?.board || null,
      turn: saved?.turn || null,
      turnCounter: saved?.turnCounter || 0,
      hostState: JSON.parse(localStorage.getItem('qwixx2_host_state') || 'null')
    };
  } catch {
    return null;
  }
}

// Salida manual: borra la sesión pero conserva identidad y nombre
export function clearSession() {
  SESSION_KEYS.forEach((key) => localStorage.removeItem(key));
}
