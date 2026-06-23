import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#151515] bg-[#FFF7E8]/95 backdrop-blur">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#" className="relative text-3xl font-black tracking-tight">
          Sharan
          <span className="absolute -right-5 -top-2 text-[#FF4F79]">*</span>
          <span className="absolute -bottom-1 left-0 h-1 w-full bg-[#FF4F79]" />
        </a>

        <div className="hidden items-center gap-8 font-bold md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className={link.href === "#home" ? "text-[#FF4F79]" : undefined}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-md border-2 border-[#151515] bg-[#FFD166] px-4 py-2 font-black shadow-[4px_4px_0_#151515] md:block"
        >
          Always Building
        </a>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className="rounded-md border-2 border-[#151515] bg-white px-3 py-2 font-black shadow-[3px_3px_0_#151515] md:hidden"
        >
          Menu
        </button>

        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="absolute left-5 right-5 top-full mt-3 flex flex-col gap-3 rounded-lg border-4 border-[#151515] bg-[#FFF7E8] p-4 font-black shadow-[6px_6px_0_#151515] md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-2 py-2 hover:bg-[#FFD166]"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
