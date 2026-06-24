const contactLinkClass =
  "text-center rounded-xl border-2 border-[#151515] bg-[#FFF7E8] p-4 font-black shadow-[4px_4px_0_#151515] transition hover:-translate-y-1 hover:shadow-[6px_6px_0_#151515] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#151515]";

export function ContactFooter() {
  return (
    <footer id="contact" className="mx-auto max-w-7xl px-5 py-16">
      <div className="grid items-center gap-8 rounded-3xl border-4 border-[#151515] bg-white p-8 shadow-[8px_8px_0_#151515] md:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-4xl font-black leading-tight">
            My Contact Links
          </h2>
          <div className="mt-3 h-2 w-60 bg-[#FF4F79]" />
        </div>

        <div className="grid gap-4 self-center sm:grid-cols-2 lg:grid-cols-4">
          <a
            className={contactLinkClass}
            href="mailto:sharanvelambath6@gmail.com"
          >
            Email →
          </a>

          <a
            className={contactLinkClass}
            href="https://github.com/Sharan300703"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub →
          </a>

          <a
            className={contactLinkClass}
            href="https://www.linkedin.com/in/sharan-velambath/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn →
          </a>

          <a
            className={contactLinkClass}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume →
          </a>
        </div>
      </div>

      <p className="py-8 text-center text-sm font-bold">
        © 2026 Sharan Velambath.
      </p>
    </footer>
  );
}
