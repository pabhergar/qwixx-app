import { initializeApp } from 'firebase/app';
import {
  getDatabase, ref, push, set, update, remove, onValue, onChildAdded, onDisconnect, serverTimestamp
} from 'firebase/database';
import { firebaseConfig } from './firebase-config.js';
import { state } from '../model/state.js';
import { getUserId, getTabId } from '../model/identity.js';

// Transporte sobre Realtime Database. Estructura:
//   lobby/{sesionId}                  -> registro de partidas (lo escuchan todos)
//   events/{sesionId}/{eventoId}      -> bus de mensajes de una partida
//   presence/{sesionId}/{userId}      -> true/false según conexión (onDisconnect)
//   online/{userId}/{tabId}           -> presencia global por pestaña
// No conoce nada del juego: solo envía y recibe payloads.

// Eventos procesables aunque sean anteriores a la suscripción: el host los
// necesita para recuperar validaciones y tiradas ocurridas durante un corte
const BARRIER_EXEMPT = new Set(['PLAYER_VALIDATED', 'DICE_ROLLED']);
const BARRIER_GRACE_MS = 2000;

let db = null;
let payloadHandler = null;
let statusHandler = null;
let presenceHandler = null;
let tabActivityHandler = null;
let sessionUnsubs = [];
let globalRegistrations = [];
let sessionPresenceApply = null;
let sessionPresenceOp = null;
let hostOnlineApply = null;
let hostOnlineOp = null;
let activeTab = true;
let tabClaimOp = null;

export function initTransport() {
  const app = initializeApp(firebaseConfig);
  db = getDatabase(app);

  // Patrón de presencia de Firebase: cada vez que la conexión se (re)establece
  // hay que re-armar el onDisconnect y re-escribir el valor, porque un microcorte
  // ejecuta los onDisconnect pendientes en el servidor
  onValue(ref(db, '.info/connected'), (snap) => {
    if (snap.val() !== true) return;
    globalRegistrations.forEach((apply) => apply());
    if (sessionPresenceApply) sessionPresenceApply();
    if (hostOnlineApply) hostOnlineApply();
  });
}

export function onPayload(fn) {
  payloadHandler = fn;
}

export function onSessionStatus(fn) {
  statusHandler = fn;
}

export function onPresence(fn) {
  presenceHandler = fn;
}

export function onTabActivity(fn) {
  tabActivityHandler = fn;
}

// Liderazgo de pestaña: con varias pestañas del mismo navegador, la partida
// vive en la pestaña visible. Las demás se vuelven pasivas (no escriben) y,
// al mirarlas de nuevo, se recargan y recuperan el mando.
export function initTabLeadership() {
  if (!db) return;
  const claimRef = ref(db, `tabs/${getUserId()}`);

  const writeClaim = () => {
    tabClaimOp = onDisconnect(claimRef);
    tabClaimOp.remove();
    set(claimRef, { tabId: getTabId(), since: Date.now() });
  };

  const claimIfVisible = () => {
    if (document.hidden) return;
    writeClaim();
  };

  onValue(claimRef, (snap) => {
    const val = snap.val();
    if (val && val.tabId && val.tabId !== getTabId()) demoteTab();
    else promoteTab();
  }, (err) => console.warn('Error escuchando el liderazgo de pestañas:', err.message));

  // Al recuperar el foco una pestaña relegada, lo más limpio es recargar:
  // arranca como líder y restaura el tablero desde localStorage (compartido)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) return;
    if (!activeTab) {
      window.location.reload();
      return;
    }
    writeClaim();
  });

  globalRegistrations.push(() => {
    if (activeTab) writeClaim();
  });

  claimIfVisible();
}

function demoteTab() {
  if (!activeTab) return;
  activeTab = false;
  if (sessionPresenceOp) sessionPresenceOp.cancel().catch(() => {});
  sessionPresenceOp = null;
  if (hostOnlineOp) hostOnlineOp.cancel().catch(() => {});
  hostOnlineOp = null;
  if (tabClaimOp) tabClaimOp.cancel().catch(() => {});
  tabClaimOp = null;
  if (tabActivityHandler) tabActivityHandler(false);
}

function promoteTab() {
  const wasInactive = !activeTab;
  activeTab = true;
  if (wasInactive && tabActivityHandler) tabActivityHandler(true);
  if (sessionPresenceApply) sessionPresenceApply();
  if (hostOnlineApply) hostOnlineApply();
}

// Listado en vivo de partidas para todos los clientes conectados.
// Ojo: DataSnapshot.forEach cancela la iteración si el callback devuelve true;
// el cuerpo debe ir entre llaves para no devolver el resultado de push().
export function listenLobby(cb) {
  onValue(ref(db, 'lobby'), (snap) => {
    const games = [];
    snap.forEach((child) => {
      games.push({ id: child.key, ...child.val() });
    });
    cb(games);
  }, (err) => console.warn('Error escuchando el lobby:', err.message));
}

// Presencia global de la app: por pestaña (un usuario puede tener varias) y
// agregada por usuario al mostrar. getEntry debe devolver el valor actual.
export function attachGlobalPresence(getEntry) {
  if (!db) return;

  const apply = () => {
    const tabRef = ref(db, `online/${getUserId()}/${getTabId()}`);
    onDisconnect(tabRef).remove();
    set(tabRef, getEntry());
  };
  globalRegistrations.push(apply);
  apply();
}

export function updateOnlineEntry(fields) {
  if (!db) return;
  update(ref(db, `online/${getUserId()}/${getTabId()}`), fields);
}

