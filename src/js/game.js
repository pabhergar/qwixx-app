import { state, scoreTable } from './state.js';

export function calculateScores() {
  let grandTotal = 0;
  ['red', 'yellow', 'green', 'blue'].forEach((color) => {
    const marks = document.getElementById(`row-${color}`).querySelectorAll('.cell.marked').length;
    const pts = scoreTable[marks] || 0;
    document.getElementById(`total-${color}`).innerText = pts;
    grandTotal += pts;
  });
  const penPts = document.querySelectorAll('.penalty-box.marked').length * 5;
  document.getElementById('total-penalty').innerText = penPts;
  const total = grandTotal - penPts;
  document.getElementById('total-final').innerText = total;
  return total;
}

export function isCellClickableInRow(row, cell) {
  if (row.classList.contains('fully-closed')) return false;
  if (cell.classList.contains('marked')) return false;

  const cells = Array.from(row.querySelectorAll('.cell:not(.lock)'));
  const index = cells.indexOf(cell);
  if (index === -1) return false;

  let maxMarkedIndex = -1;
  cells.forEach((c, idx) => { if (c.classList.contains('marked')) maxMarkedIndex = idx; });

  if (index <= maxMarkedIndex) return false;

  if (index === 10) {
    const normalCrosses = cells.slice(0, 10).filter(c => c.classList.contains('marked')).length;
    if (normalCrosses < 5) return false;
  }

  return true;
}

export function updateRowLockout(row) {
  const cells = Array.from(row.querySelectorAll('.cell'));
  let maxMarkedIndex = -1;
  cells.forEach((cell, idx) => { if (cell.classList.contains('marked')) maxMarkedIndex = idx; });
  const isClosed = row.classList.contains('fully-closed');

  cells.forEach((cell, idx) => {
    if (!cell.classList.contains('marked')) {
      if (idx < maxMarkedIndex || isClosed) cell.classList.add('disabled');
      else cell.classList.remove('disabled');
    }
  });
}

export function getClosedRows() {
  return Array.from(document.querySelectorAll('.row.fully-closed')).map(r => r.id.replace('row-', ''));
}
