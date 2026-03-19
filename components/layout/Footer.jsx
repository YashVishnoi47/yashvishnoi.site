import Image from "next/image";
import React from "react";
import ConnectPopOver from "../shared/ConnectPopOver";
import Link from "next/link";
import { ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full flex lg:flex-col flex-col justify-center items-center lg:gap-0 gap-12 h-fit border-black bg-bg-light max-w-360 relative">

      <div className="w-full px-8 flex lg:flex-row flex-col h-fit justify-center items-center mb-10">


        <div className='h-50 lg:w-1/2 w-full gap-5 lg:justify-start justify-center lg:items-start items-center bg-white flex flex-col relative z-2'>
          <div className="flex flex-col gap-4">
            <h1 className='font-bold text-[36px]'>Yash Vishnoi</h1>

            <div className="lg:flex hidden gap-4 w-full justify-start h-fit items-center border-black">
              {[
                { name: "Github", link: "/socials/github.svg", url: "https://github.com/YashVishnoi47" },
                { name: "Twitter", link: "/socials/twitter.svg", url: "https://x.com/Yash_Vishnoi7" },
                { name: "LinkedIn", link: "/socials/linkedIn.svg", url: "https://www.linkedin.com/in/yash-vishnoi-654318384/" },
              ].map((item, idx) => (
                <Link key={idx} target="_blank" href={item.url} data-text={item.name}>
                  <Image
                    className="cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                    src={item.link}
                    alt={item}
                    width={18}
                    height={18}
                  />
                </Link>

              ))}
            </div>

          </div>




          <div className='w-full flex flex-col gap-2 justify-start items-start mt-2'>
            <Link data-text="Feel free to reach out" href={"mailto:hello@yashvishnoi.site"} className='text-[15px] text-text-text flex gap-1'>E-mail:
              <span className="font-bold relative group">hello@yashvishnoi.site <span className="absolute bottom-0 right-0 group-hover:left-0 w-0 group-hover:w-full h-0.5 bg-black transition-all duration-500 ease-in-out"></span></span>

            </Link>

            <Link data-text="Github" href={"https://github.com/YashVishnoi47"} className='text-[15px] text-text-text flex gap-1'>Github:
              <span className="font-bold relative group">YashVishnoi47 <span className="absolute bottom-0 right-0 group-hover:left-0 w-0 group-hover:w-full h-0.5 bg-black transition-all duration-500 ease-in-out"></span></span>

            </Link>
          </div>

          <p className='text-[14px] mt-2'>Thanks for checking out my site!😊</p>



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









    </div>
  );
};

export default Footer;
