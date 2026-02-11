import Image from "next/image";
import { IconGithub, IconExternal } from "@/components/icons";
import type { FeaturedProject } from "@/types";

interface FeaturedCardProps {
  project: FeaturedProject;
  index: number;
}

export default function FeaturedCard({ project, index }: FeaturedCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-12 items-center gap-2 mb-16 last:mb-0">
      {/* Project image */}
      <div
        className={`col-span-12 md:col-span-7 relative rounded-lg overflow-hidden aspect-video bg-warm-surface ${
          isEven ? "md:col-start-1" : "md:col-start-6"
        } row-start-1`}
      >
        <div className="absolute inset-0 bg-honey/20 hover:bg-transparent transition-colors duration-300 z-10" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Project content */}
      <div
        className={`col-span-12 md:col-span-7 relative z-20 row-start-1 ${
          isEven
            ? "md:col-start-6 md:text-right"
            : "md:col-start-1 md:text-left"
        } bg-warm-surface/95 md:bg-transparent p-6 md:p-0 rounded-lg md:rounded-none`}
      >
        <p className="font-mono text-honey text-sm mb-2">Featured Initiative</p>
        <h3 className="text-2xl font-serif font-bold text-bark mb-4">
          {project.title}
        </h3>

        <div className="md:bg-warm-surface md:rounded-lg md:p-6 md:shadow-md mb-4">
          <p className="text-bark-light text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <ul
          className={`flex flex-wrap gap-3 mb-4 font-mono text-xs text-bark-muted ${
            isEven ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div
          className={`flex gap-4 ${
            isEven ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bark hover:text-honey transition-colors"
              aria-label={`GitHub link for ${project.title}`}
            >
              <IconGithub />
            </a>
          )}
          {project.external && (
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bark hover:text-honey transition-colors"
              aria-label={`External link for ${project.title}`}
            >
              <IconExternal />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
