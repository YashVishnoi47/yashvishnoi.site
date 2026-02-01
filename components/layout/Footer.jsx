import Image from "next/image";
import React from "react";
import ConnectPopOver from "../shared/ConnectPopOver";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full p-8 flex lg:flex-row flex-col justify-center items-center lg:gap-0 gap-12  h-fit border-black bg-bg-light max-w-360 relative">
      
      <div className="h-60 lg:w-1/2 w-full gap-4 lg:justify-start justify-center lg:items-start items-center border-black flex flex-col relative z-2">
        <Image
          className="hover:-rotate-15 transition-all duration-300 ease-in-out"
          src="/yash-logo-black.svg"
          alt="logo"
          width={50}
          height={50}
        />
        <span className="text-[16px] text-text lg:text-left text-center font-light lg:w-[40%] w-full">
          I'm Yash Vishnoi - a full-stack developer, freelancer & problem
          solver. Thanks for checking out my site!
        </span>
      </div>

      <div className="h-60 lg:w-1/2 w-full gap-4 lg:justify-start justify-center lg:items-start items-center border-black flex lg:flex-row flex-col relative z-2">
        <div className="lg:w-1/2 w-full h-full flex flex-col lg:items-start items-center gap-2 border-black">
          <span className="text-[20px] text-text font-bold mb-2">Generel</span>

          {["Home", "Contact", "Book a call"].map((item, index) => {
            return (
              <Link className="w-fit" href={`/`} key={index}>
                <span className="text-[16px] font-light text-text-muted2 w-fit">
                  {item}
                </span>
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
              <Link className="w-fit" href={`/`} key={index}>
                <span className="text-[16px] text-text-muted2 font-light w-fit">
                  {item}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
