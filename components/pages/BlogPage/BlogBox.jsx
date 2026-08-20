"use client"
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const BlogBox = () => {
  return (
    <div className="w-full h-fit bg-card-bg border border-main-border rounded-[12px] flex justify-between items-center md:flex-row flex-col-reverse">
      <div className="h-full md:w-[55%] w-full flex gap-4 flex-col justify-start items-start md:p-10 p-8">
        <p className="text-[12px] text-accent-main font-label uppercase tracking-wider">
          Latest - {new Date().toDateString()}
        </p>
        <p className="text-main-text font-head leading-tight text-[28px]">
          Building an AI receptionist that doesn't sound like one
        </p>
        <p className="text-[16px] w-[90%] text-sec-text text-pretty tracking-wide leading-[1.5]">
          Most voice AI demos are impressive for thirty seconds and unbearable
          after two minutes. Notes on the specific decisions — pacing,
          interruption handling, knowing when to just transfer the call — that
          went into making Legal Intake OS feel like a person picked up.
        </p>

        <div className="w-full flex gap-3 justify-start items-start flex-wrap mt-4"></div>

        <Link href={"/"} target="_blank" className={"mt-4"}>
          <ProjectButton />
        </Link>
      </div>

      <div className="h-100 flex justify-center items-center md:w-[45%] w-full bg-sec-bg border-l border-main-border relative">
        <div className="w-[85%] h-[220px]  flex justify-center items-center p-1 rounded-[8px]">
          {/* {item.image && (
            <Image src={item.image} alt={item.name} width={160} height={160} />
          )}

          {item.icon && item.icon} */}
        </div>
      </div>
    </div>
  );
};

export default BlogBox;



const ProjectButton = ({ text }) => {
  const [hovered, setHovered] = useState(false);
  const easing = [0.19, 1, 0.22, 1];
  const MotionArrowRight = motion(ArrowRight);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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

