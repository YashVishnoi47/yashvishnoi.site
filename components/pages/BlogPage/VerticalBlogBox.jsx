"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const VerticalBlogBox = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      href="/"
      className="w-full h-fit bg-card-bg border border-main-border hover:border-accent-border overflow-hidden transition-all duration-200  ease-in-out rounded-[12px] flex flex-col-reverse shadow-lg shadow-bg-main hover:shadow-accent-tint justify-start items-start gap-8"
    >
      <div className="h-full pb-4 w-[90%] flex gap-4 flex-col justify-start items-start px-4">
        <p className="text-main-text font-head leading-tight text-[24px]">
          Building an AI receptionist that doesn't sound like one
        </p>
        <p className="text-[14px] w-full text-sec-text text-pretty tracking-wide leading-[1.5]">
          Most voice AI demos are impressive for thirty seconds and unbearable
          after two minutes. Notes on the specific decisions.
        </p>

        <div className="mt-4 w-full flex justify-between items-center">
          <ProjectButton hovered={hovered} text={"Read More"} />
        </div>
      </div>

      <div className="w-full aspect-video flex justify-center items-center wfull bg-sec-bg relative border-b border-main-border">
        <div className="w-[85%] h-[220px]  flex justify-center items-center p-1 rounded-[8px]"></div>

        <p className="text-[10px] text-accent-main font-label uppercase tracking-wider absolute top-4 right-4 p-2 bg-accent-tint rounded-[4px]">
          12 min read - {new Date().toDateString({})}
        </p>
      </div>
    </Link>
  );
};

export default VerticalBlogBox;

const ProjectButton = ({ text, hovered }) => {
  const easing = [0.19, 1, 0.22, 1];
  const MotionArrowRight = motion(ArrowRight);

  return (
    <motion.div
      className={cn(
        "rounded-[4px] border border-main-border  font-label flex gap-3 justify-center items-center cursor-pointer relative overflow-hidden",
        hovered ? "p-1" : "py-1 px-1 ",
      )}
    >
      <motion.div
        style={{ order: hovered ? 1 : 0 }}
        layout
        transition={{ duration: 0.9, ease: easing }}
        initial={{ rotate: 0 }}
        animate={
          {
            //   rotate: hovered ? 360 : 0,
          }
        }
        className={cn(
          "z-2 size-[20px] bg-accent-main flex justify-center items-center rounded-[4px]",
        )}
      >
        <MotionArrowRight
          size={16}
          initial={{ rotate: -45 }}
          animate={{ rotate: hovered ? 0 : -45 }}
          transition={{ duration: 0.9, ease: easing }}
          className="text-main-text"
        />
      </motion.div>

      <motion.span
        style={{ order: hovered ? 0 : 1 }}
        layout
        transition={{ duration: 0.9, ease: easing }}
        initial={false}
        className={cn(
          "sm:text-[12px] text-[9px] tracking-wide",
          !hovered ? "mr-2" : "ml-2",
          hovered ? "text-accent-main" : "text-main-text",
        )}
      >
        {text || " View Live Site"}
      </motion.span>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: hovered ? "100%" : 0 }}
        transition={{ duration: 0.9, ease: easing }}
        className={cn(
          "absolute flex justify-center items-center sm:text-[13px] text-[9px] tracking-wider inset-0 z-1 pointer-events-none h-full bg-accent-tint",
        )}
      ></motion.div>
    </motion.div>
  );
};
