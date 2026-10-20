import { ArrowDown, ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { socialLinks } from "@/data/social";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SocialIcon } from "@/components/ui/social-icon";
import { HeroInteractiveDemo } from "@/components/ui/hero-interactive-demo";
import { HeroCommandBar } from "@/components/ui/hero-command-bar";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden pt-28 pb-10 sm:pt-32"
    >
      {/* Linear Ambient Ray Grid & Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 linear-grid-bg opacity-80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(94, 106, 210, 0.25), rgba(139, 92, 246, 0.1), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-130 w-200 -translate-x-1/2 rounded-full bg-accent/15 blur-[130px]"
      />

      <Container className="flex flex-1 flex-col">
        <Reveal className="w-fit">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/4 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-text-muted backdrop-blur-md shadow-[0_0_20px_rgba(94,106,210,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
            </span>
            <span>{site.availabilityNote}</span>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-1 flex-col justify-center">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Reveal as="h1" delay={80}>
                <span className="block text-balance font-sans text-4xl font-medium leading-[1.03] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[5.2rem]">
                  <span className="gradient-heading block">
                    I build digital
                  </span>
                  <span className="block mt-1">
                    <span className="text-text">experiences that solve </span>
                    <span className="gradient-accent">real problems.</span>
                  </span>
                </span>
              </Reveal>

              <div className="mt-8 flex flex-col gap-8 md:mt-10">
                <Reveal
                  delay={160}
                  className="max-w-xl text-base leading-relaxed text-text-muted md:text-lg"
                >
                  I&rsquo;m {site.name}, a {site.role.toLowerCase()} based in{" "}
                  {site.location}. Specializing in reactive web applications,
                  fluid motion systems, and WebGL graphics.
                </Reveal>

                <Reveal
                  delay={220}
                  className="flex flex-wrap items-center gap-4"
                >
                  <ButtonLink
                    href="#work"
                    icon={<ArrowRight size={15} aria-hidden />}
                  >
                    View my work
                  </ButtonLink>
                  <ButtonLink href="#contact" variant="secondary">
                    Get in touch
                  </ButtonLink>
                </Reveal>

                <Reveal delay={240}>
                  <HeroCommandBar />
                </Reveal>
              </div>
            </div>

            <Reveal delay={180}>
              <HeroInteractiveDemo />
            </Reveal>
          </div>
        </div>

        <Reveal
          delay={260}
          className="mt-16 flex flex-col gap-6 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <ul className="flex flex-wrap items-center gap-6">
            {socialLinks.map((social) => (
              <li key={social.platform}>
                <a
                  href={social.href}
                  target={social.platform === "email" ? undefined : "_blank"}
                  rel={
                    social.platform === "email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="inline-flex items-center gap-2 text-xs font-medium text-text-muted transition-colors hover:text-white"
                >
                  <SocialIcon platform={social.platform} size={15} />
                  {social.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#about"
            className="inline-flex items-center gap-2 self-start text-xs font-medium text-text-muted transition-colors hover:text-white sm:self-auto"
          >
            Scroll to explore
            <ArrowDown size={13} aria-hidden />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
