import Image from "next/image";
import { ArrowUpRight, FileText } from "lucide-react";
import { projects } from "@/data/projects";
import { GithubIcon } from "@/components/ui/icons";
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
          description="Selected products and experiments across web applications, interactive 3D, and learning tools."
        />

        <div className="mt-16">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              as="article"
              delay={Math.min(index * 50, 200)}
              className="group grid grid-cols-1 gap-6 border-t border-border py-10 first:border-t-0 sm:py-12 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10"
            >
              <span className="font-mono text-sm text-text-faint">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                {project.image ? (
                  <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-xl border border-border bg-bg-soft sm:w-44">
                    <Image
                      src={project.image}
                      alt={`${project.name} preview`}
                      fill
                      sizes="(min-width: 640px) 176px, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : null}
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
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} source on GitHub`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-text transition-all duration-300 hover:border-accent/60 hover:text-accent-text"
                    >
                      <GithubIcon size={17} />
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
