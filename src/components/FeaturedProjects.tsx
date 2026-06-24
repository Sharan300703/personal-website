import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { StickerLabel } from "./StickerLabel";

const sectionCtaClass =
  "hidden rounded-full border-2 border-[#151515] px-4 py-2 font-black transition hover:-translate-y-1 hover:shadow-[4px_4px_0_#151515] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#151515] md:block";

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-14 md:py-16"
    >
      <div className="mb-7 flex items-end justify-between gap-4 sm:mb-8">
        <div className="min-w-0">
          <h2 className="mt-2 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <div className="mt-2 h-2 w-44 max-w-full bg-[#FF4F79] sm:w-56" />
        </div>

        <a
          href="#"
          className={sectionCtaClass}
        >
          See all projects →
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
