import Tag from "@/components/ui/Tag";
import React from "react";

const Card4 = () => {
  return (
    <div className="w-full borer shadow-md shadow-black/10 rounded-xl p-6 flex flex-col gap-10 overflow-hidden justify-center items-center border-black/30 h-full  bg-white group">
      <div className="gap-2 flex flex-col justify-center items-start w-full">
        <Tag text={"Automation & Flow"} />
        <h4 className="text-[36px]  font-medium">Systems That Work Together</h4>
        <span className="text-[16px] font-light">
          I connect your website with the tools that save time, reduce manual
          work, and keep operations running efficiently.
        </span>
      </div>

      <div className="w-full  h-full flex gap-4 justify-center items-center border-black">
        <div className="w-80 p-1 h-full flex gap-1 rounded-lg bg-black/5 relative">
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-70"
            style={{
              backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      `,
              backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
            }}
          />

          <div className="h-full w-[25%] border relative z-1 bg-white rounded-sm"></div>

          <div className="h-full w-[75%] flex flex-col gap-1 border relative z-1 bg-wite rounded-sm">
            <div className="w-full h-[40%] bg-white rounded-sm" />
            <div className="w-full h-[60%] flex gap-1 justify-center items-center rounded-sm">
              <div className="h-full w-1/2 bg-white" />
              <div className="h-full w-1/2 bg-white" />
            </div>
          </div>
        </div>

        <div className="w-30 p-1 h-full flex flex-col gap-1 rounded-lg bg-black/5 relative">
            <div className="w-full h-[6%] flex justify-center items-center">
              <div className="h-full w-[40%] bg-black/50 transition-all duration-300 ease-in-out group-hover:w-1/2 rounded-full"/>
            </div>

          <div className="w-full  h-full bg-white rounded-sm" />
        </div>
      </div>
    </div>
  );
};

export default Card4;
