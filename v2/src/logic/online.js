// Agregación de la presencia global: online/{userId}/{tabId} -> una entrada
// por usuario (mismo navegador con varias pestañas = una persona).

export function aggregateOnlineUsers(rawMap) {
  const users = [];

  Object.entries(rawMap || {}).forEach(([userId, tabs]) => {
    let name = null;
    let status = 'lobby';
    let since = null;

    Object.values(tabs || {}).forEach((tab) => {
      if (!tab) return;
      if (tab.name) name = tab.name;
      if (tab.status === 'playing') status = 'playing';
      if (typeof tab.since === 'number' && (since === null || tab.since < since)) since = tab.since;
    });

    users.push({ userId, name, status, since });
  });

  users.sort((a, b) => (a.since ?? Infinity) - (b.since ?? Infinity));
  return users;
}
