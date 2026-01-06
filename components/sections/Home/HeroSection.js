import CTAButton from "@/components/ui/CTAButton";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col gap-16 justify-center items-center min-h-165 borde border-black">
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <Tag />
        <MainHeading />
        <SubHeading />
      </div>

      <div className="w-full flex gap-6 justify-center items-center h-fit">
        <CTAButton />
        <CTAButton />
      </div>
    </div>
  );
};

export default HeroSection;

const MainHeading = () => {
  return (
    <h1 className="text-[60px] font-bold w-[70%] leading-17.5 tracking-[-0.02em] text-center">
      I create stunning digital experiences for businesses that want results.
    </h1>
  );
};

const SubHeading = () => {
  return (
    <p className="text-[22px] w-[55%] text-center text-[#595F66]">
      Creating high-impact digital experiences with unmatched speed and
      precision. No Hassle. No BS.{" "}
      <span className="font-bold">Just Results</span>.
    </p>
  );
};

const Tag = () => {
  return (
    <span className="bg-[#7C3AED]/10 rounded-sm border flex justify-center items-center gap-3 text-[13px] border-[#7C3AED]/5 px-2 py-1 cursor-pointer select-none">
      I will be adding a tagline or latest projects
      <div className="bg-white h-5 w-8.75 rounded-[2px] flex justify-center items-center">
        <ArrowRight height={18} width={18} />
      </div>
    </span>
  );
};
