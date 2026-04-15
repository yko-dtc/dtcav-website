# DTC AV Solutions Website

Premium Next.js marketing site for DTC AV Solutions, designed around a futuristic enterprise AV brand experience.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Resend
- Vercel Analytics + Speed Insights

## Local Development

1. Install dependencies:

   ```powershell
   npm install
   ```

2. Copy `.env.example` to `.env.local` and fill in the Resend values.

3. Start the development server:

   ```powershell
   npm run dev
   ```

## Required Environment Variables

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `RESEND_INTERNAL_TO`
- `RESEND_REPLY_TO` (optional)
- `NEXT_PUBLIC_SITE_URL`

## Production Workflow

1. Push the project to a private GitHub repository.
2. Import the repository into Vercel.
3. Configure the environment variables in the Vercel project.
4. Promote the default branch to production once preview deployments look correct.
