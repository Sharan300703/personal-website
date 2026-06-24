const skills = [
  { title: "Power Apps", color: "bg-[#FF4F79]", symbol: "◆" },
  { title: "Data", color: "bg-[#00B8A9]", symbol: "▰▰▰" },
  { title: "Automation", color: "bg-[#FFD166]", symbol: "⚙" },
  { title: "Web", color: "bg-[#3A86FF]", symbol: "</>" },
  { title: "Cyber", color: "bg-[#00B8A9]", symbol: "⌁" },
  { title: "Melbourne", color: "bg-white", symbol: "VIC" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:py-14 md:grid-cols-2 md:gap-12 md:py-24"
    >
      <div className="flex flex-col justify-center">
        <span className="mb-4 w-fit rounded-md border-2 border-[#151515] bg-[#00B8A9] px-3 py-1 font-black uppercase shadow-[3px_3px_0_#151515] sm:mb-5">
          Hi, I&apos;m Sharan
        </span>

        <h1 className="max-w-2xl text-4xl font-black leading-[1] tracking-tight sm:text-5xl md:text-7xl md:leading-[0.95]">
          Building useful systems with{" "}
          <span className="relative inline-block">
            personality.
            <span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#FF4F79] sm:h-4" />
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-base font-medium leading-relaxed sm:mt-6 sm:text-lg">
          Computing student, developer, and builder based in Melbourne. I love
          turning ideas into practical systems that make work and life easier.
        </p>

        <div className="mt-7 flex flex-col gap-4 min-[420px]:flex-row sm:mt-8">
          <a
            href="#projects"
            className="rounded-md border-2 border-[#151515] bg-[#FF4F79] px-6 py-3 text-center font-black text-white shadow-[5px_5px_0_#151515] transition hover:-translate-y-1"
          >
            View Projects →
          </a>

          <a
            href="#blog"
            className="rounded-md border-2 border-[#151515] bg-white px-6 py-3 text-center font-black shadow-[5px_5px_0_#151515] transition hover:-translate-y-1"
          >
            Read Blog →
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 self-center sm:grid-cols-2">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className={`${skill.color} relative overflow-hidden rounded-2xl border-4 border-[#151515] p-5 shadow-[6px_6px_0_#151515] sm:p-6`}
          >
            <span className="absolute right-4 top-3 text-lg font-black text-[#151515]/25">
              ✦
            </span>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#151515] bg-white text-2xl font-black shadow-[3px_3px_0_#151515] sm:mb-8 sm:h-14 sm:w-14 sm:text-3xl">
              {skill.symbol}
            </div>
            <p className="w-fit rotate-[-2deg] bg-[#151515] px-3 py-1 font-black text-white">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
