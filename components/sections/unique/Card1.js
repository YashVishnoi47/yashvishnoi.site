import React from "react";
import Tag from "@/components/ui/Tag";
import Image from "next/image";


const Card1 = () => {
  return (
    <div className="lg:w-[60%] shadow-md shadow-black/10 w-full borer rounded-xl overflow-hidden p-6 flex flex-col gap-10 border-black/30 h-full  bg-white">
      <div className="gap-2 flex flex-col justify-center items-start w-full">
        <Tag text={"Transparency First  "} />
        <h4 className="text-[36px]  font-medium">Clear Communication</h4>
        <span className="text-[16px] font-light">
          Creating high-impact digital experiences with and precision.
        </span>
      </div>
      <div className="w-full  h-full flex justify-center items-center">
        <Image
          src="/graphics/communication.svg"
          width={740}
          height={256}
          alt="graphics"
        />
      </div>
    </div>
  );
};

export default Card1;
