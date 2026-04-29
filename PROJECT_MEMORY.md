# DTC AV Project Memory

## Purpose

This repository is a premium marketing website for DTC AV Solutions, an AV integration business focused on workplace technology environments such as video conferencing rooms, sound masking deployments, training rooms, town halls, and executive boardrooms.

The site is primarily a brochure/lead-generation experience. The only interactive business workflow is the contact form, which validates inquiries and sends email notifications through Resend.

## Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS v4 via `@import "tailwindcss"`
- Framer Motion for page reveals, hero motion, and manufacturer marquee animation
- React Hook Form + Zod for form validation
- Resend for transactional email
- Vercel Analytics and Speed Insights

## Repo Shape

- `src/app`
  - Route files and metadata
  - `api/contact/route.ts` is the only server endpoint
- `src/components`
  - Reusable UI components
  - Most components are presentational and render content from `src/content/site.ts`
- `src/content`
  - Main source of truth for copy, navigation, service definitions, team members, and manufacturer data
- `src/lib`
  - Validation, email templates, rate limiting, and small utilities
- `public`
  - Fonts and all marketing/media assets

## Route Map

- `/`
  - Home page with hero, stats, process, solutions grid, manufacturer band, team section, and CTA
- `/about`
  - Brand positioning, team, manufacturer ecosystem, and CTA
- `/contact`
  - Lead form and reassurance/expectation copy
- `/solutions/[slug]`
  - Static detail page for each service defined in `src/content/site.ts`
- `/api/contact`
  - POST endpoint for lead submission and email delivery

## Content Ownership

`src/content/site.ts` is the most important file in the project.

It currently owns:

- Company identity and metadata in `siteConfig`
- Header/footer navigation
- Home hero copy and proof stats
- Process steps
- All service definitions used for the solutions cards and dynamic solution pages
- Team member roster
- About page positioning copy
- Contact page copy
- Footer copy
- Social preview metadata

If a future request is "change the wording," "add a new service," "swap a team member," or "update a manufacturer/logo list," check `src/content/site.ts` first.

`src/content/assets.ts` is the asset path map. If copy/content is correct but an image is wrong, start there.

## Components Worth Knowing

- `src/components/site-header.tsx`
  - Sticky header
  - Mobile menu state lives here
  - "Solutions" nav item points to `/solutions/video-conferencing` because there is no top-level solutions landing page
- `src/components/site-footer.tsx`
  - Footer nav and brand statement
- `src/components/hero-stack.tsx`
  - Animated hero image collage
- `src/components/reveal.tsx`
  - Shared Framer Motion reveal primitives used across pages
- `src/components/service-card.tsx`
  - Home page solution cards
- `src/components/manufacturer-band.tsx`
  - Infinite scrolling manufacturer marquee
- `src/components/contact-form.tsx`
  - Client-side form, fetches `/api/contact`, and shows success/error state inline

## Contact Flow

The lead flow is split across these files:

- `src/components/contact-form.tsx`
  - Client form state and submission
- `src/lib/contact-schema.ts`
  - Zod validation rules and select options
- `src/app/api/contact/route.ts`
  - Server validation, honeypot check, rate limit, env checks, and Resend sends
- `src/lib/contact-email.ts`
  - HTML and text templates for the internal notification email and confirmation email
- `src/lib/rate-limit.ts`
  - In-memory rate limiter: 5 submissions per IP per 10 minutes

Important operational detail:

- The rate limiter is process-local memory, so it is lightweight but not durable/shared across instances.
- The honeypot field is `website`. If filled, the API returns success without sending email.
- Successful submissions send two emails in parallel:
  - Internal alert to `RESEND_INTERNAL_TO`
  - Confirmation email to the submitter

## Environment Variables

Defined in `.env.example`:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `RESEND_INTERNAL_TO`
- `RESEND_REPLY_TO`
- `NEXT_PUBLIC_SITE_URL`

Behavior notes:

- `NEXT_PUBLIC_SITE_URL` is used by `absoluteUrl()` for social metadata; it falls back to `https://www.dtcav.com`.
- If `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, or `RESEND_INTERNAL_TO` are missing, the contact API returns a 500 with "Email delivery is not configured yet."

## SEO and Metadata

- Global metadata is defined in `src/app/layout.tsx`
- `src/app/robots.ts` generates `robots.txt`
- `src/app/sitemap.ts` generates the sitemap from the static routes plus the service slugs
- Solution page metadata is generated from each service entry

## Styling and Visual System

- Global styles live in `src/app/globals.css`
- Local font files are served from `public/fonts`
- Fonts in use:
  - `Manrope` for body
  - `Sora` for headings
  - `Space Mono` for eyebrow/utility text
- The visual direction is a dark, high-contrast enterprise/futuristic brand with cyan-blue accents, glass panels, and motion reveals

## Media and Assets

Important asset folders in `public/media`:

- `brand`
  - White logo and social card
- `hero`
  - Three hero collage images
- `services`
  - Service imagery used by solutions
- `team`
  - Team headshots
- `manufacturers`
  - Manufacturer logos used in the marquee and about page grid

There is a small cache-busting convention in use for some manufacturer images:

- Some image paths include `?v=2026-04-15`
- `next.config.ts` explicitly allows `/media/manufacturers/**` with that query string

If those query strings change, `next.config.ts` may also need to change.

## Known Project Characteristics

- There is no CMS. Content updates are code/content-file edits.
- There is no database.
- There is no auth.
- There is no dedicated solutions index page; the header routes "Solutions" to the first service detail page.
- The repo currently has no automated tests beyond TypeScript checking via `npm run typecheck`.
- Generated/runtime directories like `.next` and `.cache` are already ignored and should not be treated as source files.

## Fast Edit Guide

- Change company-level messaging: `src/content/site.ts`
- Change nav/footer links or CTA labels: `src/content/site.ts`
- Add or edit a service: `src/content/site.ts` and, if needed, `src/content/assets.ts` plus `public/media/services`
- Change team members: `src/content/site.ts` and `public/media/team`
- Change manufacturer logos: `src/content/assets.ts`, `public/media/manufacturers`, and possibly `next.config.ts`
- Change contact form fields/options/validation: `src/lib/contact-schema.ts` and `src/components/contact-form.tsx`
- Change email copy/layout: `src/lib/contact-email.ts`
- Change global metadata/social card behavior: `src/app/layout.tsx`, `src/content/site.ts`, and `src/lib/utils.ts`
- Change global look and typography: `src/app/globals.css`

## Verification Notes

As of 2026-04-28:

- `git status --short` was clean before documentation changes
- The existing README matched the detected stack and deployment model
- The project structure is compact and intentionally content-driven rather than component-heavy
