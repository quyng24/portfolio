import type { SocialLink } from "@/types";
import { site } from "@/data/site";

export const socialLinks: SocialLink[] = [
  {
    platform: "github",
    label: "GitHub",
    href: "https://github.com/kaimercer",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/kaimercer",
  },
  {
    platform: "x",
    label: "X / Twitter",
    href: "https://x.com/kaimercer",
  },
  {
    platform: "email",
    label: "Email",
    href: `mailto:${site.email}`,
  },
];
