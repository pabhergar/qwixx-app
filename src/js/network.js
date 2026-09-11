import { state, resetTurnFlags, saveSessionState, colorNamesSpanish } from './state.js';
import { updateDiceUI, updateTurnUI, updateCellHighlights, renderPlayerLists, lockRowGlobally, updateLeaderboardTable, showAlert, showGameOverModal, showConfirm } from './ui.js';
import { calculateScores, getClosedRows } from './game.js';

// Lista de relays públicos redundantes e inmunes a fallos
const PUBLIC_RELAYS = [
  'wss://relay.damus.io',
  'wss://nos.lol',
  'wss://relay.nostr.band',
  'wss://relay.snort.social'
];

let activeSockets = [];
let mySessionPubkey = Array.from(crypto.getRandomValues(new Uint8Array(16)), b => b.toString(16).padStart(2, '0')).join('');

// --- CONEXIÓN Y PROTOCOLO NOSTR (EPHEMERAL KIND 20000) ---

export function initNostrNetwork(roomCode) {
  activeSockets.forEach(ws => ws.close());
  activeSockets = [];

  PUBLIC_RELAYS.forEach(url => {
    try {
      const ws = new WebSocket(url);

      ws.onopen = () => {
        activeSockets.push(ws);
        // Suscripción al canal de la sala (Kind 20000: eventos efímeros que no se guardan en disco)
        const subFilter = [
          "REQ",
          `sub-${roomCode}`,
          { kinds: [20000], "#t": [`qwixx-v1-${roomCode}`] }
        ];
        ws.send(JSON.stringify(subFilter));
      };

      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          // Validar si es un evento enviado al canal
          if (msg[0] === "EVENT" && msg[2] && msg[2].content) {
            const payload = JSON.parse(msg[2].content);

            // Ignorar nuestros propios mensajes reflejados
            if (payload._senderSession === mySessionPubkey) return;

            handleIncomingNostrPayload(payload);
          }
        } catch (e) {
          // Ignorar mensajes con formato no válido
        }
      };
    } catch (err) {
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

  const nostrEvent = [
    "EVENT",
    {
      pubkey: mySessionPubkey,
      created_at: Math.floor(Date.now() / 1000),
      kind: 20000,
      tags: [["t", `qwixx-v1-${state.roomCode}`]],
      content: JSON.stringify(payload)
    }
  ];

  const jsonString = JSON.stringify(nostrEvent);
  activeSockets.forEach(ws => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(jsonString);
    }
  });
}

// --- MANEJO DE FLUJO DE RED ---

function handleIncomingNostrPayload(data) {
  // Si somos Host, procesamos peticiones de unirse o validaciones
  if (state.isHost) {
    if (data.type === 'HANDSHAKE') {
      handleHostHandshake(data);
      return;
    } else if (data.type === 'PLAYER_VALIDATED') {
      processPlayerValidation(data.playerId, data.playerName, data.pendingClosedRows);
      return;
    }
  }

  // Mensajes generales para todos los clientes
  handleNetworkData(data);
}

function handleHostHandshake(data) {
  if (state.gameStarted) {
    broadcast({ type: 'REJECTED', targetSession: data._senderSession, reason: 'La partida ya ha comenzado.' });
    return;
  }

  const nameTrimmed = data.name.trim();
  if (state.playersList.find(p => p.name.toLowerCase() === nameTrimmed.toLowerCase())) {
    broadcast({ type: 'REJECTED', targetSession: data._senderSession, reason: 'Nombre en uso en esta sala.' });
    return;
  }

  const newPlayerId = 'P' + (state.playersList.length + 1);
  state.playersList.push({ id: newPlayerId, name: nameTrimmed, session: data._senderSession });

  broadcast({
    type: 'WELCOME',
    targetSession: data._senderSession,
    targetName: nameTrimmed,
    playerId: newPlayerId,
    players: state.playersList,
    activePlayerId: state.activePlayerId,
    gameStarted: state.gameStarted
  });

  broadcast({ type: 'PLAYER_JOINED', players: state.playersList });
  renderPlayerLists();
  saveSessionState();
}

