import { state, diceFaces, colorNamesSpanish } from './state.js';
import { isCellClickableInRow, updateRowLockout, getClosedRows } from './game.js';

// --- MODALES PERSONALIZADOS ---

export function showAlert(message, title = 'Atención') {
  return new Promise((resolve) => {
    const modal = document.getElementById('custom-alert-modal');
    const titleEl = document.getElementById('alert-title');
    const msgEl = document.getElementById('alert-message');
    const btnClose = document.getElementById('btn-close-alert');

    if (!modal) return resolve();

    titleEl.innerText = title;
    msgEl.innerText = message;
    modal.style.display = 'flex';

    const handleClose = () => {
      modal.style.display = 'none';
      btnClose.removeEventListener('click', handleClose);
      resolve();
    };

    btnClose.addEventListener('click', handleClose);
  });
}

export function showConfirm(message, title = 'Confirmación') {
  return new Promise((resolve) => {
    const modal = document.getElementById('custom-confirm-modal');
    const titleEl = document.getElementById('confirm-title');
    const msgEl = document.getElementById('confirm-message');
    const btnOk = document.getElementById('btn-confirm-ok');
    const btnCancel = document.getElementById('btn-confirm-cancel');

    if (!modal) return resolve(false);

    titleEl.innerText = title;
    msgEl.innerText = message;
    modal.style.display = 'flex';

    const cleanup = (result) => {
      modal.style.display = 'none';
      btnOk.removeEventListener('click', onOk);
      btnCancel.removeEventListener('click', onCancel);
      resolve(result);
    };

    const onOk = () => cleanup(true);
    const onCancel = () => cleanup(false);

    btnOk.addEventListener('click', onOk);
    btnCancel.addEventListener('click', onCancel);
  });
}

// --- DADOS Y TABLERO ---

export function updateDiceUI() {
  const closedColors = getClosedRows();
  const dieMap = { w1: null, w2: null, r: 'red', y: 'yellow', g: 'green', b: 'blue' };

  Object.entries(dieMap).forEach(([id, color]) => {
    const die = document.getElementById(`die-${id}`);
    if (!die) return;

    // Ocultar dado si la fila de color asociada se ha cerrado
    if (color && closedColors.includes(color)) {
      die.style.display = 'none';
      return;
    }

    die.style.display = 'flex';

    // Ocultar visibilidad de los dados si no se ha lanzado en el turno
    if (!state.hasRolledInTurn) {
      die.style.visibility = 'hidden';
    } else {
      die.style.visibility = 'visible';
      die.innerText = diceFaces[state.currentDiceResults[id]] || '⚀';
    }
  });
}

export const applyDiceResults = updateDiceUI;

export function renderPlayerLists() {
  const ul = document.getElementById('player-list');
  const turnDiv = document.getElementById('turn-list');
  if (!ul || !turnDiv) return;

  ul.innerHTML = '';
  turnDiv.innerHTML = '';

  state.playersList.forEach((p, index) => {
    const isValidated = state.validatedPlayers.has(p.id);

    const li = document.createElement('li');
    li.innerHTML = `<span>${p.name} ${p.id === 'P1' ? '👑' : ''} ${isValidated ? '✔️' : ''}</span> ${p.id === state.myPlayerId ? '<span style="color:#10b981; font-size:12px;">(Tú)</span>' : ''}`;
    ul.appendChild(li);

    const pill = document.createElement('div');
    pill.className = `turn-pill ${p.id === state.activePlayerId ? 'active' : ''} ${isValidated ? 'ready' : ''}`;
    pill.innerHTML = `${p.name} ${isValidated ? '✔️' : ''}`;
    turnDiv.appendChild(pill);

    if (index < state.playersList.length - 1) {
      const arrow = document.createElement('span');
      arrow.className = 'turn-arrow';
      arrow.innerHTML = '➔';
      turnDiv.appendChild(arrow);
    }
  });
}

