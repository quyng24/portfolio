import type { ContributionDay, GithubStats } from "@/types";

/**
 * Static placeholder contribution data, shaped to match what the GitHub
 * GraphQL API returns for `contributionsCollection.contributionCalendar`.
 * Swap `generateContributionWeeks` for a real fetch (e.g. against
 * `/api/github` backed by the GitHub GraphQL API) without touching the UI.
 */
function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

function generateContributionWeeks(weekCount = 53): ContributionDay[][] {
  const random = seededRandom(42);
  const today = new Date();
  const start = new Date(today);
  start.setDate(start.getDate() - weekCount * 7);
  // Align to the previous Sunday so weeks render as clean columns.
  start.setDate(start.getDate() - start.getDay());

  const weeks: ContributionDay[][] = [];

  for (let week = 0; week < weekCount; week += 1) {
    const days: ContributionDay[] = [];
    for (let day = 0; day < 7; day += 1) {
      const date = new Date(start);
      date.setDate(date.getDate() + week * 7 + day);
      const roll = random();
      const isActive = date <= today;
      const intensity = roll > 0.62 ? roll : roll > 0.4 ? roll * 0.5 : 0;
      const count = isActive ? Math.round(intensity * 12) : 0;
      days.push({ date: date.toISOString().slice(0, 10), count });
    }
    weeks.push(days);
  }

  return weeks;
}

const weeks = generateContributionWeeks();
const totalContributions = weeks
  .flat()
  .reduce((sum, day) => sum + day.count, 0);

export const githubStats: GithubStats = {
  username: "quyng24",
  totalContributions,
  currentStreak: 14,
  longestStreak: 46,
  weeks,
  topRepos: [
    {
      name: "robot-builder",
      description: "Modular 3D robot builder & real-time Rapier physics simulator in the browser.",
      language: "TypeScript",
      stars: 312,
      forks: 41,
      url: "https://github.com/quyng24/robot-builder",
    },
    {
      name: "lingo_hub",
      description: "Daily English micro-learning & arcade game hub powered by Spaced Repetition (SRS) and Supabase.",
      language: "TypeScript",
      stars: 198,
      forks: 22,
      url: "https://github.com/quyng24/lingo_hub",
    },
    {
      name: "project_sumary",
      description: "Interactive UI experiments & physics mini-games built with Svelte 5 (Runes).",
      language: "Svelte",
      stars: 154,
      forks: 19,
      url: "https://github.com/quyng24/project_sumary",
    },
  ],
};