export function listenOnline(cb) {
  onValue(ref(db, 'online'), (snap) => {
    const raw = {};
    snap.forEach((userSnap) => {
      raw[userSnap.key] = {};
      userSnap.forEach((tabSnap) => {
        const val = tabSnap.val();
        if (val && typeof val === 'object') raw[userSnap.key][tabSnap.key] = val;
      });
    });
    cb(raw);
  }, (err) => console.warn('Error escuchando usuarios conectados:', err.message));
}

export function createSession(hostName) {
  const sessionRef = push(ref(db, 'lobby'));
  const sessionId = sessionRef.key;

  set(sessionRef, {
    hostName,
    hostUserId: getUserId(),
    status: 'lobby',
    hostOnline: true,
    createdAt: Date.now(),
    playerCount: 1
  });

  armHostOnline(sessionId);
  subscribeSession(sessionId);
  return sessionId;
}

// El anfitrión marca su disponibilidad en la entrada del lobby: si se
// desconecta (o cierra pestaña), la partida queda "en gris" en el listado
// en vez de desaparecer, y puede volver reconectando
export function armHostOnline(sessionId) {
  if (!db) return;

  const sid = sessionId || state.sessionId;
  if (!sid) return;

  hostOnlineApply = () => {
    if (!activeTab) return;
    const flagRef = ref(db, `lobby/${sid}/hostOnline`);
    hostOnlineOp = onDisconnect(flagRef);
    hostOnlineOp.set(false);
    set(flagRef, true);
  };
  hostOnlineApply();
}

export function joinSession(sessionId) {
  subscribeSession(sessionId);
}

// Presencia del jugador en la partida: un corte o refresco la pone en false
// sin sacarlo de la partida; al reconectar vuelve a true
export function attachPresence() {
  if (!db || !state.sessionId) return;

  const sid = state.sessionId;
  const uid = getUserId();

  sessionPresenceApply = () => {
    if (!state.sessionId || !activeTab) return;
    const presenceRef = ref(db, `presence/${sid}/${uid}`);
    sessionPresenceOp = onDisconnect(presenceRef);
    sessionPresenceOp.set(false);
    set(presenceRef, true);
  };
  sessionPresenceApply();
}

export function broadcast(data) {
  if (!db || !state.sessionId || !activeTab) return;
  push(ref(db, `events/${state.sessionId}`), {
    sender: getUserId(),
    createdAt: serverTimestamp(),
    payload: data
  });
}

export function updateLobbyEntry(fields) {
  if (!db || !state.sessionId || !activeTab) return;
  update(ref(db, `lobby/${state.sessionId}`), fields);
}

// Elimina una partida completa por su id (host al salir, o el dueño desde el
// listado). Se cancela antes el onDisconnect de hostOnline, o reaparecería un
// huérfano { hostOnline: false } al caer la conexión.
export function removeSession() {
  if (!activeTab) return;
  removeSessionById(state.sessionId);
}

export function removeSessionById(sessionId) {
  if (!db || !sessionId) return;
  if (hostOnlineOp && sessionId === state.sessionId) {
    hostOnlineOp.cancel().catch(() => {});
    hostOnlineOp = null;
  }
  update(ref(db), {
    [`lobby/${sessionId}`]: null,
    [`events/${sessionId}`]: null,
    [`presence/${sessionId}`]: null
  });
}

// Limpieza de entradas huérfanas del lobby (sin status): cualquier cliente
// puede eliminarlas, la escritura es idempotente
export function removeLobbyEntry(sessionId) {
  if (!db || !sessionId) return;
  remove(ref(db, `lobby/${sessionId}`));
}

function subscribeSession(sessionId) {
  detachSession();

  // Barrera temporal: al (re)conectar, el historial previo se ignora salvo
  // los tipos exentos, que llegan protegidos por su número de turno.
  // Ojo: el listener de serverTimeOffset puede dispararse de forma síncrona
  // (conexión ya establecida), así que su baja no puede referirse a una const
  // aún no inicializada (TDZ): se usa let con guarda.
  let barrier = null;
  const pending = [];

  const routeEvent = (evt) => {
    if (!evt || !evt.payload) return;
    if (evt.sender === getUserId()) return;
    const exempt = BARRIER_EXEMPT.has(evt.payload.type);
    if (!exempt && barrier !== null && typeof evt.createdAt === 'number' && evt.createdAt <= barrier) return;
    if (payloadHandler) payloadHandler(evt.payload);
  };

  let offOffset = null;
  offOffset = onValue(ref(db, '.info/serverTimeOffset'), (snap) => {
    barrier = Date.now() + (snap.val() || 0) - BARRIER_GRACE_MS;
    if (offOffset) offOffset();
    pending.splice(0).forEach(routeEvent);
  });
  sessionUnsubs.push(() => { if (offOffset) offOffset(); });

  sessionUnsubs.push(onChildAdded(ref(db, `events/${sessionId}`), (snap) => {
    const evt = snap.val();
    if (barrier === null) pending.push(evt);
    else routeEvent(evt);
  }, (err) => console.warn('Error escuchando eventos:', err.message)));

  // La partida desaparece (host desconectado o watchdog) cuando el estado pasa a null
  sessionUnsubs.push(onValue(ref(db, `lobby/${sessionId}/status`), (snap) => {
    if (statusHandler) statusHandler(snap.val());
  }, (err) => console.warn('Error escuchando el estado de la partida:', err.message)));

  sessionUnsubs.push(onValue(ref(db, `presence/${sessionId}`), (snap) => {
    if (presenceHandler) presenceHandler(snap.val() || {});
  }, (err) => console.warn('Error escuchando la presencia:', err.message)));
}

function detachSession() {
  sessionUnsubs.forEach((unsub) => unsub());
  sessionUnsubs = [];
  sessionPresenceApply = null;
  hostOnlineApply = null;
  hostOnlineOp = null;
}

export function disconnect() {
  detachSession();
}
