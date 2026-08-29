"use client";
import RightArrowSVG from "@/assets/svg/RightArrowSVG";
import Link from "next/link";
import React from "react";

const NextPrevious = ({ component, registries }) => {
  const [hovered, setHovered] = React.useState(null);
  const idx = registries.indexOf(component);

  const two = [registries[idx - 1], registries[idx + 1]];

  return (
    <div className="w-full flex flex-col justify-start items-start gap-6 mt-10">
      <div className="w-full h-[1px] bg-main-border"/>


      <div className="w-full flex gap-3 justify-between items-end">
        {two.map((item, idx) => {
          if (item === undefined) return null;

          if (idx % 2 === 1) {
            return (
              <Link
                href={`/library/components/${item.name.replace(" ", "-").toLowerCase()}`}
                key={idx}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className="w-fit h-fit rounded-[12px] cursor-pointer border border-main-border bg-sec-bg transition-all duration-300 ease-in-out px-4 py-2 flex justify-center items-center"
              >
                <span className="text-[14px] text-main-text">{item.name}</span>

                <RightArrowSVG hovered={hovered === idx} />
              </Link>
            );
          }

          if (idx % 2 === 0) {
            return (
              <Link
                href={`/library/components/${item.name.replace(" ", "-").toLowerCase()}`}
                key={idx}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className="w-fit h-fit rounded-[12px] cursor-pointer border border-main-border bg-sec-bg transition-all duration-300 ease-in-out px-4 py-2 flex justify-center items-center"
              >
                <RightArrowSVG
                  hovered={hovered === idx}
                  className="rotate-180"
                />

                <span className="text-[14px] text-main-text">{item.name}</span>
              </Link>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default NextPrevious;
