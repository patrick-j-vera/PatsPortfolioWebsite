"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/animation/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiencesData } from "@/lib/data";

export default function Impact() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="impact"
      className="py-24 px-6 md:px-12 lg:px-24 max-w-3xl mx-auto"
    >
      <ScrollReveal>
        <SectionHeading number="02" title="Impact" />

        <div className="flex flex-col md:flex-row gap-6">
          {/* Tab list */}
          <div
            className="relative flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-sand-border"
            role="tablist"
            aria-label="Experience tabs"
          >
            {experiencesData.map((exp, i) => (
              <button
                key={exp.organization}
                role="tab"
                aria-selected={activeTab === i}
                aria-controls={`panel-${i}`}
                id={`tab-${i}`}
                onClick={() => setActiveTab(i)}
                className={`relative whitespace-nowrap text-left px-5 py-3 text-sm font-mono transition-colors ${
                  activeTab === i
                    ? "text-honey bg-honey-subtle/50"
                    : "text-bark-muted hover:text-honey hover:bg-honey-subtle/30"
                }`}
              >
                {exp.organization}
                {activeTab === i && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 md:bottom-auto md:left-0 md:top-0 h-0.5 md:h-full md:w-0.5 w-full md:rounded-r bg-honey"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab panels */}
          <div className="flex-1 min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                role="tabpanel"
                id={`panel-${activeTab}`}
                aria-labelledby={`tab-${activeTab}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-lg font-sans font-semibold text-bark">
                  {experiencesData[activeTab].title}{" "}
                  <a
                    href={experiencesData[activeTab].url}
                    className="text-honey hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @ {experiencesData[activeTab].organization}
                  </a>
                </h3>

                <p className="font-mono text-sm text-bark-muted mt-1 mb-6">
                  {experiencesData[activeTab].range}
                </p>

                <ul className="space-y-3">
                  {experiencesData[activeTab].points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-bark-light text-sm leading-relaxed">
                      <span className="text-honey mt-1.5 shrink-0">&#9656;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
