"use client";

import ScrollReveal from "@/components/animation/ScrollReveal";
import Button from "@/components/ui/Button";
import { connectData } from "@/lib/data";
import { email } from "@/lib/config";

export default function Connect() {
  return (
    <section
      id="connect"
      className="py-24 px-6 md:px-12 lg:px-24 max-w-2xl mx-auto text-center"
    >
      <ScrollReveal>
        <p className="font-mono text-honey text-base mb-4">05. What&apos;s Next?</p>

        <h2 className="font-serif text-4xl md:text-5xl font-bold text-bark mb-6">
          {connectData.heading}
        </h2>

        <p className="text-bark-light leading-relaxed mb-10 max-w-lg mx-auto">
          {connectData.message}
        </p>

        <Button href={`mailto:${email}`} large>
          {connectData.cta}
        </Button>
      </ScrollReveal>
    </section>
  );
}
