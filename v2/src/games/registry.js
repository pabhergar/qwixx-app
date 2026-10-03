// Catálogo de juegos disponibles en la plataforma. Cada juego nuevo se
// registra aquí y define su entrada en el selector de "Nueva partida".

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
