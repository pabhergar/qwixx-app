import { state } from '../model/state.js';
import { escapeHtml } from './hud.js';

// Badge superior derecha: cuánta gente hay conectada a la app; al pulsarlo,
// listado de quién está disponible y quién en partida.

export function renderOnline() {
  const count = document.getElementById('online-count');
  if (count) count.innerText = state.onlineUsers.length;
  renderOnlineList();
}

function renderOnlineList() {
  const ul = document.getElementById('online-list');
  if (!ul) return;
  ul.innerHTML = '';

  const sorted = [...state.onlineUsers].sort((a, b) => {
    if (a.userId === state.userId) return -1;
    if (b.userId === state.userId) return 1;
    return (a.name || 'zzz').localeCompare(b.name || 'zzz');
  });

  sorted.forEach((user) => {
    const isMe = user.userId === state.userId;
    const name = user.name || 'Decidiendo nombre...';
    const label = user.status === 'playing' ? '🎲 En partida' : '👀 Disponible';

    const li = document.createElement('li');
    li.innerHTML = `<span class="${user.name ? '' : 'unnamed'}">${escapeHtml(name)}${isMe ? ' (tú)' : ''}</span><span class="online-status">${label}</span>`;
    ul.appendChild(li);
  });
}

export function toggleOnlinePopover() {
  const popover = document.getElementById('online-popover');
  if (!popover) return;
  popover.style.display = popover.style.display === 'flex' ? 'none' : 'flex';
}

export function hideOnlinePopover() {
  const popover = document.getElementById('online-popover');
  if (popover) popover.style.display = 'none';
}
