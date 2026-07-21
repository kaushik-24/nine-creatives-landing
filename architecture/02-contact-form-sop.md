# Contact Form SOP — EmailJS Integration

## Overview
The contact form uses EmailJS REST API via a Next.js Server Action. No backend required.

## Flow
```
User fills form → Client validation (HTML5) → Server Action (Zod-like validation) → EmailJS API → Email to agency inbox
```

## Environment Variables (`.env.local`)
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=<service_id>
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=<template_id>
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=<public_key>
NEXT_PUBLIC_CONTACT_EMAIL=<where_to_receive>
```

## Setup Steps
1. Create account at https://www.emailjs.com/
2. Add email service (Gmail, Outlook, etc.)
3. Create email template with variables: `from_name`, `from_email`, `company`, `phone`, `message`, `to_email`
4. Copy Service ID, Template ID, Public Key to `.env.local`
5. Set `NEXT_PUBLIC_CONTACT_EMAIL` to the inbox where submissions should arrive

## Edge Cases
- **Missing env vars**: Server Action returns error, logged to console
- **API failure**: Returns user-friendly error message
- **Validation**: Name (2+ chars), email (regex), message (10-2000 chars)
- **Spam**: Add honeypot field if needed (not currently implemented)

## Files
- `src/lib/send-email.ts` — Server Action
- `src/components/ContactForm.tsx` — Client component with useActionState
- `src/components/ui/Input.tsx` — Reusable input primitives
