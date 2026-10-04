import { state } from '../../model/state.js';
import { renderBoard, renderScores } from './ui.js';
import { computeScores, getGameOverReason } from './scoring.js';
import { isForcedPenalty, hasNoWhiteOption } from './rules.js';
import { COLOR_BY_DIE_KEY } from './dice.js';
import { QWIXX_DICE } from './dice.js';
import { rollDice, handleCellClick, onPass } from './actions.js';
import { showAlert } from '../../ui/modals.js';
import { renderGame } from '../../flow.js';
import { COLOR_NAMES_ES } from './constants.js';

// Contrato del juego Qwixx para el framework. El framework llama estos
// ganchos; nada de esto se replica en otros juegos.

export const qwixxGame = {
  id: 'qwixx',

  // Dados: configuración declarativa (el framework tira y pinta)
  dice: QWIXX_DICE,
  diceHidden(dieId) {
    const color = COLOR_BY_DIE_KEY[dieId];
    return !!color && state.board.closedRows.has(color);
  },

  // UI propia del juego (tablero, marcador); el framework la repinta
  ui: { renderBoard, renderScores },

  // Pistas para los controles de turno (parpadeo del botón de validar)
  hints(st) {
    return {
      forcedRed: isForcedPenalty(st),
      forcedBlue: hasNoWhiteOption(st)
    };
  },

  // Ciclo acción-validación
  onPass,
  validationData() {
    return { pendingClosedRows: Array.from(state.turn.pendingClosedRows) };
  },

  // Lado host: una validación puede declarar un cierre de fila, que reinicia
  // las validaciones del turno para que todos reevalúen su jugada
  onHostValidation(playerId, playerName, gameData) {
    const pending = gameData.pendingClosedRows || [];
    const newClosure = pending.find((color) => !state.declaredClosures.has(color));
    if (!newClosure) return null;

    state.declaredClosures.add(newClosure);
    return {
      type: 'ROW_CLOSURE_ALERT',
      closingPlayerId: playerId,
      closingPlayerName: playerName,
      color: newClosure,
      declaredClosures: Array.from(state.declaredClosures)
    };
  },

  onRoundDisruption(alert) {
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
  },

  turnCompletionData() {
    return { closedRows: Array.from(state.declaredClosures) };
  },

  // Fin de partida y puntuación final
  gameOverReason() {
    return getGameOverReason(state.board, state.myPlayerName);
  },
  finalScore() {
    return computeScores(state.board).total;
  },

  // Acciones de usuario del juego (wiring del shell)
  actions: { rollDice, handleCellClick }
};
