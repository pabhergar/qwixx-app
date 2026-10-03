import { state } from '../model/state.js';
import * as transport from './transport.js';
import { clearSession } from '../model/storage.js';
import { showAlert } from '../ui/modals.js';
import { renderPlayers, renderTurnControls } from '../ui/hud.js';

// Presencia en vivo: quién está conectado y quién no. Si el anfitrión no
// vuelve en HOST_GRACE_MS: las partidas en marcha mueren (sin autoridad no
// pueden continuar) y las que siguen en lobby se conservan "en gris" a la
// espera de que el anfitrión vuelva; sus clientes vuelven al listado.

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
    hostOfflineTimer = setTimeout(onHostVanished, HOST_GRACE_MS);
  }
}

async function onHostVanished() {
  hostOfflineTimer = null;
  const host = state.playersList[0];
  if (!(state.sessionId && host && state.presence[host.userId] === false)) return;

  if (state.gameStarted) {
    // Partida en marcha sin anfitrión: no puede continuar, se elimina
    transport.removeSession();
    return;
  }

  // Partida en lobby: se conserva en gris en el listado; el cliente sale
  await showAlert('El anfitrión no ha vuelto. La partida queda a la espera en el listado.', 'Anfitrión sin conexión');
  transport.disconnect();
  clearSession();
  window.location.reload();
}

export function clearPresenceWatchdog() {
  if (hostOfflineTimer) {
    clearTimeout(hostOfflineTimer);
    hostOfflineTimer = null;
  }
}
