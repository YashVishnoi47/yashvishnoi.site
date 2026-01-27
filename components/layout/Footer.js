import Image from "next/image";
import React from "react";
import ConnectPopOver from "../shared/ConnectPopOver";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full p-8 flex justify-center items-center  h-fit border-black bg-white max-w-360">
      <div className="h-60 w-1/2 gap-4 justify-start items-start border-black flex flex-col">
        <Image src="/yash-logo-black.svg" alt="logo" width={50} height={50} />
        <span className="text-[16px] font-light w-[40%]">
          I'm Yash Vishnoi - a full-stack developer, freelancer & problem
          solver. Thanks for checking out my site!
        </span>
      </div>

      <div className="h-60 w-1/2 gap-4 justify-start items-start border-black flex">
        <div className="w-1/2 h-full flex flex-col gap-2 border-black">
          <span className="text-[20px] font-bold mb-2">Generel</span>

          {["Home", "Contact", "Book a call"].map((item, index) => {
            return (
              <Link className="w-fit" href={`/`} key={index}>
                <span className="text-[16px] font-light w-fit">{item}</span>
              </Link>
            );
          })}
        </div>
        <div className="w-1/2 h-full flex flex-col gap-2 border-black">
          <span className="text-[20px] font-bold mb-2">Specifics</span>

          {["Privacy", "Terms", "Uses"].map((item, index) => {
            return (
              <Link className="w-fit" href={`/`} key={index}>
                <span className="text-[16px] font-light w-fit">{item}</span>
              </Link>
            );
          })}
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
