# Aurum Restaurant Website

Sitio web de una marca gastronómica premium construido con Astro, React y Tailwind CSS v4.

El proyecto presenta una landing page de restaurante con enfoque visual elegante: hero con efecto parallax, sección de historia con animaciones de conteo, carta dinámica por categorías, galería de ambiente en carrusel y formulario de reservaciones.

## Características principales

- Arquitectura híbrida Astro + React para combinar rendimiento y componentes interactivos.
- Estilo visual dark/gold con variables de tema en CSS.
- Navegación responsive con menú móvil.
- Hero con animación al hacer scroll (GSAP + ScrollTrigger).
- Contadores animados reutilizables mediante hook custom (`useCountUp`).
- Menú gastronómico renderizado desde datos JSON.
- Carrusel de galería con Swiper.
- Formulario de reservación con estado de confirmación en cliente.

## Stack tecnológico

- Astro 5
- React 19 + React DOM 19
- Tailwind CSS v4 (integrado vía plugin Vite)
- TypeScript
- GSAP
- Swiper

## Requisitos

- Node.js 18.20.0 o superior (recomendado Node.js 20 LTS)
- pnpm (recomendado, existe `pnpm-lock.yaml`)

## Instalación

1. Clona el repositorio.
2. Instala dependencias:

```bash
pnpm install
```

## Scripts disponibles

```bash
# Desarrollo local
pnpm dev

# Build de producción
pnpm build

# Vista previa del build
pnpm preview

# Comando CLI de Astro
pnpm astro
```

## Estructura del proyecto

```text
src/
	components/
		home/
			astro/            # Secciones estáticas o con scripts Astro
			react/            # Secciones interactivas (tabs, carrusel, formulario)
		shared/
			astro/            # Footer
			react/            # Navbar, Button, Card
	data/
		menuData.json       # Datos de menú (platos, vinos, cocteles)
	hooks/
		useCountUp.ts       # Hook reutilizable para contadores animados
	layouts/
		Layout.astro        # Layout base (head, fuentes, navbar)
	pages/
		index.astro         # Página principal
	styles/
		global.css          # Tailwind + variables de diseño

public/
	images/               # Recursos visuales
```

## Paquetes y propósito

### Dependencias de aplicación

- `astro`: framework principal.
- `@astrojs/react`: integración oficial para usar componentes React dentro de Astro.
- `react`, `react-dom`: UI interactiva en secciones cliente.
- `tailwindcss`, `@tailwindcss/vite`: utilidades de estilos y plugin de integración con Vite.
- `gsap`: animaciones (hero y conteos con scroll).
- `swiper`: carrusel de galería en la sección de ambiente.
- `embla-carousel-react`: instalado, pero actualmente no se observa uso activo en el código.
- `@types/react`, `@types/react-dom`: tipos para TypeScript en React.

### Dependencias de desarrollo

- `prettier`: formateo de código.
- `prettier-plugin-astro`: soporte de formateo para archivos `.astro`.

## Cómo funciona la página

La home principal está compuesta por estas secciones:

1. Hero de marca con fondo full-screen y efecto parallax al scroll.
2. Historia con cifras animadas por intersección.
3. Carta con tabs de categorías y cards de platillos.
4. Galería de ambiente en slider responsive.
5. Reservaciones con formulario y feedback visual de envío.
6. Footer con navegación secundaria, contacto y horarios.

## Desarrollo recomendado

- Para agregar nuevos platillos o bebidas, edita `src/data/menuData.json`.
- Para ajustar paleta o tipografías, modifica variables en `src/styles/global.css`.
- Para añadir animaciones numéricas reutiliza `src/hooks/useCountUp.ts`.

## Build y despliegue

Genera una versión de producción con:

```bash
pnpm build
```

Luego puedes validar localmente el resultado con:

```bash
pnpm preview
```

## Licencia

Este proyecto no incluye licencia explícita en el repositorio. Si planeas reutilizarlo públicamente, agrega una licencia (por ejemplo, MIT).
