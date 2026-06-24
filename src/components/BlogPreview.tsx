import { posts } from "../data/posts";
import { StickerLabel } from "./StickerLabel";

const blogCardClass =
  "rounded-2xl border-4 border-[#151515] bg-white p-6 shadow-[6px_6px_0_#151515] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#151515]";

const blogCtaClass =
  "hidden rounded-full border-2 border-[#151515] px-4 py-2 font-black transition hover:-translate-y-1 hover:shadow-[4px_4px_0_#151515] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#151515] md:block";

export function BlogPreview() {
  return (
    <section id="blog" className="mx-auto max-w-7xl px-5 py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <StickerLabel className="rotate-[1deg]">✎ Latest writing</StickerLabel>
          <h2 className="mt-2 text-4xl font-black md:text-5xl">
            Latest from the Blog
          </h2>
          <div className="mt-2 h-2 w-64 bg-[#FF4F79]" />
        </div>

        <a
          href="#"
          className={blogCtaClass}
        >
          View all posts →
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className={blogCardClass}
          >
            <span className="inline-block rounded bg-[#00B8A9] px-2 py-1 text-xs font-black uppercase">
              {post.date}
            </span>

            <h3 className="mt-5 text-2xl font-black leading-tight">
              {post.title}
            </h3>
            <p className="mt-3 font-medium leading-relaxed">
              {post.description}
            </p>

            <p className="mt-6 text-sm font-black text-[#FF4F79]">
              {post.readTime} · {post.tag}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
