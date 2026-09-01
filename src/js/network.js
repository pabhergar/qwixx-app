import { state, resetTurnFlags, saveSessionState, colorNamesSpanish } from './state.js';
import { applyDiceResults, updateTurnUI, updateCellHighlights, renderPlayerLists, lockRowGlobally, updateLeaderboardTable } from './ui.js';
import { calculateScores, getClosedRows } from './game.js';
import { showAlert, showConfirm } from './ui.js';

export function broadcast(data) {
  if (state.isHost) state.connections.forEach(c => c.send(data));
  else if (state.hostConn && state.hostConn.open) state.hostConn.send(data);
}

export function handleNetworkData(data) {
  if (data.type === 'REJECTED') {
    showAlert(data.reason); exitGame();
  } else if (data.type === 'WELCOME') {
    state.myPlayerId = data.playerId; state.playersList = data.players; state.activePlayerId = data.activePlayerId;
    renderPlayerLists(); saveSessionState();
  } else if (data.type === 'PLAYER_JOINED') {
    state.playersList = data.players; renderPlayerLists(); saveSessionState();
  } else if (data.type === 'GAME_STARTED') {
    state.playersList = data.players; state.activePlayerId = data.activePlayerId; startGameUI();
  } else if (data.type === 'DICE_ROLLED') {
    state.currentDiceResults = data.dice;
    resetTurnFlags();
    state.hasRolledInTurn = true;
    applyDiceResults(data.dice);
    updateCellHighlights();
  } else if (data.type === 'ROW_CLOSURE_ALERT') {
    handleRowClosureAlert(data);
  } else if (data.type === 'VALIDATION_UPDATE') {
    state.validatedPlayers = new Set(data.validatedList);
    renderPlayerLists();
  } else if (data.type === 'TURN_CHANGED') {
    state.activePlayerId = data.nextPlayer;
    if (data.closedRows) data.closedRows.forEach(color => lockRowGlobally(color, false));
    resetTurnFlags();
    state.validatedPlayers.clear();
    state.declaredClosuresThisTurn.clear();
    saveSessionState();
    updateTurnUI();
    updateCellHighlights();
    checkGameOver();
  } else if (data.type === 'SYNC_STATE') {
    state.playersList = data.players; state.activePlayerId = data.activePlayerId; state.gameStarted = data.gameStarted;
    state.currentDiceResults = data.dice; state.hasRolledInTurn = data.hasRolled || false;
    state.validatedPlayers = new Set(data.validatedList || []);
    applyDiceResults(state.currentDiceResults);
    data.closedRows.forEach(color => {
      const lockCell = document.querySelector(`#row-${color} .cell.lock`);
      lockRowGlobally(color, lockCell && lockCell.classList.contains('marked'));
    });
    if (state.gameStarted) startGameUI();
    updateTurnUI();
    updateCellHighlights();
  } else if (data.type === 'GAME_OVER') {
    state.playerScoresMap[data.playerId] = { id: data.playerId, name: data.playerName, score: data.score };
    if (!state.gameOverTriggered) {
      state.gameOverTriggered = true;
      const myScore = calculateScores();
      state.playerScoresMap[state.myPlayerId] = { id: state.myPlayerId, name: state.myPlayerName, score: myScore };
      broadcast({ type: 'SUBMIT_SCORE', playerId: state.myPlayerId, playerName: state.myPlayerName, score: myScore });
    }
    showGameOverModal(data.reason);
  } else if (data.type === 'SUBMIT_SCORE') {
    state.playerScoresMap[data.playerId] = { id: data.playerId, name: data.playerName, score: data.score };
    updateLeaderboardTable();
  }
}

export function handleHostConnection(conn) {
  state.connections.push(conn);
  conn.on('data', (data) => {
    if (data.type === 'HANDSHAKE') {
      if (state.gameStarted) {
        conn.send({ type: 'REJECTED', reason: 'La partida ya ha comenzado.' });
        setTimeout(() => conn.close(), 500); return;
      }
      const nameTrimmed = data.name.trim();
      if (state.playersList.find(p => p.name.toLowerCase() === nameTrimmed.toLowerCase())) {
        conn.send({ type: 'REJECTED', reason: 'Nombre en uso.' });
        setTimeout(() => conn.close(), 500); return;
      }
      const newPlayerId = 'P' + (state.playersList.length + 1);
      state.playersList.push({ id: newPlayerId, name: nameTrimmed });
      conn.send({ type: 'WELCOME', playerId: newPlayerId, players: state.playersList, activePlayerId: state.activePlayerId, gameStarted: state.gameStarted });
      broadcast({ type: 'PLAYER_JOINED', players: state.playersList });
      renderPlayerLists(); saveSessionState();
    } else if (data.type === 'PLAYER_VALIDATED') {
      processPlayerValidation(data.playerId, data.playerName, data.pendingClosedRows);
    } else {
      handleNetworkData(data);
    }
  });
}

