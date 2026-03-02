import AboutSection from "@/components/sections/about/AboutSection";
import FaqSection from "@/components/sections/FAQ/FaqSection";
import HeroSection from "@/components/sections/Home/HeroSection";
import PerksComponent from "@/components/sections/perks/PerksComponent";
import ProjectsCTA from "@/components/sections/projects/ProjectsCTA";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import OngoingCard from "@/components/sections/Services/OngoingCard";
import ServiceCards from "@/components/sections/Services/ServiceCards";
import ServiceSection from "@/components/sections/Services/ServiceSection";

export default function Home() {
  return (
    <div className="bg-bg-k flex flex-col justify-center items-center h-fit w-full mx-w-360 relative ">
      <HeroSection />
      <ServiceSection />
      <ProjectsSection />
      <ProjectsCTA />
      <ServiceCards />
      {/* <OngoingCard />  */}
      <PerksComponent />
      <AboutSection />
      <FaqSection />
    </div>
  );
}
