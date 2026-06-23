import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { AboutSkills } from "../components/AboutSkills";
import { BlogPreview } from "../components/BlogPreview";
import { ContactFooter } from "../components/ContactFooter";

export function Home() {
  return (
    <main className="min-h-screen bg-[#FFF7E8] text-[#151515]">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <AboutSkills />
      <BlogPreview />
      <ContactFooter />
    </main>
  );
}
