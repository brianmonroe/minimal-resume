# Resume (Astro + Tailwind)

A minimal, clean, data-driven resume/portfolio page with print-friendly PDF support.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL Astro prints (usually http://localhost:4321).

## Where to edit content

All content lives in `src/data/`:

- `profile.ts`
- `experience.ts`
- `education.ts`
- `projects.ts`
- `volunteer.ts`
- `cta.ts`

## Print / Save as PDF

Use the **Print / Save PDF** button in the header, or your browser’s print dialog:

- Destination: **Save as PDF**
- Paper: **Letter**
- Margins: **Default** (works well with the built-in print CSS)

The print stylesheet hides non-essential UI and keeps sections from splitting across pages as much as possible.
