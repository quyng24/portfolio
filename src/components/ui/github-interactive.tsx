"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  GitFork,
  Star,
  GitCommit,
  Flame,
  Trophy,
} from "lucide-react";
import { githubStats } from "@/data/github";
import type { ContributionDay } from "@/types";

function getIntensity(count: number) {
  if (count <= 0) return "bg-white/[0.04] hover:bg-white/20";
  if (count <= 2) return "bg-accent/35 hover:bg-accent/50";
  if (count <= 5) return "bg-accent/60 hover:bg-accent/75";
  if (count <= 8) return "bg-accent/85 hover:bg-accent";
  return "bg-accent shadow-[0_0_8px_var(--color-accent)] hover:brightness-125";
}

export function GithubInteractive() {
  const {
    username,
    totalContributions,
    currentStreak,
    longestStreak,
    weeks,
    topRepos,
  } = githubStats;

  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);

  return (
    <div className="mt-12 flex flex-col gap-10">
      {/* Borderless Metrics Strip */}
      <div className="grid grid-cols-1 gap-6 border-b border-white/6 pb-8 sm:grid-cols-3">
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/3 border border-white/8 text-accent-text">
            <GitCommit size={20} />
          </span>
          <div className="flex flex-col">
            <span className="font-sans text-2xl font-medium tracking-tight text-white sm:text-3xl">
              {totalContributions.toLocaleString()}
            </span>
            <span className="text-xs text-text-muted">
              Total commits this year
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/3 border border-white/8 text-amber-400">
            <Flame size={20} />
          </span>
          <div className="flex flex-col">
            <span className="font-sans text-2xl font-medium tracking-tight text-white sm:text-3xl">
              {currentStreak} days
            </span>
            <span className="text-xs text-text-muted">Active streak</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/3 border border-white/8 text-purple-400">
            <Trophy size={20} />
          </span>
          <div className="flex flex-col">
            <span className="font-sans text-2xl font-medium tracking-tight text-white sm:text-3xl">
              {longestStreak} days
            </span>
            <span className="text-xs text-text-muted">
              Longest continuous streak
            </span>
          </div>
        </div>
      </div>

      {/* Contribution Calendar with Live Tooltip */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-mono text-text-faint">
            {hoveredDay ? (
              <span className="text-white font-medium">
                {hoveredDay.count} contribution
                {hoveredDay.count === 1 ? "" : "s"} on {hoveredDay.date}
              </span>
            ) : (
              <span>Hover over any day to inspect commits</span>
            )}
          </span>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-accent-text hover:underline inline-flex items-center gap-1"
          >
            <span>@{username}</span>
            <ArrowUpRight size={11} />
          </a>
        </div>

        {/* Calendar Grid */}
        <div className="overflow-x-auto pb-2 scrollbar-none">
          <div className="flex gap-0.75 py-1">
            {weeks.map((week, wIdx) => (
              <div
                key={week[0]?.date || wIdx}
                className="flex flex-col gap-0.75"
              >
                {week.map((day) => (
                  <button
                    type="button"
                    key={day.date}
                    onMouseEnter={() => setHoveredDay(day)}
                    onMouseLeave={() => setHoveredDay(null)}
                    aria-label={`${day.date}: ${day.count} contributions`}
                    className={`h-2.75 w-2.75 rounded-xs transition-all duration-100 ${getIntensity(
                      day.count,
                    )}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-end gap-2 font-mono text-[10px] text-text-faint">
          <span>Less</span>
          <span className="h-2.5 w-2.5 rounded-xs bg-white/4" />
          <span className="h-2.5 w-2.5 rounded-xs bg-accent/35" />
          <span className="h-2.5 w-2.5 rounded-xs bg-accent/60" />
          <span className="h-2.5 w-2.5 rounded-xs bg-accent/85" />
          <span className="h-2.5 w-2.5 rounded-xs bg-accent shadow-[0_0_6px_var(--color-accent)]" />
          <span>More</span>
        </div>
      </div>

      {/* Pinned Repositories — Linear Issue List Style (Borderless) */}
      <div className="mt-4 flex flex-col gap-2">
        <span className="font-mono text-[11px] uppercase tracking-wider text-text-faint mb-2">
          Pinned Repositories &amp; Open Source
        </span>

        <div className="flex flex-col divide-y divide-white/6 border-y border-white/6">
          {topRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between py-4 sm:flex-row sm:items-center px-2 -mx-2 rounded-lg transition-colors hover:bg-white/25 gap-3"
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-white group-hover:text-accent-text transition-colors">
                    {repo.name}
                  </span>
                  <ArrowUpRight
                    size={13}
                    className="text-text-faint opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="text-xs text-text-muted max-w-xl">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center gap-5 font-mono text-xs text-text-faint shrink-0">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-text-muted">{repo.language}</span>
                </span>
                <span className="flex items-center gap-1 hover:text-white transition-colors">
                  <Star size={13} />
                  <span>{repo.stars}</span>
                </span>
                <span className="flex items-center gap-1 hover:text-white transition-colors">
                  <GitFork size={13} />
                  <span>{repo.forks}</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
