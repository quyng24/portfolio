import { ArrowUpRight } from "lucide-react";
import { caseStudyProject } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";
import { GithubIcon } from "@/components/ui/icons";

export function CaseStudy() {
  if (!caseStudyProject?.caseStudy) return null;
  const { name, tagline, role, year, tech, link, repo, caseStudy } = caseStudyProject;

  return (
    <section id="case-study" className="py-14 sm:py-20">
      <Container>
        <Reveal
          as="div"
          className="rounded-[2.5rem] border border-border bg-bg-soft px-6 py-14 sm:px-12 sm:py-16 lg:px-20 lg:py-20"
        >
          <div className="flex flex-col gap-3 font-mono text-xs uppercase tracking-[0.28em] text-accent">
            <span>Case Study</span>
          </div>

          <div className="mt-6 flex flex-col gap-6 border-b border-border pb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-balance text-4xl font-medium leading-[1.05] tracking-tight text-text sm:text-5xl">
                {name}
              </h3>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-muted">{tagline}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 text-sm text-text-muted sm:text-right">
              <span>{role}</span>
              <span className="font-mono text-text-faint">{year}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-14 py-14 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col gap-3">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-text-faint">
                Problem
              </h4>
              <p className="leading-relaxed text-text-muted">{caseStudy.problem}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-text-faint">
                Solution
              </h4>
              <p className="leading-relaxed text-text-muted">{caseStudy.solution}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-14 border-t border-border py-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
            <div className="flex flex-col gap-4">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-text-faint">
                Challenges
              </h4>
              <ul className="flex flex-col gap-4">
                {caseStudy.challenges.map((challenge) => (
                  <li key={challenge} className="flex gap-3 leading-relaxed text-text-muted">
                    <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-text-faint">
                  Tech Stack
                </h4>
                <ul className="flex flex-wrap gap-2.5">
                  {tech.map((item) => (
                    <li key={item}>
                      <Tag variant="accent">{item}</Tag>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-text-faint">
                  Result
                </h4>
                <p className="leading-relaxed text-text-muted">{caseStudy.result}</p>
              </div>
            </div>
          </div>

          {caseStudy.metrics ? (
            <div className="grid grid-cols-2 gap-8 border-t border-border py-12 sm:grid-cols-4">
              {caseStudy.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col gap-1.5">
                  <span className="font-sans text-3xl font-medium tracking-tight text-accent-text sm:text-4xl">
                    {metric.value}
                  </span>
                  <span className="text-sm leading-snug text-text-muted">{metric.label}</span>
                </div>
              ))}
            </div>
          ) : null}

          <div className="flex flex-wrap items-center gap-5 border-t border-border pt-10">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-text px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent"
              >
                View live project
                <ArrowUpRight size={16} aria-hidden />
              </a>
            ) : null}
            {repo ? (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent/60 hover:text-accent-text"
              >
                <GithubIcon size={16} />
                View source
              </a>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
