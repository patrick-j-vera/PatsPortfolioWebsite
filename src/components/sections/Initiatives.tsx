"use client";

import ScrollReveal from "@/components/animation/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import FeaturedCard from "@/components/ui/FeaturedCard";
import { featuredProjectsData } from "@/lib/data";

export default function Initiatives() {
  return (
    <section
      id="initiatives"
      className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto"
    >
      <ScrollReveal>
        <SectionHeading number="03" title="Initiatives" />
      </ScrollReveal>

      {featuredProjectsData.map((project, i) => (
        <ScrollReveal key={project.title}>
          <FeaturedCard project={project} index={i} />
        </ScrollReveal>
      ))}
    </section>
  );
}
