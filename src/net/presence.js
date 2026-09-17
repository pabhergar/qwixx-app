import { state } from '../model/state.js';
import * as transport from './transport.js';
import { renderPlayers, renderTurnControls } from '../ui/hud.js';

// Presencia en vivo: quién está conectado y quién no. Si el anfitrión no
// vuelve en HOST_GRACE_MS, cualquier cliente limpia la partida.

const HOST_GRACE_MS = 90000;
let hostOfflineTimer = null;

export function initPresenceHandling() {
  transport.onPresence(handlePresenceUpdate);
}

function handlePresenceUpdate(map) {
  state.presence = map || {};

  if (state.sessionJoined || state.reconnecting) {
    renderPlayers();
    renderTurnControls();
  }
  updateHostWatchdog();
}

function updateHostWatchdog() {
  const host = state.playersList[0];
  const hostOffline = !!host && state.presence[host.userId] === false;
  const shouldWatch = hostOffline && !state.isHost && state.sessionId;

  if (!shouldWatch) {
    if (hostOfflineTimer) {
      clearTimeout(hostOfflineTimer);
      hostOfflineTimer = null;
    }
    return;
  }

  if (!hostOfflineTimer) {
    hostOfflineTimer = setTimeout(() => {
      hostOfflineTimer = null;
      const currentHost = state.playersList[0];
      if (state.sessionId && currentHost && state.presence[currentHost.userId] === false) {
        transport.removeSession();
      }
    }, HOST_GRACE_MS);
  }
}

export function clearPresenceWatchdog() {
  if (hostOfflineTimer) {
    clearTimeout(hostOfflineTimer);
    hostOfflineTimer = null;
  }
}
