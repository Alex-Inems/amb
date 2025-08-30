import HeroSection from "@/components/HeroSection";
import ProofOfWorkSection from "@/components/ProofOfWorkSection";
import DiagonalGallerySection from "@/components/DiagonalGallerySection";
import AboutSection from "@/components/AboutSection";
import ProfessionalJourneySection from "@/components/ProfessionalJourneySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProofOfWorkSection />
      <DiagonalGallerySection />
      <AboutSection />
      <ProfessionalJourneySection />
      <TestimonialsSection />
      <ProjectsSection />
    </div>
  );
};

export default Index;
