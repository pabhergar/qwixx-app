import { state } from '../model/state.js';
import { broadcast } from '../net/transport.js';
import { getActiveGame } from '../games/registry.js';
import { isMyTurn, nextPlayerInOrder } from './turns.js';
import { renderGame, flowTurnChanged, checkGameOverLocal } from '../flow.js';
import { renderPlayers } from '../ui/hud.js';
import { showAlert } from '../ui/modals.js';

// Ciclo acción-validación (agnóstico del juego):
//   1. El jugador activo realiza la acción del turno (p. ej. tirar los dados)
//   2. Todos actúan sobre el resultado (marcar) si pueden
//   3. Cada uno valida; el host colecciona y, cuando todos validan, avanza el turno
// Un jugador puede "declarar" algo disruptivo con su validación (p. ej. un
// cierre de fila en Qwixx): se re-emite a todos y las validaciones se reinician
// para que reevalúen su jugada.

export async function requestValidation() {
  if (!state.gameStarted || state.gameOverTriggered || state.turn.hasValidated) return;

  const game = getActiveGame();
  const myTurn = isMyTurn(state);

  if (!state.turn.hasRolled) {
    if (myTurn) return showAlert('Debes lanzar los dados antes de validar tu turno.');
    return showAlert('Debes esperar a que el jugador activo lance los dados.');
  }

  if (myTurn && state.turn.marked.length === 0 && game && game.onPass) {
    const proceed = await game.onPass();
    if (proceed === false) return;
  }

  state.turn.hasValidated = true;
  renderGame();

  const gameData = game ? game.validationData() : {};

  if (state.isHost) {
    hostProcessValidation(state.myPlayerId, state.myPlayerName, gameData, state.turnCounter);
  } else {
    broadcast({
      type: 'PLAYER_VALIDATED',
      playerId: state.myPlayerId,
      playerName: state.myPlayerName,
      gameData,
      turn: state.turnCounter
    });
  }
}

// Autoridad del host: colección de validaciones y avance de turno
export function hostProcessValidation(playerId, playerName, gameData = {}, turn) {
  if (turn !== undefined && turn !== state.turnCounter) return;

  const game = getActiveGame();
  const disruption = game && game.onHostValidation ? game.onHostValidation(playerId, playerName, gameData) : null;

  if (disruption) {
    broadcast(disruption);
    applyRoundDisruption(disruption);
    return;
  }

  state.validatedPlayers.add(playerId);
  broadcast({ type: 'VALIDATION_UPDATE', validatedList: Array.from(state.validatedPlayers) });
  renderPlayers();

  if (state.validatedPlayers.size >= state.playersList.length) {
    const completion = game && game.turnCompletionData ? game.turnCompletionData() : {};
    const closedRows = completion.closedRows || [];
    const nextPlayer = nextPlayerInOrder(state.playersList, state.activePlayerId);
    const nextTurn = state.turnCounter + 1;

    broadcast({ type: 'TURN_CHANGED', nextPlayer, closedRows, turn: nextTurn });
    flowTurnChanged(nextPlayer, closedRows, nextTurn);
    checkGameOverLocal();
  }
}

export function applyRoundDisruption(payload) {
  const game = getActiveGame();
  state.validatedPlayers.clear();
  if (game && game.onRoundDisruption) game.onRoundDisruption(payload);
}
