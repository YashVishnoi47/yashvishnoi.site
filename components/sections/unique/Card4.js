import Tag from "@/components/ui/Tag";
import React from "react";

const Card4 = () => {
  return (
    <div className="w-full border rounded-xl p-6 flex flex-col gap-10 overflow-hidden justify-center items-center border-black/30 h-full  bg-white group">
      <div className="gap-2 flex flex-col justify-center items-start w-full">
        <Tag text={"Automation & Flow"} />
        <h4 className="text-[36px]  font-medium">Systems That Work Together</h4>
        <span className="text-[16px] font-light">
          I connect your website with the tools that save time, reduce manual
          work, and keep operations running efficiently.
        </span>
      </div>

      <div className="w-full  h-full flex justify-center items-center"></div>
    </div>
  );
};

export default Card4;
