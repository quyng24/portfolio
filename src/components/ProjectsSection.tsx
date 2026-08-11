"use client";

import { useEffect, useState } from "react";
import CaseStudyModal from "./CaseStudyModal";
import ProjectCard, { Project } from "./ProjectCard";
import { projects } from "@/stores/data_mock";

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const openCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeCaseStudy = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-slate-50/30 dark:bg-slate-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 blur-[120px] -z-10" />

        {/* Header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Projects <span className="text-blue-600">Featured</span>
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg italic">
            &quot;Below are some of the representative projects that I have
            dedicated a lot of effort to developing.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onViewCaseStudy={() => openCaseStudy(project)}
            />
          ))}
        </div>

        <CaseStudyModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeCaseStudy}
        />
      </div>
    </section>
  );
};
