type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  color: string;
};

export function ProjectCard({
  title,
  description,
  tags,
  color,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border-4 border-[#151515] bg-white shadow-[6px_6px_0_#151515] transition hover:-translate-y-1">
      <div
        className={`${color} flex h-40 items-center justify-center border-b-4 border-[#151515]`}
      >
        <span className="text-6xl font-black">✦</span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-black leading-tight">{title}</h3>
        <p className="mt-3 text-sm font-medium leading-relaxed">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded border-2 border-[#151515] bg-[#FFF7E8] px-2 py-1 text-xs font-black"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <a
            href="#"
            className="inline-block rounded-md border-2 border-[#151515] bg-[#FFD166] px-3 py-2 text-sm font-black shadow-[3px_3px_0_#151515] transition hover:-translate-y-0.5"
          >
            View case study →
          </a>
        </div>
      </div>
    </article>
  );
}
