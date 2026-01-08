import AboutSection from "@/components/sections/about/AboutSection";
import CtaCardSection from "@/components/sections/CtaCard/CtaCardSection";
import FaqSection from "@/components/sections/FAQ/FaqSection";
import HeroSection from "@/components/sections/Home/HeroSection";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import ServiceSection from "@/components/sections/Services/ServiceSection";
import UniqueSection from "@/components/sections/unique/UniqueSection";
import Cursor from "@/components/ui/Cursor";

export default function Home() {
  return (
    <div className="bg-[#F9F9F9] flex flex-col justify-center items-center h-fit w-full max-w-360 relative">
      <HeroSection />
      <ServiceSection />
      <ProjectsSection />
      <UniqueSection />
      <AboutSection />
      <FaqSection />
      <CtaCardSection />
      
    </div>
  );
}
