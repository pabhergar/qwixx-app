import { state, resetTurn, closeBoardRows } from './model/state.js';
import { saveSession } from './model/storage.js';
import { broadcast, updateLobbyEntry } from './net/transport.js';
import { shouldApplyDiceRoll, shouldApplyTurnChange } from './framework/turns.js';
import { renderDicePanel } from './framework/dice.js';
import { getActiveGame } from './games/registry.js';
import { renderTurnControls, renderPlayers, enterGameScreens } from './ui/hud.js';
import { showGameOverModal } from './ui/modals.js';

// Transiciones de partida compartidas por host y clientes (agnósticas del
// juego: la UI específica se repinta vía el contrato del juego activo).

export function renderGame() {
  const game = getActiveGame();
  if (game && game.ui) {
    if (game.ui.renderBoard) game.ui.renderBoard();
    if (game.ui.renderScores) game.ui.renderScores();
  }
  renderDicePanel();
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

export function checkGameOverLocal() {
  if (state.gameOverTriggered) return true;

  const game = getActiveGame();
  const reason = game && game.gameOverReason ? game.gameOverReason() : null;
  if (!reason) return false;

  state.gameOverTriggered = true;
  submitMyScore();
  broadcast({
    type: 'GAME_OVER',
    reason,
    playerId: state.myPlayerId,
    playerName: state.myPlayerName,
    score: state.scores[state.myPlayerId].score
  });
  if (state.isHost) updateLobbyEntry({ status: 'finished' });
  showGameOverModal(reason);
  return true;
}

export function submitMyScore() {
  const game = getActiveGame();
  const score = game && game.finalScore ? game.finalScore() : 0;
  state.scores[state.myPlayerId] = { id: state.myPlayerId, name: state.myPlayerName, score };
  broadcast({ type: 'SUBMIT_SCORE', playerId: state.myPlayerId, playerName: state.myPlayerName, score });
}
