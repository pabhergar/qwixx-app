import { state, nextPlayerId } from '../model/state.js';
import { saveSession } from '../model/storage.js';
import { broadcast, updateLobbyEntry } from './transport.js';
import { flowPlayerLeft } from '../flow.js';
import { renderPlayers } from '../ui/hud.js';

// Autoridad del host: admisión de jugadores, reconexiones y expulsiones.
// La colección de validaciones y el avance de turno (agnósticos del juego)
// viven en framework/validation.js.

function buildWelcome(targetUserId, playerId) {
  return {
    type: 'WELCOME',
    targetUserId,
    playerId,
    players: state.playersList,
    activePlayerId: state.activePlayerId,
    game: state.game,
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
    return reject(data.userId, 'Ya estás en esta partida en otra pestaña de este navegador. Vuelve a esa pestaña o ciérrala.');
  }

  const playerId = nextPlayerId();
  state.playersList.push({ id: playerId, userId: data.userId, name });

  broadcast(buildWelcome(data.userId, playerId));
  broadcast({ type: 'PLAYER_JOINED', players: state.playersList });
  updateLobbyEntry({ playerCount: state.playersList.length });
  renderPlayers();
  saveSession();
}

// Reconexión tras refresco o microcorte: el jugador ya estaba en la partida.
// Otra pestaña del mismo navegador también puede reconectar: el liderazgo de
// pestañas (transport) deja una sola como activa.
export function handleRejoin(data) {
  const entry = state.playersList.find((p) => p.userId === data.userId);

  if (state.gameOverTriggered) {
    return reject(data.userId, 'La partida ya ha terminado.');
  }
  if (!entry) {
    return reject(data.userId, 'Ya no estás en esta partida.');
  }

  broadcast(buildWelcome(data.userId, entry.id));
}

// El host puede expulsar a un jugador desconectado para desbloquear la partida
export function kickPlayer(playerId) {
  if (!state.isHost) return;
  const player = state.playersList.find((p) => p.id === playerId);
  if (!player || state.presence[player.userId] !== false) return;

  broadcast({ type: 'PLAYER_LEFT', playerId, playerName: player.name });
  flowPlayerLeft({ playerId, playerName: player.name });
}
