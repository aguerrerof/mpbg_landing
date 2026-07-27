# MPBG Landing

![MPBG Consulting](assets/brand/logo_white.png)

Landing page oficial de MPBG Consulting.

## Que incluye

- Landing B2B de una sola pagina con todos los servicios y contacto.
- Lightbox para ampliar imagenes.
- Estilos compilados con Tailwind CSS.
- JavaScript compilado con Babel.

## Requisitos

- Node.js 18 o superior.
- npm.

## Instalacion

```bash
npm install
```

## Desarrollo

Compila CSS y JS:

```bash
npm run build
```

Compila estilos en modo watcher:

```bash
npm run dev:css
```

Sirve el proyecto localmente:

```bash
npm run serve
```

## Cache

Si haces cambios y no se ven en el navegador, actualiza las versiones de CSS y JS:

```bash
npm run cache
```

## Estructura

- `index.html`: landing B2B de una sola pagina.
- `assets/images/servicios/`: imagenes utilizadas por las secciones de servicio.
- `assets/`: imagenes y recursos.
- `src/`: CSS y JavaScript fuente.
- `dist/`: archivos compilados.

Los cambios en `src/` deben compilarse antes de publicarse en `dist/`.
