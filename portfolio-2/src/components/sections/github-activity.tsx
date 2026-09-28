import { ArrowUpRight, GitFork, Star } from "lucide-react";
import { githubStats } from "@/data/github";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

function intensityClass(count: number) {
  if (count <= 0) return "bg-white/[0.06]";
  if (count <= 2) return "bg-accent/25";
  if (count <= 5) return "bg-accent/50";
  if (count <= 8) return "bg-accent/75";
  return "bg-accent";
}

export function GithubActivity() {
  const { username, totalContributions, currentStreak, longestStreak, weeks, topRepos } =
    githubStats;

  return (
    <section id="github" className="border-t border-border py-28 sm:py-36">
      <Container>
        <SectionHeading
          index="05"
          title="Still committing code most days of the week."
          description={`A live snapshot of my public work on GitHub — @${username}. Wire this section up to the GitHub API and it updates itself.`}
        />

        <div className="mt-16 flex flex-col gap-14">
          <Reveal className="flex flex-wrap gap-x-14 gap-y-6 border-b border-border pb-10">
            <div className="flex flex-col gap-1.5">
              <span className="font-sans text-3xl font-medium tracking-tight text-text sm:text-4xl">
                {totalContributions.toLocaleString()}
              </span>
              <span className="text-sm text-text-muted">Contributions this year</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-sans text-3xl font-medium tracking-tight text-text sm:text-4xl">
                {currentStreak} days
              </span>
              <span className="text-sm text-text-muted">Current streak</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-sans text-3xl font-medium tracking-tight text-text sm:text-4xl">
                {longestStreak} days
              </span>
              <span className="text-sm text-text-muted">Longest streak</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="-mx-6 overflow-x-auto px-6 pb-2 sm:mx-0 sm:px-0">
              <div className="flex gap-[3px]">
                {weeks.map((week) => (
                  <div key={week[0]?.date} className="flex flex-col gap-[3px]">
                    {week.map((day) => (
                      <div
                        key={day.date}
                        title={`${day.date}: ${day.count} contribution${day.count === 1 ? "" : "s"}`}
                        className={`h-[10px] w-[10px] rounded-[2px] ${intensityClass(day.count)}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-text-faint">
              <span>Less</span>
              <span className="h-[10px] w-[10px] rounded-[2px] bg-white/[0.06]" />
              <span className="h-[10px] w-[10px] rounded-[2px] bg-accent/25" />
              <span className="h-[10px] w-[10px] rounded-[2px] bg-accent/50" />
              <span className="h-[10px] w-[10px] rounded-[2px] bg-accent/75" />
              <span className="h-[10px] w-[10px] rounded-[2px] bg-accent" />
              <span>More</span>
            </div>
          </Reveal>

          <div>
            <Reveal as="h3" className="text-sm font-medium uppercase tracking-[0.2em] text-text-faint">
              Pinned repositories
            </Reveal>
            <ul className="mt-6 flex flex-col">
              {topRepos.map((repo, index) => (
                <Reveal
                  key={repo.name}
                  as="li"
                  delay={index * 50}
                  className="group grid grid-cols-1 gap-3 border-t border-border py-6 first:border-t-0 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
                >
                  <div>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-lg font-medium text-text transition-colors group-hover:text-accent-text"
                    >
                      {repo.name}
                      <ArrowUpRight size={15} aria-hidden />
                    </a>
                    <p className="mt-1 max-w-xl text-sm leading-relaxed text-text-muted">
                      {repo.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-5 text-sm text-text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
                      {repo.language}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Star size={14} aria-hidden />
                      {repo.stars}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <GitFork size={14} aria-hidden />
                      {repo.forks}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
