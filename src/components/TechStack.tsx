"use client";

import { techStack } from "@/stores/data_mock";
import { motion } from "framer-motion";

export default function TechStack() {
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
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group ${
                index === 0
                  ? "md:col-span-3"
                  : index === 1
                    ? "md:col-span-3"
                    : "md:col-span-2 lg:col-span-3"
              }`}
            >
              <div className="relative h-full bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm p-6 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-500">
                {/* Header Card */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-2xl bg-white dark:bg-slate-800 shadow-sm text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stack.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white">
                      {stack.category}
                    </h4>
                    <div
                      className={`h-1 w-8 rounded-full bg-linear-to-r ${stack.gradient}`}
                    />
                  </div>
                </div>

                {/* Tags Cloud */}
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="group/tag relative flex items-center gap-1.5 py-1.5 px-3 rounded-full 
                                bg-white dark:bg-slate-800/80 
                                text-slate-600 dark:text-slate-400 
                                text-xs font-medium border border-slate-200 dark:border-slate-700/50
                                hover:bg-blue-50 dark:hover:bg-blue-900/20 
                                hover:text-blue-600 dark:hover:text-blue-300 
                                hover:border-blue-200 dark:hover:border-blue-800
                                transition-all duration-300 cursor-default"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${stack.gradient} opacity-40 group-hover/tag:opacity-100`}
                      />
                      {item}
                    </motion.span>
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
