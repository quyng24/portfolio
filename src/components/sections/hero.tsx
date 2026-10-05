import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { socialLinks } from "@/data/social";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SocialIcon } from "@/components/ui/social-icon";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100vh] flex-col overflow-hidden pt-32 pb-10 sm:pt-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, var(--color-accent-soft), transparent 70%)",
        }}
      />

      <Container className="flex flex-1 flex-col">
        <Reveal className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.28em] text-text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {site.availabilityNote}
        </Reveal>

        <div className="mt-10 flex flex-1 flex-col justify-center">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div>
              <Reveal as="h1" delay={80}>
                <span className="block text-balance font-sans text-[13vw] font-medium leading-[0.98] tracking-tight text-text sm:text-[9vw] md:text-[7.2vw] lg:text-[6.4rem]">
                  I build digital
                  <br />
                  experiences that solve{" "}
                  <span className="text-accent-text">real problems.</span>
                </span>
              </Reveal>

              <div className="mt-10 flex flex-col gap-10 md:mt-14 md:flex-row md:items-end md:justify-between">
                <Reveal delay={160} className="max-w-xl text-lg leading-relaxed text-text-muted md:text-xl">
                  I&rsquo;m {site.name}, a {site.role.toLowerCase()} based in {site.location}.
                  I design and build fast, story-driven interfaces &mdash; and the
                  interactive 3D experiences that make them memorable.
                </Reveal>

                <Reveal delay={220} className="flex flex-wrap items-center gap-4">
                  <ButtonLink href="#work" icon={<ArrowRight size={16} aria-hidden />}>
                    View my work
                  </ButtonLink>
                  <ButtonLink href="#contact" variant="secondary">
                    Get in touch
                  </ButtonLink>
                </Reveal>
              </div>
            </div>

            <Reveal
              delay={180}
              className="relative mx-auto aspect-[4/5] w-full max-w-[18rem]"
            >
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2.5rem] bg-accent/10 blur-2xl"
              />
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-border bg-bg-soft">
                <Image
                  src="/images/avatar_portfolio.jpg"
                  alt={`${site.name} portrait`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 288px, (min-width: 640px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              {site.available ? (
                <span className="absolute -bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-bg px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted shadow-xl sm:left-4 sm:translate-x-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Available for work
                </span>
              ) : null}
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
                  rel={social.platform === "email" ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent-text"
                >
                  <SocialIcon platform={social.platform} size={16} />
                  {social.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#about"
            className="inline-flex items-center gap-2 self-start text-sm text-text-muted transition-colors hover:text-text sm:self-auto"
          >
            Scroll to explore
            <ArrowDown size={14} aria-hidden />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
