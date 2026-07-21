# Deployment SOP — Vercel

## Prerequisites
1. Push code to GitHub repository
2. Connect repo to Vercel (vercel.com/import)
3. Add environment variables in Vercel → Project Settings → Environment Variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_CONTACT_EMAIL`

## Build Settings (Automatic)
- Framework: Next.js
- Build Command: `next build`
- Output Directory: `.next`
- Node Version: 20.x (default)

## Local Dev
```bash
npm run dev    # http://localhost:3000
npm run build  # Production build
npm run start  # Serve production build
```

## Post-Deploy Checklist
- [ ] All pages render correctly
- [ ] Contact form sends email (test submission)
- [ ] Mobile navigation works
- [ ] No console errors
- [ ] Social links point to correct URLs
