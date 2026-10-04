// Configuración de dados de Qwixx: 2 blancos + 4 de color. El framework
// tira y pinta cualquier configuración con esta forma.
export const QWIXX_DICE = [
  { id: 'w1', className: 'white1' },
  { id: 'w2', className: 'white2' },
  { id: 'r', className: 'red' },
  { id: 'y', className: 'yellow' },
  { id: 'g', className: 'green' },
  { id: 'b', className: 'blue' }
];

export const DIE_KEY_BY_COLOR = { red: 'r', yellow: 'y', green: 'g', blue: 'b' };
export const COLOR_BY_DIE_KEY = { r: 'red', y: 'yellow', g: 'green', b: 'blue' };
