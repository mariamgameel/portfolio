# Mariam Gameel Ibrahim — Software Engineer Portfolio

An executive, multi-page, content-driven portfolio website for **Mariam Gameel Ibrahim**, **Full-Stack Software Engineer**. Built with **Astro 5**, **TypeScript**, **Tailwind CSS**, and **Three.js**, styled in a refined **Monochrome Marble (Black / White / Grey)** aesthetic with full internationalization (English & Arabic with RTL).

---

## 🎨 Design System: Black / White / Grey / Marble

- **Palette Tokens (CSS Variables)**:
  - `ink`: `#0B0B0C`
  - `graphite`: `#1A1A1C`
  - `charcoal`: `#2B2B2E`
  - `slate-grey`: `#6B6B70`
  - `silver`: `#A9A9AE`
  - `mist`: `#D9D9DC`
  - `marble-white`: `#F4F3F1`
  - `pure white`: `#FFFFFF`
- **Procedural Marble Textures**: Generated purely with layered CSS gradients and an inline SVG `feTurbulence` / `feDisplacementMap` filter (zero external image requests, WCAG AA contrast).
- **Themes**: Dark (black marble) & Light (white marble) with smooth toggle, anti-flash `<head>` script, and `prefers-color-scheme` support.
- **Typography**: Self-hosted *Cormorant Garamond* (headlines), *Plus Jakarta Sans* / *Cairo* (body/UI), and *JetBrains Mono* (code). Zero third-party Google Fonts requests.

---

## 🏛️ Architecture & Tech Stack

- **Framework**: Astro 5.18.2 (Static Output: `output: 'static'`)
- **Styling**: Tailwind CSS 3.4.17 built with official `@astrojs/tailwind`
- **Data Layer**: Astro Content Collections with Zod schemas (`projects`, `certificates`, `gallery`, `experience`, `testimonials`)
- **3D Graphics**: Three.js (lazy-loaded after first paint via `IntersectionObserver`, capped pixel ratio, respectful of `prefers-reduced-motion`)
- **Icons**: Build-time inline SVG generation via `lucide-static` (zero CDN dependencies)
- **Fonts**: Self-hosted via `@fontsource`
- **i18n**: Full bilingual support (English default + Arabic `/ar/` with RTL layout)

---

## 📂 Project Structure

```
portfolio/
├── docs/
│   └── ADDING_CONTENT.md      # Step-by-step content authoring guide
├── public/
│   ├── docs/                  # Official certificate PDFs
│   ├── favicon.svg            # Minimalist marble monogram
│   ├── Mariam_Gameel_CV.pdf   # Complete authentic 166KB CV
│   └── robots.txt
├── scripts/
│   ├── new-project.js         # Scaffold new project markdown
│   ├── new-cert.js            # Scaffold new certificate markdown
│   └── new-gallery.js         # Scaffold new gallery item markdown
├── src/
│   ├── assets/                # Optimized project & recognition images
│   ├── components/            # Reusable UI components (Header, Footer, ThreeHero, etc.)
│   ├── content/
│   │   ├── config.ts          # Zod content schemas
│   │   ├── certificates/      # Markdown certificate entries
│   │   ├── experience/        # Markdown career milestones
│   │   ├── gallery/           # Markdown media archive
│   │   └── projects/          # Long-form project case studies
│   ├── data/
│   │   └── site.ts            # Site configuration, tech stack, and social links
│   ├── i18n/                  # Bilingual dictionaries (en.json, ar.json) & helpers
│   ├── layouts/
│   │   └── BaseLayout.astro   # Main layout with SEO, OpenGraph, JSON-LD, marble filter
│   ├── pages/                 # Multi-page routes (EN & AR)
│   ├── styles/
│   │   └── global.css         # Theme tokens, font imports, marble gradients
│   └── views/                 # Modular page view templates
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
# Open http://localhost:4321

# 3. Build production static bundle
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 📝 Adding New Content (Zero Code Changes)

Adding a new project, certificate, or gallery photo is as simple as running a command or creating a Markdown file in `src/content/`:

```bash
# Scaffold new project
npm run new:project -- "My AI Project"

# Scaffold new certificate
npm run new:cert -- "AWS Certified Solutions Architect"

# Scaffold new gallery photo
npm run new:gallery -- "Conference Presentation"
```

For complete field specifications, draft options, and image management, read [docs/ADDING_CONTENT.md](docs/ADDING_CONTENT.md).

---

## ⚙️ Environment Variables

Configure these optional variables in `.env` or in your deployment dashboard:

| Variable | Description | Default |
| :--- | :--- | :--- |
| `PUBLIC_SITE_URL` / `ASTRO_SITE` | Production domain for canonical URLs & sitemap | `https://mariamgameel.github.io` |
| `ASTRO_BASE` | Base path for GitHub Pages subfolder (if applicable) | `undefined` (root) |
| `PUBLIC_FORM_ENDPOINT` | Formspree or Web3Forms endpoint URL | `""` (falls back to mailto) |
| `PUBLIC_BOOKING_URL` | Optional Calendly/Cal.com interview scheduling link | `""` (hidden if empty) |
| `PUBLIC_ANALYTICS_DOMAIN` | Optional Plausible domain for cookieless analytics | `""` (disabled if empty) |

---

## 🌐 Deployment

### GitHub Pages
Set `ASTRO_SITE=https://<username>.github.io` and `ASTRO_BASE=/<repository-name>` in your GitHub repository secrets if deploying to a project page, or deploy to a custom domain directly.

### Vercel / Netlify
1. Connect this Git repository to Vercel.
2. Framework Preset: **Astro**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
