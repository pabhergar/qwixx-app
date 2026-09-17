import { state, nextPlayerId } from '../model/state.js';
import { saveSession } from '../model/storage.js';
import { broadcast, updateLobbyEntry } from './transport.js';
import {
  flowClosureAlert, flowTurnChanged, flowPlayerLeft, checkGameOverLocal
} from '../flow.js';
import { renderPlayers } from '../ui/hud.js';

// Lógica de autoridad del host: admisión de jugadores, reconexiones y cierre
// de turnos. Solo la ejecuta el cliente con state.isHost === true.

function buildWelcome(targetUserId, playerId) {
  return {
    type: 'WELCOME',
    targetUserId,
    playerId,
    players: state.playersList,
    activePlayerId: state.activePlayerId,
    gameStarted: state.gameStarted,
    dice: state.dice,
    hasRolled: state.turn.hasRolled,
    validatedList: Array.from(state.validatedPlayers),
    turn: state.turnCounter
  };
}

function reject(targetUserId, reason) {
  broadcast({ type: 'REJECTED', targetUserId, reason });
}

export function handleHandshake(data) {
  if (state.gameStarted) {
    return reject(data.userId, 'La partida ya ha comenzado.');
  }

  const name = data.name.trim();
  if (state.playersList.some((p) => p.name.toLowerCase() === name.toLowerCase())) {
    return reject(data.userId, 'Nombre en uso en esta sala.');
  }
  if (state.playersList.some((p) => p.userId === data.userId)) {
    return reject(data.userId, 'Ya tienes esta partida abierta en otra ventana.');
  }

  const playerId = nextPlayerId();
  state.playersList.push({ id: playerId, userId: data.userId, name });

  broadcast(buildWelcome(data.userId, playerId));
  broadcast({ type: 'PLAYER_JOINED', players: state.playersList });
  updateLobbyEntry({ playerCount: state.playersList.length });
  renderPlayers();
  saveSession();
}

// Reconexión tras refresco o microcorte: el jugador ya estaba en la partida
export function handleRejoin(data) {
  const entry = state.playersList.find((p) => p.userId === data.userId);

  if (state.gameOverTriggered) {
    return reject(data.userId, 'La partida ya ha terminado.');
  }
  if (!entry) {
    return reject(data.userId, 'Ya no estás en esta partida.');
  }
  if (state.presence[entry.userId] === true) {
    return reject(data.userId, 'Ya tienes la partida abierta en otra ventana.');
  }

  broadcast(buildWelcome(data.userId, entry.id));
}

export function processValidation(playerId, playerName, pendingClosedRows = [], turn) {
  if (turn !== undefined && turn !== state.turnCounter) return;

  const newClosure = pendingClosedRows.find((color) => !state.declaredClosures.has(color));

  if (newClosure) {
    state.declaredClosures.add(newClosure);
    const alert = {
      type: 'ROW_CLOSURE_ALERT',
      closingPlayerId: playerId,
      closingPlayerName: playerName,
      color: newClosure,
      declaredClosures: Array.from(state.declaredClosures)
    };
    flowClosureAlert(alert);
    broadcast(alert);
    return;
  }

  state.validatedPlayers.add(playerId);
  broadcast({ type: 'VALIDATION_UPDATE', validatedList: Array.from(state.validatedPlayers) });
  renderPlayers();

  if (state.validatedPlayers.size >= state.playersList.length) {
    const closedRows = Array.from(state.declaredClosures);
    const playerIds = state.playersList.map((p) => p.id);
    const nextPlayer = playerIds[(playerIds.indexOf(state.activePlayerId) + 1) % playerIds.length];
    const nextTurn = state.turnCounter + 1;

    broadcast({ type: 'TURN_CHANGED', nextPlayer, closedRows, turn: nextTurn });
    flowTurnChanged(nextPlayer, closedRows, nextTurn);
    checkGameOverLocal();
  }
}

// El host puede expulsar a un jugador desconectado para desbloquear la partida
export function kickPlayer(playerId) {
  if (!state.isHost) return;
  const player = state.playersList.find((p) => p.id === playerId);
  if (!player || state.presence[player.userId] !== false) return;

  broadcast({ type: 'PLAYER_LEFT', playerId, playerName: player.name });
  flowPlayerLeft({ playerId, playerName: player.name });
}
