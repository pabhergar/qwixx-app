import { state, resetTurn, closeBoardRows } from './model/state.js';
import { saveSession } from './model/storage.js';
import { broadcast, updateLobbyEntry } from './net/transport.js';
import { computeScores, getGameOverReason } from './logic/scoring.js';
import { shouldApplyDiceRoll, shouldApplyTurnChange } from './logic/rules.js';
import { COLOR_NAMES_ES } from './constants.js';
import { renderBoard, renderScores, renderDice } from './ui/board.js';
import { renderTurnControls, renderPlayers, enterGameScreens } from './ui/hud.js';
import { showAlert, showGameOverModal } from './ui/modals.js';

// Transiciones de partida compartidas por host y clientes:
// cada mensaje de red o acción local pasa por aquí para mutar el estado
// y repintar la UI. El DOM siempre se deriva del modelo.

export function renderGame() {
  renderBoard();
  renderScores();
  renderDice();
  renderTurnControls();
  renderPlayers();
}

export function enterGame() {
  state.gameStarted = true;
  enterGameScreens();
  renderGame();
}
export function flowDiceRolled(dice, turn) {
  if (!shouldApplyDiceRoll(state, turn)) return;
  resetTurn();
  state.turn.hasRolled = true;
  state.dice = dice;
  renderGame();
}

export function flowTurnChanged(nextPlayer, closedRows = [], turn) {
  if (!shouldApplyTurnChange(state, turn)) return;
  state.activePlayerId = nextPlayer;
  closeBoardRows(closedRows);
  resetTurn();
  state.validatedPlayers.clear();
  state.declaredClosures.clear();
  if (turn !== undefined && turn !== null) state.turnCounter = turn;
  saveSession();
  renderGame();
}

export function flowPlayerLeft(data) {
  // Puede llegar duplicado (salida explícita + reconnect): si el jugador
  // ya no está en la lista, no hay nada que hacer
  if (!state.playersList.some((p) => p.id === data.playerId)) return;

  state.playersList = state.playersList.filter((p) => p.id !== data.playerId);
  state.activePlayerId = state.activePlayerId === data.playerId
    ? (state.playersList[0] || {}).id
    : state.activePlayerId;

  if (state.isHost) updateLobbyEntry({ playerCount: state.playersList.length });
  if (state.gameStarted) renderGame();
  else renderPlayers();
  saveSession();
}

export function flowClosureAlert(alert) {
  (alert.declaredClosures || []).forEach((color) => {
    state.declaredClosures.add(color);
    if (state.turn.pendingClosedRows.has(color)) state.turn.myLockedClosures.add(color);
  });

  state.validatedPlayers.clear();
  state.validatedPlayers.add(alert.closingPlayerId);

  if (alert.closingPlayerId !== state.myPlayerId) {
    state.turn.hasValidated = false;
    showAlert(
      `¡Atención! ${alert.closingPlayerName} va a cerrar el color ${COLOR_NAMES_ES[alert.color] || alert.color}.\n\nSe han cancelado las validaciones del turno para que podáis reevaluar vuestra jugada.`,
      '🔒 Fila Cerrada'
    );
  }

  renderGame();
}

export function checkGameOverLocal() {
  if (state.gameOverTriggered) return true;

  const reason = getGameOverReason(state.board, state.myPlayerName);
  if (!reason) return false;

  state.gameOverTriggered = true;
  submitMyScore();
  broadcast({ type: 'GAME_OVER', reason, playerId: state.myPlayerId, playerName: state.myPlayerName, score: state.scores[state.myPlayerId].score });
  if (state.isHost) updateLobbyEntry({ status: 'finished' });
  showGameOverModal(reason);
  return true;
}

export function submitMyScore() {
  const score = computeScores(state.board).total;
  state.scores[state.myPlayerId] = { id: state.myPlayerId, name: state.myPlayerName, score };
  broadcast({ type: 'SUBMIT_SCORE', playerId: state.myPlayerId, playerName: state.myPlayerName, score });
}
