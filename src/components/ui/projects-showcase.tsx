"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, FileText } from "lucide-react";
import { projects } from "@/data/projects";
import { GithubIcon } from "@/components/ui/icons";
import { Tag } from "@/components/ui/tag";
import type { Project } from "@/types";

export function ProjectsShowcase() {
  const [selectedId, setSelectedId] = useState<string>(projects[0].id);

  const activeProject: Project =
    projects.find((p) => p.id === selectedId) || projects[0];

  return (
    <div className="mt-12 flex flex-col gap-10">
      {/* Interactive Project Switcher Bar */}
      <div className="flex overflow-x-auto pb-2 scrollbar-none border-b border-white/6">
        <div className="flex items-center gap-2">
          {projects.map((project, idx) => {
            const isActive = project.id === activeProject.id;
            return (
              <button
                key={project.id}
                onClick={() => setSelectedId(project.id)}
                className={`group flex items-center gap-2.5 whitespace-nowrap rounded-lg px-4 py-2 text-xs font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-white/10 text-white shadow-sm border border-white/15"
                    : "text-text-muted hover:bg-white/4 hover:text-white border border-transparent"
                }`}
              >
                <span
                  className={`font-mono text-[10px] ${
                    isActive ? "text-accent-text" : "text-text-faint"
                  }`}
                >
                  0{idx + 1}
                </span>
                <span>{project.name}</span>
                {project.featured ? (
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Spotlight Layout - Borderless Fluid 2-Column */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1.1fr] lg:items-center lg:gap-14">
        {/* Left: Project Details */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 font-mono text-xs text-text-faint">
            <span className="text-accent-text font-medium">
              {activeProject.role}
            </span>
            <span>&middot;</span>
            <span>
              {activeProject.year === "—" ? "Production" : activeProject.year}
            </span>
          </div>

          <div>
            <h3 className="text-3xl font-medium tracking-tight text-white gradient-heading sm:text-4xl">
              {activeProject.name}
            </h3>
            <p className="mt-2 text-xs text-accent-text font-mono sm:text-sm">
              {activeProject.tagline}
            </p>
          </div>

          <p className="text-sm leading-relaxed text-text-muted sm:text-base">
            {activeProject.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-text-faint">
              Architecture &amp; Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {activeProject.tech.map((t) => (
                <Tag key={t} variant="accent">
                  {t}
                </Tag>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {activeProject.link ? (
              <a
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-accent px-5 py-2.5 text-xs font-medium text-white shadow-[0_0_20px_-4px_rgba(94,106,210,0.6)] transition-all hover:bg-[#6875e5] active:scale-[0.98]"
              >
                <span>Live Preview</span>
                <ArrowUpRight size={14} />
              </a>
            ) : null}

            {activeProject.repo ? (
              <a
                href={activeProject.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-5 py-2.5 text-xs font-medium text-text transition-all hover:border-white/20 hover:bg-white/8 hover:text-white"
              >
                <GithubIcon size={14} />
                <span>Source Code</span>
              </a>
            ) : null}

            {activeProject.caseStudy ? (
              <a
                href="#case-study"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted transition-colors hover:text-accent-text"
              >
                <FileText size={13} />
                <span>Read Full Case Study</span>
              </a>
            ) : null}
          </div>
        </div>

        {/* Right: Immersive Preview Showcase */}
        <div className="relative group">
          {/* Ambient Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-accent/15 blur-2xl opacity-50 transition-opacity duration-300 group-hover:opacity-80"
          />

          <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d0e] shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
            {activeProject.image ? (
              <Image
                src={activeProject.image}
                alt={`${activeProject.name} showcase`}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              /* Generative Abstract Graphic Mockup for text projects */
              <div className="flex h-full w-full flex-col justify-between p-6 bg-linear-to-br from-white/3 to-transparent font-mono">
                <div className="flex items-center justify-between text-xs text-text-faint">
                  <span>|| {activeProject.id}</span>
                  <span className="flex items-center gap-1.5 text-accent-text">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
                    Interactive App
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xl text-white font-sans font-medium">
                    {activeProject.name}
                  </span>
                  <span className="text-xs text-text-muted">
                    {activeProject.tagline}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-text-faint">
                  <span>Stack: {activeProject.tech.join(" · ")}</span>
                </div>
              </div>
            )}

            {/* Floating Top Right Tag */}
            <div className="absolute top-3 right-3 rounded-full border border-white/10 bg-[#08090a]/80 backdrop-blur-md px-3 py-1 font-mono text-[10px] text-text-muted uppercase tracking-wider">
              {activeProject.year}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
