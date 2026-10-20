import { caseStudyProject } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CaseStudyInteractive } from "@/components/ui/case-study-interactive";

export function CaseStudy() {
  if (!caseStudyProject?.caseStudy) return null;

  return (
    <section id="case-study" className="border-t border-white/6 py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="04"
          title="Engineering Deep Dive."
          description="Behind the scenes of an in-browser 3D robot design, behavior programming, and simulation platform."
        />

        <Reveal delay={80}>
          <CaseStudyInteractive />
        </Reveal>
      </Container>
    </section>
  );
}
