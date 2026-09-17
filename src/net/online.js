import { state } from '../model/state.js';
import { attachGlobalPresence, updateOnlineEntry, listenOnline } from './transport.js';
import { renderOnline } from '../ui/online.js';

// Presencia global de la app: badge de "cuántos hay conectados" y estado
// (disponible / en partida) actualizado en vivo para todos.

export function initOnlinePresence() {
  const savedName = localStorage.getItem('qwixx_player_name') || null;
  attachGlobalPresence({ name: savedName, status: 'lobby', since: Date.now() });

  listenOnline((users) => {
    state.onlineUsers = users;
    renderOnline();
  });
}

export function setOnlineName(name) {
  updateOnlineEntry({ name: name || null });
}

export function setOnlineStatus(status) {
  updateOnlineEntry({ status });
}
