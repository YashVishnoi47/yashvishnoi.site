import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/about/AboutSection";
import CtaCardSection from "@/components/sections/CtaCard/CtaCardSection";
import FaqSection from "@/components/sections/FAQ/FaqSection";
import HeroSection from "@/components/sections/Home/HeroSection";
import PerksComponent from "@/components/sections/perks/PerksComponent";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import ServiceCards from "@/components/sections/Services/ServiceCards";
import ServiceSection from "@/components/sections/Services/ServiceSection";
import UniqueSection from "@/components/sections/unique/UniqueSection";

export default function Home() {
  return (
    <div className="bg-bg-k flex flex-col justify-center items-center h-fit w-full max-w-360 relative ">
      <HeroSection />
      <ServiceSection />
      <ProjectsSection />
      {/* remove unique and add service packs */}
      {/* <UniqueSection /> */}
      <ServiceCards />
      <PerksComponent />
      {/* Add Web+ Monlthy plannn */}
      <AboutSection />
      <FaqSection />
    </div>
  );
}
