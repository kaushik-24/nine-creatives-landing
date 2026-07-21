# Nine Creatives — Project Constitution

## Identity
A dark-themed lead-generation website for a web agency, built with Next.js 16 + Tailwind CSS. Brand color: Burnt Sienna (#E97451).

## Data Schemas

### Contact Form Input (EmailJS)
```typescript
interface ContactFormInput {
  name: string;       // min 2, max 100
  email: string;      // valid email
  company?: string;   // optional, max 100
  phone?: string;     // optional
  message: string;    // min 10, max 2000
}

interface EmailJSPayload {
  service_id: string;
  template_id: string;
  user_id: string;
  template_params: {
    from_name: string;
    from_email: string;
    company: string;
    phone: string;
    message: string;
    to_email: string;
  };
}
```

### Contact Form Result
```typescript
interface FormResult {
  success: boolean;
  message: string;
}
```

### Service
```typescript
interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}
```

### Testimonial
```typescript
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}
```

### Portfolio Item
```typescript
interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}
```

## Behavioral Rules
1. All form state managed via React `useActionState` + `useFormStatus`
2. EmailJS keys stored in `.env.local` as `NEXT_PUBLIC_EMAILJS_*`
3. Dark theme applied at `html` level via Tailwind `darkMode: 'class'`
4. All placeholder content lives in `src/lib/content.ts`
5. No secrets committed — `.env.local` in `.gitignore`
6. Components are Server Components by default; only form is client

## Architectural Invariants
1. `src/lib/send-email.ts` is the single source of truth for EmailJS calls
2. All page content is centralized in `src/lib/content.ts`
3. UI primitives live in `src/components/ui/`
4. Dark background = `zinc-950` or `zinc-900`, cards = `zinc-800/900`, accent = burnt sienna
5. Fonts: Inter (body), plus a display font for headings

## Maintenance Log
| Date | Change | Author |
|---|---|---|
| 2026-07-07 | Initial constitution | O.P.U.S. |
