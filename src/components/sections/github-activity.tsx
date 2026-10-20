import { githubStats } from "@/data/github";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { GithubInteractive } from "@/components/ui/github-interactive";

export function GithubActivity() {
  const { username } = githubStats;

  return (
    <section id="github" className="border-t border-white/6 py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="06"
          title="Open source contributions &amp; code activity."
          description={`A snapshot of public work on GitHub (@${username}) — tracking daily velocity, commit frequency, and key projects.`}
        />

        <Reveal delay={80}>
          <GithubInteractive />
        </Reveal>
      </Container>
    </section>
  );
}
