import { state, diceFaces, colorNamesSpanish } from './state.js';
import { isCellClickableInRow, updateRowLockout, getClosedRows } from './game.js';

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

export function showGameOverModal(reason) {
  const reasonEl = document.getElementById('game-over-reason');
  const modal = document.getElementById('game-over-modal');
  if (reasonEl) reasonEl.innerText = reason;
  updateLeaderboardTable();
  if (modal) modal.style.display = 'flex';
}

export function updateDiceUI() {
  const closedColors = getClosedRows();
  const dieMap = { w1: null, w2: null, r: 'red', y: 'yellow', g: 'green', b: 'blue' };

  Object.entries(dieMap).forEach(([id, color]) => {
    const die = document.getElementById(`die-${id}`);
    if (!die) return;

    if (color && closedColors.includes(color)) {
      die.style.display = 'none';
      return;
    }

    die.style.display = 'flex';

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
  const waitUl = document.getElementById('turn-wait-list');
  if (!ul) return;

  ul.innerHTML = '';
  if (waitUl) waitUl.innerHTML = '';

  state.playersList.forEach((p) => {
    const isValidated = state.validatedPlayers.has(p.id);
    const isCurrentTurn = (p.id === state.activePlayerId);

    const li = document.createElement('li');
    li.innerHTML = `<span>${isCurrentTurn ? '🎲 ' : ''}${p.name} ${p.id === 'P1' ? '👑' : ''}</span> <span>${isValidated ? '✔️' : '⏳'}</span>`;
    ul.appendChild(li);

    if (waitUl) {
      const waitLi = li.cloneNode(true);
      waitUl.appendChild(waitLi);
    }
  });
}

export function showWaitPanel() {
  const actionPanel = document.getElementById('action-panel');
  const waitPanel = document.getElementById('wait-panel');
  if (actionPanel) actionPanel.style.display = 'none';
  if (waitPanel) waitPanel.style.display = 'flex';
}

export function hideWaitPanel() {
  const actionPanel = document.getElementById('action-panel');
  const waitPanel = document.getElementById('wait-panel');
  if (waitPanel) waitPanel.style.display = 'none';
  if (actionPanel) actionPanel.style.display = 'flex';
}

export function toggleWaitPanel() {
  const waitPanel = document.getElementById('wait-panel');
  if (waitPanel && waitPanel.style.display === 'flex') {
    hideWaitPanel();
  } else {
    showWaitPanel();
  }
}

export function updateTurnUI() {
  renderPlayerLists();
  updateDiceUI();

  const activePlayerObj = state.playersList.find(p => p.id === state.activePlayerId) || { name: state.activePlayerId };
  const isMyTurn = (state.myPlayerId === state.activePlayerId);

  const diceMsg = document.getElementById('dice-status-msg');
  if (diceMsg) {
    if (!state.hasRolledInTurn) {
      diceMsg.style.display = 'block';
      diceMsg.innerText = isMyTurn ? '¡Tu turno! Lanza 🎲' : `Esperando a ${activePlayerObj.name}... ⏳`;
    } else {
      diceMsg.style.display = 'none';
      diceMsg.innerText = '';
    }
  }

  const btnRoll = document.getElementById('btn-roll-dice');
  const btnValidate = document.getElementById('btn-validate-turn');

  if (!state.hasRolledInTurn) {
    if (isMyTurn) {
      if (btnRoll) {
        btnRoll.innerText = 'Lanzar';
        btnRoll.style.display = 'block';
        btnRoll.disabled = false;
      }
      if (btnValidate) {
        btnValidate.style.display = 'none';
      }
    } else {
      if (btnRoll) {
        btnRoll.style.display = 'none';
      }
      if (btnValidate) {
        btnValidate.innerText = 'Validar';
        btnValidate.style.display = 'block';
        btnValidate.disabled = true;
      }
    }
  } else {
    if (btnRoll) {
      btnRoll.style.display = 'none';
    }
    if (btnValidate) {
      btnValidate.innerText = 'Validar';
      btnValidate.style.display = 'block';
      btnValidate.disabled = state.hasValidatedTurn;
      if (state.hasValidatedTurn) {
        btnValidate.classList.remove('forced-penalty-red', 'forced-penalty-blue');
      }
    }
  }

  if (state.hasValidatedTurn) {
    showWaitPanel();
  } else {
    hideWaitPanel();
  }
}

export function updateCellHighlights() {
  const allCells = document.querySelectorAll('.cell');
  const btnValidate = document.getElementById('btn-validate-turn');

  if (!state.gameStarted || !state.hasRolledInTurn || state.hasValidatedTurn || state.gameOverTriggered) {
    if (btnValidate) {
      btnValidate.classList.remove('forced-penalty-red', 'forced-penalty-blue');
    }
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
      if (whiteCell && isCellClickableInRow(row, whiteCell)) validWhiteCells.add(whiteCell);
    }

    if (isMyTurn && !state.hasMarkedColorThisTurn) {
      const dieColorKey = color === 'red' ? 'r' : color === 'yellow' ? 'y' : color === 'green' ? 'g' : 'b';
      const dieColorVal = state.currentDiceResults[dieColorKey];
      if (dieColorVal) {
        [state.currentDiceResults.w1 + dieColorVal, state.currentDiceResults.w2 + dieColorVal].forEach(val => {
          const colorCell = cells.find(c => parseInt(c.dataset.val) === val);
          if (colorCell && isCellClickableInRow(row, colorCell)) validColorCells.add(colorCell);
        });
      }
    }
  });

  if (btnValidate) {
    btnValidate.classList.remove('forced-penalty-red', 'forced-penalty-blue');
    state.isForcedPenalty = false;

    if (state.hasRolledInTurn && !state.hasMarkedInTurn) {
      if (isMyTurn && validWhiteCells.size === 0 && validColorCells.size === 0) {
        btnValidate.classList.add('forced-penalty-red');
        state.isForcedPenalty = true;
      } else if (!isMyTurn && validWhiteCells.size === 0) {
        btnValidate.classList.add('forced-penalty-blue');
      }
    }
  }

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
