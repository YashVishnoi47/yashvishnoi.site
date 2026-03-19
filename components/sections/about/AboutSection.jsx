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
import Link from "next/link";
import { ScrollParallax } from "react-just-parallax";

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const bRadius = useTransform(scrollYProgress, [0, 1], [16, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      transition={{ type: "spring", stiffness: 800, damping: 2 }}
      id="about"
      className="w-full max-w-400 min-h-180 flex justify-center items-center lg:flex-row flex-col bg-bg-light rounded-xl p-12 border-black/30 mt-37.5 mb-40 relative lg:gap-0 gap-12"
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
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
          WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div className="lg:w-[46.2%] w-full h-fit flex gap-6 flex-col lg:justify-start justify-center lg:items-start items-center border-black relative z-10">
        <h1 className="lg:text-[40px] text-[30px] text-text font-medium lg:text-left text-center">
          Who’s really doing all of this
        </h1>

        <span className="lg:text-[20px] text-[18px]  lg:text-left text-center text-text-muted">
          Hi, <span className="font-bold">I’m Yash</span>. I build modern web
          applications with a strong focus on clarity, scalability, and
          <span className="font-bold"> real-world usability</span>.{" "}
        </span>
        <span className="lg:text-[20px] text-[18px]  lg:text-left text-center text-text-muted">
          I work mainly with <span className="font-bold">Next.js</span> and the
          modern JavaScript ecosystem, building{" "}
          <span className="font-bold">full-stack products</span> that are clean
          on the frontend and reliable on the backend.
        </span>
        <span className="lg:text-[20px] text-[18px]  lg:text-left text-center text-text-muted">
          People often label this as{" "}
          <span className="font-bold">“full-stack development,”</span> but I
          prefer to think of it as solving problems end-to-end — from
          understanding the idea to shipping something that actually works and
          scales.
        </span>

        <div className="lg:flex hidden gap-4 w-full justify-start items-center border-black">
          {[
            { name: "Github", link: "/socials/github.svg", url: "https://github.com/YashVishnoi47" },
            { name: "Twitter", link: "/socials/twitter.svg", url: "https://x.com/Yash_Vishnoi7" },
            { name: "LinkedIn", link: "/socials/linkedIn.svg", url: "https://www.linkedin.com/in/yash-vishnoi-654318384/" },
          ].map((item, idx) => (
            <Link key={idx} target="_blank" href={item.url} data-text={item.name}>
              <Image
                className="cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                src={item.link}
                alt={item}
                width={20}
                height={20}
              />
            </Link>

          ))}
        </div>
      </div>

      <div className="w-140 h-fit flex lg:justify-end justify-center items-center  border-black relative z-10">

        <div className="w-90 h-90 rounded-[40px] bg-gray-400 rotate-3 flex justify-center items-center overflow-hiden relative" >
          {/* <ScrollParallax className="absolute w-50 h-25 rounded-xl z-10000 bg-black/80 -bottom-10 -right-20">
            <div className="absolute w-50 h-25 rounded-xl z-10000 bg-black/80 -bottom-10 -right-20" />
            </ScrollParallax>
            <div className="absolute w-50 h-25 rounded-xl z-10000 bg-black/80 -top-10 -left-20" /> */}


          <div className="w-full h-full overflow-hidden">
            <Image src="/me/me.jpeg" alt="yash" className="object-cover w-full h-full rounded-[40px]" width={300} height={300} />

          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
