import { describe, it, expect } from 'vitest';
import { aggregateOnlineUsers } from '../src/logic/online.js';

describe('aggregateOnlineUsers', () => {
  it('una entrada por usuario, con las pestañas colapsadas', () => {
    const raw = {
      'u1': { 't1': { name: 'Ana', status: 'lobby', since: 100 } },
      'u2': {
        't1': { name: 'Bob', status: 'lobby', since: 200 },
        't2': { name: 'Bob', status: 'playing', since: 300 }
      }
    };
    const users = aggregateOnlineUsers(raw);
    expect(users).toHaveLength(2);
    expect(users.find((u) => u.userId === 'u2').status).toBe('playing');
  });

  it('mantiene el nombre si alguna pestaña lo tiene, y "en partida" gana', () => {
    const raw = {
      'u1': {
        't1': { name: null, status: 'lobby', since: 100 },
        't2': { name: 'Ana', status: 'playing', since: 200 }
      }
    };
    const [user] = aggregateOnlineUsers(raw);
    expect(user.name).toBe('Ana');
    expect(user.status).toBe('playing');
  });

  it('sin nombre en ninguna pestaña, name queda null (decidiendo nombre)', () => {
    const raw = { 'u1': { 't1': { status: 'lobby', since: 100 } } };
    const [user] = aggregateOnlineUsers(raw);
    expect(user.name).toBeNull();
  });

  it('ordena por antigüedad de conexión y tolera mapas vacíos o sucios', () => {
    const raw = {
      'u2': { 't1': { name: 'B', status: 'lobby', since: 200 } },
      'u1': { 't1': { name: 'A', status: 'lobby', since: 100 } }
    };
    expect(aggregateOnlineUsers(raw).map((u) => u.name)).toEqual(['A', 'B']);
    expect(aggregateOnlineUsers({})).toEqual([]);
    expect(aggregateOnlineUsers(null)).toEqual([]);
    expect(aggregateOnlineUsers({ u1: { t1: null } })).toEqual([
      { userId: 'u1', name: null, status: 'lobby', since: null }
    ]);
  });
});
