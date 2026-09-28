export interface NavLink {
  label: string;
  href: string;
}

export type SocialPlatform = "github" | "linkedin" | "x" | "email" | "dribbble";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export type SkillCategory = "Frontend" | "3D & Interactive" | "Backend" | "Tooling & Platform";

export interface Skill {
  name: string;
  category: SkillCategory;
  level?: "core" | "proficient" | "exploring";
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  achievements: string[];
  tech: string[];
}

export interface CaseStudy {
  problem: string;
  solution: string;
  challenges: string[];
  result: string;
  metrics?: StatItem[];
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  tech: string[];
  link?: string;
  repo?: string;
  featured?: boolean;
  caseStudy?: CaseStudy;
}

export interface ContributionDay {
  date: string;
  count: number;
}

export interface GithubRepoStat {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

export interface GithubStats {
  username: string;
  totalContributions: number;
  currentStreak: number;
  longestStreak: number;
  weeks: ContributionDay[][];
  topRepos: GithubRepoStat[];
}
