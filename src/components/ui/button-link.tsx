import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  icon?: ReactNode;
  target?: string;
  rel?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  icon,
  target,
  rel,
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-150 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-accent",
    variant === "primary" &&
      "border border-white/15 bg-accent text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_0_24px_-4px_rgba(94,106,210,0.6)] hover:bg-[#6875e5] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_0_28px_-2px_rgba(94,106,210,0.8)]",
    variant === "secondary" &&
      "border border-border bg-white/[0.03] text-text hover:border-border-strong hover:bg-white/[0.07] hover:text-white backdrop-blur-sm",
    className,
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
