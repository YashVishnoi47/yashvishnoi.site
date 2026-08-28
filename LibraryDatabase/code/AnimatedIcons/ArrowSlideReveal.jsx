"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { easing } from "@/lib/utils";

export const ArrowSlideReveal = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-arrow-right-icon lucide-arrow-right mr-2"
      initial={{ x: 0 }}
      animate={{ x: hovered ? 10 : 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      transition={{ duration: 0.9, ease: easing }}
    >
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: hovered ? 1 : 0,
          opacity: hovered ? 1 : 0,
        }}
        transition={{ duration: 1, ease: easing }}
        d="M5 12h14"
      />
      <motion.path d="m12 5 7 7-7 7" />
    </motion.svg>
  );
};

