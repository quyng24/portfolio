import Link from "next/link";
import { navLinks } from "@/data/nav";
import { site } from "@/data/site";
import { socialLinks } from "@/data/social";
import { Container } from "@/components/ui/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-3">
            <Link href="#top" className="font-mono text-sm tracking-widest text-text">
              {site.initials}
              <span className="text-accent">.</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-text-muted">
              {site.description}
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-muted transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {socialLinks.map((social) => (
              <li key={social.platform}>
                <a
                  href={social.href}
                  target={social.platform === "email" ? undefined : "_blank"}
                  rel={social.platform === "email" ? undefined : "noopener noreferrer"}
                  className="text-text-muted transition-colors hover:text-text"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6 text-xs text-text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {year} {site.name}. All rights reserved.
          </span>
          <span>Built with Next.js, TypeScript & Tailwind CSS.</span>
        </div>
      </Container>
    </footer>
  );
}
