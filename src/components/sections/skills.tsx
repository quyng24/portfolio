import { skills } from "@/data/skills";
import type { SkillCategory } from "@/types";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";

const categories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "3D & Interactive",
  "Tooling & Platform",
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-28 sm:py-36">
      <Container>
        <SectionHeading
          index="02"
          title="A toolkit built for interfaces and the graphics beneath them."
          description="I stay fluent across the standard product-engineering stack, and go deeper into the graphics layer most frontend developers skip."
        />

        <div className="mt-16">
          {categories.map((category, index) => {
            const items = skills.filter((skill) => skill.category === category);
            return (
              <Reveal
                key={category}
                delay={index * 90}
                className="grid grid-cols-1 gap-6 border-t border-border py-9 first:border-t-0 sm:py-10 md:grid-cols-[240px_1fr] md:gap-10"
              >
                <div className="flex items-baseline gap-3 md:flex-col md:items-start md:gap-2">
                  <h3 className="text-xl font-medium text-text sm:text-2xl">
                    {category}
                  </h3>
                  <span className="font-mono text-xs text-text-faint">
                    {String(items.length).padStart(2, "0")} skills
                  </span>
                </div>
                <ul className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <li key={skill.name}>
                      <Tag
                        variant={skill.level === "core" ? "accent" : "default"}
                      >
                        {skill.name}
                      </Tag>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
