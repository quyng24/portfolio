import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ProjectsShowcase } from "@/components/ui/projects-showcase";

export function Projects() {
  return (
    <section id="work" className="border-t border-white/6 py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="03"
          title="Featured software &amp; interactive applications."
          description="Selected products spanning 3D web simulators, real-time interactive apps, and modern full-stack web applications."
        />

        <Reveal delay={80}>
          <ProjectsShowcase />
        </Reveal>
      </Container>
    </section>
  );
}
