# Nine Creatives — Agency Landing Page

A Next.js (App Router) recreation of the "Limitless Design Solutions" landing
page design, built with TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Structure

```
src/
  app/
    layout.tsx      Root layout, fonts, metadata
    page.tsx         Assembles all sections
    globals.css       Design tokens (color, type) + Tailwind import
  components/
    Header.tsx / Footer.tsx     Nav bar (shared logo, links, mobile menu)
    Hero.tsx                    Stats, headline, rings graphic
    Services.tsx / ServiceCard  Services list + sphere graphic
    ShowcaseDark.tsx / LaptopShowcase   Dark "infinite design" project showcase
    Approach.tsx / ApproachCard Three-step process cards
    CTA.tsx                     Closing "Reach Out Now" section
    holo/                       Custom SVG holographic/chrome graphics
    icons/                      Custom SVG line icons (pencil, tablet, scissors)
```

## Notes

- All decorative "chrome"/holographic artwork (rings, sphere, starburst) and
  icons are original SVG built with layered gradients — no external image
  assets, so there's nothing to swap out or license.
- Fonts (Archivo for display type, Inter for body/UI) are self-hosted via
  `@fontsource`, so `npm run build` works fully offline.
- Colors, type, and spacing live as CSS variables in `globals.css` — tweak
  `--color-purple`, `--color-ink`, etc. to retheme the whole site.
- The site is a single scrolling page; header/footer nav links point to
  in-page anchors (`#services`, `#project`, `#approach`, `#contact`).
