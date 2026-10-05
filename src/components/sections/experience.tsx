import { experience } from "@/data/experience";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-28 sm:py-36">
      <Container>
        <SectionHeading
          index="03"
          title="Three years, one studios, one throughline."
          description="From small-business WordPress sites to award-nominated WebGL configurators — here's the path."
        />

        <ol className="mt-16 flex flex-col">
          {experience.map((job, index) => (
            <Reveal
              key={job.id}
              as="li"
              delay={Math.min(index * 60, 180)}
              className="grid grid-cols-1 gap-5 border-t border-border py-10 first:border-t-0 sm:grid-cols-[160px_1fr] sm:gap-10 sm:py-12"
            >
              <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-3">
                <span
                  aria-hidden
                  className="h-2.5 w-2.5 shrink-0 rounded-full border-2 border-accent bg-bg"
                />
                <span className="font-mono text-xs tracking-wide text-text-muted">
                  {job.start} &ndash; {job.end}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-xl font-medium text-text sm:text-2xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-text-muted">
                    {job.company} &middot; {job.location}
                  </p>
                </div>

                <p className="max-w-2xl leading-relaxed text-text-muted">
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