export function updateTurnUI() {
  renderPlayerLists();
  updateDiceUI();

  const activePlayerObj = state.playersList.find(p => p.id === state.activePlayerId) || { name: state.activePlayerId };
  const isMyTurn = (state.myPlayerId === state.activePlayerId);

  const statusText = document.getElementById('status-text');
  if (statusText) {
    statusText.innerHTML = isMyTurn ?
      `<span style="color:#10b981;">¡Es tu turno, ${state.myPlayerName}! 🎲</span>` :
      `Turno actual: <b>${activePlayerObj.name}</b> ⏳`;
  }

  const btnRoll = document.getElementById('btn-roll-dice');
  if (btnRoll) {
    btnRoll.disabled = !isMyTurn || state.hasRolledInTurn;
  }
}

export function updateCellHighlights() {
  const allCells = document.querySelectorAll('.cell');

  if (!state.gameStarted || !state.hasRolledInTurn || state.hasValidatedTurn || state.gameOverTriggered) {
    allCells.forEach(cell => {
      cell.classList.remove('selectable', 'selectable-white', 'selectable-color', 'dimmed');
      if (!cell.classList.contains('marked')) cell.classList.add('dimmed');
    });
    return;
  }

  const isMyTurn = (state.myPlayerId === state.activePlayerId);
  const whiteSum = state.currentDiceResults.w1 + state.currentDiceResults.w2;

  const validWhiteCells = new Set();
  const validColorCells = new Set();
  const colors = ['red', 'yellow', 'green', 'blue'];

  colors.forEach(color => {
    const row = document.getElementById(`row-${color}`);
    if (!row || row.classList.contains('fully-closed')) return;

    const cells = Array.from(row.querySelectorAll('.cell:not(.lock)'));

    const hasColorInThisRow = state.markedThisTurn.some(m => m.actionType === 'color' && m.color === color);
    if (!state.hasMarkedWhiteThisTurn && !hasColorInThisRow) {
      const whiteCell = cells.find(c => parseInt(c.dataset.val) === whiteSum);
      if (whiteCell && isCellClickableInRow(row, whiteCell)) {
        validWhiteCells.add(whiteCell);
      }
    }

    if (isMyTurn && !state.hasMarkedColorThisTurn) {
      const dieColorKey = color === 'red' ? 'r' : color === 'yellow' ? 'y' : color === 'green' ? 'g' : 'b';
      const dieColorVal = state.currentDiceResults[dieColorKey];
      if (dieColorVal) {
        const combo1 = state.currentDiceResults.w1 + dieColorVal;
        const combo2 = state.currentDiceResults.w2 + dieColorVal;

        [combo1, combo2].forEach(val => {
          const colorCell = cells.find(c => parseInt(c.dataset.val) === val);
          if (colorCell && isCellClickableInRow(row, colorCell)) {
            validColorCells.add(colorCell);
          }
        });
      }
    }
  });

  allCells.forEach(cell => {
    cell.classList.remove('selectable', 'selectable-white', 'selectable-color', 'dimmed');
    if (cell.classList.contains('marked')) return;

    const isWhiteValid = validWhiteCells.has(cell);
    const isColorValid = validColorCells.has(cell);

    if (isWhiteValid || isColorValid) {
      cell.classList.add('selectable');
      if (isWhiteValid) cell.classList.add('selectable-white');
      if (isColorValid) cell.classList.add('selectable-color');
    } else {
      cell.classList.add('dimmed');
    }
  });
}

export function lockRowGlobally(color) {
  const row = document.getElementById(`row-${color}`);
  if (!row) return;

  const dieKey = color === 'red' ? 'r' : color === 'yellow' ? 'y' : color === 'green' ? 'g' : 'b';
  const die = document.getElementById(`die-${dieKey}`);
  if (die) die.style.display = 'none';

  row.classList.add('fully-closed');

  // Identificar si fuiste tú quien cerró la fila inspeccionando si marcaste el candado
  const lockCell = row.querySelector('.cell.lock');
  const isMe = lockCell && lockCell.classList.contains('marked');

  row.classList.remove('closed-by-me', 'closed-by-other');
  row.classList.add(isMe ? 'closed-by-me' : 'closed-by-other');

  updateRowLockout(row);
}

export function updateLeaderboardTable() {
  const tbody = document.getElementById('leaderboard-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  const scoresArray = Object.values(state.playerScoresMap).sort((a, b) => b.score - a.score);

  scoresArray.forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>#${index + 1}</td><td>${item.name}</td><td><b>${item.score} pts</b></td>`;
    tbody.appendChild(tr);
  });
}
