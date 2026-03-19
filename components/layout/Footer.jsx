import Image from "next/image";
import React from "react";
import ConnectPopOver from "../shared/ConnectPopOver";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full flex lg:flex-col flex-col justify-center items-center lg:gap-0 gap-12 h-fit border-black bg-bg-light max-w-360 relative">

      <div className="w-full px-8 flex lg:flex-row flex-col h-fit justify-center items-center">
        <div className="h-50 lg:w-1/2 mt-8 w-full gap-4 lg:justify-start justify-center lg:items-start items-center border-black flex flex-col relative z-2">
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

        <div className="h-50 lg:w-1/2 mt-8 w-full gap-4 justify-start items-start border-black flex flex-row  relative z-2">
          <div className="lg:w-1/2 w-full h-full flex flex-col items-start  gap-3 border-black">
            <span className="text-[20px] text-text font-bold mb-2">Generel</span>

            {[
              { name: "Home", link: "/" },
              { name: "Book a Call", link: "/bookacall" },
              { name: "Projects", link: "/projects" },
            ].map((item, index) => {
              return (
                <Link className="w-fit flex justify-start items-center gap-1 text-text-muted transition-all duration-300 ease-in-out hover:text-black group relative" href={`${item.link}`} key={index}>
                  <span className="text-[16px] font- relative w-fit r">
                    {item.name}
                    <span className="absolute bottom-0 right-0 group-hover:left-0 w-0 group-hover:w-full h-0.5 bg-black transition-all duration-500 ease-in-out"></span>
                  </span>
                  <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-all duration-300  ease-in-out" />

                </Link>
              );
            })}
          </div>
          <div className="lg:w-1/2 w-full h-full flex flex-col items-start  gap-3 border-black">
            <span className="text-[20px] font-bold mb-2 text-text">
              Specifics
            </span>

            {["Privacy", "Terms", "Uses"].map((item, index) => {
              return (
                <Link className="w-fit flex justify-start items-center gap-1 text-text-muted transition-all duration-300 ease-in-out hover:text-black group relative" href={`/`} key={index}>
                  <span className="text-[16px] font- relative w-fit">
                    {item}
                    <span className="absolute bottom-0 right-0 group-hover:left-0 w-0 group-hover:w-full h-0.5 bg-black transition-all duration-500 ease-in-out"></span>
                  </span>
                  <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-all duration-300  ease-in-out" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>


      <div className="w-full flex flex-col items-center border-t border-black/10 py-3 gap-3">

        <p className="text-sm text-text-muted2 tracking-wide">
          &copy; {new Date().getFullYear()} Yash Vishnoi
        </p>


      </div>

      <div className="w-full bg-bg-light flex flex-col items-center py-4 gap-3" />





    </div>
  );
};

export default Footer;
