import { NOSTR_RELAYS } from '../constants.js';
import { state } from '../model/state.js';

// Transporte puro sobre Nostr: eventos efímeros (kind 20000) etiquetados con el
// código de sala. No conoce nada del juego, solo envía y recibe payloads.

let sockets = [];
let payloadHandler = null;
let firstConnectionDone = false;
const sendQueue = [];
const seenPayloads = new Set();

const mySessionPubkey = Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, '0')).join('');

export function getSessionId() {
  return mySessionPubkey;
}

export function onPayload(fn) {
  payloadHandler = fn;
}

export function disconnect() {
  sockets.forEach((ws) => ws.close());
  sockets = [];
  sendQueue.length = 0;
  firstConnectionDone = false;
}

export function connect(roomCode) {
  disconnect();

  NOSTR_RELAYS.forEach((url) => {
    try {
      const ws = new WebSocket(url);

      ws.onopen = () => {
        sockets.push(ws);
        ws.send(JSON.stringify([
          'REQ',
          `sub-${roomCode}`,
          { kinds: [20000], '#t': [`qwixx-v1-${roomCode}`] }
        ]));
        if (!firstConnectionDone) {
          firstConnectionDone = true;
          flushQueue();
        }
      };

      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          if (msg[0] !== 'EVENT' || !msg[2] || !msg[2].content) return;
          const payload = JSON.parse(msg[2].content);
          if (payload._senderSession === mySessionPubkey) return;
          if (isDuplicate(payload)) return;
          if (payloadHandler) payloadHandler(payload);
        } catch {
          // Mensajes con formato no válido: se ignoran
        }
      };
    } catch {
      console.warn(`No se pudo conectar al relay ${url}`);
    }
  });
}

export function broadcast(data) {
  if (!state.roomCode) return;

  const payload = {
    ...data,
    _senderSession: mySessionPubkey,
    _senderPlayerId: state.myPlayerId
  };

  const json = JSON.stringify([
    'EVENT',
    {
      pubkey: mySessionPubkey,
      created_at: Math.floor(Date.now() / 1000),
      kind: 20000,
      tags: [['t', `qwixx-v1-${state.roomCode}`]],
      content: JSON.stringify(payload)
    }
  ]);

  if (!firstConnectionDone) sendQueue.push(json);
  else sendToOpenSockets(json);
}

// El mismo evento puede llegar replicado por varios relays
function isDuplicate(payload) {
  const key = `${payload._senderSession}:${JSON.stringify(payload)}`;
  if (seenPayloads.has(key)) return true;
  seenPayloads.add(key);
  if (seenPayloads.size > 200) seenPayloads.delete(seenPayloads.values().next().value);
  return false;
}

function flushQueue() {
  while (sendQueue.length > 0) {
    sendToOpenSockets(sendQueue.shift());
  }
}

function sendToOpenSockets(json) {
  sockets.forEach((ws) => {
    if (ws.readyState === WebSocket.OPEN) ws.send(json);
  });
}
