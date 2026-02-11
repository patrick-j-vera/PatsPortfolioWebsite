"use client";

import Image from "next/image";
import ScrollReveal from "@/components/animation/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillTag from "@/components/ui/SkillTag";
import { myStoryData } from "@/lib/data";

export default function MyStory() {
  return (
    <section
      id="my-story"
      className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto"
    >
      <ScrollReveal>
        <SectionHeading number="01" title="My Story" />

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            {myStoryData.paragraphs.map((p, i) => (
              <p key={i} className="text-bark-light leading-relaxed">
                {p}
              </p>
            ))}

            <div className="pt-4">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {myStoryData.skills.map((skill) => (
                  <li key={skill}>
                    <SkillTag>{skill}</SkillTag>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-1 flex justify-center">
            <div className="relative group w-64 h-64 md:w-full md:h-auto md:aspect-square">
              <div className="absolute inset-0 border-2 border-honey rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-warm-surface">
                <Image
                  src="/images/profile-placeholder.svg"
                  alt="Patrick Vera"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-honey/10 hover:bg-transparent transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
