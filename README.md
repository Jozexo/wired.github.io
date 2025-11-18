# wired — portafolio Astro (estética Lain)

Un portafolio minimalista con vibra undernet: fondo oscuro (`#1b1c1d`), acentos `#d27389`, `#994f61` y verde fósforo `#7ee787`. Sin estructuras genéricas: identidad en terminal, malla de proyectos y overlay CRT (scanlines + ruido).

## Estructura

```text
src/
	components/
		ContactPanel.astro
		Header.astro
		NoiseOverlay.astro
		ProjectMesh.astro
		ProjectNode.astro
		TerminalCard.astro
	data/
		projects.ts
	layouts/
		Layout.astro
	pages/
		index.astro
styles/
	global.css
public/
	favicon.svg
```

## Editar proyectos

- Archivo: `src/data/projects.ts`
- Campos: `title`, `slug`, `description`, `tags`, `href`, `repo?`
- Agrega/ordena elementos para que aparezcan en la malla.

## Personalizar identidad

- Componente: `src/components/TerminalCard.astro` (props `name`, `alias`, `role`, `location`, `summary`).
- Puedes pasarlos desde `src/pages/index.astro` o editarlos por defecto en el propio componente.

## Colores y fuentes

- Variables en `src/styles/global.css` (sección `:root`).
- Fuentes: "IBM Plex Mono" (mono) y "Space Grotesk" (display).

## Comandos

- `npm install` — instalar dependencias
- `npm run dev` — servidor dev en `http://localhost:4321`
- `npm run build` — compilar a `./dist/`
- `npm run preview` — previsualizar build

## Notas

- Tailwind v4 está habilitado para utilidades, pero el diseño se apoya en CSS propio para los efectos.
- El overlay CRT se aplica vía `NoiseOverlay.astro` y la clase `.scanlines` en el layout.
