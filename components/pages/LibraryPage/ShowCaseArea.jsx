"use client";
import RightArrowSVG from "@/assets/svg/RightArrowSVG";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { easing } from "@/lib/utils";
import Link from "next/link";

const ShowCaseArea = ({ show, registries }) => {
  const MotionLink = motion(Link);
  const [hovered, setHovered] = useState(null);
  const filteredRegistries = !show
    ? registries
    : registries.filter(
        (item) => item.category.toLowerCase().replace(" ", "-") === show.toLowerCase().replace(" ", "-"),
      );



  return (
    <div className="w-full h-fit grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-6 justify-center items-start">
      {filteredRegistries.map((item, idx) => (
        <MotionLink
          href={`/library/components/${item.name.replace(" ", "-").toLowerCase()}`}
          key={idx}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 1, ease: easing }}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
          className="w-full h-fit flex flex-col justify-start items-center rounded-[16px] bg-card-bg overflow-hidden p-1 border-main-border border cursor-pointer hover:border-accent-border"
        >
          <div className="w-full h-[220px] border rounded-[12px] border-sec-border bg-sec-bg flex justify-center items-center">
            {item.component}
          </div>

          <div className="w-full h-fit p-4 flex gap-px justify-between items-center">
            <div className="flex flex-col">
              <span className="text-[18px] text-main-text font-medium font-ead">
                {item.name}
              </span>
              <span className="text-[12px] text-sec-text font-label">
                {item.category}
              </span>
            </div>

            <RightArrowSVG hovered={hovered === idx} />
          </div>
        </MotionLink>
      ))}
    </div>
  );
};

export default ShowCaseArea;
