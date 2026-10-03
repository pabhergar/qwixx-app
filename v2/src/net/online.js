import { state } from '../model/state.js';
import { attachGlobalPresence, updateOnlineEntry, listenOnline } from './transport.js';
import { aggregateOnlineUsers } from '../logic/online.js';
import { renderOnline } from '../ui/online.js';

// Presencia global de la app: badge de "cuántos hay conectados" y estado
// (disponible / en partida) actualizado en vivo para todos.
// El valor se re-escribe en cada reconexión (transport escucha .info/connected).

let currentEntry = { name: null, status: 'lobby', since: Date.now() };

export function initOnlinePresence() {
  currentEntry.name = localStorage.getItem('qwixx_player_name') || null;

  attachGlobalPresence(() => ({ ...currentEntry }));

  listenOnline((raw) => {
    state.onlineUsers = aggregateOnlineUsers(raw);
    renderOnline();
  });
}

export function setOnlineName(name) {
  currentEntry.name = name || null;
  updateOnlineEntry({ name: currentEntry.name });
}

export function setOnlineStatus(status) {
  currentEntry.status = status;
  updateOnlineEntry({ status });
}
