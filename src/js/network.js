import { state, resetTurnFlags, saveSessionState, colorNamesSpanish } from './state.js';
import { updateDiceUI, updateTurnUI, updateCellHighlights, renderPlayerLists, lockRowGlobally, updateLeaderboardTable, showAlert, showGameOverModal, showConfirm } from './ui.js';
import { calculateScores, getClosedRows } from './game.js';

export function broadcast(data) {
  if (state.isHost) state.connections.forEach(c => c.send(data));
  else if (state.hostConn && state.hostConn.open) state.hostConn.send(data);
}

export function handleNetworkData(data) {
  if (data.type === 'REJECTED') {
    showAlert(data.reason, 'Conexión rechazada').then(() => exitGame(true));
  } else if (data.type === 'WELCOME') {
    state.myPlayerId = data.playerId;
    state.playersList = data.players;
    state.activePlayerId = data.activePlayerId;
    renderPlayerLists();
    saveSessionState();
  } else if (data.type === 'PLAYER_JOINED') {
    state.playersList = data.players;
    renderPlayerLists();
    saveSessionState();
  } else if (data.type === 'PLAYER_LEFT') {
    handleRemotePlayerLeft(data);
  } else if (data.type === 'GAME_STARTED') {
    state.playersList = data.players;
    state.activePlayerId = data.activePlayerId;
    startGameUI();
  } else if (data.type === 'DICE_ROLLED') {
    state.currentDiceResults = data.dice;
    resetTurnFlags();
    state.hasRolledInTurn = true;
    updateDiceUI();
    updateTurnUI();
    updateCellHighlights();
  } else if (data.type === 'ROW_CLOSURE_ALERT') {
    handleRowClosureAlert(data);
  } else if (data.type === 'VALIDATION_UPDATE') {
    state.validatedPlayers = new Set(data.validatedList);
    renderPlayerLists();
  } else if (data.type === 'TURN_CHANGED') {
    state.activePlayerId = data.nextPlayer;
    if (data.closedRows) data.closedRows.forEach(color => lockRowGlobally(color));
    resetTurnFlags();
    state.validatedPlayers.clear();
    state.declaredClosuresThisTurn.clear();
    saveSessionState();
    updateTurnUI();
    updateCellHighlights();
    checkGameOver();
  } else if (data.type === 'SYNC_STATE') {
    state.playersList = data.players;
    state.activePlayerId = data.activePlayerId;
    state.gameStarted = data.gameStarted;
    state.currentDiceResults = data.dice;
    state.hasRolledInTurn = data.hasRolled || false;
    state.validatedPlayers = new Set(data.validatedList || []);
    updateDiceUI();
    data.closedRows.forEach(color => lockRowGlobally(color));
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
        setTimeout(() => conn.close(), 500);
        return;
      }
      const nameTrimmed = data.name.trim();
      if (state.playersList.find(p => p.name.toLowerCase() === nameTrimmed.toLowerCase())) {
        conn.send({ type: 'REJECTED', reason: 'Nombre en uso.' });
        setTimeout(() => conn.close(), 500);
        return;
      }
      const newPlayerId = 'P' + (state.playersList.length + 1);
      conn.playerId = newPlayerId; // Asignamos ID a la conexión para rastrearla al desconectarse

      state.playersList.push({ id: newPlayerId, name: nameTrimmed });
      conn.send({ type: 'WELCOME', playerId: newPlayerId, players: state.playersList, activePlayerId: state.activePlayerId, gameStarted: state.gameStarted });
      broadcast({ type: 'PLAYER_JOINED', players: state.playersList });
      renderPlayerLists();
      saveSessionState();
    } else if (data.type === 'PLAYER_VALIDATED') {
      processPlayerValidation(data.playerId, data.playerName, data.pendingClosedRows);
    } else {
      handleNetworkData(data);
    }
  });

  // DETECTAR DESCONEXIÓN DE UN JUGADOR
  conn.on('close', () => {
    if (conn.playerId) {
      handlePlayerDisconnect(conn.playerId);
    }
  });
}

function handlePlayerDisconnect(disconnectedId) {
  const index = state.playersList.findIndex(p => p.id === disconnectedId);
  if (index === -1) return;

  const leavingPlayer = state.playersList[index];
  state.playersList.splice(index, 1);
  state.connections = state.connections.filter(c => c.playerId !== disconnectedId);

  // Si era el turno del jugador que se fue y la partida está en curso, avanzamos turno
  if (state.gameStarted && state.activePlayerId === disconnectedId) {
    if (state.playersList.length > 0) {
      const nextIndex = index % state.playersList.length;
      state.activePlayerId = state.playersList[nextIndex].id;
    }
    resetTurnFlags();
  }

  const payload = {
    type: 'PLAYER_LEFT',
    playerId: disconnectedId,
    playerName: leavingPlayer.name,
    players: state.playersList,
    activePlayerId: state.activePlayerId
  };

  broadcast(payload);
  handleRemotePlayerLeft(payload);
}

function handleRemotePlayerLeft(data) {
  state.playersList = data.players;
  state.activePlayerId = data.activePlayerId;

  showAlert(`⚠️ ${data.playerName} ha abandonado la partida.`, 'Jugador Desconectado');

  if (state.gameStarted) {
    updateTurnUI();
    updateCellHighlights();
  } else {
    renderPlayerLists();
  }
  saveSessionState();
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
      finalClosures.forEach(color => lockRowGlobally(color));

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
    if (state.pendingClosedRowsThisTurn.has(color)) state.myLockedClosuresThisTurn.add(color);
  });

  state.validatedPlayers.clear();
  state.validatedPlayers.add(data.closingPlayerId);

  if (data.closingPlayerId !== state.myPlayerId) {
    state.hasValidatedTurn = false;
    showAlert(
      `¡Atención! ${data.closingPlayerName} va a cerrar el color ${colorNamesSpanish[data.color] || data.color}.\n\nSe han cancelado las validaciones del turno para que podáis reevaluar vuestra jugada.`,
      '🔒 Fila Cerrada'
    );
  }

  renderPlayerLists();
  updateTurnUI();
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
  document.body.classList.add('in-game');

  const netBar = document.querySelector('.network-bar');
  const gameArea = document.getElementById('game-area');

  if (netBar) netBar.style.display = 'none';
  if (gameArea) gameArea.style.display = 'block';

  updateTurnUI();
  updateCellHighlights();
}

export async function exitGame(force = false) {
  if (!force && !state.gameOverTriggered) {
    const confirmed = await showConfirm('¿Seguro que quieres abandonar la partida y borrar los datos guardados?', 'Salir del Juego');
    if (!confirmed) return;
  }
  document.body.classList.remove('in-game');
  localStorage.clear();
  window.location.reload();
}
