"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  const easing = [0.19, 1, 0.22, 1];

  return (
    <div className="w-full md:h-[80vh] h-[60vh] gap-4 flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "Blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "Blur(0px)" }}
        transition={{ duration: 0.4, delay: 0, ease: easing }}
        className="px-4 py-1 border border-main-border rounded-full flex gap-2 justify-center items-center"
      >
        <div className="size-2 bg-accent-main rounded-full animate-pulse" />
        <span className="text-[11px] tracking-wide font-label text-sec-text ">
          In progress
        </span>
      </motion.div>
      <motion.span
        initial={{ opacity: 0, y: 20, filter: "Blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "Blur(0px)" }}
        transition={{ duration: 0.4, delay: 0.2, ease: easing }}
        className="md:w-full w-[90%] text-balance text-center text-[38px] font-head text-accent-main"
      >
        Coming Soon
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 20, filter: "Blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "Blur(0px)" }}
        transition={{ duration: 0.4, delay: 0.3, ease: easing }}
        className="md:w-full w-[90%] text-pretty text-[16px] text-sec-text text-center"
      >
        Check back soon — or head back to see what's already live.
      </motion.span>

      <Link
        href="/"
        className="text-[14px] text-main-text flex gap-1 justify-end items-center transition-all duration-300 group ease-in-out mt-4 px-4 py-2 border border-main-border hover:border-accent-border hover:bg-accent-tint rounded-[4px] font-label"
      >
        <ArrowLeft
          size={14}
          className="group-hover:-translate-x-0.5 transition-all duration-300  ease-in-out"
        />
        Back to Home
      </Link>
    </div>
  );
};

export default ComingSoon;
