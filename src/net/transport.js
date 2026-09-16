import { initializeApp } from 'firebase/app';
import {
  getDatabase, ref, push, set, update, onValue, onChildAdded, onDisconnect
} from 'firebase/database';
import { firebaseConfig } from './firebase-config.js';
import { state } from '../model/state.js';

// Transporte sobre Realtime Database. Estructura:
//   lobby/{sesionId}              -> registro de partidas (lo escuchan todos)
//   events/{sesionId}/{eventoId}  -> bus de mensajes de una partida
//   presence/{sesionId}/{playerId}-> presencia con onDisconnect
// No conoce nada del juego: solo envía y recibe payloads.

let db = null;
let payloadHandler = null;
let statusHandler = null;
let sessionUnsubs = [];
let armedDisconnects = [];

const pageSessionId = Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, '0')).join('');

export function initTransport() {
  const app = initializeApp(firebaseConfig);
  db = getDatabase(app);
}

export function getSessionId() {
  return pageSessionId;
}

export function onPayload(fn) {
  payloadHandler = fn;
}

export function onSessionStatus(fn) {
  statusHandler = fn;
}

// Listado en vivo de partidas para todos los clientes conectados
export function listenLobby(cb) {
  onValue(ref(db, 'lobby'), (snap) => {
    const games = [];
    snap.forEach((child) => games.push({ id: child.key, ...child.val() }));
    cb(games);
  }, (err) => console.warn('Error escuchando el lobby:', err.message));
}

export function createSession(hostName) {
  const sessionRef = push(ref(db, 'lobby'));
  const sessionId = sessionRef.key;

  set(sessionRef, { hostName, status: 'lobby', createdAt: Date.now(), playerCount: 1 });

  // El host es la autoridad: si se desconecta, la partida muere y se limpia
  const hostCleanup = onDisconnect(ref(db));
  hostCleanup.update({
    [`lobby/${sessionId}`]: null,
    [`events/${sessionId}`]: null,
    [`presence/${sessionId}`]: null
  });
  armedDisconnects.push(hostCleanup);

  subscribeSession(sessionId);
  return sessionId;
}

export function joinSession(sessionId) {
  subscribeSession(sessionId);
}

// Presencia del jugador: si cierra la pestaña o pierde la conexión,
// se emite su PLAYER_LEFT automáticamente
export function attachPresence(playerId) {
  if (!db || !state.sessionId) return;

  const presenceOp = onDisconnect(ref(db, `presence/${state.sessionId}/${playerId}`));
  presenceOp.remove();
  armedDisconnects.push(presenceOp);
  set(ref(db, `presence/${state.sessionId}/${playerId}`), true);

  const leaveEventOp = onDisconnect(push(ref(db, `events/${state.sessionId}`)));
  leaveEventOp.set({ sender: pageSessionId, payload: { type: 'PLAYER_LEFT', playerId, playerName: state.myPlayerName } });
  armedDisconnects.push(leaveEventOp);
}

export function broadcast(data) {
  if (!db || !state.sessionId) return;
  push(ref(db, `events/${state.sessionId}`), { sender: pageSessionId, payload: data });
}

export function updateLobbyEntry(fields) {
  if (!db || !state.sessionId) return;
  update(ref(db, `lobby/${state.sessionId}`), fields);
}

// Elimina la partida completa (solo el host)
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

  sessionUnsubs.push(onChildAdded(ref(db, `events/${sessionId}`), (snap) => {
    const evt = snap.val();
    if (!evt || !evt.payload) return;
    if (evt.sender === pageSessionId) return;
    if (payloadHandler) payloadHandler({ ...evt.payload, _senderSession: evt.sender });
  }, (err) => console.warn('Error escuchando eventos:', err.message)));

  // La partida desaparece (host desconectado) cuando el estado pasa a null
  sessionUnsubs.push(onValue(ref(db, `lobby/${sessionId}/status`), (snap) => {
    if (statusHandler) statusHandler(snap.val());
  }, (err) => console.warn('Error escuchando el estado de la partida:', err.message)));
}

function detachSession() {
  sessionUnsubs.forEach((unsub) => unsub());
  sessionUnsubs = [];
}

export function disconnect() {
  detachSession();
  armedDisconnects.forEach((op) => op.cancel().catch(() => {}));
  armedDisconnects = [];
}
