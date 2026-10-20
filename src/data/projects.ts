import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "lingohub-app",
    slug: "lingohub-english-learning",
    name: "LingoHub",
    tagline: "Daily English micro-learning & arcade game hub powered by Spaced Repetition (SRS).",
    description:
      "A modern web application combining a 4-step micro-learning loop (Word → Phrase → Sentence → Context) with dynamic Spaced Repetition (SRS 1-3-7-14-30 days), retro typing game Word Blaster, and real-time progress tracking with Supabase.",
    image: "/images/lingohub.png",
    role: "Full-stack Developer",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Zustand"],
    link: "https://lingo-hub-lime.vercel.app",
    repo: "https://github.com/quyng24/lingo_hub",
    featured: true,
  },
  {
    id: "y2k-snapbooth",
    slug: "y2k-snapbooth",
    name: "Y2K Snapbooth",
    tagline: "Retro 4-cut photobooth with real-time camera capture & Y2K aesthetics.",
    description:
      "An in-browser photobooth application recreating Korean 4-cut photo strips with retro Y2K styling. Supports 2-cut/4-cut layouts, front/back webcam switching, countdown flash timers, retake workflow, mock camera mode, custom signatures & stickers, high-res PNG export, and automated Playwright E2E testing.",
    image: "/images/y2k-snapbooth.png",
    role: "Frontend Developer",
    year: "2026",
    tech: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Playwright",
    ],
    featured: true,
  },
  {
    id: "project-sumary",
    slug: "project-sumary",
    name: "Project Summary",
    tagline: "Interactive interface experiments & physics mini-games built with Svelte 5 (Runes).",
    description:
      "A curated collection of creative web experiments and mini-games built on Svelte 5 and SvelteKit — featuring mechanical flip clocks, 2D physics game loops (Platformer, Tetris), SVG planetary motion, and a formula-driven Excel Web spreadsheet.",
    image: "/images/project-sumary.png",
    role: "Frontend Developer",
    year: "2026",
    tech: ["Svelte 5", "SvelteKit", "TypeScript", "Tailwind CSS", "Vite", "Canvas 2D"],
    link: "https://project-sumary.vercel.app",
    repo: "https://github.com/quyng24/project_sumary",
    featured: true,
  },
  {
    id: "taekwondo-management",
    slug: "taekwondo-club-management",
    name: "Taekwondo Club Management System",
    tagline: "Attendance and tuition management for a Taekwondo club.",
    description:
      "A facial-recognition attendance application with support for complex tuition-fee calculations and student management, deployed with FastAPI backend and PostgreSQL.",
    image: "/images/taekwondo-thumbnail.png",
    role: "Full-stack Developer",
    year: "2025",
    tech: ["Python", "FastAPI", "PostgreSQL", "Next.js"],
    link: "https://panda-taekwondo.vercel.app",
  },
  {
    id: "robot-builder",
    slug: "robot-builder",
    name: "Robot Builder",
    tagline: "Modular 3D robot builder & real-time Rapier physics simulator (In Development).",
    description:
      "A high-performance browser-based platform for designing modular robots and simulating them with rigid-body dynamics, revolute joint wheel motors, and raycasting distance sensors using Next.js 16, React Three Fiber, and Rapier Physics. Currently in active development (Core Simulation phase).",
    image: "/images/robot-builder.png",
    role: "Lead Frontend & 3D Engineer",
    year: "2026",
    tech: [
      "Next.js",
      "TypeScript",
      "React Three Fiber",
      "Three.js",
      "Rapier Physics",
      "Zustand",
      "Tailwind CSS",
    ],
    repo: "https://github.com/quyng24/robot-builder",
    featured: true,
    caseStudy: {
      problem:
        "Building interactive 3D robotics in the browser requires pairing CAD-style assembly controls (gizmos, hierarchy trees, property inspectors) with high-frequency physics simulations without causing catastrophic React re-renders or frame drops.",
      solution:
        "Engineered a decoupled dual-state architecture: static robot specifications reside in a reactive Zustand store, while the 60Hz physics runtime operates inside an uncoupled SimulationState engine, streaming telemetry to the HUD at 60fps.",
      challenges: [
        "Decoupling static CAD configuration from 60Hz Rapier physics ticks to prevent React re-render thrashing.",
        "Implementing constraint physics with Revolute Joint wheel motors and raycast distance sensors with automated collision braking.",
        "Managing collision group filtering across 5 isolated layers (Ground, Chassis, Wheels, Obstacles, and Sensor Rays).",
      ],
      result:
        "A responsive 60fps in-browser 3D robotics sandbox featuring interactive component gizmos, transport simulation controls (Run/Pause/Step/Reset), telemetry HUD, and modular JSON schema export/import.",
      metrics: [
        { value: "60 FPS", label: "Fixed-timestep Rapier physics simulation" },
        { value: "5 Layers", label: "Collision filtering groups" },
        { value: "0 Rerenders", label: "React UI re-renders during 60Hz physics loop" },
        { value: "Wasm", label: "Client-side Rapier physics engine" },
      ],
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const caseStudyProject = projects.find((project) => project.caseStudy);
