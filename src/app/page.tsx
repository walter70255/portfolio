import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
