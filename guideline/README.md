# Nine Studio — sections below the hero

Six sections, built to continue straight on from your
existing hero: Problem → Services → Work → Process → About → Final CTA
→ existing Footer.

## Install

```bash
npm install gsap @gsap/react
```

## Wire it in

1. Merge `app/tokens.css` into your existing `globals.css` — don't
   replace it, just add the `:root` vars and the `.font-display`
   class. Point `--font-headline` and `--font-dm-sans` at whatever
   `next/font` variables you're already loading for the hero, so the
   type matches exactly.
2. Drop `components/*.tsx` and `lib/gsap.ts` into your project as-is.
3. `app/page.tsx` shows how everything composes — swap in your real
   `<Nav />` and `<Hero />` at the top, the rest slots in underneath.

## What's doing the "interactive feel"

- **`ScrollSpine`** — this is the one signature move. Your hero's
  moving road lines don't just stop at the fold — a single line keeps
  drawing itself down the left edge of the whole page as you scroll,
  with a small glowing dot traveling along it. It's the thread that
  ties every section below back to the hero's motif, instead of each
  section inventing its own animation language.
- **`revealOnScroll`** (in `lib/gsap.ts`) — one shared fade-up-on-scroll
  used by every section, so the timing feels consistent site-wide
  rather than every component doing its own thing.
- **Process** — steps draw in left to right along a line as you scroll
  into the section, because it's an actual sequence (call → design →
  build → launch), not decoration.
- **Services cards** — lift slightly on hover via GSAP rather than CSS,
  so the easing matches the rest of the page.
- **Final CTA button** — magnetic hover effect, nudges toward the
  cursor, mirrors the "moving forward" feel from the hero in a small,
  contained way at the point where you most want someone to click.

`prefers-reduced-motion` is respected globally in `tokens.css` —
worth testing with it on before shipping.

## Content still to swap in

- `components/Work.tsx` — replace the four placeholder projects and
  `/work/*.jpg` paths with real case studies and screenshots.
- `components/Footer.tsx` — replace the placeholder email.
- Everywhere: this copy follows short sentences, no hyphens, and
  avoids words like "expert" / "trusted" / "elevate" / "meticulous" —
  keep that up if you add more.
