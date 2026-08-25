"use client";
import RightArrowSVG from "@/assets/svg/RightArrowSVG";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { easing } from "@/lib/utils";

const ShowCaseArea = ({ show, registries }) => {
  const [hovered, setHovered] = useState(null);
  const filteredRegistries = !show
    ? registries
    : registries.filter(
        (item) => item.category.toLowerCase() === show,
      );



  return (
    <div className="w-full h-fit grid grid-cols-3 gap-6 justify-center items-start">
      {filteredRegistries.map((item, idx) => (
        <motion.div
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
        </motion.div>
      ))}
    </div>
  );
};

export default ShowCaseArea;
