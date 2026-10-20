import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { socialLinks } from "@/data/social";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SocialIcon } from "@/components/ui/social-icon";

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/6 py-24 sm:py-32">
      <Container className="flex flex-col gap-12">
        <div className="w-fit">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/3 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
            <span className="text-text">07</span>
            <span className="text-text-faint">/</span>
            <span className="text-text-faint">Contact</span>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <Reveal
            as="h2"
            className="text-balance font-sans text-4xl font-medium leading-[1.03] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[5.2rem]"
          >
            <span className="gradient-heading block">Have an idea?</span>
            <span className="block mt-1">
              <span className="text-text">Let&rsquo;s </span>
              <span className="gradient-accent">build it.</span>
            </span>
          </Reveal>

          <Reveal
            delay={100}
            className="max-w-xl text-base leading-relaxed text-text-muted sm:text-lg"
          >
            I&rsquo;m currently taking on a small number of freelance and
            full-time engagements. If you have a product, a prototype, or an
            idea that needs to feel alive on the web, I&rsquo;d love to hear
            about it.
          </Reveal>

          <Reveal delay={160} className="pt-2">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex flex-wrap items-baseline gap-3 border-b border-white/15 pb-3 text-2xl font-medium text-white transition-all hover:border-accent hover:text-accent-text sm:text-3xl md:text-4xl"
            >
              <span>{site.email}</span>
              <ArrowUpRight
                size={24}
                aria-hidden
                className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </Reveal>
        </div>

        <Reveal delay={220} className="flex flex-wrap items-center gap-6 pt-2">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              target={social.platform === "email" ? undefined : "_blank"}
              rel={
                social.platform === "email" ? undefined : "noopener noreferrer"
              }
              className="inline-flex items-center gap-2 text-xs font-medium text-text-muted transition-colors hover:text-white"
            >
              <SocialIcon platform={social.platform} size={15} />
              {social.label}
            </a>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
