import { describe, it, expect } from 'vitest';
import { computeScores, getGameOverReason } from '../src/logic/scoring.js';
import { createBoard } from '../src/model/state.js';

describe('computeScores', () => {
  it('tablero vacío puntúa 0', () => {
    const scores = computeScores(createBoard());
    expect(scores.perColor).toEqual({ red: 0, yellow: 0, green: 0, blue: 0 });
    expect(scores.penalty).toBe(0);
    expect(scores.total).toBe(0);
  });

  it('aplica la tabla de puntuación por fila', () => {
    const board = createBoard();
    board.marks.red = new Set(['2', '3', '4']);
    board.marks.green = new Set(['12', '11', '10', '9', '8', '7']);
    const scores = computeScores(board);
    expect(scores.perColor.red).toBe(6);
    expect(scores.perColor.green).toBe(21);
    expect(scores.total).toBe(27);
  });

  it('el candado cuenta como marca (fila completa = 78)', () => {
    const board = createBoard();
    board.marks.red = new Set(['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'lock']);
    expect(computeScores(board).perColor.red).toBe(78);
  });

  it('las faltas restan 5 puntos cada una', () => {
    const board = createBoard();
    board.marks.yellow = new Set(['2', '3']);
    board.penalties = 2;
    const scores = computeScores(board);
    expect(scores.penalty).toBe(10);
    expect(scores.total).toBe(3 - 10);
  });
});

describe('getGameOverReason', () => {
  it('dos filas cerradas terminan la partida', () => {
    const board = createBoard();
    board.closedRows.add('red');
    board.closedRows.add('blue');
    expect(getGameOverReason(board, 'Ana')).toBe('¡Se han cerrado 2 filas en el juego!');
  });

  it('cuatro faltas terminan la partida', () => {
    const board = createBoard();
    board.penalties = 4;
    expect(getGameOverReason(board, 'Ana')).toBe('¡Ana ha acumulado 4 faltas!');
  });

  it('una fila cerrada y tres faltas no terminan la partida', () => {
    const board = createBoard();
    board.closedRows.add('red');
    board.penalties = 3;
    expect(getGameOverReason(board, 'Ana')).toBeNull();
  });
});
