import { cn } from "@/lib/utils";
import HeadingBox from "@/components/layout/HeadingBox";
import HeroSection from "@/components/pages/HomePage/HeroSection";
import ServicesSection from "@/components/pages/HomePage/ServicesSection";
import WorkSection from "@/components/pages/HomePage/WorkSection";
import ProcessSection from "@/components/pages/HomePage/ProcessSection";
import AboutSection from "@/components/pages/HomePage/AboutSection";
import FAQ from "@/components/pages/HomePage/FAQ";

export default function Home() {
  return (
    <div
      className={cn(
        "min-h-fit w-full relative",
        "flex flex-col justify-start items-center sm:px-0 p-2 gap-40",
      )}
    >
      <HeroSection />

      <div className="w-full flex flex-col gap-20 justify-center items-center">
        <HeadingBox
          heading={"Products and systems I've shipped"}
          subheading={
            "A mix of client engineering and my own product, built end to end — design through deployment."
          }
          tag={"Selected work"}
        />

        <WorkSection />
      </div>

      <div className="w-full flex flex-col gap-20 justify-center items-center">
        <HeadingBox
          heading={"Full-Service Website Development"}
          subheading={
            "Three stages. No lengthy discovery decks — just a working system, fast."
          }
          tag={"Services"}
        />

        <ServicesSection />
      </div>

      {/* <div className="w-full flex flex-col gap-20 justify-center items-center">
        <HeadingBox
          heading={"We take care of things from start to finish"}
          subheading={
            "From first call to fully deployed — no bloated deliverables, no handoffs, just execution."
          }
          tag={"Process"}
        />

        <ProcessSection />
      </div> */}

      <div className="w-full flex flex-col gap-20 justify-center items-center">
        <HeadingBox
          heading={"The person behind the code"}
          subheading={
            "Know your developer. Get to know the person behind the code."
          }
          tag={"About"}
        />

        <AboutSection />
      </div>

      <div className="w-full flex flex-col gap-20 justify-center items-center">
        <HeadingBox
          heading={"Got Questions?"}
          subheading={"Straight answers to what clients ask before we start."}
          tag={"FAQs"}
        />

        <FAQ />
      </div>

      <div className="h-screen"></div>
    </div>
  );
}
