// Smoke e2e de la app multi-juego (rama multijuegos): picker de juego,
// partida en solitario de Qwixx completa y limpieza de datos de prueba.
import { firefox } from 'playwright';

const DB_URL = 'https://qwixx-c52fd-default-rtdb.europe-west1.firebasedatabase.app';
const APP_URL = process.env.APP_URL || 'http://localhost:4173/';

const browser = await firefox.launch();
const page = await browser.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(String(e).slice(0, 300)));

await page.goto(APP_URL);
await page.waitForTimeout(4000);
console.log('título:', await page.textContent('h1.game-title'));

console.log('== crear partida (picker) ==');
await page.fill('#player-name-input', 'PreviewSmoke');
await page.click('#btn-create-room');
await page.waitForTimeout(600);
console.log('picker visible:', await page.isVisible('#game-picker-modal'));
const games = await page.locator('#game-picker .game-picker-btn').allTextContents();
console.log('juegos:', JSON.stringify(games.map((g) => g.trim().replace(/\n/g, ' '))));
await page.click('#game-picker .game-picker-btn:not(.disabled)');
await page.waitForTimeout(2500);
console.log('en sesión (host-controls):', await page.isVisible('#host-controls'));
console.log('chip de juego en listado (otrña pestaña no aplica aquí) — estado game:', await page.evaluate(() => localStorage.getItem('qwixx2_game')));

console.log('== partida en solitario: iniciar + tirar + marcar ==');
await page.click('#btn-start-game');
await page.waitForTimeout(500);
await page.click('#btn-confirm-ok');
await page.waitForTimeout(1500);
await page.click('#btn-roll-dice');
await page.waitForTimeout(700);
console.log('dados visibles:', await page.evaluate(() => document.getElementById('die-w1').style.visibility));
const marked = await page.evaluate(() => {
  const cell = document.querySelector('#row-red .cell.selectable-white, #row-red .cell.selectable-color');
  if (cell) { cell.click(); return cell.dataset.val; }
  return null;
});
await page.waitForTimeout(500);
console.log('casilla marcada:', marked);
if (marked) {
  const dashes = await page.evaluate(() =>
    [...document.querySelectorAll('#row-red .cell.passed')].map((c) => c.dataset.val)
  );
  console.log('guiones a la izquierda:', JSON.stringify(dashes));
}
console.log('errores de página:', errors.length);

// reconexión tras recarga
await page.reload();
await page.waitForTimeout(5000);
console.log('reconectado tras recarga (game-area):', await page.isVisible('#game-area'), '| en juego (body.in-game):', await page.evaluate(() => document.body.classList.contains('in-game')));
console.log('errores tras recarga:', errors.length);

// limpieza
const lobby = await (await fetch(`${DB_URL}/lobby.json`)).json() || {};
for (const [sid, g] of Object.entries(lobby)) {
  if (g && g.hostName === 'PreviewSmoke') {
    for (const tree of ['lobby', 'events', 'presence']) {
      await fetch(`${DB_URL}/${tree}/${sid}.json`, { method: 'DELETE' });
    }
    console.log('limpiada', sid.slice(-6));
  }
}
await browser.close();
process.exit(0);
