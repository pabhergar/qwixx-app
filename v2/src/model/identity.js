// Identidad persistente del navegador: UUID que sobrevive a refrescos y
// cortes, y que permite reconnectarse a una partida en curso.

const USER_ID_KEY = 'qwixx_user_id';

// Identidad de esta pestaña concreta: distingue conexiones del mismo usuario
const tabId = crypto.randomUUID();

export function getUserId() {
  let id = localStorage.getItem(USER_ID_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(USER_ID_KEY, id);
  }
  return id;
}

export function getTabId() {
  return tabId;
}
