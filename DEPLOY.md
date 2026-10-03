# Despliegue y versionado

El despliegue es automático vía GitHub Actions a GitHub Pages en cada `git push`.

## Rutas

| Ruta | Contenido |
|---|---|
| `/` | **Release estable**: la app clásica (rama `main`). |
| `/preview/<rama>/` | **Snapshot de cualquier rama** que pushees. Para probar en el móvil antes de merge a release. |

URL base: `https://pabhergar.github.io/qwixx-app/...`

## Flujo de trabajo

1. Itera en una rama (`git push origin mi-rama`) → se publica en `/preview/mi-rama/`.
2. Prueba en el móvil/PC desde la URL de preview.
3. Merge a `main` → se convierte en la release de `/`.

La evolución a "Multijuegos Online" (framework multi-juego con selector de
partida) vive en la rama `multijuegos`, visible en `/preview/multijuegos/`.

## Notas

- El sitio desplegado completo vive en la rama `site` (la crea el propio workflow):
  cada push actualiza solo su porción, de modo que **los previews persisten entre
  despliegues** y pueden convivir varios a la vez. Cuando eliminas una rama, su
  preview se poda en el siguiente despliegue.
- El entorno `github-pages` permite desplegar desde cualquier rama
  (política de ramas `*`, configurada vía API; por defecto GitHub solo permite `main`).
- Builds multi-archivo con assets con hash (caché inmutable); sin `singlefile`.
- La release y las previews comparten origen (localStorage) y proyecto Firebase:
  identidad de usuario y badge de conectados compartidos; las partidas de la
  evolución multi-juego llevan el campo `game` y la release las ignora (y viceversa).
