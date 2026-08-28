"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn, easing } from "@/lib/utils";
import Link from "next/link";

const FiltersBar = ({ registries, show }) => {
  const MotionLink = motion(Link);
  const [hover, setHover] = useState(0);
  const categories = [...new Set(registries.map((item) => item.category))];
  categories.unshift(`All - ${registries.length}`);

  return (
    <div className="w-full h-10 flex gap-2 justify-start items-center sticky top-20 bg-main-bg z-10">
      {categories.map((item, idx) => (
        <MotionLink
          scroll={false}
          onClick={() => setHover(idx)}
          href={
            item === `All - ${registries.length}`
              ? `/library/components`
              : `/library/components/?show=${item.replace(" ", "-").toLowerCase()}`
          }
          key={idx}
          className={cn(
            "px-4 py-1 rounded-full border border-main-border hover:border-accent-border text-[14px] text-sec-text font-label hover:text-accent-main cursor-pointer transition-all duration-300 ease-in-out relative hover:bg-accent-tint",
            hover === idx &&
              "text-accent-main bg-accent-tint border rounded-full border-accent-border",
          )}
        >
          {item}
        </MotionLink>
      ))}
    </div>
  );
};

export default FiltersBar;
