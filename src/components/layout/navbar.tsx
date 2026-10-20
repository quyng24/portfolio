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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled || isOpen
          ? "border-b border-border bg-[#08090a]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "border-b border-white/4 bg-[#08090a]/30 backdrop-blur-md",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="#top"
          className="group flex items-center gap-1 font-mono text-sm font-medium tracking-widest text-text transition-colors hover:text-white"
          onClick={handleLinkClick}
        >
          <span>{site.initials}</span>
          <span className="text-accent drop-shadow-[0_0_8px_rgba(94,106,210,0.8)] transition-transform duration-200 group-hover:scale-125">
            .
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-xs font-medium text-text-muted transition-all duration-150 hover:bg-white/6 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="inline-flex items-center rounded-full border border-border bg-white/3 px-4 py-1.5 text-xs font-medium text-text transition-all duration-150 hover:border-border-strong hover:bg-white/8 hover:text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] active:scale-[0.98]"
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
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white/3 text-text transition-colors hover:bg-white/6 md:hidden"
        >
          {isOpen ? (
            <X size={18} aria-hidden />
          ) : (
            <Menu size={18} aria-hidden />
          )}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "grid overflow-hidden bg-[#08090a]/95 backdrop-blur-2xl transition-[grid-template-rows] duration-300 ease-out md:hidden",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden border-b border-border">
          <Container
            as="nav"
            aria-label="Mobile"
            className="flex flex-col gap-1 py-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="border-b border-border/50 py-3.5 text-lg font-medium text-text transition-colors hover:text-accent-text last:border-none"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={handleLinkClick}
              className="mt-4 inline-flex w-fit items-center rounded-full border border-white/15 bg-accent px-5 py-2.5 text-xs font-medium text-white shadow-[0_0_20px_-4px_rgba(94,106,210,0.6)]"
            >
              Let&rsquo;s Talk
            </Link>
          </Container>
        </div>
      </div>
    </header>
  );
}
