import React from "react";

const CTAButton = ({ text }) => {
  return (
    <button className="w-35 h-12.5 border border-black rounded-lg bg-white overflow-hidden text-black cursor-pointer text-md font-semibold flex justify-center relative group transition-all duration-300 ease-in-out active:scale-95">
      <div className="flex flex-col h-40 absolute gap-4 top-1/4 group-hover:-top-[55%] transition-all duration-300 ease-in-out border-black w-fit">
        <span>{text || "Get Started"}</span>
        <span>{text || "Get Started"}</span>
      </div>
    </button>
  );
};

export default CTAButton;
