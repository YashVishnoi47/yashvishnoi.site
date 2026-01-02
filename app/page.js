import HeroSection from "@/components/sections/Home/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F9F9F9] flex flex-col justify-center items-center h-fit w-full max-w-360">
      <HeroSection />
    </div>
  );
}
