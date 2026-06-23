const skills = [
  ["Power Platform", "Power Apps, Automate, Power BI"],
  ["Data & Analytics", "Python, Excel, SQL, visualisation"],
  ["Web Development", "React, TypeScript, Tailwind CSS"],
  ["Automation", "Workflows, APIs, integrations"],
  ["Cloud & Tools", "Azure, SharePoint, GitHub"],
  ["Cyber Fundamentals", "Security concepts and best practices"],
  ["Problem Solving", "Analytical thinking, user-focused design"],
  ["Always Learning", "New tools, ideas, and perspectives"],
];

export function AboutSkills() {
  return (
    <section
      id="about"
      className="border-y-4 border-[#151515] bg-[#00B8A9] px-5 py-16"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.4fr]">
        <div className="rounded-2xl border-4 border-[#151515] bg-[#FFF7E8] p-6 shadow-[6px_6px_0_#151515]">
          <span className="mb-4 inline-block rotate-[-2deg] bg-[#FFD166] px-3 py-1 font-black">
            About Me
          </span>

          <h2 className="text-4xl font-black">
            I like building useful things.
          </h2>

          <p className="mt-5 font-medium leading-relaxed">
            I&apos;m Sharan, a computing student and developer based in
            Melbourne. I enjoy working at the intersection of technology and
            people — building systems that solve real problems clearly and
            thoughtfully.
          </p>

          <p className="mt-4 font-black">📍 Melbourne, Australia</p>
        </div>

        <div>
          <span className="mb-4 inline-block rotate-[1deg] bg-[#FFD166] px-3 py-1 font-black">
            What I Work With
          </span>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(([title, description]) => (
              <div
                key={title}
                className="rounded-xl border-2 border-[#151515] bg-[#FFF7E8] p-4 shadow-[4px_4px_0_#151515]"
              >
                <h3 className="font-black">{title}</h3>
                <p className="mt-2 text-sm font-medium">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
