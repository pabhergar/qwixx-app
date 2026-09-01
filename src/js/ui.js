import { state, diceFaces, colorNamesSpanish } from './state.js';
import { isCellClickableInRow, calculateScores, updateRowLockout } from './game.js';

export function applyDiceResults(res) {
  ['w1', 'w2', 'r', 'y', 'g', 'b'].forEach(id => {
    const die = document.getElementById(`die-${id}`);
    if (die) die.innerText = diceFaces[res[id]];
  });
}

export function renderPlayerLists() {
  const ul = document.getElementById('player-list');
  const turnDiv = document.getElementById('turn-list');
  ul.innerHTML = ''; turnDiv.innerHTML = '';

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
      const arrow = document.createElement('span'); arrow.className = 'turn-arrow'; arrow.innerHTML = '➔';
      turnDiv.appendChild(arrow);
    }
  });
}

export function updateTurnUI() {
  renderPlayerLists();
  const activePlayerObj = state.playersList.find(p => p.id === state.activePlayerId) || { name: state.activePlayerId };
  const isMyTurn = (state.myPlayerId === state.activePlayerId);

  document.getElementById('status-text').innerHTML = isMyTurn ?
    `<span style="color:#10b981;">¡Es tu turno, ${state.myPlayerName}! 🎲</span>` :
    `Turno actual: <b>${activePlayerObj.name}</b> ⏳`;

  document.getElementById('btn-roll-dice').disabled = !isMyTurn || state.hasRolledInTurn;
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
    if (row.classList.contains('fully-closed')) return;

    const cells = Array.from(row.querySelectorAll('.cell:not(.lock)'));

    const hasColorInThisRow = state.markedThisTurn.some(m => m.actionType === 'color' && m.color === color);
    if (!state.hasMarkedWhiteThisTurn && !hasColorInThisRow) {
      const whiteCell = cells.find(c => parseInt(c.dataset.val) === whiteSum);
      if (whiteCell && isCellClickableInRow(row, whiteCell)) {
        validWhiteCells.add(whiteCell);
      }
    }

    if (isMyTurn && !state.hasMarkedColorThisTurn) {
      const dieColorVal = state.currentDiceResults[color === 'red' ? 'r' : color === 'yellow' ? 'y' : color === 'green' ? 'g' : 'b'];
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

export function lockRowGlobally(color, isMe = false) {
  const row = document.getElementById(`row-${color}`);
  const die = document.getElementById(`die-${color === 'red' ? 'r' : color === 'yellow' ? 'y' : color === 'green' ? 'g' : 'b'}`);
  if (die) die.style.display = 'none';

  row.classList.add('fully-closed');
  row.classList.add(isMe ? 'closed-by-me' : 'closed-by-other');
  updateRowLockout(row);
}

export function updateLeaderboardTable() {
  const tbody = document.getElementById('leaderboard-body');
  tbody.innerHTML = '';
  const scoresArray = Object.values(state.playerScoresMap).sort((a, b) => b.score - a.score);

  scoresArray.forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>#${index + 1}</td><td>${item.name}</td><td><b>${item.score} pts</b></td>`;
    tbody.appendChild(tr);
  });
}
