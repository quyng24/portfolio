# Developer Portfolio

A single portfolio application built with Next.js App Router, TypeScript, and Tailwind CSS v4. The architecture and typed, data-driven content are based on `portfolio-2`; the portrait and project visuals are reused from `portfolio-1`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```text
src/
  app/                  App Router pages, metadata, and global styles
  components/
    layout/             Navbar and footer
    sections/           Homepage sections
    ui/                 Reusable UI primitives
  data/                 Typed portfolio content
  lib/                  Shared utilities
  types/                Content contracts
public/
  images/               Portfolio portrait, project previews, and branding
```

Update the modules in `src/data/` to edit the site content. Project images are stored in `public/images/` and referenced by each project entry. GitHub activity in `src/data/github.ts` is deterministic sample data, not live account activity.

## Quality checks

```bash
npm run lint
npm run build
```
