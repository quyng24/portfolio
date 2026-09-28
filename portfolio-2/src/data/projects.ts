import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "robot-builder",
    slug: "3d-robot-builder",
    name: "Forge — 3D Robot Builder",
    tagline: "A real-time robot configurator rendered entirely in WebGL.",
    description:
      "An interactive product configurator that lets customers assemble a custom robot from swappable limbs, chassis, and finishes, with real-time pricing and instant photoreal preview.",
    role: "Lead Frontend & 3D Engineer",
    year: "2024",
    tech: ["Next.js", "React Three Fiber", "Zustand", "GLSL", "Rapier"],
    link: "",
    repo: "https://github.com/quyng24/robot_builder",
    featured: true,
    caseStudy: {
      problem:
        "Our client, a robotics hardware startup, sold modular robot kits through static product photos and a 40-field order form. Customers couldn't visualize combinations before buying, driving a 68% cart abandonment rate and a steady stream of costly post-purchase part-swap requests.",
      solution:
        "I designed and built a real-time 3D configurator using React Three Fiber. Customers assemble a robot piece-by-piece from a library of interchangeable parts, with live pricing, physically-based materials, and a physics-driven idle animation that keeps the model feeling alive. Configuration state is fully shareable via URL so customers could send builds to teammates for approval.",
      challenges: [
        "Streaming 140+ high-poly GLTF part variants without blocking the main thread — solved with a custom priority-based asset loader and Draco compression, cutting initial payload by 78%.",
        "Keeping frame rate stable at 60fps on mid-tier mobile GPUs while ray-marching subtle contact shadows — mitigated with a baked-shadow fallback tier detected via a runtime GPU benchmark.",
        "Synchronizing physics-driven part placement with exact snap points without visible jitter, requiring a custom constraint solver on top of Rapier.",
      ],
      result:
        "Within the first quarter post-launch, cart abandonment dropped from 68% to 31%, average session time on the product page increased 4.1x, and post-purchase part-swap support tickets fell by 52%.",
      metrics: [
        { value: "-37pt", label: "Cart abandonment" },
        { value: "4.1x", label: "Time on page" },
        { value: "-52%", label: "Support tickets" },
        { value: "60fps", label: "On mid-tier mobile" },
      ],
    },
  },
  {
    id: "lingohub-app",
    slug: "lingohub-english-learning",
    name: "LingoHub — Gamified English Learning",
    tagline: "A platform for learning English through games and real-life communication scenarios.",
    description: "An interactive learning app that helps users acquire vocabulary daily through mini-games and hone their reflexes by role-playing in real-life scenarios, such as at a restaurant, airport, or workplace.",
    role: "Fullstack Developer",
    year: "2026",
    tech: ["NextJS", "FastAPI", "Socket.io", "PortgreSQL",],
    link: "",
    repo: "https://github.com/quyng24/lingo_hub",
    featured: true,
    caseStudy: {
      problem: "English learners often quickly lose motivation with traditional vocabulary learning methods (such as static flashcards). They lack an environment that simulates real-life contexts for applying vocabulary, leading to rote memorization, rapid forgetting, and an inability to respond naturally in real-world communication.",
      solution: "I built LingoHub around the core concept of gamification. The app offers real-time competitive games for vocabulary learning and a role-play system that simulates real-life situations. It utilizes AI for speech recognition, pronunciation scoring, and the generation of unscripted conversations, giving learners the feeling of speaking with a native speaker.",
      challenges: [
        "Synchronized multiplayer game states in real-time with low latency by optimizing Socket.io events and using Redis for temporary data caching.",
        "Developed an efficient Spaced Repetition algorithm for 'Daily Vocab,' requiring the creation of a custom calculation module based on individual Ebbinghaus forgetting curves.",
        "Optimized speech recognition API latency to ensure smooth application performance, even on low-end mobile devices."
      ],
      result: "",
      metrics: []
    }
  },
  {
    id: "svelte-lab-showcase",
    slug: "svelte-lab",
    name: "Svelte Lab — Mini Projects Showcase",
    tagline: "A space showcasing experimental projects and interactive UI components.",
    description: "A gallery of small projects, tools, and UI/UX effects built entirely with Svelte. Users can click on individual project cards to enter a sandbox environment and interact directly with the products.",
    role: "Frontend Developer & UI/UX Designer",
    year: "2025",
    tech: ["SvelteKit", "Tailwind CSS", "Vite", "GSAP", "Markdown"],
    link: "",
    repo: "https://github.com/quyng24/project_sumary",
    featured: false,
    caseStudy: {
      problem: "As a developer who frequently creates small projects—such as mini-tools, UI clones, and animation effects—to hone my skills, I find that creating separate repositories and deployment pipelines for each project is extremely time-consuming. It is also inconvenient for clients and recruiters to navigate through dozens of different links just to evaluate my capabilities.",
      solution: "I designed 'Svelte Lab' as a monorepo application using SvelteKit. The homepage functions as a visual encyclopedia featuring project cards. Each card links to a dynamic route (e.g., `/lab/music-player`, `/lab/kanban-board`), providing a standalone space to test the project, accompanied by the source code and documentation explaining its functionality right alongside it.",
      challenges: [
        "Manage state and CSS across more than 20 distinct projects within a single application without conflicts—leveraging Svelte's native Scoped CSS mechanism and creating independent custom stores for each module.",
        "Maintain lightning-fast load times as the number of projects grows—utilizing SvelteKit's automatic code splitting and lazy loading techniques for components involving WebGL or resource-intensive animations.",
        "Develop a custom Markdown parser to automatically render documentation for each mini-project based on its README file."
      ],
      result: "Svelte Lab cut my setup time by 85% when launching and publishing a new coding experiment. The site achieved a perfect 100/100 score on Google Lighthouse for performance and became an impressive highlight in my portfolio, landing me four interview invitations from major tech companies.",
      metrics: [
        { value: "20+", label: "Integrated small project" },
        { value: "-85%", label: "New project setup time" },
        { value: "100", label: "Lighthouse Performance Score" },
      ]
    }
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
export const caseStudyProject = projects.find((project) => project.caseStudy);
