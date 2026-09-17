import { initializeApp } from 'firebase/app';
import {
  getDatabase, ref, push, set, update, onValue, onChildAdded, onDisconnect, serverTimestamp
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
let sessionUnsubs = [];
let globalRegistrations = [];
let sessionRegistrations = [];

export function initTransport() {
  const app = initializeApp(firebaseConfig);
  db = getDatabase(app);

  // Patrón de presencia de Firebase: cada vez que la conexión se (re)establece
  // hay que re-armar el onDisconnect y re-escribir el valor, porque un microcorte
  // ejecuta los onDisconnect pendientes en el servidor
  onValue(ref(db, '.info/connected'), (snap) => {
    if (snap.val() !== true) return;
    globalRegistrations.forEach((apply) => apply());
    sessionRegistrations.forEach((apply) => apply());
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

// Listado en vivo de partidas para todos los clientes conectados
export function listenLobby(cb) {
  onValue(ref(db, 'lobby'), (snap) => {
    const games = [];
    snap.forEach((child) => games.push({ id: child.key, ...child.val() }));
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
    createdAt: Date.now(),
    playerCount: 1
  });

  subscribeSession(sessionId);
  return sessionId;
}

export function joinSession(sessionId) {
  subscribeSession(sessionId);
}

// Presencia del jugador en la partida: un corte o refresco la pone en false
// sin sacarlo de la partida; al reconectar vuelve a true
export function attachPresence() {
  if (!db || !state.sessionId) return;

  const apply = () => {
    if (!state.sessionId) return;
    const presenceRef = ref(db, `presence/${state.sessionId}/${getUserId()}`);
    onDisconnect(presenceRef).set(false);
    set(presenceRef, true);
  };
  sessionRegistrations = [apply];
  apply();
}

export function broadcast(data) {
  if (!db || !state.sessionId) return;
  push(ref(db, `events/${state.sessionId}`), {
    sender: getUserId(),
    createdAt: serverTimestamp(),
    payload: data
  });
}

export function updateLobbyEntry(fields) {
  if (!db || !state.sessionId) return;
  update(ref(db, `lobby/${state.sessionId}`), fields);
}

// Elimina la partida completa (host al salir, o watchdog si el host no vuelve)
export function removeSession() {
  if (!db || !state.sessionId) return;
  update(ref(db), {
    [`lobby/${state.sessionId}`]: null,
    [`events/${state.sessionId}`]: null,
    [`presence/${state.sessionId}`]: null
  });
}

function subscribeSession(sessionId) {
  detachSession();

  // Barrera temporal: al (re)conectar, el historial previo se ignora salvo
  // los tipos exentos, que llegan protegidos por su número de turno
  let barrier = null;
  const pending = [];

  const routeEvent = (evt) => {
    if (!evt || !evt.payload) return;
    if (evt.sender === getUserId()) return;
    const exempt = BARRIER_EXEMPT.has(evt.payload.type);
    if (!exempt && barrier !== null && typeof evt.createdAt === 'number' && evt.createdAt <= barrier) return;
    if (payloadHandler) payloadHandler(evt.payload);
  };

  const offOffset = onValue(ref(db, '.info/serverTimeOffset'), (snap) => {
    barrier = Date.now() + (snap.val() || 0) - BARRIER_GRACE_MS;
    offOffset();
    pending.splice(0).forEach(routeEvent);
  });
  sessionUnsubs.push(offOffset);

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
  sessionRegistrations = [];
}

export function disconnect() {
  detachSession();
}