export function handleNetworkData(data) {
  if (data.type === 'REJECTED') {
    if (data.targetSession === mySessionPubkey) {
      showAlert(data.reason, 'Conexión rechazada').then(() => exitGame(true));
    }
  } else if (data.type === 'WELCOME') {
    if (data.targetSession === mySessionPubkey || data.targetName === state.myPlayerName) {
      state.myPlayerId = data.playerId;
      state.playersList = data.players;
      state.activePlayerId = data.activePlayerId;
      renderPlayerLists();
      saveSessionState();
    }
  } else if (data.type === 'PLAYER_JOINED') {
    state.playersList = data.players;
    renderPlayerLists();
    saveSessionState();
  } else if (data.type === 'PLAYER_LEFT') {
    handleRemotePlayerLeft(data);
  } else if (data.type === 'GAME_STARTED') {
    state.playersList = data.players;
    state.activePlayerId = data.activePlayerId;
    startGameUI();
  } else if (data.type === 'DICE_ROLLED') {
    state.currentDiceResults = data.dice;
    resetTurnFlags();
    state.hasRolledInTurn = true;
    updateDiceUI();
    updateTurnUI();
    updateCellHighlights();
  } else if (data.type === 'ROW_CLOSURE_ALERT') {
    handleRowClosureAlert(data);
  } else if (data.type === 'VALIDATION_UPDATE') {
    state.validatedPlayers = new Set(data.validatedList);
    renderPlayerLists();
  } else if (data.type === 'TURN_CHANGED') {
    state.activePlayerId = data.nextPlayer;
    if (data.closedRows) data.closedRows.forEach(color => lockRowGlobally(color));
    resetTurnFlags();
    state.validatedPlayers.clear();
    state.declaredClosuresThisTurn.clear();
    saveSessionState();
    updateTurnUI();
    updateCellHighlights();
    checkGameOver();
  } else if (data.type === 'SYNC_STATE') {
    state.playersList = data.players;
    state.activePlayerId = data.activePlayerId;
    state.gameStarted = data.gameStarted;
    state.currentDiceResults = data.dice;
    state.hasRolledInTurn = data.hasRolled || false;
    state.validatedPlayers = new Set(data.validatedList || []);
    updateDiceUI();
    if (data.closedRows) data.closedRows.forEach(color => lockRowGlobally(color));
    if (state.gameStarted) startGameUI();
    updateTurnUI();
    updateCellHighlights();
  } else if (data.type === 'GAME_OVER') {
    state.playerScoresMap[data.playerId] = { id: data.playerId, name: data.playerName, score: data.score };
    if (!state.gameOverTriggered) {
      state.gameOverTriggered = true;
      const myScore = calculateScores();
      state.playerScoresMap[state.myPlayerId] = { id: state.myPlayerId, name: state.myPlayerName, score: myScore };
      broadcast({ type: 'SUBMIT_SCORE', playerId: state.myPlayerId, playerName: state.myPlayerName, score: myScore });
    }
    showGameOverModal(data.reason);
  } else if (data.type === 'SUBMIT_SCORE') {
    state.playerScoresMap[data.playerId] = { id: data.playerId, name: data.playerName, score: data.score };
    updateLeaderboardTable();
  }
}

function handleRemotePlayerLeft(data) {
  state.playersList = data.players;
  state.activePlayerId = data.activePlayerId;

  showAlert(`⚠️ ${data.playerName} ha abandonado la partida.`, 'Jugador Desconectado');

  if (state.gameStarted) {
    updateTurnUI();
    updateCellHighlights();
  } else {
    renderPlayerLists();
  }
  saveSessionState();
}

