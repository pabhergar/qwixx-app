import { state, nextPlayerId } from '../model/state.js';
import { saveSession } from '../model/storage.js';
import { broadcast } from './transport.js';
import { flowClosureAlert, flowTurnChanged, checkGameOverLocal } from '../flow.js';
import { renderPlayers } from '../ui/hud.js';

// Lógica de autoridad del host: admisión de jugadores y cierre de turnos.
// Solo la ejecuta el cliente con state.isHost === true.

export function handleHandshake(data) {
  if (state.gameStarted) {
    broadcast({ type: 'REJECTED', targetSession: data._senderSession, reason: 'La partida ya ha comenzado.' });
    return;
  }

  const name = data.name.trim();
  if (state.playersList.some((p) => p.name.toLowerCase() === name.toLowerCase())) {
    broadcast({ type: 'REJECTED', targetSession: data._senderSession, reason: 'Nombre en uso en esta sala.' });
    return;
  }

  const playerId = nextPlayerId();
  state.playersList.push({ id: playerId, name, session: data._senderSession });

  broadcast({
    type: 'WELCOME',
    targetSession: data._senderSession,
    targetName: name,
    playerId,
    players: state.playersList,
    activePlayerId: state.activePlayerId,
    gameStarted: state.gameStarted
  });

  broadcast({ type: 'PLAYER_JOINED', players: state.playersList });
  renderPlayers();
  saveSession();
}

export function processValidation(playerId, playerName, pendingClosedRows = []) {
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

    broadcast({ type: 'TURN_CHANGED', nextPlayer, closedRows });
    flowTurnChanged(nextPlayer, closedRows);
    checkGameOverLocal();
  }
}
