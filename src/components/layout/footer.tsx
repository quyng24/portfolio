import Link from "next/link";
import { navLinks } from "@/data/nav";
import { site } from "@/data/site";
import { socialLinks } from "@/data/social";
import { Container } from "@/components/ui/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-[#08090a] py-14">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-3">
            <Link href="#top" className="font-mono text-sm tracking-widest text-text transition-colors hover:text-white">
              {site.initials}
              <span className="text-accent drop-shadow-[0_0_8px_rgba(94,106,210,0.8)]">.</span>
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-text-muted">
              {site.description}
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-8 gap-y-3 text-xs">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-muted transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-xs">
            {socialLinks.map((social) => (
              <li key={social.platform}>
                <a
                  href={social.href}
                  target={social.platform === "email" ? undefined : "_blank"}
                  rel={social.platform === "email" ? undefined : "noopener noreferrer"}
                  className="text-text-muted transition-colors hover:text-white"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-text-faint sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.7)]" />
            <span>&copy; {year} {site.name}. All rights reserved.</span>
          </div>
          <span>Crafted with precision &amp; modern web standards.</span>
        </div>
      </Container>
    </footer>
  );
}
