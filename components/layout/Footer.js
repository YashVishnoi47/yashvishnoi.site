import Image from "next/image";
import React from "react";
import ConnectPopOver from "../shared/ConnectPopOver";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-70">
      <div className="h-90 w-1/2 gap-4 flex flex-col justify-center items-center py-4">
        <div className="flex flex-col justify-center items-center gap-2">
          <Image src="/yash-logo-black.svg" alt="logo" width={50} height={50} />
          <span className="text-[28px] font-bold">Yash Vishnoi</span>
        </div>

        <span className="text-[15px] text-[#1A1A1A]">
          Full-Stack Web Developer | UI/UX Designer | Problem Solver
        </span>

        <ConnectPopOver>
          <span className="bg-green-400/10 rounded-[2px] border border-green-400 flex justify-center items-center gap-3 text-[12px] px-1.5 py-1 select-none w-fit cursor-pointer">
            Available for Work
          </span>
        </ConnectPopOver>
      </div>
    </div>
  );
};

export default Footer;
