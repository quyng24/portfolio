interface IconProps {
  size?: number;
  className?: string;
}

export function GithubIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      className={className}
    >
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.94 3.2 9.13 7.65 10.6.56.1.76-.24.76-.54v-2.1c-3.11.68-3.77-1.34-3.77-1.34-.51-1.3-1.24-1.64-1.24-1.64-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.4-1.22.72-1.5-2.49-.28-5.1-1.24-5.1-5.53 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.22 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.25-5.12 5.52.41.35.76 1.04.76 2.1v3.11c0 .3.2.65.77.54 4.44-1.47 7.64-5.66 7.64-10.6C23.25 5.48 18.27.5 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      className={className}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function XIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      className={className}
    >
      <path d="M18.9 2H22l-7.6 8.68L23 22h-6.9l-5.4-6.9L4.6 22H1.5l8.1-9.3L1 2h7.1l4.9 6.3L18.9 2Zm-2.4 18h1.9L7.6 4H5.6l10.9 16Z" />
    </svg>
  );
}
