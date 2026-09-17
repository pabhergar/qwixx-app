import { describe, it, expect } from 'vitest';
import {
  isCellMarkable, isRowClosingCell, isRowClosed, getValidTargets,
  isForcedPenalty, hasNoWhiteOption, isMarkedInTurn, isLockedClosureCell, targetKey
} from '../src/logic/rules.js';
import { buildState, setMarks, setDice } from './helpers.js';

describe('isRowClosingCell', () => {
  it('la última casilla de filas ascendentes es el 12', () => {
    expect(isRowClosingCell('red', '12')).toBe(true);
    expect(isRowClosingCell('yellow', '12')).toBe(true);
    expect(isRowClosingCell('red', '2')).toBe(false);
  });

  it('la última casilla de filas descendentes es el 2', () => {
    expect(isRowClosingCell('green', '2')).toBe(true);
    expect(isRowClosingCell('blue', '2')).toBe(true);
    expect(isRowClosingCell('green', '12')).toBe(false);
  });
});

describe('isCellMarkable', () => {
  it('en tablero vacío cualquier número es marcable salvo la última casilla', () => {
    const s = buildState();
    expect(isCellMarkable(s.board, 'red', '5')).toBe(true);
    expect(isCellMarkable(s.board, 'red', '11')).toBe(true);
    expect(isCellMarkable(s.board, 'red', '12')).toBe(false);
    expect(isCellMarkable(s.board, 'green', '3')).toBe(true);
    expect(isCellMarkable(s.board, 'green', '2')).toBe(false);
  });

  it('el candado no se marca directamente', () => {
    const s = buildState();
    expect(isCellMarkable(s.board, 'red', 'lock')).toBe(false);
  });

  it('solo se puede marcar a la derecha de la marca más avanzada', () => {
    const s = buildState();
    setMarks(s, 'red', ['5']);
    expect(isCellMarkable(s.board, 'red', '4')).toBe(false);
    expect(isCellMarkable(s.board, 'red', '5')).toBe(false);
    expect(isCellMarkable(s.board, 'red', '6')).toBe(true);
  });

  it('respeta el orden descendente en verde/azul', () => {
    const s = buildState();
    setMarks(s, 'green', ['8']);
    expect(isCellMarkable(s.board, 'green', '9')).toBe(false);
    expect(isCellMarkable(s.board, 'green', '12')).toBe(false);
    expect(isCellMarkable(s.board, 'green', '7')).toBe(true);
    expect(isCellMarkable(s.board, 'green', '3')).toBe(true);
  });

  it('la última casilla exige al menos 5 marcas previas en la fila', () => {
    const s = buildState();
    setMarks(s, 'red', ['2', '3', '4']);
    expect(isCellMarkable(s.board, 'red', '12')).toBe(false);

    setMarks(s, 'red', ['2', '3', '4', '5', '6']);
    expect(isCellMarkable(s.board, 'red', '12')).toBe(true);

    setMarks(s, 'blue', ['12', '11', '10']);
    expect(isCellMarkable(s.board, 'blue', '2')).toBe(false);

    setMarks(s, 'blue', ['12', '11', '10', '9', '8']);
    expect(isCellMarkable(s.board, 'blue', '2')).toBe(true);
  });

  it('una fila cerrada no admite marcas', () => {
    const s = buildState();
    s.board.closedRows.add('red');
    expect(isCellMarkable(s.board, 'red', '7')).toBe(false);
    expect(isRowClosed(s.board, 'red')).toBe(true);
  });
});

