"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen, ArrowRight, Code2 } from "lucide-react";
import Image from "next/image";

export interface Project {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  demoLink: string;
  githubLink: string;
  caseStudyContent: {
    problem: string;
    solution: string;
    features: string[];
    results: string;
  };
}

interface ProjectCardProps {
  project: Project;
  onViewCaseStudy: () => void;
}

export default function ProjectCard({
  project,
  onViewCaseStudy,
}: ProjectCardProps) {
  const fallbackImage =
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image || fallbackImage}
          alt={project.title}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={false}
        />

        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/20 hover:bg-white text-white hover:text-slate-900 rounded-full backdrop-blur-md transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
            >
              <Code2 size={22} />
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/20 hover:bg-white text-white hover:text-slate-900 rounded-full backdrop-blur-md transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
            >
              <ExternalLink size={22} />
            </a>
          )}
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-800/50"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[10px] font-bold text-slate-400 self-center">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-800">
          <button
            onClick={(e) => {
              e.preventDefault();
              onViewCaseStudy();
            }}
            className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all group/link"
          >
            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl group-hover/link:bg-blue-600 group-hover/link:text-white transition-all duration-300">
              <BookOpen size={18} />
            </div>
            <span>View Case Study</span>
          </button>

          <motion.div
            whileHover={{ x: 5 }}
            className="text-slate-300 dark:text-slate-700"
          >
            <ArrowRight size={20} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
