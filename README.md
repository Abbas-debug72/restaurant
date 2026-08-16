# 01 — Restaurant (Ember & Vine)

Fine-dining restaurant demo site: seasonal tasting menu, reservations, and wine list.
Part of the 10-site agency portfolio. See `../00-docs/01-restaurant.md` for the
planning document and non-functional checklist report.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Radix UI primitives (Dialog, Accordion)
- `next/image` with picsum.photos placeholder imagery (deterministic seeds)
- Playfair Display + Inter via `next/font`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (typecheck + lint + compile)
```

## Structure

- `src/app` — routes (`/`, `/menu`, `/about`, `/reservations`, `/contact`) plus
  `sitemap.ts`, `robots.ts`, `not-found.tsx`, `error.tsx`, `global-error.tsx`
- `src/components` — header, footer, hero, menu accordion, forms, and section pieces
- `src/lib` — site constants, image helpers, validation helpers
- Server actions validate and sanitize all form input; a honeypot field and an
  in-memory rate limit guard the reservation form.

## Deployment

Target: Vercel. Update `SITE.url` in `src/lib/site.ts` to the production domain
before deploying (used by metadata, sitemap, robots, and JSON-LD).
