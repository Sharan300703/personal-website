const skills = [
  { title: "Power Apps", color: "bg-[#FF4F79]", symbol: "◆" },
  { title: "Data", color: "bg-[#00B8A9]", symbol: "▰▰▰" },
  { title: "Automation", color: "bg-[#FFD166]", symbol: "⚙" },
  { title: "Web", color: "bg-[#3A86FF]", symbol: "</>" },
  { title: "Cyber", color: "bg-[#00B8A9]", symbol: "⌁" },
  { title: "Melbourne", color: "bg-white", symbol: "VIC" },
];

const heroCtaBaseClass =
  "min-h-12 rounded-md border-2 border-[#151515] px-5 py-3 text-center font-black shadow-[5px_5px_0_#151515] transition hover:-translate-y-1 hover:shadow-[7px_7px_0_#151515] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#151515]";

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid max-w-7xl gap-7 px-4 py-8 sm:gap-8 sm:px-5 sm:py-12 md:grid-cols-2 md:gap-12 md:py-24"
    >
      <div className="flex flex-col justify-center">
        <span className="mb-3 w-fit rounded-md border-2 border-[#151515] bg-[#00B8A9] px-3 py-1 text-sm font-black uppercase shadow-[3px_3px_0_#151515] sm:mb-5 sm:text-base">
          Hi, I&apos;m Sharan
        </span>

        <h1 className="max-w-2xl text-3xl font-black leading-[1.03] tracking-tight min-[360px]:text-4xl sm:text-5xl md:text-7xl md:leading-[0.95]">
          Building useful systems with{" "}
          <span className="relative inline-block">
            personality.
            <span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#FF4F79] sm:h-4" />
          </span>
        </h1>

        <p className="mt-4 max-w-xl text-base font-medium leading-relaxed sm:mt-6 sm:text-lg">
          Computing student, developer, and builder based in Melbourne. I love
          turning ideas into practical systems that make work and life easier.
        </p>

        <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row sm:mt-8 sm:gap-4">
          <a
            href="#projects"
            className={`${heroCtaBaseClass} bg-[#FF4F79] text-white`}
          >
            View Projects →
          </a>

          <a
            href="#blog"
            className={`${heroCtaBaseClass} bg-white`}
          >
            Read Blog →
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 self-center sm:grid-cols-2 sm:gap-4">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className={`${skill.color} relative overflow-hidden rounded-2xl border-4 border-[#151515] p-4 shadow-[5px_5px_0_#151515] sm:p-5 sm:shadow-[6px_6px_0_#151515] md:p-6`}
          >
            <span className="absolute right-4 top-3 text-lg font-black text-[#151515]/25">
              ✦
            </span>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#151515] bg-white text-xl font-black shadow-[3px_3px_0_#151515] sm:mb-6 sm:h-12 sm:w-12 sm:text-2xl md:mb-8 md:h-14 md:w-14 md:text-3xl">
              {skill.symbol}
            </div>
            <p className="w-fit max-w-full rotate-[-2deg] bg-[#151515] px-3 py-1 text-sm font-black text-white sm:text-base">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
