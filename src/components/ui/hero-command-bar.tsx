"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { site } from "@/data/site";

export function HeroCommandBar() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 flex flex-wrap items-center gap-2">
      <span className="font-mono text-[11px] text-text-faint tracking-wider uppercase mr-1">
        Jump to:
      </span>

      <a
        href="#work"
        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3.5 py-1.5 text-xs font-medium text-text-muted transition-all hover:border-white/20 hover:bg-white/8 hover:text-white"
      >
        <span className="kbd-badge group-hover:border-accent group-hover:text-accent-text transition-colors">
          1
        </span>
        <span>Projects</span>
      </a>

      <a
        href="#skills"
        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3.5 py-1.5 text-xs font-medium text-text-muted transition-all hover:border-white/20 hover:bg-white/8 hover:text-white"
      >
        <span className="kbd-badge group-hover:border-accent group-hover:text-accent-text transition-colors">
          2
        </span>
        <span>Stack</span>
      </a>

      <a
        href="#github"
        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3.5 py-1.5 text-xs font-medium text-text-muted transition-all hover:border-white/20 hover:bg-white/8 hover:text-white"
      >
        <span className="kbd-badge group-hover:border-accent group-hover:text-accent-text transition-colors">
          3
        </span>
        <span>Activity</span>
      </a>

      <button
        type="button"
        onClick={copyEmail}
        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3.5 py-1.5 text-xs font-medium text-text-muted transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-white"
      >
        <span className="kbd-badge group-hover:border-accent group-hover:text-accent-text transition-colors">
          C
        </span>
        <span>{copied ? "Copied!" : "Copy Email"}</span>
        {copied ? (
          <Check size={11} className="text-emerald-400" />
        ) : (
          <Copy
            size={11}
            className="text-text-faint group-hover:text-accent-text"
          />
        )}
      </button>
    </div>
  );
}
