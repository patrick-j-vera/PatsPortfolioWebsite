"use client";

import { motion, useReducedMotion } from "framer-motion";
import { IconGithub, IconLinkedin } from "@/components/icons";
import { socialLinks, email } from "@/lib/config";
import { ANIMATION } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: IconGithub,
  linkedin: IconLinkedin,
};

export default function SideElements() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Left side — social links */}
      <motion.div
        className="hidden md:flex fixed bottom-0 left-6 lg:left-12 flex-col items-center gap-6"
        initial={shouldReduceMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: ANIMATION.duration,
          delay: shouldReduceMotion ? 0 : ANIMATION.delayChildren + 0.5,
        }}
      >
        {socialLinks.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bark-light hover:text-honey hover:-translate-y-0.5 transition-all duration-200"
              aria-label={link.name}
            >
              {Icon && <Icon />}
            </a>
          );
        })}
        <div className="w-px h-24 bg-bark-light" />
      </motion.div>

      {/* Right side — email */}
      <motion.div
        className="hidden md:flex fixed bottom-0 right-6 lg:right-12 flex-col items-center gap-6"
        initial={shouldReduceMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: ANIMATION.duration,
          delay: shouldReduceMotion ? 0 : ANIMATION.delayChildren + 0.5,
        }}
      >
        <a
          href={`mailto:${email}`}
          className="font-mono text-sm text-bark-light hover:text-honey hover:-translate-y-0.5 transition-all duration-200"
          style={{ writingMode: "vertical-rl" }}
        >
          {email}
        </a>
        <div className="w-px h-24 bg-bark-light" />
      </motion.div>
    </>
  );
}
