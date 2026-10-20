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
    platform: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/1DM7LqahPs/?mibextid=wwXIfr",
  },
  {
    platform: "email",
    label: "Email",
    href: `mailto:${site.email}`,
  },
];
