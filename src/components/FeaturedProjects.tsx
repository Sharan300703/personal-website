import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="font-black">✶ Featured work</p>
          <h2 className="mt-2 text-4xl font-black md:text-5xl">
            Featured Projects
          </h2>
          <div className="mt-2 h-2 w-56 bg-[#FF4F79]" />
        </div>

        <a
          href="#"
          className="hidden rounded-full border-2 border-[#151515] px-4 py-2 font-black md:block"
        >
          See all projects →
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
