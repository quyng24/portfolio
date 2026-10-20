"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  Activity,
} from "lucide-react";
import { caseStudyProject } from "@/data/projects";
import { GithubIcon } from "@/components/ui/icons";
import { Tag } from "@/components/ui/tag";

export function CaseStudyInteractive() {
  const [activeTab, setActiveTab] = useState<
    "architecture" | "challenges" | "metrics"
  >("architecture");

  if (!caseStudyProject?.caseStudy) return null;
  const { name, tagline, tech, link, repo, caseStudy } = caseStudyProject;

  return (
    <div className="mt-12 flex flex-col gap-10">
      {/* Header Info - Borderless with subtle hairline */}
      <div className="flex flex-col gap-6 border-b border-white/6 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent-text mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
            <span>Featured Case Study // {name}</span>
          </div>
          <h3 className="text-3xl font-medium tracking-tight text-white gradient-heading sm:text-4xl">
            {tagline}
          </h3>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-accent px-5 py-2.5 text-xs font-medium text-white shadow-[0_0_20px_-4px_rgba(94,106,210,0.6)] transition-all hover:bg-[#6875e5] active:scale-[0.98]"
            >
              <span>Launch App</span>
              <ArrowUpRight size={14} />
            </a>
          ) : null}
          {repo ? (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-2.5 text-xs font-medium text-text transition-all hover:border-white/20 hover:bg-white/8 hover:text-white"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>
          ) : null}
        </div>
      </div>

      {/* Interactive Sub-Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-white/6 pb-3">
        <button
          onClick={() => setActiveTab("architecture")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
            activeTab === "architecture"
              ? "bg-white/10 text-white shadow-sm border border-white/15"
              : "text-text-muted hover:bg-white/4 hover:text-white border border-transparent"
          }`}
        >
          <Layers
            size={13}
            className={activeTab === "architecture" ? "text-accent-text" : ""}
          />
          <span>01. Architecture &amp; Solution</span>
        </button>

        <button
          onClick={() => setActiveTab("challenges")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
            activeTab === "challenges"
              ? "bg-white/10 text-white shadow-sm border border-white/15"
              : "text-text-muted hover:bg-white/4 hover:text-white border border-transparent"
          }`}
        >
          <Cpu
            size={13}
            className={activeTab === "challenges" ? "text-accent-text" : ""}
          />
          <span>02. Engineering Challenges</span>
        </button>

        {caseStudy.metrics ? (
          <button
            onClick={() => setActiveTab("metrics")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              activeTab === "metrics"
                ? "bg-white/10 text-white shadow-sm border border-white/15"
                : "text-text-muted hover:bg-white/4 hover:text-white border border-transparent"
            }`}
          >
            <Activity
              size={13}
              className={activeTab === "metrics" ? "text-accent-text" : ""}
            />
            <span>03. Impact &amp; Metrics</span>
          </button>
        ) : null}
      </div>

      {/* Dynamic Tab Content - Clean borderless typography */}
      {activeTab === "architecture" && (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-text-faint">
              The Problem
            </span>
            <p className="text-base leading-relaxed text-text-muted">
              {caseStudy.problem}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-accent-text">
              The Architectural Solution
            </span>
            <p className="text-base leading-relaxed text-text-muted">
              {caseStudy.solution}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {tech.map((t) => (
                <Tag key={t} variant="accent">
                  {t}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "challenges" && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {caseStudy.challenges.map((challenge, index) => (
            <div
              key={challenge}
              className="group flex flex-col justify-between pt-5 border-t border-white/8 hover:border-accent/40 transition-colors"
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-accent-text">
                  Challenge 0{index + 1}
                </span>
                <p className="text-sm leading-relaxed text-text-muted group-hover:text-text transition-colors">
                  {challenge}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 font-mono text-[10px] text-emerald-400">
                <CheckCircle2 size={12} />
                <span>Resolved in Production</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "metrics" && caseStudy.metrics && (
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {caseStudy.metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col gap-1 border-t border-white/8 pt-4"
            >
              <span className="font-sans text-3xl font-medium tracking-tight gradient-accent sm:text-4xl">
                {metric.value}
              </span>
              <span className="text-xs text-text-muted leading-snug">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
