"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        isScrolled || isOpen
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="#top"
          className="font-mono text-sm font-medium tracking-widest text-text transition-colors hover:text-accent"
          onClick={handleLinkClick}
        >
          {site.initials}
          <span className="text-accent">.</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="inline-flex items-center rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-text transition-all duration-300 hover:border-accent/60 hover:text-accent-text"
          >
            Let&rsquo;s Talk
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-text md:hidden"
        >
          {isOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "grid overflow-hidden bg-bg transition-[grid-template-rows] duration-300 ease-out md:hidden",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden border-b border-border">
          <Container as="nav" aria-label="Mobile" className="flex flex-col gap-1 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="border-b border-border py-4 text-2xl font-medium text-text last:border-none"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={handleLinkClick}
              className="mt-5 inline-flex w-fit items-center rounded-full bg-text px-6 py-3 text-sm font-medium text-bg"
            >
              Let&rsquo;s Talk
            </Link>
          </Container>
        </div>
      </div>
    </header>
  );
}
