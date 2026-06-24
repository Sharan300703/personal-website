import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  // { label: "Blog", href: "#blog" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const resumeButtonClass =
  "rounded-md border-2 border-[#151515] bg-[#FFD166] font-black shadow-[4px_4px_0_#151515] transition hover:-translate-y-1 hover:shadow-[6px_6px_0_#151515] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#151515]";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#151515] bg-[#FFF7E8]/95 backdrop-blur">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-5 sm:py-4">
        <a
          href="#"
          className="relative shrink-0 text-2xl font-black tracking-tight sm:text-3xl"
        >
          Sharan
          <span className="absolute -right-5 -top-2 rotate-12 text-xl leading-none text-[#FF4F79]">
            ✦
          </span>
          <span className="absolute -bottom-1 left-0 h-1 w-full -rotate-1 rounded-full bg-[#FF4F79]" />
        </a>

        <div className="hidden items-center gap-8 font-bold md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className={`transition hover:text-[#FF4F79] ${
                link.href === "#home" ? "text-[#FF4F79]" : ""
              }`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`${resumeButtonClass} hidden px-4 py-2 md:block`}
        >
          Resume →
        </a>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className="min-h-11 rounded-md border-2 border-[#151515] bg-[#FFD166] px-4 py-2 font-black shadow-[3px_3px_0_#151515] transition hover:cursor-pointer active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_#151515] md:hidden  hover:-translate-y-1 hover:shadow-[6px_6px_0_#151515] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#151515]"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>

        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="absolute left-4 right-4 top-full mt-3 flex flex-col gap-2 rounded-lg border-4 border-[#151515] bg-[#FFF7E8] p-3 font-black shadow-[6px_6px_0_#151515] sm:left-5 sm:right-5 sm:p-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="min-h-11 rounded-md px-3 py-2.5 transition hover:bg-[#FFD166]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className={`${resumeButtonClass} mt-1 min-h-11 px-3 py-2.5 text-center active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_#151515]`}
            >
              Resume →
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
