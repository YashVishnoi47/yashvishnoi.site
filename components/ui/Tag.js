import React from "react";

const Tag = ({ text }) => {
  return (
    <span className="bg-[#7C3AED]/10 rounded-[2px] border flex justify-center items-center gap-3 text-[12px] border-[#7C3AED]/5 px-1.5 py-1 select-none w-fit">
      {text || "I will be adding a tagline or latest projects"}
    </span>
  );
};

export default Tag;
