# Configuración de Firebase (Realtime Database)

La capa de red del juego usa tu propio proyecto Firebase como "mini-servidor":
un nodo `lobby` con el registro de partidas (todos los clientes lo escuchan en
vivo) y un nodo `events/{sesion}` que actúa de bus de mensajes entre los
jugadores de una partida. La lógica de autoridad sigue en el host.

## Pasos

1. **Crea el proyecto** en [console.firebase.google.com](https://console.firebase.google.com)
   (plan Spark gratuito, sin tarjeta).

2. **Crea la base de datos**: menú lateral *Realtime Database* → *Create Database*.
   Elige la región más cercana (p. ej. `europe-west1`) y empieza en modo
   bloqueado — las reglas del paso 4 le dan acceso.

3. **Registra la app web**: *Project settings (⚙️) → General → Your apps →
   Web (</>)*. Copia el objeto `firebaseConfig` que te muestra.

4. **Pega la config** en `src/net/firebase-config.js`. La clave importante es
   `databaseURL` (apunta a tu Realtime Database e incluye la región).

5. **Publica las reglas de seguridad**: *Realtime Database → Rules*. Pega y
   publica:

   ```json
   {
     "rules": {
       "lobby":    { ".read": true,  ".write": true },
       "events":   { ".read": true,  ".write": true },
       "presence": { ".read": false, ".write": true },
       "online":   { ".read": true,  ".write": true }
     }
   }
   ```

   > Con esto cualquiera que conozca la URL puede leer/escribir partidas. Para
   > un juego entre amigos es el modelo de confianza habitual (igual que los
   > relays públicos de la versión anterior). Si algún día lo endureces:
   > autenticación anónima + `.validate` por estructura.

6. **Prueba**: `npm run dev` en dos pestañas (o dos dispositivos). Al crear una
   partida con nombre "Ana", la segunda pestaña debería ver "Partida de Ana" en
   el listado casi al instante.

## Modelo de datos

```
lobby/{sesionId}              { hostName, hostUserId, status: lobby|started|finished, createdAt, playerCount }
events/{sesionId}/{eventoId}  { sender: userId, createdAt, payload: { type, ... } }
presence/{sesionId}/{userId}  true | false
online/{userId}               { name: string|null, status: lobby|playing, since }
```

- `lobby` — listado "Partidas disponibles" (listener en vivo en todos los clientes).
- `events` — bus de mensajes de la partida (HANDSHAKE, WELCOME, REJOIN, DICE_ROLLED,
  TURN_CHANGED, GAME_OVER...). Cada cliente ignora los eventos que él mismo envió,
  y al (re)conectar filtra el historial previo salvo los eventos marcados con
  número de turno (necesarios para recuperar lo ocurrido durante un corte).
- `presence` — presencia por jugador con `onDisconnect`: un refresco o microcorte
  pone el valor en `false` sin sacarlo de la partida (los demás ven "sin conexión"
  y el juego espera); al reconectar vuelve a `true` con el estado restaurado. Si
  el anfitrión no vuelve en ~90s, cualquier cliente limpia la partida (watchdog).
- `online` — presencia global de la app (badge superior derecha), registrada por
  pestaña (`online/{userId}/{tabId}`) y agregada por usuario al mostrar: quién
  tiene la página abierta y si está disponible o en partida. Se re-escribe en
  cada reconexión (`.info/connected`) y se limpia sola vía `onDisconnect`.

## Notas

- La config de Firebase **no es un secreto** (igual que la API key de cualquier
  web app); puede commitearse. La protección real son las reglas.
- Las partidas `finished` se limpian cuando el host sale; las abandonadas por
  desconexión del host se eliminan solas vía `onDisconnect`.
- Reglas de Firestore/RTDB en "modo de prueba" caducan a los 30 días: usa las
  del paso 5, que no caducan.
