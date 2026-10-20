# ⚡ Quicy — Developer Portfolio

A modern, high-performance developer portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**, inspired by the clean, typography-focused, dark-mode aesthetic of **Linear**.

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2-blue?logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)

---

## 🌟 Overview

This portfolio serves as a showcase of software engineering capabilities across **Frontend Architecture**, **Interactive 3D / WebGL**, **Real-time Canvas Engines**, and **Full-stack Web Applications**.

### Key Highlights
- **Linear-Inspired Design System**: Minimalist dark-mode surfaces, hairline micro-borders (`border-white/6`), subtle glow accents, and refined typography.
- **Strict Data-Driven Architecture**: All portfolio data (projects, skills, career history, site metadata) is strictly typed and decoupled into modular data files.
- **Interactive Project Switcher**: Instant switching between featured projects with live demo previews, tags, and direct repository links.
- **Deep-Dive Engineering Case Study**: Interactive 3-tab breakdown displaying system architecture, technical challenges, and real production metrics.
- **Dynamic GitHub Heatmap**: Contribution calendar and repository statistics.
- **Zero-Bloat Performance**: Prerendered as static content using Next.js Turbopack with 100% type safety.

---

## 🚀 Showcased Projects

The portfolio showcases five curated software engineering projects, ordered by completeness and technical complexity:

| # | Project | Tech Stack | Status | Highlights |
|---|---|---|---|---|
| **01** | [**LingoHub**](https://lingo-hub-lime.vercel.app) | Next.js 16, React 19, Supabase, Tailwind CSS, Zustand | **Live** | Daily English micro-learning loop (Word → Phrase → Sentence → Context) powered by Spaced Repetition (SRS 1-3-7-14-30 days), arcade typing game *Word Blaster*, and real-time database sync with Supabase. |
| **02** | [**Y2K Snapbooth**](https://y2k-snapbooth.vercel.app) | Next.js 16, React 19, Tailwind CSS, Zustand, Playwright | **MVP** | Retro 4-cut photobooth with real-time webcam capture, front/back camera switching, flash countdown timers, retro filters, dynamic signatures, stickers, and Playwright E2E automation. |
| **03** | [**Project Summary**](https://project-sumary.vercel.app) | Svelte 5 (Runes), SvelteKit, Vite, Canvas 2D, Tailwind CSS | **Live** | Creative UI lab and experimental games: 2D physics game loops (Platformer, Tetris), mechanical 3D Flip Clock, Canvas 2D particle acceleration, and Excel Web formula calculation. |
| **04** | [**Taekwondo Club Management**](https://panda-taekwondo.vercel.app) | Python, FastAPI, PostgreSQL, Next.js | **Live** | Enterprise club management platform with facial-recognition attendance scanning, complex tuition-fee calculation algorithms, and member records. |
| **05** | [**Robot Builder**](https://github.com/quyng24/robot-builder) | Next.js 16, Three.js, React Three Fiber, Rapier Physics, Zustand | **In Progress** | Modular 3D CAD designer & in-browser Rapier physics simulator (60Hz fixed timestep, Revolute Joint wheel motors, and raycast distance sensors). Featured in the Engineering Deep Dive. |

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── images/              # Project thumbnails, avatars, and visual assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout, fonts (Geist & Inter), metadata
│   │   ├── page.tsx         # Main portfolio single-page application
│   │   ├── globals.css      # Tailwind CSS v4 design tokens and theme variables
│   │   └── robots.ts / sitemap.ts
│   ├── components/
│   │   ├── layout/          # Header, navigation bar, and footer
│   │   ├── sections/        # Main sections (Hero, About, Projects, Case Study, Skills, Experience, Contact)
│   │   └── ui/              # Interactive primitives (ProjectSwitch, CaseStudyTabs, Heatmap, Reveal, Tag)
│   ├── data/                # Typed data-source files (Single Source of Truth)
│   │   ├── site.ts          # Bio, contact, availability, metadata
│   │   ├── projects.ts      # Project inventory & case study deep-dive
│   │   ├── skills.ts        # Categorized skill tree (Frontend, Backend, 3D, Tooling)
│   │   ├── experience.ts    # Career journey & achievements
│   │   ├── github.ts        # Heatmap calendar & top repositories
│   │   ├── social.ts        # Social links & platforms
│   │   └── stats.ts         # High-level developer statistics
│   ├── lib/                 # Formatting, animation, and helper utilities
│   └── types/               # TypeScript interfaces & contract definitions
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Motion & Transitions**: CSS Keyframe Utilities & Tailored Transition Hooks

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.18+ or later
- **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/quyng24/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🔧 Quality & Build Verification

Run the following commands to check code style and verify production builds:

```bash
# Run ESLint validation
npm run lint

# Generate production bundle with Turbopack
npm run build

# Preview production build locally
npm run start
```

---

## 📝 Customizing Portfolio Data

All portfolio content is decoupled from components. Update the files in `src/data/` to customize:

- **Site Information**: [`src/data/site.ts`](src/data/site.ts) — Name, bio, email, location, availability status.
- **Projects**: [`src/data/projects.ts`](src/data/projects.ts) — Add/edit project descriptions, tags, screenshots, live links, and case studies.
- **Skills**: [`src/data/skills.ts`](src/data/skills.ts) — Add technical skills by category (`Frontend`, `Backend`, `3D & Interactive`, `Tooling & Platform`).
- **Experience**: [`src/data/experience.ts`](src/data/experience.ts) — Employment timeline and milestones.
- **Socials**: [`src/data/social.ts`](src/data/social.ts) — GitHub, LinkedIn, X, and email links.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

Designed & developed by **[Quicy](https://github.com/quyng24)**.
