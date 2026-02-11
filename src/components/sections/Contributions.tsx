"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/animation/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { projectsData } from "@/lib/data";
import { ANIMATION } from "@/lib/constants";

const INITIAL_COUNT = 3;

export default function Contributions() {
  const [showAll, setShowAll] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const visibleProjects = showAll
    ? projectsData
    : projectsData.slice(0, INITIAL_COUNT);

  return (
    <section
      id="contributions"
      className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto"
    >
      <ScrollReveal>
        <SectionHeading number="04" title="Contributions" />
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleProjects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={
              shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: ANIMATION.fadeUpDistance }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : ANIMATION.duration,
              delay: shouldReduceMotion ? 0 : i * ANIMATION.scrollStagger,
              ease: [0.645, 0.045, 0.355, 1],
            }}
          >
            <Card project={project} />
          </motion.div>
        ))}
      </div>

      {projectsData.length > INITIAL_COUNT && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="border border-honey text-honey font-mono text-sm px-8 py-3 rounded hover:bg-honey-subtle transition-colors"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}
