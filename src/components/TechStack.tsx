"use client";

import { motion } from "framer-motion";
import { Cpu, Layout, PenTool, Server } from "lucide-react";

export default function TechStack() {
  const techStack = [
    {
      category: "Frontend",
      icon: <Layout size={28} />,
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "Framer Motion",
      ],
      gradient: "from-blue-500 to-cyan-400",
      iconColor: "text-blue-500",
    },
    {
      category: "Backend",
      icon: <Server size={28} />,
      items: ["Node.js", "NestJS", "PostgreSQL", "Python", "FastAPI", "Redis"],
      gradient: "from-emerald-500 to-teal-400",
      iconColor: "text-emerald-500",
    },
    {
      category: "DevOps",
      icon: <Cpu size={28} />,
      items: ["Docker", "GitHub Actions", "Nginx", "Vercel", "AWS", "Linux"],
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
  return (
    <section
      id="techstack"
      className="py-24 px-4 relative overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Trang trí nền (Background Decor) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-24 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-24 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
              My Skills
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 text-slate-900 dark:text-white tracking-tight">
              Tech{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
                Expertise
              </span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mt-4 text-lg">
              Utilizing the most advanced technologies to create optimal and
              sophisticated digital products.
            </p>
          </motion.div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div
                className={`absolute -inset-0.5 bg-linear-to-r ${stack.gradient} rounded-3xl blur opacity-20 group-hover:opacity-70 transition duration-500`}
              ></div>

              <div className="relative h-full bg-white dark:bg-slate-900 p-8 rounded-4xl border border-slate-100 dark:border-slate-800 flex flex-col items-center shadow-xl shadow-slate-200/50 dark:shadow-none">
                {/* Icon Container với hiệu ứng xoay nhẹ */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl `group-hover:rotate-10 transition-transform duration-300 border border-slate-100 dark:border-slate-700">
                    <div className="w-10 h-10 text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {stack.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold mb-6 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {stack.category}
                </h4>

                {/* Skills Badge Cloud */}
                <div className="flex flex-wrap justify-center gap-2">
                  {stack.items.map((item, i) => (
                    <span
                      key={i}
                      className="text-[11px] uppercase tracking-wider font-bold py-1 px-3 bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 rounded-lg border border-transparent group-hover:border-blue-500/20 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer TechStack */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400 italic">
            And many other supporting libraries/tools depending on the project
            requirements...
          </p>
        </div>
      </div>
    </section>
  );
}