export function processPlayerValidation(playerId, playerName, pendingClosedRows = []) {
  let newClosureDetected = false;
  let newlyClosedColor = '';

  pendingClosedRows.forEach(color => {
    if (!state.declaredClosuresThisTurn.has(color)) {
      state.declaredClosuresThisTurn.add(color);
      newClosureDetected = true;
      newlyClosedColor = color;
    }
  });

  if (newClosureDetected) {
    state.validatedPlayers.clear();
    const alertData = {
      type: 'ROW_CLOSURE_ALERT',
      closingPlayerId: playerId,
      closingPlayerName: playerName,
      color: newlyClosedColor,
      declaredClosures: Array.from(state.declaredClosuresThisTurn)
    };
    handleRowClosureAlert(alertData);
    broadcast(alertData);
  } else {
    state.validatedPlayers.add(playerId);
    broadcast({ type: 'VALIDATION_UPDATE', validatedList: Array.from(state.validatedPlayers) });
    renderPlayerLists();

    if (state.validatedPlayers.size >= state.playersList.length) {
      const finalClosures = Array.from(state.declaredClosuresThisTurn);
      finalClosures.forEach(color => lockRowGlobally(color, false));

      const playerIds = state.playersList.map(p => p.id);
      const nextPlayer = playerIds[(playerIds.indexOf(state.activePlayerId) + 1) % playerIds.length];

      state.activePlayerId = nextPlayer;
      state.validatedPlayers.clear();
      state.declaredClosuresThisTurn.clear();
      resetTurnFlags();

      broadcast({ type: 'TURN_CHANGED', nextPlayer: state.activePlayerId, closedRows: finalClosures });
      updateTurnUI();
      updateCellHighlights();
      checkGameOver();
    }
  }
}

export function handleRowClosureAlert(data) {
  data.declaredClosures.forEach(color => {
    state.declaredClosuresThisTurn.add(color);
    if (state.pendingClosedRowsThisTurn.has(color)) {
      state.myLockedClosuresThisTurn.add(color);
    }
  });

  // Se limpian validaciones pero se mantiene validado al jugador que provocó el cierre
  state.validatedPlayers.clear();
  state.validatedPlayers.add(data.closingPlayerId);

  const isClosingPlayer = (data.closingPlayerId === state.myPlayerId);

  // Solo se rescinde la validación y se muestra la alerta a los demás jugadores
  if (!isClosingPlayer) {
    state.hasValidatedTurn = false;
    const btn = document.getElementById('btn-validate-turn');
    if (btn) {
      btn.disabled = false;
      btn.innerText = 'Validar Acción ✔️';
    }

    showAlert(
      `¡Atención! ${data.closingPlayerName} va a cerrar el color ${colorNamesSpanish[data.color] || data.color}.\n\nSe han cancelado las validaciones del turno para que podáis reevaluar vuestra jugada.`,
      '🔒 Fila Cerrada'
    );
  }

  renderPlayerLists();
  updateCellHighlights();
}

export function checkGameOver() {
  if (state.gameOverTriggered) return true;
  const closedCount = getClosedRows().length;
  const myPenalties = document.querySelectorAll('.penalty-box.marked').length;

  let reason = null;
  if (closedCount >= 2) reason = '¡Se han cerrado 2 filas en el juego!';
  else if (myPenalties >= 4) reason = `¡${state.myPlayerName} ha acumulado 4 faltas!`;

  if (reason) {
    state.gameOverTriggered = true;
    const myScore = calculateScores();
    state.playerScoresMap[state.myPlayerId] = { id: state.myPlayerId, name: state.myPlayerName, score: myScore };
    broadcast({ type: 'GAME_OVER', reason, playerId: state.myPlayerId, playerName: state.myPlayerName, score: myScore });
    showGameOverModal(reason);
    return true;
  }
  return false;
}

export function startGameUI() {
  state.gameStarted = true;
  document.getElementById('net-setup').style.display = 'none';
  document.getElementById('lobby-section').style.display = 'none';
  document.getElementById('turn-tracker').style.display = 'block';
  document.getElementById('game-area').style.display = 'block';
  document.getElementById('status-text').style.display = 'block';
  updateTurnUI();
  updateCellHighlights();
}

export function showGameOverModal(reason) {
  document.getElementById('game-over-reason').innerText = reason;
  updateLeaderboardTable();
  document.getElementById('game-over-modal').style.display = 'flex';
}

export async function exitGame(force = false) {
  if (!force && !state.gameOverTriggered) {
    const confirmed = await showConfirm('¿Seguro que quieres abandonar la partida y borrar los datos guardados?', 'Salir del Juego');
    if (!confirmed) return;
  }
  localStorage.clear();
  window.location.reload();
}
