import { state } from '../model/state.js';

export function showAlert(message, title = 'Atención') {
  return new Promise((resolve) => {
    const modal = document.getElementById('custom-alert-modal');
    const titleEl = document.getElementById('alert-title');
    const msgEl = document.getElementById('alert-message');
    const btnClose = document.getElementById('btn-close-alert');

    if (!modal) return resolve();

    titleEl.innerText = title;
    msgEl.innerText = message;
    modal.style.display = 'flex';

    const handleClose = () => {
      modal.style.display = 'none';
      btnClose.removeEventListener('click', handleClose);
      resolve();
    };

    btnClose.addEventListener('click', handleClose);
  });
}

export function showConfirm(message, title = 'Confirmación') {
  return new Promise((resolve) => {
    const modal = document.getElementById('custom-confirm-modal');
    const titleEl = document.getElementById('confirm-title');
    const msgEl = document.getElementById('confirm-message');
    const btnOk = document.getElementById('btn-confirm-ok');
    const btnCancel = document.getElementById('btn-confirm-cancel');

    if (!modal) return resolve(false);

    titleEl.innerText = title;
    msgEl.innerText = message;
    modal.style.display = 'flex';

    const cleanup = (result) => {
      modal.style.display = 'none';
      btnOk.removeEventListener('click', onOk);
      btnCancel.removeEventListener('click', onCancel);
      resolve(result);
    };

    const onOk = () => cleanup(true);
    const onCancel = () => cleanup(false);

    btnOk.addEventListener('click', onOk);
    btnCancel.addEventListener('click', onCancel);
  });
}

export function showGameOverModal(reason) {
  const reasonEl = document.getElementById('game-over-reason');
  const modal = document.getElementById('game-over-modal');
  if (reasonEl) reasonEl.innerText = reason;
  updateLeaderboard();
  if (modal) modal.style.display = 'flex';
}

export function updateLeaderboard() {
  const tbody = document.getElementById('leaderboard-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  const scoresArray = Object.values(state.scores).sort((a, b) => b.score - a.score);
  scoresArray.forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>#${index + 1}</td><td>${item.name}</td><td><b>${item.score} pts</b></td>`;
    tbody.appendChild(tr);
  });
}
