# Site Architecture — Nine Creatives

## Overview
Multi-page lead generation website for a web agency. Built with Next.js 16 (App Router), Tailwind CSS v4, dark theme with Burnt Sienna (#E97451) accent.

## Page Structure

| Route | File | Sections |
|---|---|---|
| `/` | `src/app/page.tsx` | Hero → Services → Testimonials → CTA |
| `/services` | `src/app/services/page.tsx` | Service detail cards, free audit CTA |
| `/work` | `src/app/work/page.tsx` | Portfolio card grid |
| `/about` | `src/app/about/page.tsx` | Mission, values, team placeholders |
| `/contact` | `src/app/contact/page.tsx` | EmailJS form, contact info cards |

## Component Tree
```
RootLayout (dark class, Inter font)
├── Header (client: path-aware nav, mobile toggle)
├── <page>
│   ├── HomePage
│   │   ├── HeroSection
│   │   ├── ServicesSection
│   │   ├── TestimonialsSection
│   │   └── CTASection
│   ├── ServicesPage
│   ├── WorkPage
│   ├── AboutPage
│   └── ContactPage
│       └── ContactForm (client: useActionState)
└── Footer
```

## Data Flow
- All content: `src/lib/content.ts` (centralized, static)
- All types: `src/lib/types.ts`
- Email: `src/lib/send-email.ts` → EmailJS REST API
- No database, no API routes
