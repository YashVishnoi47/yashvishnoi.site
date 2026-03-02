import Image from "next/image";
import React from "react";
import ConnectPopOver from "../shared/ConnectPopOver";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full p-8 flex lg:flex-row flex-col justify-center items-center lg:gap-0 gap-12 h-fit border-black bg-bg-light max-w-360 relative">

      <div className="h-50 lg:w-1/2 w-full gap-6 lg:justify-start justify-center lg:items-start items-center border-black flex flex-col relative z-2">
        <Image
          className="hover:-rotate-15 transition-all duration-300 ease-in-out"
          src="/yash-logo-black.svg"
          alt="logo"
          width={50}
          height={50}
        />

        <span className="text-[14px] text-text lg:text-left text-center font-light lg:w-[40%] w-full">
          I'm<span className="font-bold"> Yash Vishnoi</span> - a full-stack developer, freelancer & problem
          solver. Thanks for checking out my site!
        </span>
      </div>

      <div className="h-50 lg:w-1/2 w-full gap-4 lg:justify-start justify-center lg:items-start items-center border-black flex lg:flex-row flex-col relative z-2">
        <div className="lg:w-1/2 w-full h-full flex flex-col lg:items-start items-center gap-2 border-black">
          <span className="text-[20px] text-text font-bold mb-2">Generel</span>

          {["Home", "Contact", "Book a call"].map((item, index) => {
            return (
              <Link className="w-fit flex justify-center items-center gap-1 text-text-muted transition-all duration-300 ease-in-out hover:text-black group" href={`/`} key={index}>
                <span className="text-[16px] font-light w-fit">
                  {item}
                </span>
                <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-all duration-300  ease-in-out" />
              </Link>
            );
          })}
        </div>
        <div className="lg:w-1/2 w-full h-full flex flex-col lg:items-start items-center gap-2 border-black">
          <span className="text-[20px] font-bold mb-2 text-text">
            Specifics
          </span>

          {["Privacy", "Terms", "Uses"].map((item, index) => {
            return (
              <Link className="w-fit flex justify-center items-center gap-1 text-text-muted transition-all duration-300 ease-in-out hover:text-black group" href={`/`} key={index}>
                <span className="text-[16px] font-light w-fit">
                  {item}
                </span>
                <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-all duration-300  ease-in-out" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
