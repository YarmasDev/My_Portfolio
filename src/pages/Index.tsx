import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ParticleField from "@/components/ParticleField";
import { LanguageProvider } from "@/context/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      {/* --- CAPAS DE FONDO GLOBALES (Aquí es donde ocurre la magia) --- */}
      <ParticleField /> 
      <div className="mesh-bg" /> 
      <div className="grid-overlay" />
      
      {/* main debe ser transparente para que se vea lo de atrás */}
      <main className="relative z-0 bg-transparent text-foreground min-h-screen">
        <Navbar />
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </LanguageProvider>
  );
};

export default Index;