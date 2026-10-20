import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

interface SectionHeadingProps {
  index: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  index,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Reveal className="w-fit">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/3 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
          <span className="text-text">{index}</span>
          <span className="text-text-faint">/</span>
          <span className="text-text-faint">Section</span>
        </div>
      </Reveal>
      <Reveal
        as="h2"
        delay={80}
        className={cn(
          "text-balance font-sans text-3xl font-medium leading-[1.12] tracking-tight text-text gradient-heading sm:text-4xl md:text-5xl",
          align === "center" && "max-w-3xl",
        )}
      >
        {title}
      </Reveal>
      {description ? (
        <Reveal
          delay={140}
          className={cn(
            "max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </Reveal>
      ) : null}
    </div>
  );
}
