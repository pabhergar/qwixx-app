import { state } from '../model/state.js';
import { getActiveGame } from '../games/registry.js';

// Sistema de dados agnóstico: cada juego declara su configuración
// (ids, caras, clases de color) y el framework tira y pinta.

export const DICE_FACES = ['', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

export function rollDiceValues(config) {
  const values = {};
  config.forEach((die) => {
    values[die.id] = 1 + Math.floor(Math.random() * (die.faces || 6));
  });
  return values;
}

export function renderDicePanel() {
  const game = getActiveGame();
  const container = document.getElementById('dice-container');
  if (!game || !container) return;

  const config = game.dice || [];

  config.forEach((die) => {
    const elId = `die-${die.id}`;
    let el = document.getElementById(elId);
    if (!el) {
      el = document.createElement('div');
      el.id = elId;
      el.className = `die ${die.className || ''}`;
      container.appendChild(el);
    }

    if (game.diceHidden && game.diceHidden(die.id)) {
      el.style.display = 'none';
      return;
    }

    el.style.display = 'flex';
    el.style.visibility = state.turn.hasRolled ? 'visible' : 'hidden';
    if (state.turn.hasRolled) el.innerText = DICE_FACES[state.dice[die.id]] || DICE_FACES[1];
  });

  [...container.children].forEach((el) => {
    if (!config.some((die) => `die-${die.id}` === el.id)) el.remove();
  });
}
