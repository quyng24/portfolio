import type { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", level: "core" },
  { name: "Next.js", category: "Frontend", level: "core" },
  { name: "TypeScript", category: "Frontend", level: "core" },
  { name: "Tailwind CSS", category: "Frontend", level: "core" },
  { name: "Framer Motion", category: "Frontend", level: "proficient" },
  { name: "Zustand / Redux", category: "Frontend", level: "proficient" },
  { name: "Svelte", category: "Frontend", level: "proficient" },
  { name: "Vue.js", category: "Frontend", level: "exploring" },

  // Backend
  { name: "NodeJS", category: "Backend", level: "core" },
  { name: "NestJS", category: "Backend", level: "core" },
  { name: "Python", category: "Backend", level: "core" },
  { name: "FastAPI", category: "Backend", level: "core" },
  { name: "PostgreSQL", category: "Backend", level: "core" },
  { name: "Supabase", category: "Backend", level: "core" },
  { name: "Kotlin", category: "Backend", level: "proficient" },

  // 3D & Interactive
  { name: "Three.js", category: "3D & Interactive", level: "core" },
  { name: "React Three Fiber", category: "3D & Interactive", level: "core" },
  { name: "WebGL / GLSL", category: "3D & Interactive", level: "proficient" },
  { name: "GSAP", category: "3D & Interactive", level: "proficient" },
  { name: "Rapier Physics", category: "3D & Interactive", level: "proficient" },
  { name: "Blender (asset prep)", category: "3D & Interactive", level: "exploring" },

  // Tooling & Platform
  { name: "Git / GitHub", category: "Tooling & Platform", level: "core" },
  { name: "Vercel", category: "Tooling & Platform", level: "core" },
  { name: "Playwright (E2E)", category: "Tooling & Platform", level: "proficient" },
  { name: "Docker", category: "Tooling & Platform", level: "proficient" },
  { name: "Figma", category: "Tooling & Platform", level: "proficient" },
  { name: "Postman", category: "Tooling & Platform", level: "proficient" },
  { name: "Firebase", category: "Tooling & Platform", level: "proficient" },
  { name: "CI/CD (GitHub Actions)", category: "Tooling & Platform", level: "proficient" },
];
