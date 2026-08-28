# Hubert — Engineering Portfolio

Personal portfolio, interactive CV and professional identity for an electrical engineer working across industrial systems, marine engineering, automation, software and AI.

The central narrative is:

`ELECTRICAL → INDUSTRIAL SYSTEMS → AUTOMATION → SOFTWARE → AI → INTELLIGENT SYSTEMS`

Live site: [hubert-portfolio.rocky-hake-4435.chatgpt.site](https://hubert-portfolio.rocky-hake-4435.chatgpt.site)

## Stack

- Next.js App Router-compatible architecture powered by Vinext
- React 19 and TypeScript
- Tailwind CSS 4 with a project-specific CSS design system
- CSS 3D transforms for the anomalous cube
- Cloudflare-compatible build through OpenAI Sites

The cube intentionally avoids Three.js and WebGL. It uses lightweight CSS 3D transforms, pointer interaction and a reduced-motion fallback.

## Local development

Requirements: Node.js 22.13 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

To run the built version locally:

```bash
npm run start
```

## Where to edit content

All professional content is stored in one file:

`app/data/profile.ts`

It contains:

- identity and biography,
- navigation,
- engineering stack,
- international experience,
- selected projects,
- current trajectory,
- education and certifications,
- contact details and links.

Unknown or unverified details are intentionally left empty or marked for verification. Do not publish a certification as confirmed until its scope and validity have been checked.

## Where to edit the interface

- `app/page.tsx` — page structure and section composition
- `app/globals.css` — visual system, responsive layout and animations
- `app/components/anomalous-cube.tsx` — cube geometry and pointer response
- `app/components/system-chrome.tsx` — navigation, scroll progress and reveal behaviour
- `app/layout.tsx` — metadata and social preview configuration
- `public/og.png` — Open Graph social preview image

## Changing the anomalous cube

Cube size, materials, glow, face transforms and mobile fallback are defined in `app/globals.css` under the `.cube-*` selectors. Pointer response is intentionally small and can be adjusted in `app/components/anomalous-cube.tsx`.

The animation respects `prefers-reduced-motion` and should remain lightweight. Re-test mobile performance after increasing blur, particle count or 3D complexity.

## Site URL and metadata

Copy `.env.example` to `.env.local` and set the final public origin:

```env
NEXT_PUBLIC_SITE_URL=https://hubert-portfolio.rocky-hake-4435.chatgpt.site
```

This value is used by Open Graph metadata, `robots.txt` and `sitemap.xml`.

## Deployment

The project includes `.openai/hosting.json` and is ready for OpenAI Sites hosting. It can also be deployed through a compatible Cloudflare/Vinext environment after setting `NEXT_PUBLIC_SITE_URL` to the final domain.

Before every public release, run the three quality checks above and verify the page at desktop, tablet and phone widths.
