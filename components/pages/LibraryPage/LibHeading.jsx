import React from "react";
import { CTALabel } from "../HomePage/HeroSection";

const LibHeading = ({ heading, subHeading }) => {
  return (
    <div className="w-full h-fit flex flex-col justify-start items-start gap-4 mt-10">
      <span className="text-[14px] text-faint-text font-label">
        10+ Components
      </span>
      <h1 className="text-[36px] font-head font-medium tracking-tight leading-tight text-main-text">
        {heading}
      </h1>
      <h2 className="md:text-[16px] text-[14px] md:w-[60%] w-full text-sec-text text-pretty font-body mt-1 tracking-wide">
        {subHeading}
      </h2>
    </div>
  );
};

export default LibHeading;
