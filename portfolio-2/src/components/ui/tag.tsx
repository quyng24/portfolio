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
        "inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide",
        variant === "default" &&
          "border-border-strong text-text-muted",
        variant === "accent" && "border-accent/40 bg-accent-soft text-accent-text",
        className,
      )}
    >
      {children}
    </span>
  );
}
