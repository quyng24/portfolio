import { aboutStats } from "@/data/stats";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="border-t border-border py-28 sm:py-36">
      <Container>
        <SectionHeading
          index="01"
          title="Structure meets craft — that's where I like to work."
        />

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div className="flex flex-col gap-7">
            <Reveal
              as="p"
              className="text-balance text-2xl font-medium leading-snug text-text sm:text-3xl"
            >
              I spent my first two years shipping small business sites by
              hand, which taught me to respect fundamentals long before I
              touched a shader.
            </Reveal>
            <Reveal
              as="p"
              delay={60}
              className="max-w-2xl text-lg leading-relaxed text-text-muted"
            >
              These days I split my time between two disciplines that rarely
              share a room: disciplined, accessible product engineering, and
              the messier, more expressive work of building interactive 3D on
              the web. I think the best digital experiences need both &mdash;
              structure that holds up in production, and craft that makes
              someone stop scrolling.
            </Reveal>
            <Reveal
              as="p"
              delay={120}
              className="max-w-2xl text-lg leading-relaxed text-text-muted"
            >
              My approach starts with the constraint, not the flourish:
              what&rsquo;s the real problem, what does the data model look
              like, what has to be true on a three-year-old Android phone.
              Once that&rsquo;s solid, I spend the rest of the budget on the
              10% that makes people remember the thing they used.
            </Reveal>
          </div>

          <div className="flex flex-col">
            {aboutStats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 70}
                className="flex items-baseline justify-between gap-6 border-t border-border py-6 first:border-t-0 sm:py-7"
              >
                <span className="font-sans text-4xl font-medium tracking-tight text-text sm:text-5xl">
                  {stat.value}
                </span>
                <span className="max-w-[14rem] text-right text-sm leading-snug text-text-muted">
                  {stat.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
