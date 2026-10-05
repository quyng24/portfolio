import type { ComponentType } from "react";
import { Mail } from "lucide-react";
import type { SocialPlatform } from "@/types";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/icons";

const icons: Record<SocialPlatform, ComponentType<{ size?: number }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  x: XIcon,
  email: Mail,
  dribbble: Mail,
};

interface SocialIconProps {
  platform: SocialPlatform;
  size?: number;
}

export function SocialIcon({ platform, size = 16 }: SocialIconProps) {
  const Icon = icons[platform];
  return <Icon size={size} />;
}
