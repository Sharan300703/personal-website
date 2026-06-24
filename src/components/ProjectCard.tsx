type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  color: string;
};

const projectCardClass =
  "flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border-4 border-[#151515] bg-white shadow-[5px_5px_0_#151515] transition hover:-translate-y-1 hover:shadow-[7px_7px_0_#151515] sm:shadow-[6px_6px_0_#151515]";

const caseStudyLinkClass =
  "inline-flex min-h-11 max-w-full items-center justify-center rounded-md border-2 border-[#151515] bg-[#FFD166] px-3 py-2 text-center text-sm font-black shadow-[3px_3px_0_#151515] transition hover:-translate-y-1 hover:shadow-[5px_5px_0_#151515] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#151515]";

export function ProjectCard({
  title,
  description,
  tags,
  color,
}: ProjectCardProps) {
  return (
    <article className={projectCardClass}>
      <div
        className={`${color} flex h-32 items-center justify-center border-b-4 border-[#151515] sm:h-36 lg:h-40`}
      >
        <span className="text-6xl font-black">✦</span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="break-words text-lg font-black leading-tight sm:text-xl">
          {title}
        </h3>
        <p className="mt-3 text-sm font-medium leading-relaxed sm:text-[15px]">
          {description}
        </p>

        <div className="mt-5 flex min-w-0 flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="max-w-full break-words rounded border-2 border-[#151515] bg-[#FFF7E8] px-2 py-1 text-xs font-black leading-tight"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <a
            href="#"
            className={caseStudyLinkClass}
          >
            View case study →
          </a>
        </div>
      </div>
    </article>
  );
}
