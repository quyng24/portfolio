import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { socialLinks } from "@/data/social";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SocialIcon } from "@/components/ui/social-icon";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-28 sm:py-36">
      <Container className="flex flex-col gap-14">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-text-faint">
          <span className="text-accent">06</span>
          <span aria-hidden className="h-px w-10 bg-border-strong" />
          <span>Contact</span>
        </div>

        <div className="flex flex-col gap-10">
          <Reveal as="h2" className="text-balance font-sans text-5xl font-medium leading-[1.02] tracking-tight text-text sm:text-6xl md:text-7xl lg:text-8xl">
            Have an idea?
            <br />
            Let&rsquo;s <span className="text-accent-text">build it.</span>
          </Reveal>

          <Reveal
            delay={100}
            className="max-w-xl text-lg leading-relaxed text-text-muted sm:text-xl"
          >
            I&rsquo;m currently taking on a small number of freelance and
            full-time engagements. If you have a product, a prototype, or an
            idea that needs to feel alive on the web, I&rsquo;d love to hear
            about it.
          </Reveal>

          <Reveal delay={160}>
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex flex-wrap items-baseline gap-3 border-b border-border-strong pb-4 text-3xl font-medium text-text transition-colors hover:text-accent-text sm:text-4xl"
            >
              {site.email}
              <ArrowUpRight
                size={28}
                aria-hidden
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </Reveal>
        </div>

        <Reveal delay={220} className="flex flex-wrap items-center gap-8 pt-4">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              target={social.platform === "email" ? undefined : "_blank"}
              rel={social.platform === "email" ? undefined : "noopener noreferrer"}
              className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent-text"
            >
              <SocialIcon platform={social.platform} size={16} />
              {social.label}
            </a>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
