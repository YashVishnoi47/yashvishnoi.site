import { cn } from "@/lib/utils";
import HeadingBox from "@/components/layout/HeadingBox";
import HeroSection from "@/components/pages/HomePage/HeroSection";
import ServicesSection from "@/components/pages/HomePage/ServicesSection";
import WorkSection from "@/components/pages/HomePage/WorkSection";
import AboutSection from "@/components/pages/HomePage/AboutSection";
import FAQ from "@/components/pages/HomePage/FAQ";
import AnimateAll from "@/components/layout/AnimateAll";

export default function Home() {
  return (
    <div
      className={cn(
        "min-h-fit w-full relative",
        "flex flex-col justify-start items-center sm:px-0 p-2 gap-40",
      )}
    >
      <HeroSection />

      <AnimateAll
        className={"w-full flex flex-col gap-20 justify-center items-center"}
        id={"work"}
      >
        <HeadingBox
          heading={"Products and systems I've shipped"}
          subheading={
            "A mix of client engineering and my own product, built end to end — design through deployment."
          }
          tag={"Selected work"}
        />

        <WorkSection />
      </AnimateAll>

      <AnimateAll
        id={"services"}
        className={"w-full flex flex-col gap-20 justify-center items-center"}
      >
        <HeadingBox
          heading={"End-to-End Web Development"}
          subheading={
            "From the first idea to a polished, production-ready website, I handle every stage of the build."
          }
          tag={"Services"}
        />

        <ServicesSection />
      </AnimateAll>

      <AnimateAll
        id={"about"}
        className={"w-full flex flex-col gap-20 justify-center items-center"}
      >
        <HeadingBox
          heading={"The person behind the code"}
          subheading={
            "Know your developer. Get to know the person behind the code."
          }
          tag={"About"}
        />

        <AboutSection />
      </AnimateAll>

      <AnimateAll
        id={"faq"}
        className={"w-full flex flex-col gap-20 justify-center items-center"}
      >
        <HeadingBox
          heading={"Got Questions?"}
          subheading={"Straight answers to what clients ask before we start."}
          tag={"FAQs"}
        />

        <FAQ />
      </AnimateAll>

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
    </div>
  );
}
