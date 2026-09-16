import { state } from '../model/state.js';
import { saveSession } from '../model/storage.js';
import { onPayload, getSessionId } from './transport.js';
import * as host from './host.js';
import {
  enterGame, flowDiceRolled, flowTurnChanged, flowClosureAlert, checkGameOverLocal, submitMyScore, renderGame
} from '../flow.js';
import { renderPlayers } from '../ui/hud.js';
import { showAlert, showGameOverModal, updateLeaderboard } from '../ui/modals.js';
import { exitGame } from '../actions/session.js';

// Routing de mensajes de red: traduce payloads a transiciones de flow.js.

export function initNetworkMessaging() {
  onPayload(routePayload);
}

function routePayload(data) {
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
      if (data.targetSession === getSessionId()) {
        showAlert(data.reason, 'Conexión rechazada').then(() => exitGame(true));
      }
      break;

    case 'WELCOME':
      if (data.targetSession === getSessionId() || data.targetName === state.myPlayerName) {
        state.myPlayerId = data.playerId;
        state.playersList = data.players;
        state.activePlayerId = data.activePlayerId;
        renderPlayers();
        saveSession();
      }
      break;

    case 'PLAYER_JOINED':
      state.playersList = data.players;
      renderPlayers();
      saveSession();
      break;

    case 'PLAYER_LEFT':
      state.playersList = data.players;
      state.activePlayerId = data.activePlayerId;
      showAlert(`⚠️ ${data.playerName} ha abandonado la partida.`, 'Jugador Desconectado');
      if (state.gameStarted) renderGame();
      else renderPlayers();
      saveSession();
      break;

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
