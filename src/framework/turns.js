// Sistema de turnos agnóstico: guards idempotentes por número de turno
// (replays y microcortes) y orden de juego aleatorio al empezar la partida.

export function isMyTurn(st) {
  return st.myPlayerId === st.activePlayerId;
}

export function shouldApplyDiceRoll(st, turn) {
  if (turn === undefined || turn === null) return true;
  if (turn < st.turnCounter) return false;
  if (turn === st.turnCounter && st.turn.hasRolled) return false;
  return true;
}

export function shouldApplyTurnChange(st, turn) {
  if (turn === undefined || turn === null) return true;
  return turn > st.turnCounter;
}

// Fisher-Yates: nadie debe saber quién empieza (ni que el anfitrión sea
// siempre el primero)
export function shuffleOrder(players) {
  const arr = [...players];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function nextPlayerInOrder(players, activeId) {
  const ids = players.map((p) => p.id);
  return ids[(ids.indexOf(activeId) + 1) % ids.length];
}
