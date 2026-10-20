import { Layers, Box, Cpu } from "lucide-react";
import { aboutStats } from "@/data/stats";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const pillars = [
  {
    icon: Layers,
    title: "Interface Craft & Design Systems",
    highlight: "Pixel-perfect & Accessible",
    description:
      "Fluid typography, responsive geometry, keyboard-first navigability, and cohesive tokenized Tailwind systems built for scale.",
    badge: "Tailwind + Radix UI",
  },
  {
    icon: Box,
    title: "Interactive 3D & WebGL Shaders",
    highlight: "60 FPS in the Browser",
    description:
      "Bridging the gap between 2D UI and real-time graphics with Three.js, React Three Fiber, GLSL fragment shaders, and physics engines.",
    badge: "Three.js + GLSL",
  },
  {
    icon: Cpu,
    title: "Full-Stack Reliability",
    highlight: "Zero-Jank & End-to-End",
    description:
      "Server-side rendering with Next.js App Router, strict TypeScript safety, FastAPI microservices, and optimized asset pipelines.",
    badge: "Next.js + TypeScript",
  },
];

export function About() {
  return (
    <section id="about" className="border-t border-white/6 py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="01"
          title="Engineering digital interfaces with architectural rigor."
          description="A frontend developer who treats the browser as a creative canvas — balancing production stability with sensory micro-delights."
        />

        {/* 3 Engineering Pillars - Borderless modern Linear layout */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal
                key={pillar.title}
                delay={index * 80}
                className="group relative flex flex-col justify-between pt-6 border-t border-white/8 transition-colors hover:border-accent/40"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/3 border border-white/8 text-accent-text group-hover:border-accent/50 group-hover:bg-accent/10 transition-all">
                      <Icon size={18} />
                    </span>
                    <span className="font-mono text-[10px] text-text-faint uppercase tracking-wider">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-medium text-text group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>
                  <span className="mt-1 block font-mono text-xs text-accent-text">
                    {pillar.highlight}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 font-mono text-[11px] text-text-faint">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  <span>Production Ready</span>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Fluid Borderless Stat Row */}
        <Reveal
          delay={240}
          className="mt-16 grid grid-cols-2 gap-8 border-t border-white/6 pt-10 sm:grid-cols-4"
        >
          {aboutStats.map((stat) => (
            <div key={stat.label} className="group flex flex-col gap-1">
              <span className="font-sans text-3xl font-medium tracking-tight text-white transition-all duration-200 group-hover:text-accent-text sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-xs text-text-muted leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
