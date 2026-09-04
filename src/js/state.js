export const scoreTable = { 0: 0, 1: 1, 2: 3, 3: 6, 4: 10, 5: 15, 6: 21, 7: 28, 8: 36, 9: 45, 10: 55, 11: 66, 12: 78 };
export const diceFaces = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
export const colorNamesSpanish = { red: 'ROJO', yellow: 'AMARILLO', green: 'VERDE', blue: 'AZUL' };

export const state = {
  peer: null,
  connections: [],
  hostConn: null,
  isHost: false,
  gameStarted: false,
  roomCode: '',
  myPlayerId: 'P1',
  myPlayerName: '',
  activePlayerId: 'P1',
  playersList: [],
  hasRolledInTurn: false,
  hasMarkedInTurn: false,
  hasMarkedWhiteThisTurn: false,
  hasMarkedColorThisTurn: false,
  hasValidatedTurn: false,
  gameOverTriggered: false,
  markedThisTurn: [],
  pendingClosedRowsThisTurn: new Set(),
  declaredClosuresThisTurn: new Set(),
  myLockedClosuresThisTurn: new Set(),
  validatedPlayers: new Set(),
  playerScoresMap: {},
  currentDiceResults: { w1: 1, w2: 1, r: 1, y: 1, g: 1, b: 1 },
  isForcedPenalty: false
};

export function resetTurnFlags() {
  state.hasRolledInTurn = false;
  state.hasMarkedInTurn = false;
  state.hasMarkedWhiteThisTurn = false;
  state.hasMarkedColorThisTurn = false;
  state.hasValidatedTurn = false;
  state.isForcedPenalty = false;
  state.markedThisTurn = [];
  state.pendingClosedRowsThisTurn.clear();
  state.myLockedClosuresThisTurn.clear();

  // Limpia el destacado del turno actual para que las casillas pasen a 'X' grisácea
  document.querySelectorAll('.cell.turn-marked').forEach(c => c.classList.remove('turn-marked'));

  // Resetea el botón de validación y elimina cualquier animación de parpadeo activa
  const btn = document.getElementById('btn-validate-turn');
  if (btn) {
    btn.disabled = false;
    btn.classList.remove('forced-penalty', 'forced-penalty-red', 'forced-penalty-blue');
    btn.innerText = 'Validar';
  }
}

export function saveSessionState() {
  if (!state.roomCode) return;
  localStorage.setItem('qwixx_room_code', state.roomCode);
  localStorage.setItem('qwixx_is_host', state.isHost);
  localStorage.setItem('qwixx_my_id', state.myPlayerId);
  localStorage.setItem('qwixx_game_started', state.gameStarted);

  const board = {
    marked: [],
    penalties: document.querySelectorAll('.penalty-box.marked').length,
    hasRolled: state.hasRolledInTurn,
    hasMarked: state.hasMarkedInTurn
  };
  document.querySelectorAll('.cell.marked').forEach(c => {
    board.marked.push(`${c.parentElement.id.replace('row-', '')}-${c.dataset.val}`);
  });
  localStorage.setItem('qwixx_board', JSON.stringify(board));

  if (state.isHost) {
    localStorage.setItem('qwixx_host_state', JSON.stringify({
      playersList: state.playersList,
      activePlayerId: state.activePlayerId,
      gameStarted: state.gameStarted,
      currentDiceResults: state.currentDiceResults,
      hasRolledInTurn: state.hasRolledInTurn
    }));
  }
}
