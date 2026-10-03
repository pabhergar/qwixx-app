import { firefox } from 'playwright';

const DB_URL = 'https://qwixx-c52fd-default-rtdb.europe-west1.firebasedatabase.app';

const browser = await firefox.launch();

async function smokeApp(url, tag, gamePicker) {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e).slice(0, 200)));

  await page.goto(url);
  await page.waitForTimeout(4000);
  console.log(`== ${tag} ==`);
  console.log('título:', await page.textContent('h1.game-title'));

  if (gamePicker) {
    await page.fill('#player-name-input', tag);
    await page.click('#btn-create-room');
    await page.waitForTimeout(600);
    console.log('picker visible:', await page.isVisible('#game-picker-modal'));
    const buttons = await page.locator('#game-picker .game-picker-btn').allTextContents();
    console.log('juegos en picker:', JSON.stringify(buttons.map((b) => b.trim().replace(/\n/g, ' '))));
    await page.click('#game-picker .game-picker-btn:not(.disabled)');
    await page.waitForTimeout(2500);
  } else {
    await page.fill('#player-name-input', tag);
    await page.click('#btn-create-room');
    await page.waitForTimeout(2500);
  }

  console.log('en sesión (host-controls):', await page.isVisible('#host-controls'));
  console.log('errores de página:', errors.length);
  await page.close();
}

await smokeApp('http://localhost:4173/', 'V1Smoke', false);
await smokeApp('http://localhost:4173/test/', 'V2Smoke', true);

// partida en solitario en v2: picker -> qwixx -> iniciar -> tirar
const page = await browser.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(String(e).slice(0, 200)));
await page.goto('http://localhost:4173/test/');
await page.fill('#player-name-input', 'V2Flow');
await page.click('#btn-create-room');
await page.waitForTimeout(500);
await page.click('#game-picker .game-picker-btn:not(.disabled)');
await page.waitForTimeout(2000);
await page.click('#btn-start-game');
await page.waitForTimeout(500);
await page.click('#btn-confirm-ok');
await page.waitForTimeout(1500);
console.log('== v2 flujo ==');
console.log('área de juego visible:', await page.isVisible('#game-area'));
await page.click('#btn-roll-dice');
await page.waitForTimeout(700);
const diceVisible = await page.evaluate(() => document.getElementById('die-w1').style.visibility);
console.log('dados tras tirar:', diceVisible);
console.log('errores de página:', errors.length);

// limpieza de partidas de prueba
const lobby = await (await fetch(`${DB_URL}/lobby.json`)).json() || {};
for (const [sid, g] of Object.entries(lobby)) {
  if (g && ['V1Smoke', 'V2Smoke', 'V2Flow'].includes(g.hostName)) {
    for (const tree of ['lobby', 'events', 'presence']) {
      await fetch(`${DB_URL}/${tree}/${sid}.json`, { method: 'DELETE' });
    }
    console.log('limpiada', sid.slice(-6), g.hostName, `(game=${g.game})`);
  }
}

await browser.close();
process.exit(0);
