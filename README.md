# ShuangShuang Site

Apple-style single-page product site for the ShuangShuang Android app.

## Stack

- Next.js App Router
- TypeScript
- Framer Motion
- Static assets only

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run lint
npm run build
```

## Deploy to Vercel

This repo is designed to deploy directly on Vercel with no extra environment variables.

Recommended settings:

- Framework Preset: `Next.js`
- Root Directory: `/`
- Build Command: `npm run build`
- Output Directory: `.next`

## Assets

All screenshots and brand graphics live under `public/site-assets/`.

The current page uses real screenshots exported from the Android app, then framed in the web layer rather than composited into static mockups.
