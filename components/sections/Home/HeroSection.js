"use client";
import AniButton1 from "@/components/ui/AniButton1";
import CTAButton from "@/components/ui/CTAButton";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import React from "react";
import { toast } from "sonner";

const HeroSection = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("email@gmail.com");
    toast.success("Email has been copied to clipboard.");
  };

  return (
    <div className="w-full flex flex-col gap-16 justify-center items-center min-h-165 borde border-black">
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <Tag />
        <MainHeading />
        <SubHeading />
      </div>

      <div className="w-full flex md:flex-row flex-col justify-center items-center gap-6">
        <AniButton1 text={"Start a Project"} />
        <button
          data-text="Click to copy"
          type="button"
          onClick={() => handleCopy()}
          className="relative  px-8 py-4 rounded-lg text-sm font-medium text-black border border-black/10  bg-white/60 backdrop-blur-md shadow-sm transition-all duration-300 ease-out hover:border-[#7C3AED]/40 hover:text-[#7C3AED] hover:shadow-[#7C3AED]/30 active:scale-[0.98] cursor-pointer"
        >
          yashvishnoi309@gmail.com
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

const MainHeading = () => {
  return (
    <h1 className="lg:text-[60px] sm:text-[40px] text-[30px] font-bold lg:w-[70%] w-[90%] lg:leading-17.5 sm:leading-12 leading-9 tracking-[-0.02em] text-center">
      I create stunning digital experiences for businesses that want results.
    </h1>
  );
};

const SubHeading = () => {
  return (
    <p className="lg:text-[22px] sm:text-[18px] lg:w-[55%] w-[70%] text-center text-[#595F66]">
      Creating high-impact digital experiences with unmatched speed and
      precision. No Hassle. No BS.{" "}
      <span className="font-bold">Just Results</span>.
    </p>
  );
};

const Tag = () => {
  return (
    <span
      data-text="Explore the Selected work & case studies"
      className="bg-[#7C3AED]/10 rounded-sm border flex justify-center items-center gap-3 md:text-[13px] text-[10px] border-[#7C3AED]/5 px-2 py-1 cursor-pointer select-none ring-1 ring-white hover:ring-[#7C3AED] transition-all duration-300 ease-in-out"
    >
      Selected work & case studies
      <div className="bg-white h-5 w-8.75 rounded-[2px] flex justify-center items-center">
        <ArrowRight height={18} width={18} />
      </div>
    </span>
  );
};
