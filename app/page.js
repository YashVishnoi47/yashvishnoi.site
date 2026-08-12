import HeroSection from "@/components/pages/HomePage/HeroSection";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div
      className={cn(
        "h-screen w-full relative",
        "flex flex-col justify-start items-center sm:px-0 p-2",
      )}
    >
      <HeroSection />
    </div>
  );
}
