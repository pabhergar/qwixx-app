import { state, activePlayerName } from '../model/state.js';
import { isMyTurn, isForcedPenalty, hasNoWhiteOption } from '../logic/rules.js';

// Render de paneles de control, listas de jugadores y pantallas de lobby.
export function renderTurnControls() {
  const activeName = activePlayerName();
  const myTurn = isMyTurn(state);
  const activePlayer = state.playersList.find((p) => p.id === state.activePlayerId);
  const activeOffline = !!activePlayer && state.presence[activePlayer.userId] === false;

  const diceMsg = document.getElementById('dice-status-msg');
  if (diceMsg) {
    if (!state.turn.hasRolled) {
      diceMsg.style.display = 'block';
      if (myTurn) diceMsg.innerText = '¡Tu turno! Lanza 🎲';
      else if (activeOffline) diceMsg.innerText = `Esperando por ${activeName} (sin conexión)... 📴`;
      else diceMsg.innerText = `Esperando a ${activeName}... ⏳`;
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
    const offline = state.presence[p.userId] === false;
    const canKick = state.isHost && offline && p.id !== state.myPlayerId;

    const li = document.createElement('li');
    li.innerHTML = `
      <span class="${offline ? 'player-offline' : ''}">${isCurrentTurn ? '🎲 ' : ''}${escapeHtml(p.name)} ${p.id === 'P1' ? '👑' : ''}${offline ? ' 📴' : ''}</span>
      <span>${isValidated ? '✔️' : '⏳'}${canKick ? ` <button class="player-kick" data-player-id="${p.id}" title="Expulsar (desconectado)">✖</button>` : ''}</span>`;
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
    const hostAway = g.hostOnline === false;
    const isMine = g.hostUserId === state.userId;
    const li = document.createElement('li');
    li.className = `game-item${hostAway ? ' grayed' : ''}`;
    li.innerHTML = `
      <span class="game-info"><b>Partida de ${escapeHtml(g.hostName)}</b>
        <span class="game-meta">${hostAway ? '⏳ Esperando al anfitrión' : `${count} jugador${count === 1 ? '' : 'es'}`}</span>
      </span>
      ${isMine
        ? `<button class="game-delete" data-delete-id="${g.id}" title="Eliminar mi partida">🗑</button>`
        : hostAway
          ? ''
          : `<button class="net-btn join" data-session-id="${g.id}">Unirse</button>`}`;
    ul.appendChild(li);
  });
}

export function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// El panel de jugadores es un overlay (tarjeta/hoja inferior), así que no
// hace falta ocultar el panel de acciones
export function showWaitPanel() {
  const waitPanel = document.getElementById('wait-panel');
  if (waitPanel) waitPanel.style.display = 'flex';
}

export function hideWaitPanel() {
  const waitPanel = document.getElementById('wait-panel');
  if (waitPanel) waitPanel.style.display = 'none';
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
