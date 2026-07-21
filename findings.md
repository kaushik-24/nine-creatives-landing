# Findings

## 2026-07-07

### Color Research
- "Burnt Sienna" hex #E97451 — the user described it as "burn sierre ... like orange"
- Commonly cited hex values: #E97451, #ED7B58 — settled on #E97451

### EmailJS
- Free tier: 200 emails/month
- Client-side SDK: `@emailjs/browser`
- No backend needed — works directly from browser
- Keys are public (NEXT_PUBLIC_ prefix) by design
- Service ID, Template ID, Public Key required

### Tech Stack Decisions
- Next.js 16 + Tailwind CSS v4 confirmed
- EmailJS chosen over Resend (user preference, no server setup needed)
- Dark theme with burnt sienna accent
- Multi-page structured site
