import { state, resetTurn } from '../model/state.js';
import { saveSession } from '../model/storage.js';
import * as transport from './transport.js';
import * as host from './host.js';
import {
  enterGame, flowDiceRolled, flowTurnChanged, flowClosureAlert, flowPlayerLeft,
  checkGameOverLocal, submitMyScore, renderGame
} from '../flow.js';
import { renderPlayers, showSessionAsClient } from '../ui/hud.js';
import { showAlert, showGameOverModal, updateLeaderboard } from '../ui/modals.js';
import { resetToStart } from '../actions/session.js';

// Routing de mensajes de red: traduce payloads a transiciones de flow.js.

// Mensajes procesables antes de estar dentro de la partida: los de registro
// de sala (WELCOME/PLAYER_JOINED/PLAYER_LEFT) y REJECTED. El resto del
// historial se ignora hasta entrar (salvo durante una reconexión).
const PRE_JOIN_MESSAGE_TYPES = new Set(['REJECTED', 'WELCOME', 'PLAYER_JOINED', 'PLAYER_LEFT']);

export function initNetworkMessaging() {
  transport.onPayload(routePayload);
}

function routePayload(data) {
  if (!state.sessionJoined && !state.reconnecting && !PRE_JOIN_MESSAGE_TYPES.has(data.type)) return;

  if (state.isHost) {
    if (data.type === 'HANDSHAKE') return host.handleHandshake(data);
    if (data.type === 'REJOIN') return host.handleRejoin(data);
    if (data.type === 'PLAYER_VALIDATED') {
      return host.processValidation(data.playerId, data.playerName, data.pendingClosedRows, data.turn);
    }
  }
  handleNetworkData(data);
}

function handleNetworkData(data) {
  switch (data.type) {
    case 'REJECTED':
      if (data.targetUserId === state.userId) {
        state.reconnecting = false;
        resetToStart(data.reason, 'Conexión rechazada');
      }
      break;

    case 'WELCOME':
      if (data.targetUserId === state.userId) applyWelcome(data);
      break;

    case 'PLAYER_JOINED':
      state.playersList = data.players;
      renderPlayers();
      saveSession();
      break;

    case 'PLAYER_LEFT':
      showAlert(`⚠️ ${data.playerName} ha abandonado la partida.`, 'Jugador Desconectado');
      flowPlayerLeft(data);
      break;

    case 'GAME_STARTED':
      state.playersList = data.players;
      state.activePlayerId = data.activePlayerId;
      if (data.turn) state.turnCounter = data.turn;
      enterGame();
      break;

    case 'DICE_ROLLED':
      flowDiceRolled(data.dice, data.turn);
      break;

    case 'ROW_CLOSURE_ALERT':
      flowClosureAlert(data);
      break;

    case 'VALIDATION_UPDATE':
      state.validatedPlayers = new Set(data.validatedList);
      renderPlayers();
      break;

    case 'TURN_CHANGED':
      flowTurnChanged(data.nextPlayer, data.closedRows, data.turn);
      checkGameOverLocal();
      break;

    case 'GAME_OVER':
      state.scores[data.playerId] = { id: data.playerId, name: data.playerName, score: data.score };
      if (!state.gameOverTriggered) {
        state.gameOverTriggered = true;
        submitMyScore();
      }
      showGameOverModal(data.reason);
      break;

    case 'SUBMIT_SCORE':
      state.scores[data.playerId] = { id: data.playerId, name: data.playerName, score: data.score };
      updateLeaderboard();
      break;
  }
}

// WELCOME (primera entrada o reconexión): snapshot autoritativo de la sala
function applyWelcome(data) {
  const savedTurnCounter = state.turnCounter;

  state.myPlayerId = data.playerId;
  state.playersList = data.players;
  state.activePlayerId = data.activePlayerId;
  state.turnCounter = data.turn ?? savedTurnCounter;
  state.dice = data.dice || state.dice;
  state.validatedPlayers = new Set(data.validatedList || []);

  // El turno restaurado del localStorage solo sirve si seguimos en el mismo
  // turno; si avanzó mientras estuvimos fuera, se descarta
  if (savedTurnCounter < state.turnCounter) resetTurn();

  state.turn.hasRolled = !!data.hasRolled;
  state.turn.hasValidated = state.validatedPlayers.has(state.myPlayerId);

  state.sessionJoined = true;
  state.reconnecting = false;
  transport.attachPresence();

  if (data.gameStarted) {
    enterGame();
  } else {
    const game = state.lobbyGames.find((g) => g.id === state.sessionId);
    showSessionAsClient(game ? game.hostName : '...');
    renderPlayers();
  }
  saveSession();
}
