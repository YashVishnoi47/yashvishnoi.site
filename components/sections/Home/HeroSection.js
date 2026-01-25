"use client";
import ConnectPopOver from "@/components/shared/ConnectPopOver";
import { ArrowRight } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

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

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          bounce: 0.3,
          visualDuration: 0.5,
          stiffness: 50,
          delay: 1.4,
        }}
        className="w-full flex md:flex-row flex-col justify-center items-center gap-6"
      >
        <ConnectPopOver text={"Start a Project"} />

        <button
          data-text="Click to copy"
          type="button"
          onClick={() => handleCopy()}
          className="relative  px-8 py-4 rounded-lg text-sm font-medium text-black border border-black/10  bg-white/60 backdrop-blur-md shadow-sm transition-all duration-300 ease-out hover:border-[#7C3AED]/40 hover:text-[#7C3AED] hover:shadow-[#7C3AED]/30 active:scale-[0.98] cursor-pointer"
        >
          yashvishnoi309@gmail.com
        </button>
      </motion.div>
    </div>
  );
};

export default HeroSection;

const MainHeading = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeOut",
        duration: 0.7,
      }}
      className="lg:text-[60px] sm:text-[40px] text-[30px] font-bold lg:w-[70%] w-[90%] lg:leading-17.5 sm:leading-12 leading-9 tracking-[-0.02em] text-center"
    >
      I create stunning digital experiences for businesses that want growth.
    </motion.h1>
  );
};

const SubHeading = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeOut",
        duration: 1,
        delay: 0.7,
      }}
      className="lg:text-[22px] sm:text-[18px] lg:w-[55%] w-[70%] text-center text-[#595F66]"
    >
      Creating high-impact digital experiences with unmatched speed and
      precision. No Hassle. No BS.{" "}
      <span className="font-bold">Just Results</span>.
    </motion.p>
  );
};

const Tag = () => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1.4,
        duration: 1,
        ease: "easeOut",
      }}
      data-text="Explore the Selected work & case studies"
      className="bg-[#7C3AED]/15 rounded-sm border flex justify-center items-center gap-3 md:text-[13px] text-[10px] border-[#7C3AED]/5 px-2 py-1 cursor-pointer select-none ring-1 ring-white hover:ring-[#7C3AED] transition-all duration-300 ease-in-out active:scale-[0.95]"
    >
      Selected work & case studies
      <div className="bg-white h-5 w-8.75 rounded-[2px] flex justify-center items-center">
        <ArrowRight height={18} width={18} />
      </div>
    </motion.span>
  );
};
