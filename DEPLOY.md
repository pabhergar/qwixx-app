# Despliegue y versionado

El despliegue es automático vía GitHub Actions a GitHub Pages en cada `git push`.

## Rutas

| Ruta | Contenido |
|---|---|
| `/` | **Release estable**: la app clásica (Qwixx v1). Solo cambia con merges a `main`. |
| `/test/` | **Integración v2** ("Multijuegos Online"): framework multi-juego, selector de partida y Qwixx migrado. |
| `/preview/<rama>/` | **Snapshot de cualquier rama** que pushees (y su v2 en `/preview/<rama>/test/`). Para probar en el móvil antes de merge a release. |

URL base: `https://pabhergar.github.io/qwixx-app/...`

## Flujo de trabajo

1. Itera en una rama (`git push origin mi-rama`) → se publica en `/preview/mi-rama/`.
2. Prueba en el móvil/PC desde la URL de preview.
3. Merge a `main` → aparece en `/` (v1) y `/test/` (v2).
4. Cuando la v2 esté lista para ser el producto, se promociona (futuro: mover la v2 a la raíz y retirar la v1).

## Notas

- Cada despliegue reemplaza el artefacto entero: solo la **última** rama de preview
  queda publicada en `/preview/`. Trabaja una rama a la vez.
- El entorno `github-pages` permite desplegar desde cualquier rama
  (política de ramas `*`, configurada vía API; por defecto GitHub solo permite `main`).
- Builds multi-archivo con assets con hash (caché inmutable); sin `singlefile`.
- Ambas versiones comparten proyecto Firebase (lobby con campo `game` por partida,
  identidad de usuario y badge de conectados globales; claves de sesión y liderazgo
  de pestañas aisladas por versión).
