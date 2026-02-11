import { IconFolder, IconGithub, IconExternal } from "@/components/icons";
import type { Project } from "@/types";

interface CardProps {
  project: Project;
}

export default function Card({ project }: CardProps) {
  return (
    <div className="group relative flex flex-col bg-warm-surface rounded-lg p-7 h-full hover:translate-y-[-5px] transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="flex justify-between items-start mb-6">
        <IconFolder className="h-10 w-10 text-honey" />
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bark-light hover:text-honey transition-colors"
              aria-label={`GitHub link for ${project.title}`}
            >
              <IconGithub className="h-5 w-5" />
            </a>
          )}
          {project.external && (
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bark-light hover:text-honey transition-colors"
              aria-label={`External link for ${project.title}`}
            >
              <IconExternal className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-lg font-serif font-bold text-bark mb-2 group-hover:text-honey transition-colors">
        {project.title}
      </h3>

      <p className="text-sm text-bark-light leading-relaxed flex-1 mb-6">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="text-xs font-mono text-bark-muted"
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