describe('getValidTargets', () => {
  const DICE = { w1: 2, w2: 3, r: 4, y: 6, g: 1, b: 5 };

  it('ofrece suma blanca a todos y combinaciones de color solo al activo', () => {
    const active = buildState({ myPlayerId: 'P1', activePlayerId: 'P1' });
    setDice(active, DICE);
    const t = getValidTargets(active);
    expect(t.white).toEqual(new Set(['red:5', 'yellow:5', 'green:5', 'blue:5']));
    expect(t.color).toEqual(new Set([
      'red:6', 'red:7', 'yellow:8', 'yellow:9', 'green:3', 'green:4', 'blue:7', 'blue:8'
    ]));

    const other = buildState({ myPlayerId: 'P2', activePlayerId: 'P1' });
    setDice(other, DICE);
    const t2 = getValidTargets(other);
    expect(t2.white.size).toBe(4);
    expect(t2.color.size).toBe(0);
  });

  it('sin dados lanzados o con turno validado no hay objetivos', () => {
    const s = buildState({ myPlayerId: 'P1', activePlayerId: 'P1' });
    setDice(s, DICE);
    s.turn.hasRolled = false;
    expect(getValidTargets(s).white.size).toBe(0);

    s.turn.hasRolled = true;
    s.turn.hasValidated = true;
    expect(getValidTargets(s).white.size).toBe(0);
    expect(getValidTargets(s).color.size).toBe(0);
  });

  it('solo se permite una marca blanca y una de color por turno', () => {
    const s = buildState({ myPlayerId: 'P1', activePlayerId: 'P1' });
    setDice(s, DICE);
    s.turn.marked.push({ color: 'red', val: '5', actionType: 'white' });
    s.turn.hasMarkedWhite = true;
    const t = getValidTargets(s);
    expect(t.white.size).toBe(0);
    expect(t.color.size).toBe(8);

    s.turn.marked.push({ color: 'yellow', val: '9', actionType: 'color' });
    s.turn.hasMarkedColor = true;
    const t2 = getValidTargets(s);
    expect(t2.color.size).toBe(0);
  });

  it('una fila con marca de color en el turno oculta su objetivo blanco', () => {
    const s = buildState({ myPlayerId: 'P1', activePlayerId: 'P1' });
    setDice(s, DICE);
    s.turn.marked.push({ color: 'red', val: '7', actionType: 'color' });
    s.turn.hasMarkedColor = true;
    const t = getValidTargets(s);
    expect(t.white.has(targetKey('red', '5'))).toBe(false);
    expect(t.white.has(targetKey('yellow', '5'))).toBe(true);
  });

  it('excluye filas cerradas y objetivos bloqueados por reglas de fila', () => {
    const s = buildState({ myPlayerId: 'P1', activePlayerId: 'P1' });
    setDice(s, { w1: 6, w2: 6, r: 1, y: 1, g: 1, b: 1 });
    s.board.closedRows.add('yellow');
    setMarks(s, 'red', ['2', '3']);
    const t = getValidTargets(s);
    expect(t.white.has(targetKey('yellow', '12'))).toBe(false);
    expect(t.white.has(targetKey('red', '12'))).toBe(false);
    expect(t.white.has(targetKey('green', '12'))).toBe(true);
    expect(t.white.has(targetKey('blue', '12'))).toBe(true);
  });
});

describe('isForcedPenalty / hasNoWhiteOption', () => {
  function blockedBoardState() {
    const s = buildState({ myPlayerId: 'P1', activePlayerId: 'P1' });
    setDice(s, { w1: 5, w2: 6, r: 6, y: 6, g: 6, b: 6 });
    setMarks(s, 'red', ['11']);
    setMarks(s, 'yellow', ['11']);
    setMarks(s, 'green', ['10']);
    setMarks(s, 'blue', ['10']);
    return s;
  }

  it('el activo sin jugadas posibles tiene falta obligatoria', () => {
    expect(isForcedPenalty(blockedBoardState())).toBe(true);
  });

  it('con jugadas disponibles no hay falta obligatoria', () => {
    const s = buildState({ myPlayerId: 'P1', activePlayerId: 'P1' });
    setDice(s, { w1: 1, w2: 1, r: 1, y: 1, g: 1, b: 1 });
    expect(isForcedPenalty(s)).toBe(false);
  });

  it('sin lanzar los dados o con marcas no aplica', () => {
    const s = blockedBoardState();
    s.turn.hasRolled = false;
    expect(isForcedPenalty(s)).toBe(false);

    const s2 = blockedBoardState();
    s2.turn.marked.push({ color: 'red', val: '12', actionType: 'white' });
    expect(isForcedPenalty(s2)).toBe(false);
  });

  it('el jugador no activo nunca tiene falta obligatoria, pero puede no tener opciones blancas', () => {
    const s = blockedBoardState();
    s.myPlayerId = 'P2';
    expect(isForcedPenalty(s)).toBe(false);
    expect(hasNoWhiteOption(s)).toBe(true);
  });

  it('tras validar, el botón de validación deja de parpadear', () => {
    const s = blockedBoardState();
    s.myPlayerId = 'P2';
    s.turn.hasValidated = true;
    expect(hasNoWhiteOption(s)).toBe(false);

    const s2 = blockedBoardState();
    s2.turn.hasValidated = true;
    expect(isForcedPenalty(s2)).toBe(false);
  });
});

describe('deshacer marcas', () => {
  it('solo se pueden deshacer las marcas del turno actual', () => {
    const s = buildState();
    s.turn.marked.push({ color: 'red', val: '7', actionType: 'color' });
    expect(isMarkedInTurn(s, 'red', '7')).toBe(true);
    expect(isMarkedInTurn(s, 'red', '8')).toBe(false);
  });

  it('un cierre ya declarado bloquea la última casilla y el candado de esa fila', () => {
    const s = buildState();
    s.turn.myLockedClosures.add('red');
    expect(isLockedClosureCell(s, 'red', '12')).toBe(true);
    expect(isLockedClosureCell(s, 'red', 'lock')).toBe(true);
    expect(isLockedClosureCell(s, 'red', '5')).toBe(false);
    expect(isLockedClosureCell(s, 'green', '2')).toBe(false);
  });
});
