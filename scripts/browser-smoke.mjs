// Diagnóstico con navegador real (playwright + firefox headless) contra el
// bundle desplegado en local, con conexión real a Firebase.
import { firefox } from 'playwright';

const DB_URL = 'https://qwixx-c52fd-default-rtdb.europe-west1.firebasedatabase.app';
const APP_URL = 'http://localhost:4173/';

const lobby = async () => {
  const res = await fetch(`${DB_URL}/lobby.json`);
  return (await res.json()) || {};
};

const browser = await firefox.launch();
const context = await browser.newContext();
const page = await context.newPage();

const logs = [];
page.on('console', (msg) => logs.push(`[${msg.type()}] ${msg.text().slice(0, 300)}`));
page.on('pageerror', (err) => logs.push(`[PAGEERROR] ${String(err).slice(0, 500)}`));

await page.goto(APP_URL);
await page.waitForTimeout(6000);

console.log('== tras arranque ==');
console.log('badge online:', await page.textContent('#online-count'));
console.log('items listado:', await page.locator('#games-list .game-item').count());
console.log('placeholder:', await page.evaluate(() => document.getElementById('no-games-placeholder').style.display));

console.log('== crear #1 (SmokeTest) ==');
await page.fill('#player-name-input', 'SmokeTest');
await page.click('#btn-create-room');
await page.waitForTimeout(3500);
let after1 = await lobby();
console.log('entradas lobby:', Object.keys(after1).length, '| propias:', Object.values(after1).filter((g) => g.hostName === 'SmokeTest').length);
console.log('vista sesión (host-controls visible):', await page.isVisible('#host-controls'));

console.log('== recargar -> debería reconectar a la partida ==');
await page.reload();
await page.waitForTimeout(5000);
console.log('reconectado a sesión:', await page.isVisible('#host-controls'));
console.log('título sala contiene SmokeTest:', (await page.textContent('#display-host-name')) === 'SmokeTest');
console.log('errores de página tras reload:', logs.filter((l) => l.includes('PAGEERROR')).length);

console.log('== escenario: segunda pestaña del mismo navegador ==');
const page2 = await context.newPage();
const logs2 = [];
page2.on('console', (m) => logs2.push(`[${m.type()}] ${m.text().slice(0, 200)}`));
page2.on('pageerror', (e) => logs2.push(`[PAGEERROR] ${String(e).slice(0, 300)}`));
await page2.goto(APP_URL);
await page2.bringToFront();
await page2.waitForTimeout(5000);
console.log('pestaña 2 reconectada a la partida (host-controls):', await page2.isVisible('#host-controls'));
console.log('pestaña 2 en sesión (título):', await page2.textContent('#display-host-name'));
await page.waitForTimeout(2000);
console.log('pestaña 1 relegada (overlay visible):', await page.isVisible('#tab-overlay'));
const errors2 = logs2.filter((l) => l.includes('PAGEERROR'));
console.log('errores de página en pestaña 2:', errors2.length);
errors2.slice(0, 5).forEach((l) => console.log(' ', l));
await page2.close();

console.log('== crear #2 (debería bloquearse) ==');
await page.click('#btn-create-room').catch(() => {});
await page.waitForTimeout(1500);
console.log('alerta visible:', await page.evaluate(() => document.getElementById('custom-alert-modal').style.display));
console.log('alerta texto:', await page.textContent('#alert-message'));
await page.waitForTimeout(1500);
const after2 = await lobby();
console.log('propias tras #2:', Object.values(after2).filter((g) => g.hostName === 'SmokeTest').length);

console.log('== logs del navegador ==');
logs.filter((l) => !l.includes('XXXX-noise')).slice(0, 25).forEach((l) => console.log(l));

// limpieza
for (const [sid, g] of Object.entries(after2)) {
  if (g.hostName === 'SmokeTest') {
    await fetch(`${DB_URL}/lobby/${sid}.json`, { method: 'DELETE' });
    await fetch(`${DB_URL}/events/${sid}.json`, { method: 'DELETE' });
    await fetch(`${DB_URL}/presence/${sid}.json`, { method: 'DELETE' });
    console.log('limpiada', sid.slice(-6));
  }
}

await browser.close();
process.exit(0);
