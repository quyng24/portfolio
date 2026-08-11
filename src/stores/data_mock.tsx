import { Cpu, Layout, PenTool, Server } from "lucide-react";

export const projects = [
    {
      image: "/images/favicon.ico",
      title: "Taekwondo Club Management System",
      description:
        "Facial recognition application for automated student attendance tracking and handling complex tuition fee logic.",
      techStack: ["Python", "FastAPI", "PostgreSQL", "Next.Js"],
      demoLink: "https://panda-taekwondo.vercel.app",
      githubLink: "",
      caseStudyContent: {
        problem: "string",
        solution: "",
        features: ["1", "2"],
        results: "",
      },
    },
    {
      image: "/images/project-sumary.png",
      title: "Project Sumary",
      description: "The website provides statistics for a few small products.",
      techStack: ["NodeJS", "NestJS", "VueJs", "PostgreSQL"],
      demoLink: "https://project-sumary.vercel.app",
      githubLink: "",
      caseStudyContent: {
        problem: "string",
        solution: "",
        features: ["1", "2"],
        results: "",
      },
    },
    {
      image: "",
      title: "Mobile Fitness App",
      description:
        "Ứng dụng theo dõi sức khỏe và lịch trình tập luyện thời gian thực.",
      techStack: ["React Native", "Firebase", "Supabase"],
      demoLink: "#",
      githubLink: "",
      caseStudyContent: {
        problem: "string",
        solution: "",
        features: ["1", "2"],
        results: "",
      },
    },
  ];

export const techStack = [
    {
      category: "Frontend",
      icon: <Layout size={28} />,
      items: [
        "React",
        "Next.js",
        "Svelte",
        "TypeScript",
        "Tailwind CSS",
        "React Query",
        "Framer Motion",
        "Jet Compose",
      ],
      gradient: "from-blue-500 to-cyan-400",
      iconColor: "text-blue-500",
    },
    {
      category: "Backend",
      icon: <Server size={28} />,
      items: ["Node.js", "NestJS", "PostgreSQL", "Python", "FastAPI", "Kotlin"],
      gradient: "from-emerald-500 to-teal-400",
      iconColor: "text-emerald-500",
    },
    {
      category: "DevOps",
      icon: <Cpu size={28} />,
      items: ["Docker", "GitHub Actions", "Nginx", "Vercel", "Linux"],
      gradient: "from-orange-500 to-amber-400",
      iconColor: "text-orange-500",
    },
    {
      category: "Design & Tools",
      icon: <PenTool size={28} />,
      items: ["Figma", "Postman", "Git", "Supabase", "Firebase", "Jest"],
      gradient: "from-purple-500 to-pink-400",
      iconColor: "text-purple-500",
    },
  ];