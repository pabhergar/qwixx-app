// Catálogo de juegos de la plataforma. Cada juego declara su entrada para
// el selector y su contrato (framework/dice, turns y validation consumen el
// contrato del juego activo).

import { state } from '../model/state.js';
import { qwixxGame } from './qwixx/index.js';

const GAME_IMPLS = {
  qwixx: qwixxGame
};

export const GAMES = [
  {
    id: 'qwixx',
    name: 'Qwixx',
    available: true,
    description: 'Dados y filas de color: tacha hacia la derecha y cierra filas.'
  },
  {
    id: 'plenus',
    name: 'Plenus',
    available: false,
    description: 'Próximamente'
  }
];

export function getGame(id) {
  return GAMES.find((g) => g.id === id);
}

// Contrato del juego activo en la sesión actual
export function getActiveGame() {
  return GAME_IMPLS[state.game] || null;
}
