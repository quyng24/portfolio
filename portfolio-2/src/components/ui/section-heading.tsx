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
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Reveal className="flex items-center gap-3 font-mono text-xs tracking-[0.28em] text-text-faint uppercase">
        <span className="text-accent">{index}</span>
        <span aria-hidden className="h-px w-10 bg-border-strong" />
        <span>Section</span>
      </Reveal>
      <Reveal
        as="h2"
        delay={80}
        className={cn(
          "text-balance font-sans text-4xl font-medium leading-[1.05] tracking-tight text-text sm:text-5xl md:text-6xl",
          align === "center" && "max-w-3xl",
        )}
      >
        {title}
      </Reveal>
      {description ? (
        <Reveal
          delay={140}
          className={cn(
            "max-w-2xl text-lg leading-relaxed text-text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </Reveal>
      ) : null}
    </div>
  );
}
