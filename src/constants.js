export const COLORS = ['red', 'yellow', 'green', 'blue'];

export const COLOR_NAMES_ES = { red: 'ROJO', yellow: 'AMARILLO', green: 'VERDE', blue: 'AZUL' };

export const DICE_FACES = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

export const SCORE_TABLE = { 0: 0, 1: 1, 2: 3, 3: 6, 4: 10, 5: 15, 6: 21, 7: 28, 8: 36, 9: 45, 10: 55, 11: 66, 12: 78 };

export const LOCK_VAL = 'lock';

export const MIN_MARKS_TO_CLOSE = 5;

export const MAX_PENALTIES = 4;

export const ROWS_TO_END_GAME = 2;

export const PENALTY_POINTS = 5;

// Valores de cada fila en el orden en que aparecen en el tablero (rojo/amarillo ascienden, verde/azul descienden)
export const ROW_VALUES = {
  red: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  yellow: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  green: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2'],
  blue: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2']
};

export const DIE_KEY_BY_COLOR = { red: 'r', yellow: 'y', green: 'g', blue: 'b' };

// Relays públicos redundantes para el transporte Nostr
export const NOSTR_RELAYS = [
  'wss://relay.damus.io',
  'wss://nos.lol',
  'wss://relay.nostr.band',
  'wss://relay.snort.social'
];
