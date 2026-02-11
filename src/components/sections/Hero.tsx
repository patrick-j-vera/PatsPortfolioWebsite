"use client";

import { motion } from "framer-motion";
import StaggerChildren, {
  staggerChildVariant,
} from "@/components/animation/StaggerChildren";
import Button from "@/components/ui/Button";
import { heroData } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 max-w-5xl mx-auto"
    >
      <StaggerChildren>
        <motion.p
          variants={staggerChildVariant}
          className="font-mono text-honey text-base md:text-lg mb-4"
        >
          {heroData.greeting}
        </motion.p>

        <motion.h1
          variants={staggerChildVariant}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-bark leading-tight"
        >
          {heroData.name}
        </motion.h1>

        <motion.h2
          variants={staggerChildVariant}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-bark-muted leading-tight mt-2"
        >
          {heroData.tagline}
        </motion.h2>

        <motion.p
          variants={staggerChildVariant}
          className="text-bark-light max-w-lg mt-6 text-base md:text-lg leading-relaxed"
        >
          {heroData.bio}
        </motion.p>

        <motion.div variants={staggerChildVariant} className="mt-10">
          <Button href="#my-story" large>
            {heroData.cta}
          </Button>
        </motion.div>
      </StaggerChildren>
    </section>
  );
}
