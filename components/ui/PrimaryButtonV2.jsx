"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const PrimaryButtonV2 = ({ text, className }) => {
  const MotionImage = motion(Image);
  const [hover, setHover] = useState(false);

  const easing = [0.19, 1, 0.22, 1];

  return (
    <motion.div
      className={cn(
        "w-[160px] h-[45px] p-1 rounded-[8px]",
        "flex justify-between items-center relative overflow-hidden",
        "bg-accent-main text-black",
        "border border-accent-tint",
        "cursor-pointer",
        hover && "pl-2",
        className,
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        className={cn(
          "h-full aspect-square rounded-[4px]",
          "flex justify-center items-center overflow-hidden relative z-2 bg-white text-black relative",
        )}
        style={{ order: hover ? 2 : 1 }}
        transition={{ duration: 0.9, ease: easing }}
        initial={{ rotate: 0 }}
        animate={{ rotate: hover ? 180 : 0 }}
        layout
      >
        <AnimatePresence mode="sync">
          {!hover ? (
            <motion.div
              key={2}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex justify-center items-center absolute inset-0"
              transition={{ duration: 0.3, ease: easing }}
            >
              <ArrowRight className="opacity-60" />
            </motion.div>
          ) : (
            <MotionImage
              key={1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: easing }}
              exit={{ opacity: 0 }}
              className="w-full h-full object-cover border border-white rotate-180 absolute inset-0"
              src="/me/me.png"
              unoptimized
              width={24}
              height={24}
              alt="github"
            />
          )}
        </AnimatePresence>
      </motion.div>

      <motion.span
        style={{ order: hover ? 1 : 2 }}
        layout
        transition={{ duration: 0.9, ease: easing }}
        className={cn(
          "text-[14px] font-medium font-body relative text-text-main z-1",
          "mr-2",
        )}
      >
        {text || "Click me"}
      </motion.span>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: hover ? "100%" : 0 }}
        transition={{ duration: 0.9, ease: easing }}
        className="absolute inset-0 z-0 pointer-events-none bg-accent-tint h-full"
      />
    </motion.div>
  );
};

export default PrimaryButtonV2;
