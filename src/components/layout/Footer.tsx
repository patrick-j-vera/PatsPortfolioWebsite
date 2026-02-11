"use client";

import { IconGithub, IconLinkedin } from "@/components/icons";
import { socialLinks } from "@/lib/config";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: IconGithub,
  linkedin: IconLinkedin,
};

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 py-8 px-6 text-bark-muted">
      {/* Social icons — visible on mobile, hidden on larger screens with side elements */}
      <div className="flex items-center gap-6 md:hidden">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bark-light hover:text-honey transition-colors -translate-y-0.5 hover:-translate-y-1"
              aria-label={link.name}
            >
              {Icon && <Icon />}
            </a>
          );
        })}
      </div>

      <a
        href="https://github.com/patrick-j-vera"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-mono hover:text-honey transition-colors"
      >
        Built by Patrick Vera
      </a>
    </footer>
  );
}
