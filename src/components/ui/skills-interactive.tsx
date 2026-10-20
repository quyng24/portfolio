"use client";

import { useState } from "react";
import { skills } from "@/data/skills";
import type { SkillCategory } from "@/types";
import { Terminal } from "lucide-react";

const allCategories: ("All" | SkillCategory)[] = [
  "All",
  "Frontend",
  "3D & Interactive",
  "Backend",
  "Tooling & Platform",
];

export function SkillsInteractive() {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | SkillCategory
  >("All");
  const [selectedLevel, setSelectedLevel] = useState<
    "all" | "core" | "proficient"
  >("all");
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory =
      selectedCategory === "All" || skill.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "all" || skill.level === selectedLevel;
    return matchesCategory && matchesLevel;
  });

  return (
    <div className="mt-12 flex flex-col gap-8">
      {/* Category Pills & Level Toggles - Borderless Linear Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/6 pb-4">
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-1.5">
          {allCategories.map((cat) => {
            const count =
              cat === "All"
                ? skills.length
                : skills.filter((s) => s.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150 ${
                  isSelected
                    ? "bg-white/10 text-white shadow-sm border border-white/15"
                    : "text-text-muted hover:bg-white/4 hover:text-white border border-transparent"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`font-mono text-[10px] ${
                    isSelected ? "text-accent-text" : "text-text-faint"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Level Filters */}
        <div className="flex items-center gap-1 bg-white/2 p-1 rounded-lg border border-white/6">
          <button
            onClick={() => setSelectedLevel("all")}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
              selectedLevel === "all"
                ? "bg-white/10 text-white"
                : "text-text-muted hover:text-white"
            }`}
          >
            All Levels
          </button>
          <button
            onClick={() => setSelectedLevel("core")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
              selectedLevel === "core"
                ? "bg-accent/20 text-accent-text border border-accent/30"
                : "text-text-muted hover:text-white"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>Core Stack</span>
          </button>
        </div>
      </div>

      {/* Interactive Skills Grid */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filteredSkills.map((skill) => {
          const isCore = skill.level === "core";
          const isSelected = activeSkill === skill.name;

          return (
            <div
              key={skill.name}
              onMouseEnter={() => setActiveSkill(skill.name)}
              onMouseLeave={() => setActiveSkill(null)}
              className={`group relative flex items-center justify-between rounded-xl px-3.5 py-3 transition-all duration-150 cursor-pointer ${
                isCore
                  ? "bg-white/25 hover:bg-white/6 border border-white/6 hover:border-white/15"
                  : "bg-transparent hover:bg-white/3 border border-transparent hover:border-white/8"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                    isCore
                      ? "bg-accent shadow-[0_0_6px_var(--color-accent)] group-hover:scale-125"
                      : "bg-white/30 group-hover:bg-white/60"
                  }`}
                />
                <span className="text-xs font-medium text-text group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>

              <span className="font-mono text-[9px] uppercase tracking-wider text-text-faint opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.level}
              </span>
            </div>
          );
        })}
      </div>

      {/* Live Stack Terminal Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/6 pt-4 font-mono text-xs text-text-muted">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-accent-text" />
          <span>Active Focus:</span>
          <span className="text-white">
            Next.js 16 + React 19 + Three.js + Tailwind v4
          </span>
        </div>
        <div className="flex items-center gap-3 text-text-faint text-[11px]">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Core
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" /> Proficient
          </span>
        </div>
      </div>
    </div>
  );
}
