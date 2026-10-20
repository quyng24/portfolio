import { cn } from "@/lib/utils";

interface TagProps {
  children: string;
  className?: string;
  variant?: "default" | "accent";
}

export function Tag({ children, className, variant = "default" }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-colors",
        variant === "default" &&
          "border-border bg-white/3 text-text-muted hover:border-white/20 hover:text-text",
        variant === "accent" &&
          "border-accent/35 bg-accent/10 text-accent-text",
        className,
      )}
    >
      {children}
    </span>
  );
}
