"use client";
import Image from "next/image";
import React, { useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, useScroll, useTransform } from "framer-motion";
import { Spotlight } from "@/components/motion-primitives/spotlight";

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      transition={{ type: "spring", stiffness: 800, damping: 2 }}
      id="about"
      className="w-full min-h-180 flex justify-center items-center lg:flex-row flex-col bg-white rounded-xl p-12 border-black/30 mt-37.5 mb-40  relative "
    >
      <Spotlight
        className="bg-[#7C3AED] blur-2xl"
        size={40}
        springOptions={{
          bounce: 1,
          duration: 1,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      `,
          backgroundSize: "40px 40px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
        }}
      /> 

      <div className="w-165 h-fit flex gap-6 flex-col justify-start items-start border-black relative z-10">
        <h1 className="text-[40px] font-medium text-left">
          Who’s really doing all of this
        </h1>

        <span className="text-[20px] text-left text-[#595F66]">
          Hi, <span className="font-bold">I’m Yash</span>. I build modern web
          applications with a strong focus on clarity, scalability, and
          <span className="font-bold"> real-world usability</span>.{" "}
        </span>
        <span className="text-[20px] text-left text-[#595F66]">
          I work mainly with <span className="font-bold">Next.js</span> and the
          modern JavaScript ecosystem, building{" "}
          <span className="font-bold">full-stack products</span> that are clean
          on the frontend and reliable on the backend.
        </span>
        <span className="text-[20px] text-left text-[#595F66]">
          People often label this as{" "}
          <span className="font-bold">“full-stack development,”</span> but I
          prefer to think of it as solving problems end-to-end — from
          understanding the idea to shipping something that actually works and
          scales.
        </span>

        <div className="flex gap-4 w-full justify-start items-center border-black">
          {[
            { name: "Github", link: "/socials/github.svg" },
            { name: "Twitter", link: "/socials/twitter.svg" },
            { name: "LinkedIn", link: "/socials/linkedin.svg" },
          ].map((item, idx) => (
            <Tooltip key={idx}>
              <TooltipTrigger>
                <Image
                  className="cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                  src={item.link}
                  alt={item}
                  width={20}
                  height={20}
                />
              </TooltipTrigger>
              <TooltipContent>{item.name}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>

      <div className="w-125 h-fit flex justify-end items-center  border-black relative z-10">
        <div className="w-75 h-75 rounded-[40px] bg-gray-400 rotate-3" />
      </div>
    </motion.div>
  );
};

export default AboutSection;
