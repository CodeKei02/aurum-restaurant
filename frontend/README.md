# Aurum Restaurant Website

Premium restaurant brand website built with Astro, React, and Tailwind CSS v4.

The project features a restaurant landing page with an elegant visual direction: a hero section with a parallax effect, a story section with animated counters, a dynamic category-based menu, an ambiance gallery carousel, and a reservation form.

## Key Features

- Hybrid Astro + React architecture to combine performance with interactive components.
- Dark/gold visual style powered by CSS theme variables.
- Responsive navigation with a mobile menu.
- Hero section with scroll-based animation (GSAP + ScrollTrigger).
- Reusable animated counters through a custom `useCountUp` hook.
- Restaurant menu rendered from JSON data.
- Gallery carousel powered by Swiper.
- Reservation form with client-side confirmation state.

## Tech Stack

- Astro 5
- React 19 + React DOM 19
- Tailwind CSS v4 (integrated via the Vite plugin)
- TypeScript
- GSAP
- Swiper

## Requirements

- Node.js 18.20.0 or higher (Node.js 20 LTS recommended)
- pnpm (recommended, `pnpm-lock.yaml` is included)

## Installation

1. Clone the repository.
2. Install dependencies:

```bash
pnpm install
```

## Available Scripts

```bash
# Local development
pnpm dev

# Production build
pnpm build

# Preview production build
pnpm preview

# Astro CLI command
pnpm astro
```

## Project Structure

```text
src/
	components/
		home/
			astro/            # Static sections or sections with Astro scripts
			react/            # Interactive sections (tabs, carousel, form)
		shared/
			astro/            # Footer
			react/            # Navbar, Button, Card
	data/
		menuData.json       # Menu data (dishes, wines, cocktails)
	hooks/
		useCountUp.ts       # Reusable hook for animated counters
	layouts/
		Layout.astro        # Base layout (head, fonts, navbar)
	pages/
		index.astro         # Main page
	styles/
		global.css          # Tailwind + design variables

public/
	images/               # Visual assets
```

## Packages and Purpose

### Application Dependencies

- `astro`: main framework.
- `@astrojs/react`: official integration for using React components inside Astro.
- `react`, `react-dom`: interactive UI for client-side sections.
- `tailwindcss`, `@tailwindcss/vite`: styling utilities and Vite integration plugin.
- `gsap`: animations (hero and scroll-triggered counters).
- `swiper`: gallery carousel in the ambiance section.
- `embla-carousel-react`: installed, but currently no active usage is visible in the codebase.
- `@types/react`, `@types/react-dom`: TypeScript typings for React.

### Development Dependencies

- `prettier`: code formatting.
- `prettier-plugin-astro`: formatting support for `.astro` files.

## How the Page Works

The main homepage is composed of these sections:

1. Brand hero section with a full-screen background and parallax scroll effect.
2. Story section with intersection-triggered animated figures.
3. Menu section with category tabs and dish cards.
4. Ambiance gallery in a responsive slider.
5. Reservations section with a form and visual submission feedback.
6. Footer with secondary navigation, contact details, and opening hours.

## Recommended Development Workflow

- To add new dishes or drinks, edit `src/data/menuData.json`.
- To adjust the color palette or typography, update variables in `src/styles/global.css`.
- To add numeric animations, reuse `src/hooks/useCountUp.ts`.

## Build and Deployment

Generate a production build with:

```bash
pnpm build
```

Then validate the result locally with:

```bash
pnpm preview
```

## License

This project does not currently include an explicit license in the repository. If you plan to reuse it publicly, add a license (for example, MIT).
