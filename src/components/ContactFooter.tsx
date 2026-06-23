export function ContactFooter() {
  return (
    <footer id="contact" className="mx-auto max-w-7xl px-5 py-16">
      <div className="grid gap-8 rounded-3xl border-4 border-[#151515] bg-white p-8 shadow-[8px_8px_0_#151515] md:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-4xl font-black leading-tight">
            Let&apos;s build something great together.
          </h2>
          <div className="mt-3 h-2 w-60 bg-[#FF4F79]" />
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <a
            className="rounded-xl border-2 border-[#151515] bg-[#FFF7E8] p-4 font-black shadow-[4px_4px_0_#151515]"
            href="mailto:your-email@example.com"
          >
            ✉ Email Me →
          </a>

          <a
            className="rounded-xl border-2 border-[#151515] bg-[#FFF7E8] p-4 font-black shadow-[4px_4px_0_#151515]"
            href="https://github.com/"
            target="_blank"
          >
            GitHub →
          </a>

          <a
            className="rounded-xl border-2 border-[#151515] bg-[#FFF7E8] p-4 font-black shadow-[4px_4px_0_#151515]"
            href="https://linkedin.com/"
            target="_blank"
          >
            LinkedIn →
          </a>
        </div>
      </div>

      <p className="py-8 text-center text-sm font-bold">
        © 2026 Sharan. Built with ☕ and lots of curiosity.
      </p>
    </footer>
  );
}
