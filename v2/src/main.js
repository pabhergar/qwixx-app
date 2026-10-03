import { state } from './model/state.js';
import { getUserId } from './model/identity.js';
import { initTransport, initTabLeadership, onTabActivity } from './net/transport.js';
import { initNetworkMessaging } from './net/messages.js';
import { initPresenceHandling } from './net/presence.js';
import { initOnlinePresence, setOnlineName } from './net/online.js';
import { kickPlayer } from './net/host.js';
import {
  initLobbyListener, tryReconnect, createGame, joinGame, startGame, leaveSession, exitGame, deleteOwnGame
} from './actions/session.js';
import { rollDice, handleCellClick, validateTurn } from './actions/turn.js';
import { toggleWaitPanel, hideWaitPanel, showTabOverlay, hideTabOverlay, showGamePicker, hideGamePicker, renderGamePicker } from './ui/hud.js';
import { showAlert } from './ui/modals.js';
import { toggleOnlinePopover, hideOnlinePopover } from './ui/online.js';
import { initFullscreenButton } from './ui/fullscreen.js';

// Bootstrap: wiring de eventos. Toda la lógica vive en actions/, flow/, logic/,
// model/ y net/.

window.addEventListener('DOMContentLoaded', () => {
  state.userId = getUserId();

  const savedName = localStorage.getItem('qwixx_player_name');
  if (savedName) document.getElementById('player-name-input').value = savedName;

  initTransport();
  initNetworkMessaging();
  initPresenceHandling();
  initLobbyListener();
  initOnlinePresence();
  initTabLeadership();

  onTabActivity((active) => (active ? hideTabOverlay() : showTabOverlay()));

  document.getElementById('btn-tab-resume').addEventListener('click', () => window.location.reload());

  document.getElementById('online-badge').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleOnlinePopover();
  });
  document.addEventListener('click', (e) => {
    const popover = document.getElementById('online-popover');
    if (popover && popover.style.display === 'flex' && !popover.contains(e.target)) hideOnlinePopover();
  });

  const nameInput = document.getElementById('player-name-input');
  nameInput.addEventListener('change', () => setOnlineName(nameInput.value.trim() || null));

  initFullscreenButton();

  document.getElementById('btn-create-room').addEventListener('click', () => {
    const nameInput = document.getElementById('player-name-input');
    if (!nameInput.value.trim()) {
      showAlert('Introduce tu nombre antes de empezar.');
      nameInput.focus();
      return;
    }
    renderGamePicker((gameId) => createGame(gameId));
    showGamePicker();
  });
  document.getElementById('game-picker-modal').addEventListener('click', (e) => {
    if (e.target.id === 'game-picker-modal') hideGamePicker();
  });
  document.getElementById('btn-start-game').addEventListener('click', startGame);
  document.getElementById('btn-leave-lobby').addEventListener('click', leaveSession);
  document.getElementById('btn-roll-dice').addEventListener('click', rollDice);
  document.getElementById('btn-validate-turn').addEventListener('click', validateTurn);
  document.getElementById('btn-exit-game').addEventListener('click', () => exitGame(false));
  document.getElementById('btn-modal-exit').addEventListener('click', () => exitGame(true));
  document.getElementById('btn-show-players').addEventListener('click', toggleWaitPanel);
  document.getElementById('btn-return-actions').addEventListener('click', hideWaitPanel);

  document.getElementById('games-list').addEventListener('click', (e) => {
    const del = e.target.closest('button[data-delete-id]');
    if (del) return deleteOwnGame(del.dataset.deleteId);
    const btn = e.target.closest('button[data-session-id]');
    if (btn) joinGame(btn.dataset.sessionId);
  });

  const onKick = (e) => {
    const btn = e.target.closest('.player-kick');
    if (btn) kickPlayer(btn.dataset.playerId);
  };
  document.getElementById('player-list').addEventListener('click', onKick);
  document.getElementById('turn-wait-list').addEventListener('click', onKick);

  document.getElementById('game-area').addEventListener('click', (e) => {
    const cell = e.target.closest('.cell');
    if (cell) handleCellClick(cell);
  });

  // Refresco o microcorte con una partida en marcha: reincorporación
  tryReconnect();
});
