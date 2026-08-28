"use client";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ArrowSlideButton = ({ text }) => {
  const [hovered, setHovered] = useState(false);
  const easing = [0.19, 1, 0.22, 1];
  const MotionArrowRight = motion(ArrowRight);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "rounded-[4px] border border-main-border flex gap-3 justify-center items-center cursor-pointer relative overflow-hidden bg-white",
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
          "z-2 size-[20px] bg-black flex justify-center items-center rounded-[4px]",
        )}
      >
        <MotionArrowRight
          size={16}
          initial={{ rotate: -45 }}
          animate={{ rotate: hovered ? 0 : -45 }}
          transition={{ duration: 0.9, ease: easing }}
          className="text-white"
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
          hovered ? "text-black" : "text-black",
        )}
      >
        {text || " View Live Site"}
      </motion.span>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: hovered ? "100%" : 0 }}
        transition={{ duration: 0.9, ease: easing }}
        className={cn(
          "absolute flex justify-center items-center sm:text-[13px] text-[9px] tracking-wider inset-0 z-1 pointer-events-none h-full bg-black/10",
        )}
      ></motion.div>
    </motion.div>
  );
};

export default ArrowSlideButton;