export function processPlayerValidation(playerId, playerName, pendingClosedRows = []) {
  let newClosureDetected = false;
  let newlyClosedColor = '';

  pendingClosedRows.forEach(color => {
    if (!state.declaredClosuresThisTurn.has(color)) {
      state.declaredClosuresThisTurn.add(color);
      newClosureDetected = true;
      newlyClosedColor = color;
    }
  });

  if (newClosureDetected) {
    state.validatedPlayers.clear();
    const alertData = {
      type: 'ROW_CLOSURE_ALERT',
      closingPlayerId: playerId,
      closingPlayerName: playerName,
      color: newlyClosedColor,
      declaredClosures: Array.from(state.declaredClosuresThisTurn)
    };
    handleRowClosureAlert(alertData);
    broadcast(alertData);
  } else {
    state.validatedPlayers.add(playerId);
    broadcast({ type: 'VALIDATION_UPDATE', validatedList: Array.from(state.validatedPlayers) });
    renderPlayerLists();

    if (state.validatedPlayers.size >= state.playersList.length) {
      const finalClosures = Array.from(state.declaredClosuresThisTurn);
      finalClosures.forEach(color => lockRowGlobally(color));

      const playerIds = state.playersList.map(p => p.id);
      const nextPlayer = playerIds[(playerIds.indexOf(state.activePlayerId) + 1) % playerIds.length];

      state.activePlayerId = nextPlayer;
      state.validatedPlayers.clear();
      state.declaredClosuresThisTurn.clear();
      resetTurnFlags();

      broadcast({ type: 'TURN_CHANGED', nextPlayer: state.activePlayerId, closedRows: finalClosures });
      updateTurnUI();
      updateCellHighlights();
      checkGameOver();
    }
  }
}

export function handleRowClosureAlert(data) {
  data.declaredClosures.forEach(color => {
    state.declaredClosuresThisTurn.add(color);
    if (state.pendingClosedRowsThisTurn.has(color)) state.myLockedClosuresThisTurn.add(color);
  });

  state.validatedPlayers.clear();
  state.validatedPlayers.add(data.closingPlayerId);

  if (data.closingPlayerId !== state.myPlayerId) {
    state.hasValidatedTurn = false;
    showAlert(
      `¡Atención! ${data.closingPlayerName} va a cerrar el color ${colorNamesSpanish[data.color] || data.color}.\n\nSe han cancelado las validaciones del turno para que podáis reevaluar vuestra jugada.`,
      '🔒 Fila Cerrada'
    );
  }

  renderPlayerLists();
  updateTurnUI();
  updateCellHighlights();
}

export function checkGameOver() {
  if (state.gameOverTriggered) return true;
  const closedCount = getClosedRows().length;
  const myPenalties = document.querySelectorAll('.penalty-box.marked').length;

  let reason = null;
  if (closedCount >= 2) reason = '¡Se han cerrado 2 filas en el juego!';
  else if (myPenalties >= 4) reason = `¡${state.myPlayerName} ha acumulado 4 faltas!`;

  if (reason) {
    state.gameOverTriggered = true;
    const myScore = calculateScores();
    state.playerScoresMap[state.myPlayerId] = { id: state.myPlayerId, name: state.myPlayerName, score: myScore };
    broadcast({ type: 'GAME_OVER', reason, playerId: state.myPlayerId, playerName: state.myPlayerName, score: myScore });
    showGameOverModal(reason);
    return true;
  }
  return false;
}

export function startGameUI() {
  state.gameStarted = true;
  document.body.classList.add('in-game');

  const netBar = document.querySelector('.network-bar');
  const gameArea = document.getElementById('game-area');

  if (netBar) netBar.style.display = 'none';
  if (gameArea) gameArea.style.display = 'block';

  updateTurnUI();
  updateCellHighlights();
}

export async function exitGame(force = false) {
  if (!force && !state.gameOverTriggered) {
    const confirmed = await showConfirm('¿Seguro que quieres abandonar la partida y borrar los datos guardados?', 'Salir del Juego');
    if (!confirmed) return;
  }

  // Notificar al resto antes de desconectar
  broadcast({
    type: 'PLAYER_LEFT',
    playerId: state.myPlayerId,
    playerName: state.myPlayerName,
    players: state.playersList.filter(p => p.id !== state.myPlayerId),
    activePlayerId: state.activePlayerId === state.myPlayerId
      ? (state.playersList.find(p => p.id !== state.myPlayerId) || {}).id
      : state.activePlayerId
  });

  activeSockets.forEach(ws => ws.close());
  document.body.classList.remove('in-game');
  localStorage.clear();
  window.location.reload();
}
