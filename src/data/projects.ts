import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "robot-builder",
    slug: "robot-builder",
    name: "Robot Builder",
    tagline: "Design, program, and test 3D robots in the browser.",
    description:
      "Design robots in 3D, program their behaviors, and test them in an in-browser simulation.",
    image: "/images/robot-builder.png",
    role: "Full-stack Developer",
    year: "—",
    tech: ["Next.js", "FastAPI", "Supabase"],
    repo: "https://github.com/quyng24/robot-builder",
    featured: true,
    caseStudy: {
      problem:
        "Designing a robot, defining how it behaves, and checking the result are closely connected tasks.",
      solution:
        "Robot Builder brings 3D design, behavior programming, and simulation together in the browser.",
      challenges: [
        "Designing robots in a 3D environment.",
        "Programming robot behavior.",
        "Testing behavior through simulation.",
      ],
      result:
        "A browser-based workflow for designing, programming, and testing robots.",
    },
  },
  {
    id: "lingohub-app",
    slug: "lingohub-english-learning",
    name: "LingoHub",
    tagline: "Learn English through games and real-life scenarios.",
    description:
      "An interactive learning app for daily vocabulary practice, mini-games, and role-play in real-life scenarios.",
    role: "Full-stack Developer",
    year: "2026",
    tech: ["Next.js", "FastAPI", "Socket.io", "PostgreSQL"],
    repo: "https://github.com/quyng24/lingo_hub",
    featured: true,
  },
  {
    id: "project-sumary",
    slug: "project-sumary",
    name: "Project Sumary",
    tagline: "A dashboard for product statistics.",
    description:
      "A website that brings statistics from several small products into one place.",
    image: "/images/project-sumary.png",
    role: "Full-stack Developer",
    year: "—",
    tech: ["Node.js", "NestJS", "Vue.js", "PostgreSQL"],
    link: "https://project-sumary.vercel.app",
    repo: "https://github.com/quyng24/project_sumary",
  },
  {
    id: "taekwondo-management",
    slug: "taekwondo-club-management",
    name: "Taekwondo Club Management System",
    tagline: "Attendance and tuition management for a Taekwondo club.",
    description:
      "A facial-recognition attendance application with support for complex tuition-fee calculations.",
    image: "/images/taekwondo-thumbnail.png",
    role: "Full-stack Developer",
    year: "—",
    tech: ["Python", "FastAPI", "PostgreSQL", "Next.js"],
    link: "https://panda-taekwondo.vercel.app",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const caseStudyProject = projects.find((project) => project.caseStudy);
