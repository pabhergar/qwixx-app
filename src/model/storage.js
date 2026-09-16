import { state } from './state.js';

// Nota: hoy en día esta persistencia es solo de escritura (nadie la lee al
// arrancar); se mantiene para un futuro "reconectar a la partida".

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
      hasRolled: state.turn.hasRolled,
      hasMarked: state.turn.marked.length > 0
    }
  }));

  if (state.isHost) {
    localStorage.setItem('qwixx_host_state', JSON.stringify({
      playersList: state.playersList,
      activePlayerId: state.activePlayerId,
      gameStarted: state.gameStarted,
      dice: state.dice,
      hasRolledInTurn: state.turn.hasRolled
    }));
  }
}

export function clearSession() {
  localStorage.clear();
}
