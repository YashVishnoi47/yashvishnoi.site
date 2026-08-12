import React from "react";

const HeadingBox = ({ heading, subheading, tag }) => {
  return (
    <div className="w-full md:gap-0 gap-2 flex md:flex-row flex-col md:justify-between justify-start md:items-end items-start">
      <div className="md:w-[75%] w-full flex flex-col gap-3">
        <span className="text-[12px] uppercase text-sec-text font-label tracking-wider">{tag}</span>
        <h3 className="md:text-[34px] text-[24px] font-medium text-main-text font-head leading-tight">
          {heading}
        </h3>
      </div>


      <div className="md:w-[25%] sm:w-1/2 h-full  w-full flex justify-end items-end">
        <p className="text-[14px] w-full md:text-right text-left text-faint-text">
          {subheading}
        </p>
      </div>
    </div>
  );
};

export default HeadingBox;
