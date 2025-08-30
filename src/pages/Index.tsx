import HeroSection from "@/components/HeroSection";
import ProofOfWorkSection from "@/components/ProofOfWorkSection";
import DiagonalGallerySection from "@/components/DiagonalGallerySection";
import AboutSection from "@/components/AboutSection";
import ProfessionalJourneySection from "@/components/ProfessionalJourneySection";
import TestimonialsSection from "@/components/TestimonialsSection";


const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProofOfWorkSection />
      <DiagonalGallerySection />
      <AboutSection />
      <ProfessionalJourneySection />
      <TestimonialsSection />
      
    </div>
  );
};

export default Index;
