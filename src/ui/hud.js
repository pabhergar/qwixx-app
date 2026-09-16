import { state, activePlayerName } from '../model/state.js';
import { isMyTurn, isForcedPenalty, hasNoWhiteOption } from '../logic/rules.js';

// Render de paneles de control, listas de jugadores y pantallas de lobby.
export function renderTurnControls() {
  const activeName = activePlayerName();
  const myTurn = isMyTurn(state);

  const diceMsg = document.getElementById('dice-status-msg');
  if (diceMsg) {
    if (!state.turn.hasRolled) {
      diceMsg.style.display = 'block';
      diceMsg.innerText = myTurn ? '¡Tu turno! Lanza 🎲' : `Esperando a ${activeName}... ⏳`;
    } else {
      diceMsg.style.display = 'none';
      diceMsg.innerText = '';
    }
  }

  const btnRoll = document.getElementById('btn-roll-dice');
  const btnValidate = document.getElementById('btn-validate-turn');

  if (!state.turn.hasRolled) {
    if (myTurn) {
      if (btnRoll) {
        btnRoll.innerText = 'Lanzar';
        btnRoll.style.display = 'block';
        btnRoll.disabled = false;
      }
      if (btnValidate) btnValidate.style.display = 'none';
    } else {
      if (btnRoll) btnRoll.style.display = 'none';
      if (btnValidate) {
        btnValidate.innerText = 'Validar';
        btnValidate.style.display = 'block';
        btnValidate.disabled = true;
      }
    }
  } else {
    if (btnRoll) btnRoll.style.display = 'none';
    if (btnValidate) {
      btnValidate.innerText = 'Validar';
      btnValidate.style.display = 'block';
      btnValidate.disabled = state.turn.hasValidated;
    }
  }

  if (btnValidate) {
    btnValidate.classList.remove('forced-penalty-red', 'forced-penalty-blue');
    if (state.turn.hasRolled && state.turn.marked.length === 0) {
      if (isForcedPenalty(state)) btnValidate.classList.add('forced-penalty-red');
      else if (hasNoWhiteOption(state)) btnValidate.classList.add('forced-penalty-blue');
    }
  }

  if (state.turn.hasValidated) showWaitPanel();
  else hideWaitPanel();
}

export function renderPlayers() {
  const ul = document.getElementById('player-list');
  const waitUl = document.getElementById('turn-wait-list');
  if (!ul) return;

  ul.innerHTML = '';
  if (waitUl) waitUl.innerHTML = '';

  state.playersList.forEach((p) => {
    const isValidated = state.validatedPlayers.has(p.id);
    const isCurrentTurn = (p.id === state.activePlayerId);

    const li = document.createElement('li');
    li.innerHTML = `<span>${isCurrentTurn ? '🎲 ' : ''}${escapeHtml(p.name)} ${p.id === 'P1' ? '👑' : ''}</span> <span>${isValidated ? '✔️' : '⏳'}</span>`;
    ul.appendChild(li);

    if (waitUl) waitUl.appendChild(li.cloneNode(true));
  });
}

export function renderGamesList() {
  const ul = document.getElementById('games-list');
  const placeholder = document.getElementById('no-games-placeholder');
  if (!ul) return;

  const available = state.lobbyGames
    .filter((g) => g.status === 'lobby')
    .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

  ul.innerHTML = '';
  if (placeholder) placeholder.style.display = available.length === 0 ? 'block' : 'none';

  available.forEach((g) => {
    const count = g.playerCount || 1;
    const li = document.createElement('li');
    li.className = 'game-item';
    li.innerHTML = `
      <span class="game-info"><b>Partida de ${escapeHtml(g.hostName)}</b>
        <span class="game-meta">${count} jugador${count === 1 ? '' : 'es'}</span>
      </span>
      <button class="net-btn join" data-session-id="${g.id}">Unirse</button>`;
    ul.appendChild(li);
  });
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
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
  if (waitPanel && waitPanel.style.display === 'flex') hideWaitPanel();
  else showWaitPanel();
}

export function enterGameScreens() {
  document.body.classList.add('in-game');
  const netBar = document.querySelector('.network-bar');
  const gameArea = document.getElementById('game-area');
  if (netBar) netBar.style.display = 'none';
  if (gameArea) gameArea.style.display = 'block';
}

export function showGameBrowser() {
  document.getElementById('net-setup').style.display = 'flex';
  document.getElementById('lobby-list-section').style.display = 'block';
  document.getElementById('lobby-section').style.display = 'none';
}

export function showSessionAsHost(hostName) {
  document.getElementById('net-setup').style.display = 'none';
  document.getElementById('lobby-list-section').style.display = 'none';
  document.getElementById('lobby-section').style.display = 'block';
  document.getElementById('display-host-name').innerText = hostName;
  document.getElementById('host-controls').style.display = 'block';
  document.getElementById('client-waiting').style.display = 'none';
}

export function showSessionAsClient(hostName) {
  document.getElementById('net-setup').style.display = 'none';
  document.getElementById('lobby-list-section').style.display = 'none';
  document.getElementById('lobby-section').style.display = 'block';
  document.getElementById('display-host-name').innerText = hostName;
  document.getElementById('host-controls').style.display = 'none';
  document.getElementById('client-waiting').style.display = 'block';
}
