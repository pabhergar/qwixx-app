import { describe, it, expect } from 'vitest';
import { shouldApplyDiceRoll, shouldApplyTurnChange, shuffleOrder, nextPlayerInOrder } from '../src/framework/turns.js';
import { rollDiceValues } from '../src/framework/dice.js';
import { buildState } from './helpers.js';

describe('guards de turno (idempotencia de eventos)', () => {
  it('ignora tiradas de turnos pasados o ya aplicadas del turno actual', () => {
    const s = buildState();
    s.turnCounter = 5;
    s.turn.hasRolled = true;
    expect(shouldApplyDiceRoll(s, 4)).toBe(false);
    expect(shouldApplyDiceRoll(s, 5)).toBe(false);

    s.turn.hasRolled = false;
    expect(shouldApplyDiceRoll(s, 5)).toBe(true);
    expect(shouldApplyDiceRoll(s, 6)).toBe(true);
  });

  it('ignora cambios de turno repetidos o pasados', () => {
    const s = buildState();
    s.turnCounter = 5;
    expect(shouldApplyTurnChange(s, 5)).toBe(false);
    expect(shouldApplyTurnChange(s, 4)).toBe(false);
    expect(shouldApplyTurnChange(s, 6)).toBe(true);
  });
});

describe('orden de juego aleatorio', () => {
  it('es una permutación de los jugadores', () => {
    const players = [{ id: 'P1' }, { id: 'P2' }, { id: 'P3' }, { id: 'P4' }, { id: 'P5' }];
    for (let i = 0; i < 20; i++) {
      const shuffled = shuffleOrder(players);
      expect(shuffled).toHaveLength(5);
      expect(new Set(shuffled.map((p) => p.id))).toEqual(new Set(players.map((p) => p.id)));
    }
  });

  it('no siempre deja al anfitrión (P1) el primero', () => {
    const players = [{ id: 'P1' }, { id: 'P2' }, { id: 'P3' }, { id: 'P4' }];
    let p1First = 0;
    for (let i = 0; i < 100; i++) {
      if (shuffleOrder(players)[0].id === 'P1') p1First++;
    }
    expect(p1First).toBeGreaterThan(0);
    expect(p1First).toBeLessThan(100);
  });

  it('no muta la lista original', () => {
    const players = [{ id: 'P1' }, { id: 'P2' }, { id: 'P3' }];
    const copy = [...players];
    shuffleOrder(players);
    expect(players.map((p) => p.id)).toEqual(copy.map((p) => p.id));
  });

  it('la rotación sigue el orden de la lista', () => {
    const players = [{ id: 'P3' }, { id: 'P1' }, { id: 'P2' }];
    expect(nextPlayerInOrder(players, 'P3')).toBe('P1');
    expect(nextPlayerInOrder(players, 'P1')).toBe('P2');
    expect(nextPlayerInOrder(players, 'P2')).toBe('P3');
  });
});

describe('dados por configuración (agnósticos)', () => {
  it('tira los dados declarados, con sus caras', () => {
    const config = [
      { id: 'a', faces: 3 },
      { id: 'b' },
      { id: 'c', faces: 20 }
    ];
    for (let i = 0; i < 50; i++) {
      const values = rollDiceValues(config);
      expect(Object.keys(values).sort()).toEqual(['a', 'b', 'c']);
      expect(values.a).toBeGreaterThanOrEqual(1);
      expect(values.a).toBeLessThanOrEqual(3);
      expect(values.b).toBeGreaterThanOrEqual(1);
      expect(values.b).toBeLessThanOrEqual(6);
      expect(values.c).toBeGreaterThanOrEqual(1);
      expect(values.c).toBeLessThanOrEqual(20);
    }
  });

  it('produce variedad con dados normales', () => {
    const config = [{ id: 'x' }];
    const seen = new Set();
    for (let i = 0; i < 100; i++) seen.add(rollDiceValues(config).x);
    expect(seen.size).toBeGreaterThan(3);
  });
});
