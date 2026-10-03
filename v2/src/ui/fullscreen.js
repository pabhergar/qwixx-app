// Pantalla completa: en móvil landscape oculta la barra de navegación del
// navegador y mejora mucho la experiencia de juego. La API exige que la
// entrada se pida desde un gesto del usuario (click/tap).

export function isFullscreenSupported() {
  return !!document.documentElement.requestFullscreen;
}

function isTouchDevice() {
  return window.matchMedia('(pointer: coarse)').matches;
}

function isFullscreen() {
  return document.fullscreenElement != null;
}

export function toggleFullscreen() {
  if (isFullscreen()) {
    document.exitFullscreen().catch(() => {});
    return;
  }
  if (!isFullscreenSupported()) return;
  document.documentElement.requestFullscreen().catch(() => {});
}

// Entrada automática al crear/unirse/iniciar partida (solo táctil)
export function requestAutoFullscreen() {
  if (!isTouchDevice() || isFullscreen()) return;
  if (!isFullscreenSupported()) return;
  document.documentElement.requestFullscreen().catch(() => {});
}

export function exitFullscreen() {
  if (isFullscreen()) document.exitFullscreen().catch(() => {});
}

export function initFullscreenButton() {
  const btn = document.getElementById('btn-fullscreen');
  if (!btn) return;

  if (!isFullscreenSupported()) {
    btn.style.display = 'none';
    return;
  }

  btn.addEventListener('click', toggleFullscreen);
  document.addEventListener('fullscreenchange', () => {
    btn.classList.toggle('active', isFullscreen());
  });
}
