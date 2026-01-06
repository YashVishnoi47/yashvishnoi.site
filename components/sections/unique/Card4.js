import Tag from "@/components/ui/Tag";
import React from "react";

const Card4 = () => {
  return (
    <div className="w-full border rounded-xl p-6 flex flex-col gap-10 overflow-hidden justify-center items-center border-black/30 h-full  bg-white group">
      <div className="gap-2 flex flex-col justify-center items-start w-full">
        <Tag text={"Results Over Features"} />
        <h4 className="text-[36px]  font-medium">Product-Driven Thinking</h4>
        <span className="text-[16px] font-light">
          I think beyond features, focusing on usability, performance, and real
          outcomes that solve actual business problems.
        </span>
      </div>

      <div className="w-full  h-full flex justify-center items-center"></div>
    </div>
  );
};

export default Card4;
