import { state } from '../model/state.js';
import { saveSession } from '../model/storage.js';
import * as transport from './transport.js';
import * as host from './host.js';
import {
  enterGame, flowDiceRolled, flowTurnChanged, flowClosureAlert, checkGameOverLocal, submitMyScore, renderGame
} from '../flow.js';
import { renderPlayers } from '../ui/hud.js';
import { showAlert, showGameOverModal, updateLeaderboard } from '../ui/modals.js';
import { resetToStart } from '../actions/session.js';

// Routing de mensajes de red: traduce payloads a transiciones de flow.js.

export function initNetworkMessaging() {
  transport.onPayload(routePayload);
}

function routePayload(data) {
  // REJECTED es lo único procesable antes de estar dentro de una partida:
  // el resto del historial de eventos se ignora hasta recibir WELCOME
  if (!state.sessionJoined && data.type !== 'REJECTED') return;

  if (state.isHost) {
    if (data.type === 'HANDSHAKE') return host.handleHandshake(data);
    if (data.type === 'PLAYER_VALIDATED') {
      return host.processValidation(data.playerId, data.playerName, data.pendingClosedRows);
    }
  }
  handleNetworkData(data);
}

function handleNetworkData(data) {
  switch (data.type) {
    case 'REJECTED':
      if (data.targetSession === transport.getSessionId()) {
        resetToStart(data.reason, 'Conexión rechazada');
      }
      break;

    case 'WELCOME':
      if (data.targetSession === transport.getSessionId() || data.targetName === state.myPlayerName) {
        state.myPlayerId = data.playerId;
        state.playersList = data.players;
        state.activePlayerId = data.activePlayerId;
        state.sessionJoined = true;
        transport.attachPresence(data.playerId);
        renderPlayers();
        saveSession();
      }
      break;

    case 'PLAYER_JOINED':
      state.playersList = data.players;
      renderPlayers();
      saveSession();
      break;

    case 'PLAYER_LEFT': {
      // Puede llegar duplicado (salida explícita + onDisconnect): si el jugador
      // ya no está en la lista, no hay nada que hacer
      if (!state.playersList.some((p) => p.id === data.playerId)) break;

      state.playersList = state.playersList.filter((p) => p.id !== data.playerId);
      state.activePlayerId = state.activePlayerId === data.playerId
        ? (state.playersList[0] || {}).id
        : state.activePlayerId;

      showAlert(`⚠️ ${data.playerName} ha abandonado la partida.`, 'Jugador Desconectado');
      if (state.isHost) transport.updateLobbyEntry({ playerCount: state.playersList.length });
      if (state.gameStarted) renderGame();
      else renderPlayers();
      saveSession();
      break;
    }

    case 'GAME_STARTED':
      state.playersList = data.players;
      state.activePlayerId = data.activePlayerId;
      enterGame();
      break;

    case 'DICE_ROLLED':
      flowDiceRolled(data.dice);
      break;

    case 'ROW_CLOSURE_ALERT':
      flowClosureAlert(data);
      break;

    case 'VALIDATION_UPDATE':
      state.validatedPlayers = new Set(data.validatedList);
      renderPlayers();
      break;

    case 'TURN_CHANGED':
      flowTurnChanged(data.nextPlayer, data.closedRows);
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
