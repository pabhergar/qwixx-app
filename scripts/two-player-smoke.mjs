// E2E de dos jugadores: ciclo completo acción-validación (tirada → marcar →
// validar → avance de turno) con el framework reestructurado, y orden de
// juego aleatorio (quien empieza no es siempre el anfitrión).
import { firefox } from 'playwright';

const DB_URL = 'https://qwixx-c52fd-default-rtdb.europe-west1.firebasedatabase.app';
const APP_URL = process.env.APP_URL || 'http://localhost:4173/';

const browser = await firefox.launch();

const ready = (page) => page.waitForFunction(() => window.__multijuegosReady, null, { timeout: 20000 });

const mk = async (name) => {
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(`[${name}] ${String(e).slice(0, 200)}`));
  return { ctx, page, name, errors };
};

const host = await mk('Anfitrion');
const guest = await mk('Invitado');

await host.page.goto(APP_URL);
await ready(host.page);
await host.page.fill('#player-name-input', host.name);
await host.page.click('#btn-create-room');
await host.page.waitForTimeout(500);
await host.page.click('#game-picker .game-picker-btn:not(.disabled)');
await host.page.waitForTimeout(2000);

await guest.page.goto(APP_URL);
await ready(guest.page);
await guest.page.fill('#player-name-input', guest.name);
await guest.page.waitForTimeout(1000);
await guest.page.click('#games-list .net-btn.join');
await guest.page.waitForTimeout(2000);

console.log('== iniciar partida ==');
await host.page.click('#btn-start-game');
await host.page.waitForTimeout(1500);
console.log('host en juego:', await host.page.isVisible('#game-area'));
console.log('guest en juego:', await guest.page.isVisible('#game-area'));

const statusOf = async (p) => p.evaluate(() => document.getElementById('dice-status-msg').innerText);
const hostStatus = await statusOf(host.page);
const guestStatus = await statusOf(guest.page);
console.log('estado host:', hostStatus, '| estado guest:', guestStatus);

// quien sea el activo tira; ambos marcan si pueden; ambos validan
const active = hostStatus.includes('Tu turno') ? host : guest;
const other = active === host ? guest : host;
console.log('jugador activo (aleatorio):', active.name);

await active.page.click('#btn-roll-dice');
await active.page.waitForTimeout(800);

const markIfPossible = async (p) => p.evaluate(() => {
  const cell = document.querySelector('#row-red .cell.selectable-white, #row-red .cell.selectable-color');
  if (cell) { cell.click(); return cell.dataset.val; }
  return null;
});
console.log('activo marcó:', await markIfPossible(active.page));
console.log('otro marcó:', await markIfPossible(other.page));

for (const p of [host, guest]) {
  await p.page.click('#btn-validate-turn');
  await p.page.waitForTimeout(700);
}

await host.page.waitForTimeout(1500);
const hostStatus2 = await statusOf(host.page);
const guestStatus2 = await statusOf(guest.page);
console.log('tras validar — host:', hostStatus2, '| guest:', guestStatus2);
const advanced = (hostStatus2 !== hostStatus) || (guestStatus2 !== guestStatus);
console.log('el turno avanzó:', advanced);

// segundo turno: el nuevo activo tira de nuevo
const active2 = hostStatus2.includes('Tu turno') ? host : guest;
await active2.page.click('#btn-roll-dice');
await active2.page.waitForTimeout(600);
const dice2 = await active2.page.evaluate(() => document.getElementById('die-w1').style.visibility);
console.log('segunda tirada visible en', active2.name, ':', dice2);

const allErrors = [...host.errors, ...guest.errors];
console.log('errores de página:', allErrors.length);
allErrors.slice(0, 5).forEach((e) => console.log(' ', e));

// repetir inicio varias veces para ver que el orden varía (P1 no siempre primero)
console.log('== aleatoriedad del orden (5 partidas) ==');
const firsts = [];
for (let i = 0; i < 5; i++) {
  const t1 = await mk('T1-' + i);
  const t2 = await mk('T2-' + i);
  await t1.page.goto(APP_URL);
await ready(t1.page);
  await t1.page.fill('#player-name-input', t1.name);
  await t1.page.click('#btn-create-room');
  await t1.page.waitForTimeout(400);
  await t1.page.click('#game-picker .game-picker-btn:not(.disabled)');
  await t1.page.waitForTimeout(1200);
  await t2.page.goto(APP_URL);
await ready(t2.page);
  await t2.page.fill('#player-name-input', t2.name);
  await t2.page.waitForTimeout(600);
  await t2.page.click('#games-list .net-btn.join');
  await t1.page.waitForTimeout(1200);
  await t1.page.click('#btn-start-game');
  await t1.page.waitForTimeout(1200);
  const s1 = await t1.page.evaluate(() => document.getElementById('dice-status-msg').innerText);
  firsts.push(s1.includes('Tu turno') ? 'host' : 'guest');
  await t1.ctx.close();
  await t2.ctx.close();
}
console.log('empezó cada partida:', firsts.join(', '), '→ variedad:', new Set(firsts).size > 1 || firsts.length === 1);

// limpieza
const lobby = await (await fetch(`${DB_URL}/lobby.json`)).json() || {};
for (const [sid, g] of Object.entries(lobby)) {
  if (g && (g.hostName === 'Anfitrion' || g.hostName.startsWith('T1-'))) {
    for (const tree of ['lobby', 'events', 'presence']) {
      await fetch(`${DB_URL}/${tree}/${sid}.json`, { method: 'DELETE' });
    }
    console.log('limpiada', sid.slice(-6), g.hostName);
  }
}

await browser.close();
process.exit(0);
