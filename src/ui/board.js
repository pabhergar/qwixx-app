import { COLORS, DICE_FACES, ROW_VALUES, LOCK_VAL } from '../constants.js';
import { state } from '../model/state.js';
import { getValidTargets, targetKey } from '../logic/rules.js';
import { computeScores } from '../logic/scoring.js';

// Render del tablero, dados y marcador. Único lugar que toca el DOM del tablero.

export function renderBoard() {
  const targets = getValidTargets(state);

  COLORS.forEach((color) => {
    const row = document.getElementById(`row-${color}`);
    if (!row) return;

    const closed = state.board.closedRows.has(color);
    row.classList.toggle('fully-closed', closed);
    row.classList.remove('closed-by-me', 'closed-by-other');
    if (closed) row.classList.add(state.board.marks[color].has(LOCK_VAL) ? 'closed-by-me' : 'closed-by-other');

    let maxMarkedIdx = -1;
    ROW_VALUES[color].forEach((v, idx) => { if (state.board.marks[color].has(v)) maxMarkedIdx = idx; });

    row.querySelectorAll('.cell').forEach((cell) => {
      const val = cell.dataset.val;
      const idx = val === LOCK_VAL ? ROW_VALUES[color].length : ROW_VALUES[color].indexOf(val);
      const marked = state.board.marks[color].has(val);
      const inTurn = marked && state.turn.marked.some((m) => m.color === color && m.val === val);
      const key = targetKey(color, val);
      const isSelectable = targets.white.has(key) || targets.color.has(key);

      cell.classList.toggle('marked', marked);
      cell.classList.toggle('turn-marked', inTurn);
      cell.classList.toggle('selectable', isSelectable);
      cell.classList.toggle('selectable-white', targets.white.has(key));
      cell.classList.toggle('selectable-color', targets.color.has(key));
      cell.classList.toggle('dimmed', !marked && !isSelectable);
      cell.classList.toggle('disabled', !marked && (closed || idx < maxMarkedIdx));
    });
  });

  document.querySelectorAll('.penalty-box').forEach((box, i) => {
    box.classList.toggle('marked', i < state.board.penalties);
  });
}

export function renderScores() {
  const { perColor, penalty, total } = computeScores(state.board);
  COLORS.forEach((color) => {
    const el = document.getElementById(`total-${color}`);
    if (el) el.innerText = perColor[color];
  });
  const penEl = document.getElementById('total-penalty');
  const totalEl = document.getElementById('total-final');
  if (penEl) penEl.innerText = penalty;
  if (totalEl) totalEl.innerText = total;
}

export function renderDice() {
  const dieMap = { w1: null, w2: null, r: 'red', y: 'yellow', g: 'green', b: 'blue' };

  Object.entries(dieMap).forEach(([id, color]) => {
    const die = document.getElementById(`die-${id}`);
    if (!die) return;

    if (color && state.board.closedRows.has(color)) {
      die.style.display = 'none';
      return;
    }

    die.style.display = 'flex';
    die.style.visibility = state.turn.hasRolled ? 'visible' : 'hidden';
    if (state.turn.hasRolled) die.innerText = DICE_FACES[state.dice[id]] || '⚀';
  });
}
