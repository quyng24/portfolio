import type { SocialLink } from "@/types";
import { site } from "@/data/site";

export const socialLinks: SocialLink[] = [
  {
    platform: "github",
    label: "GitHub",
    href: "https://github.com/quyng24",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/quyng24",
  },
  {
    platform: "x",
    label: "X / Twitter",
    href: "https://x.com/quyng24",
  },
  {
    platform: "email",
    label: "Email",
    href: `mailto:${site.email}`,
  },
];
