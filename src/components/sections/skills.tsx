import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SkillsInteractive } from "@/components/ui/skills-interactive";

export function Skills() {
  return (
    <section id="skills" className="border-t border-white/6 py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="02"
          title="A toolkit built for reactive interfaces and 3D graphics."
          description="A filterable stack view covering core product engineering, graphics shaders, and modern full-stack workflows."
        />

        <Reveal delay={80}>
          <SkillsInteractive />
        </Reveal>
      </Container>
    </section>
  );
}
