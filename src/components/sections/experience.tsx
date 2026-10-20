import { experience } from "@/data/experience";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";

export function Experience() {
  return (
    <section id="experience" className="border-t border-white/6 py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="05"
          title="Career journey &amp; production history."
          description="From small-business WordPress sites to award-nominated WebGL configurators — here's the path."
        />

        <ol className="mt-14 flex flex-col">
          {experience.map((job, index) => (
            <Reveal
              key={job.id}
              as="li"
              delay={Math.min(index * 60, 180)}
              className="grid grid-cols-1 gap-5 border-t border-border/70 py-10 first:border-t-0 sm:grid-cols-[160px_1fr] sm:gap-10 sm:py-12"
            >
              <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2.5">
                <span
                  aria-hidden
                  className="flex h-3 w-3 shrink-0 items-center justify-center"
                >
                  <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
                </span>
                <span className="font-mono text-xs tracking-wide text-text-muted">
                  {job.start} &ndash; {job.end}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-xl font-medium text-text sm:text-2xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">
                    {job.company} &middot; {job.location}
                  </p>
                </div>

                <p className="max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
                  {job.summary}
                </p>

                <ul className="flex flex-col gap-2.5">
                  {job.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-3 text-sm leading-relaxed text-text-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>

                <ul className="mt-1 flex flex-wrap gap-2.5">
                  {job.tech.map((tech) => (
                    <li key={tech}>
                      <Tag>{tech}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
