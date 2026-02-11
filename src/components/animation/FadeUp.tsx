"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ANIMATION } from "@/lib/constants";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: ANIMATION.fadeUpDistance }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : ANIMATION.duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.645, 0.045, 0.355, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
