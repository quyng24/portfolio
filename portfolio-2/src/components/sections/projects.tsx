import { ArrowUpRight, FileText } from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";

export function Projects() {
  return (
    <section id="work" className="border-t border-border py-28 sm:py-36">
      <Container>
        <SectionHeading
          index="04"
          title="A few things I've built, shipped, and shaped."
          description="Product work and personal experiments, spanning SaaS dashboards to real-time 3D configurators."
        />

        <div className="mt-16">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              as="article"
              delay={Math.min(index * 50, 200)}
              className="group grid grid-cols-1 gap-6 border-t border-border py-10 first:border-t-0 sm:py-12 md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-10"
            >
              <span className="font-mono text-sm text-text-faint">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-medium tracking-tight text-text transition-colors duration-300 group-hover:text-accent-text sm:text-4xl">
                  {project.name}
                </h3>
                <p className="max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
                  {project.description}
                </p>
                <ul className="mt-1 flex flex-wrap gap-2.5">
                  {project.tech.map((tech) => (
                    <li key={tech}>
                      <Tag>{tech}</Tag>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-5 md:flex-col md:items-end md:gap-3">
                <span className="font-mono text-sm text-text-faint">{project.year}</span>
                <div className="flex items-center gap-4">
                  {project.caseStudy ? (
                    <a
                      href="#case-study"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-accent-text"
                    >
                      Case study
                      <FileText size={14} aria-hidden />
                    </a>
                  ) : null}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.name}`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-text transition-all duration-300 group-hover:border-accent/60 group-hover:text-accent-text"
                    >
                      <ArrowUpRight size={18} aria-hidden />
                    </a>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
