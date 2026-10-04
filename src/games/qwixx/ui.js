import { state } from '../../model/state.js';
import { getValidTargets, targetKey } from './rules.js';
import { computeScores } from './scoring.js';
import { COLORS, ROW_VALUES, LOCK_VAL } from './constants.js';

// UI propia de Qwixx: el tablero y el marcador se construyen sobre el mount
// genérico del shell (#game-mount); el framework solo conoce ese punto.

export function ensureBoardDOM() {
  const mount = document.getElementById('game-mount');
  if (!mount || mount.childElementCount > 0) return;

  const rows = document.createElement('div');
  rows.className = 'board-rows';

  COLORS.forEach((color) => {
    const row = document.createElement('div');
    row.className = `row ${color}`;
    row.id = `row-${color}`;

    ROW_VALUES[color].forEach((val) => {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.val = val;
      cell.innerText = val;
      row.appendChild(cell);
    });

    const lock = document.createElement('div');
    lock.className = 'cell lock';
    lock.dataset.val = LOCK_VAL;
    lock.innerText = '🔒';
    row.appendChild(lock);

    rows.appendChild(row);
  });
  mount.appendChild(rows);

  const bottom = document.createElement('div');
  bottom.className = 'bottom-section';
  bottom.innerHTML = `
    <div class="penalties-container">
      <span class="penalties-label">Faltas (-5):</span>
      <div class="penalty-box"></div><div class="penalty-box"></div><div class="penalty-box"></div><div class="penalty-box"></div>
    </div>
    <div class="score-calculator">
      <div class="score-box red-total" id="total-red">0</div><span>+</span>
      <div class="score-box yellow-total" id="total-yellow">0</div><span>+</span>
      <div class="score-box green-total" id="total-green">0</div><span>+</span>
      <div class="score-box blue-total" id="total-blue">0</div><span>-</span>
      <div class="score-box penalty-total" id="total-penalty">0</div><span>=</span>
      <div class="score-box final-total" id="total-final">0</div>
    </div>
    <button class="btn-exit" id="btn-exit-game">Salir</button>`;
  mount.appendChild(bottom);
}

export function renderBoard() {
  ensureBoardDOM();
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
      cell.classList.toggle('passed', !marked && val !== LOCK_VAL && (closed || idx < maxMarkedIdx));
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
