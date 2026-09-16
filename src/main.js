import { initTransport } from './net/transport.js';
import { initNetworkMessaging } from './net/messages.js';
import { initLobbyListener, createGame, joinGame, startGame, leaveSession, exitGame } from './actions/session.js';
import { rollDice, handleCellClick, validateTurn } from './actions/turn.js';
import { toggleWaitPanel, hideWaitPanel } from './ui/hud.js';

// Bootstrap: wiring de eventos. Toda la lógica vive en actions/, flow/, logic/,
// model/ y net/.

window.addEventListener('DOMContentLoaded', () => {
  const savedName = localStorage.getItem('qwixx_player_name');
  if (savedName) document.getElementById('player-name-input').value = savedName;

  initTransport();
  initNetworkMessaging();
  initLobbyListener();

  document.getElementById('btn-create-room').addEventListener('click', createGame);
  document.getElementById('btn-start-game').addEventListener('click', startGame);
  document.getElementById('btn-leave-lobby').addEventListener('click', leaveSession);
  document.getElementById('btn-roll-dice').addEventListener('click', rollDice);
  document.getElementById('btn-validate-turn').addEventListener('click', validateTurn);
  document.getElementById('btn-exit-game').addEventListener('click', () => exitGame(false));
  document.getElementById('btn-modal-exit').addEventListener('click', () => exitGame(true));
  document.getElementById('btn-show-players').addEventListener('click', toggleWaitPanel);
  document.getElementById('btn-return-actions').addEventListener('click', hideWaitPanel);

  document.getElementById('games-list').addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-session-id]');
    if (btn) joinGame(btn.dataset.sessionId);
  });

  document.getElementById('game-area').addEventListener('click', (e) => {
    const cell = e.target.closest('.cell');
    if (cell) handleCellClick(cell);
  });
});
