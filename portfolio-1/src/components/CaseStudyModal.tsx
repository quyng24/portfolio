import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Target, Lightbulb, BarChart3 } from "lucide-react";
import Image from "next/image";
import { Project } from "./ProjectCard";

interface ModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({
  project,
  isOpen,
  onClose,
}: ModalProps) {
  const fallbackImage =
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop";
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-100 cursor-pointer"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-white dark:bg-slate-900 z-101 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-red-500 hover:text-white transition-all z-10"
            >
              <X size={24} />
            </button>

            <div className="md:w-2/5 relative h-64 md:h-full bg-slate-200">
              <Image
                src={project.image || fallbackImage}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent p-10 flex flex-col justify-end">
                <h2 className="text-3xl font-black text-white mb-4">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs rounded-lg underline-offset-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:w-3/5 p-8 md:p-16 overflow-y-auto custom-scrollbar bg-white dark:bg-slate-900">
              <div className="space-y-12">
                <section>
                  <div className="flex items-center gap-3 mb-4 text-orange-500">
                    <Target size={24} />
                    <h3 className="text-xl font-bold uppercase tracking-wider">
                      The Problem
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg italic">
                    &quot;{project.caseStudyContent.problem}&quot;
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4 text-blue-500">
                    <Lightbulb size={24} />
                    <h3 className="text-xl font-bold uppercase tracking-wider">
                      My Solution
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.caseStudyContent.solution}
                  </p>
                </section>

                <section className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl">
                  <h3 className="text-xl font-bold mb-6">
                    Key Implementations
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.caseStudyContent.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="text-emerald-500 mt-1 shrink-0"
                        />
                        <span className="text-slate-700 dark:text-slate-300 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4 text-emerald-500">
                    <BarChart3 size={24} />
                    <h3 className="text-xl font-bold uppercase tracking-wider">
                      The Outcome
                    </h3>
                  </div>
                  <div className="p-6 border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/10">
                    <p className="text-slate-700 dark:text-slate-300 font-medium">
                      {project.caseStudyContent.results}
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
