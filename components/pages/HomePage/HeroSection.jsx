"use client";
import React, { useState } from "react";
import PrimaryButtonV2 from "@/components/ui/PrimaryButtonV2";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


const HeroSection = () => {
  // No Hassle. No BS. Just Results.
  return (
    <div
      className={cn(
        "w-full h-fit",
        "flex flex-col gap-8 justify-center items-start mt-30",
      )}
    >
      <CTALabel />

      <h1 className="text-h1 md:w-[100%] w-full text-main-text text-balance font-head tracking-tight leading-[1.27]">
        Extremely Good Looking Websites for{" "}
        <span className="relative px-0.5">
          <span className="relative z-2">Businesses and Startups</span>{" "}
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className={
              "absolute inset-0 bg-accent-main overflow-hidden  rounded-[4px] z-3"
            }
          >
            <span className="relative text-main-bg shrink-0 whitespace-nowrap">
              Businesses and Startups
            </span>{" "}
          </motion.span>
        </span>
      </h1>

      <h2 className="text-[18px] w-[70%] text-sec-text text-pretty font-body mt-1">
       I'm a full-stack developer who builds high-performing websites for businesses and startups. From design to deployment, I focus on speed, clarity, and conversion — so your site doesn't just look good, it actually brings in customers.



      </h2>

      <div className="w-full flex justify-start items-start gap-4 mt-2">
        <PrimaryButtonV2 text={"Start a Project"} />
        <SecondaryButton text={"Learn More"} />
      </div>
    </div>
  );
};

const CTALabel = () => {
  const [hovered, setHovered] = useState(false);
  const easing = [0.19, 1, 0.22, 1];
  const MotionArrowRight = motion(ArrowRight);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "rounded-full  border border-main-border text-sec-text font-label bg-sec-bg flex gap-3 justify-center items-center cursor-pointer relative overflow-hidden",
        hovered ? "p-1" : "py-1 px-2 ",
      )}
    >
      <motion.div
        style={{ order: hovered ? 1 : 0 }}
        layout
        transition={{ duration: 0.9, ease: easing }}
        initial={{ rotate: 0 }}
        animate={{
          rotate: hovered ? 360 : 0,
          height: hovered ? "20px" : "10px",
          width: hovered ? "20px" : "10px",
        }}
        className={cn(
          "z-2 bg-accent-main flex justify-center items-center rounded-full",
          !hovered && "animate-pulse",
        )}
      >
        <AnimatePresence>
          {hovered && (
            <MotionArrowRight
              size={16}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-main-text"
            />
          )}
        </AnimatePresence>
      </motion.div>

      <motion.span
        style={{ order: hovered ? 0 : 1 }}
        layout
        transition={{ duration: 0.9, ease: easing }}
        className="text-[13px] tracking-wide mr-2"
      >
        Available for new projects
      </motion.span>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: hovered ? "100%" : 0 }}
        transition={{ duration: 0.9, ease: easing }}
        className="absolute flex justify-center items-center text-[13px] tracking-wider inset-0 z-1 pointer-events-none bg-sec-bg h-full"
      >
        {hovered && <p className="shrink-0">Start a new Project</p>}
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
