# Kai Mercer — Developer Portfolio

A production-ready, editorial-style developer portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Stack

- **Next.js 16** (App Router, Server Components by default)
- **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first theme config in `src/app/globals.css`)
- **lucide-react** for iconography (plus a few custom inline SVGs for brand icons that Lucide no longer ships)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/                  Routes, root layout, metadata, sitemap/robots
  components/
    layout/             Navbar, Footer (shell chrome)
    sections/           One component per homepage section (Hero, About, ...)
    ui/                 Small reusable primitives (Reveal, Tag, Container, ...)
  data/                 All content lives here — no copy is hardcoded in JSX
  lib/                  Shared utilities (cn helper)
  types/                Shared TypeScript interfaces for the content layer
```

### Content is data-driven

Every section reads from a typed data file in `src/data/`:

| File | Powers |
| --- | --- |
| `site.ts` | Name, role, tagline, availability, contact email |
| `nav.ts` | Navbar / footer links |
| `social.ts` | Social links (GitHub, LinkedIn, X, email) |
| `stats.ts` | About section stats |
| `skills.ts` | Categorized skill badges |
| `experience.ts` | Work history timeline |
| `projects.ts` | Project showcase + the detailed case study |
| `github.ts` | Contribution graph + pinned repos |

To make this your own, edit the files in `src/data/` — the components never need to change.

### Swapping in real GitHub data

`src/data/github.ts` currently generates deterministic placeholder contribution data shaped exactly like the GitHub GraphQL API's `contributionsCollection.contributionCalendar` response. To go live:

1. Create a route handler (e.g. `src/app/api/github/route.ts`) that calls the GitHub GraphQL API with a server-side token.
2. Replace the `githubStats` export in `src/data/github.ts` with a fetch to that route (or fetch directly in the `GithubActivity` server component).
3. The `GithubStats` shape in `src/types/index.ts` is the contract — keep it and the UI keeps working unchanged.

## Design system

- **Theme tokens** live in `src/app/globals.css` under `:root` / `@theme inline` — background, surface, text, border, and a single accent color (`--color-accent`).
- **Scroll reveals** are handled by the `Reveal` client component (`src/components/ui/reveal.tsx`), a thin `IntersectionObserver` wrapper. It respects `prefers-reduced-motion`.
- Sections are separated with hairline dividers rather than boxed cards, per the editorial art direction — the only rounded, padded "panel" in the whole site is the case study block.

## Quality checks

```bash
npm run lint   # ESLint, zero warnings
npm run build  # Type-checks + production build
```

Both are clean with no errors, warnings, or TODOs.
