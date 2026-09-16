import { createState } from '../src/model/state.js';

export function buildState(overrides = {}) {
  const s = createState();
  s.gameStarted = true;
  s.turn.hasRolled = true;
  Object.assign(s, overrides);
  return s;
}

export function setMarks(s, color, vals) {
  s.board.marks[color] = new Set(vals);
}

export function setDice(s, dice) {
  Object.assign(s.dice, dice);
}
