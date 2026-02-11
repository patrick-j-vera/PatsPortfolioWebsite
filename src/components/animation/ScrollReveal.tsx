"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ANIMATION } from "@/lib/constants";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  width?: "fit" | "full";
}

export default function ScrollReveal({
  children,
  className,
  width = "full",
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: ANIMATION.fadeUpDistance }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: shouldReduceMotion ? 0 : ANIMATION.duration,
        ease: [0.645, 0.045, 0.355, 1],
      }}
      className={className}
      style={width === "fit" ? { width: "fit-content" } : undefined}
    >
      {children}
    </motion.div>
  );
}
