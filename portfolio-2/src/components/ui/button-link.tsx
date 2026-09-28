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
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent",
    variant === "primary" &&
      "bg-text text-bg hover:bg-accent hover:text-bg",
    variant === "secondary" &&
      "border border-border-strong text-text hover:border-accent/60 hover:text-accent-text",
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
