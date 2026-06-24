import { StickerLabel } from "./StickerLabel";

const skills = [
  { title: "Power Platform", color: "bg-[#FF4F79]", symbol: "⚡" },
  { title: "Web Apps", color: "bg-[#00B8A9]", symbol: "</>" },
  { title: "Data & BI", color: "bg-[#FFD166]", symbol: "📊" },
  { title: "Automation", color: "bg-[#3A86FF]", symbol: "⚙" },
  { title: "Business Systems", color: "bg-[#00B8A9]", symbol: "▦" },
  { title: "AI Tools", color: "bg-[#FF4F79]", symbol: "✦" },
];

const heroCtaBaseClass =
  "min-h-12 rounded-md border-2 border-[#151515] px-5 py-3 text-center font-black shadow-[5px_5px_0_#151515] transition hover:-translate-y-1 hover:shadow-[7px_7px_0_#151515] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#151515]";

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid max-w-7xl gap-7 px-4 py-6 sm:gap-8 sm:px-5 sm:py-8 md:grid-cols-2 md:gap-12 md:py-10"
    >
      <div className="flex flex-col justify-center">
        <StickerLabel className="-rotate-1 w-65 mb-2">
          Student · Developer · Builder
        </StickerLabel>

        <h1 className="max-w-2xl text-3xl font-black leading-[1.08] tracking-tight min-[360px]:text-4xl sm:text-5xl md:text-7xl md:leading-[1.02]">
          Building practical tools for real problems.
        </h1>

        <p className="mt-4 max-w-xl text-base font-medium leading-relaxed sm:mt-6 sm:text-lg">
          I'm a Computing and Information Systems student at the University of
          Melbourne and an Undergraduate Developer at Forvis Mazars. I build
          practical solutions across web, data, automation, and business
          systems.
        </p>

        <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row sm:mt-8 sm:gap-4">
          <a
            href="#projects"
            className={`${heroCtaBaseClass} bg-[#FF4F79] text-white`}
          >
            View Projects →
          </a>

          <a href="#contact" className={`${heroCtaBaseClass} bg-white`}>
            Contact Me →
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 self-center sm:grid-cols-2 sm:gap-4">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className={`${skill.color} relative overflow-hidden rounded-2xl border-4 border-[#151515] p-4 shadow-[5px_5px_0_#151515] sm:p-5 sm:shadow-[6px_6px_0_#151515] md:p-6`}
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#151515] bg-white text-xl font-black shadow-[3px_3px_0_#151515] sm:mb-6 sm:h-12 sm:w-12 sm:text-2xl md:mb-8 md:h-14 md:w-14 md:text-2xl">
              {skill.symbol}
            </div>
            <p className="w-fit max-w-full -rotate-2 bg-[#151515] px-3 py-1 text-sm font-black text-white sm:text-base">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
