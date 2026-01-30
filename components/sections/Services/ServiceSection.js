"use client";
import Tag from "@/components/ui/Tag";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ServiceSection2 = () => {
  return (
    <div 
      id="services"
      className="w-full max-w-360 min-h-200 flex flex-col gap-14 bg-bg-light rounded-xl lg:p-12 border-black"
    >
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <Heading />

        <div className="w-full flex gap-3 flex-wrap items-center justify-center">
          {[
            { name: "React JS", image: "/techIcons/react.svg" },
            { name: "Next JS", image: "/techIcons/next.svg" },
            { name: "Tailwind CSS", image: "/techIcons/tailwind.svg" },
            { name: "Node JS", image: "/techIcons/nodejs.svg" },
            { name: "Javascript", image: "/techIcons/javascript.svg" },
            { name: "Figma", image: "/techIcons/figma.svg" },
            { name: "Vercel", image: "/techIcons/vercel.svg" },
            { name: "Framer Motion", image: "/techIcons/figma.svg" },
          ].map((item, idx) => (
            <TechTags key={idx} item={item} />
          ))}
        </div>
      </div>

      <div className="w-full h-fit flex flex-col flex-wrap gap-4 justify-center items-center">
        <div className="w-full lg:h-100 h-200 border-black flex lg:flex-row flex-col gap-4 justify-center items-center">
          {/* Card 1 */}
          <motion.div className="lg:w-[60%] w-full  rounded-xl overflow-hidden p-6 flex flex-col gap-10 border border-black/10 shadow-md shadow-black/10 h-full CardGradiant group">
            <div className="gap-2 flex flex-col justify-center  items-center w-full">
              <Tag text={"Modern. Efficient. Reliable."} />
              <h4 className="lg:text-[36px] text-[30px] lg:text-left text-center">
                Full-Stack Web development
              </h4>
              <span className="text-[16px] font-light lg:text-left text-text-muted text-center">
                Creating reliable, high-performance digital systems.
              </span>
            </div>
            <div className="w-full gap-4  h-fit flex justify-center items-center">
              <Window />
              {/* <MobileWindow /> */}
            </div>
          </motion.div>

          {/* card 2 */}
          <div className="lg:w-[40%] w-full rounded-xl p-6 flex flex-col gap-10 overflow-hidden justify-center items-center border border-black/10 shadow-md shadow-black/10 h-full CardGradiant group"> 
            <div className="gap-2 flex flex-col justify-center items-center w-full">
              <Tag text={"We handle the boring stuff"} />
              <h4 className="lg:text-[36px] text-[30px] text-center">
                Ongoing Website Care
              </h4>
              <span className="text-[16px] font-light text-text-muted text-center">
                From updates to issue resolution, we make sure your website
                works flawlessly at all times.
              </span>
            </div>

            <div className="w-full h-full flex flex-col gap-6 border-black justify-center items-center oveflow-hidden "></div>
          </div>
        </div>

        <div className="w-full lg:h-100 h-200 border-black flex lg:flex-row flex-col gap-4 justify-center items-center">
          {/* Card 3 */}

          <motion.div
            data-text="Let's work together"
            className="lg:w-[40%] w-full  rounded-xl overflow-hidden p-6 flex flex-col gap-10 border border-black/10 shadow-md hover:shadow-[0_0_12px_rgba(0,0,0,0.08)] hover:scale-[1.02] cursor-pointer shadow-black/10 h-full CardGradiant group justify-center  items-center relative transition-all duration-300 ease-in-out"
          >
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

            <div className="gap-2 flex flex-col justify-center items-center w-full">
              <Tag text={"Performance • Visibility • Accessibility"} />
              <h4 className="lg:text-[36px] text-[30px]  text-center">
                Launch-Ready Websites
              </h4>
              <span className="text-[] text-text-muted w-[72%] font-light text-center">
                Domain setup, SEO, and responsive design—built{" "}
                <span className="text-black">I provide everything.</span>
              </span>
            </div>
          </motion.div>

          {/* card 4 */}
          <div className="lg:w-[60%] w-full  rounded-xl p-6 flex flex-col gap-10 overflow-hidden justify-between items-center border border-black/10 shadow-md shadow-black/10 h-full CardGradiant group">
            <div className="gap-2 flex flex-col justify-center items-center w-full">
              <Tag text={"Design that performs"} />
              <h4 className="lg:text-[36px] text-[30px]  text-center">
                UI/UX Designing
              </h4>
              <span className="text-[16px] text-text-muted font-light lg:text-left text-center">
                Crafting clean, modern layouts optimized for clarity, usability,
                and visual balance.
              </span>
            </div>

            <div className="w-full h-[70%] flex flex-col gap-6 border-black justify-center items-center oveflow-hidden ">
              <Image
                src="/graphics/ui-ux.svg"
                alt="service"
                width={700}
                height={1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection2;

const Heading = () => {
  return (
    <h1 className="lg:text-[40px] sm:text-[30px] font-semibold w-full tracking-[-0.02em] text-center text-text">
      End-to-End Website Developement
    </h1>
  );
};



const Window = () => {
  return (
    <motion.div className="lg:w-[50%] w-[80%] h-75 rounded-xl border border-black/10 flex flex-col gap-8  justify-start items-center relative bg-white shadow-xl  shadow-black/10 group-hover:shadow-[#7C3AED]/50 transition-all duration-300 ease-in-out group-hover:-translate-y-3">
      <div className="w-full h-[12%] flex px-3 gap-1 justify-center relative items-center  border-b border-black/20">
        <div className="flex gap-1 justify-center items-center absolute left-3">
          {["#FF0000", "#F6FF00", "#00FF62"].map((item, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: item }}
              className={`w-4 h-4 rounded-full relative z-1000`}
            ></div>
          ))}
        </div>

        <div className="w-1/2 flex gap-2 justify-center items-center h-[60%] bg-[#F2F2F2] relative z-1000 rounded-full transition-all duration-300 ease-in-out group-hover:w-[65%] ml-8">
          <LockSvg />
          <span className="text-xs opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
            www.yashvishnoi.com
          </span>
        </div>
      </div>

      <div className="w-full h-fit gap-5 flex flex-col justify-center items-center">
        <span className="text-[22px] font-extrabold  w-[40%] tracking-tight leading-6 text-center">
          Websites that <span className="text-[#7C3AED]">Stand Out</span>
        </span>

        <div className="flex justify-center items-center gap-4">
          {/* Primary button */}
          <button className=" px-2 py-1  text-[12px]  rounded-lg border border-black  bg-black text-white  font-medium  transition-colors duration-150 hover:bg-black/90 focus:outline-none focus:ring-1 focus:ring-black/40 flex justify-center items-center gap-1">
            Start
            <ArrowRight size={12} />
          </button>

          {/* Secondary button */}
          <button className=" px-2 py-1  text-[12px]  rounded-lg border border-black/40  text-black  font-medium  bg-white transition-colors duration-150 relative z-1000 hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/30 ">
            Details
          </button>
        </div>
      </div>

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
    </motion.div>
  );
};

const MobileWindow = () => {
  return (
    <motion.div className="lg:w-[20%] w-[80%] h-75 rounded-xl border border-black/10 flex flex-col gap-8  justify-start items-center relative bg-white shadow-xl  shadow-black/10 group-hover:shadow-[#7C3AED]/50 transition-all duration-300 ease-in-out group-hover:-translate-y-3">
      <div className="w-full h-[12%] flex px-3 gap-1 justify-center relative items-center">
        <div className="w-[60%] flex gap-2 justify-center items-center h-[60%] bg-black/70 relative z-1000 rounded-full transition-all duration-300 ease-in-out "></div>
      </div>

      <div className="w-full h-fit gap-5 flex flex-col justify-center items-center">
        <span className="text-[18px] font-extrabold  w-[80%] tracking-tight leading-6 text-center">
          Build to <span className="text-[#7C3AED]">Perform</span>
        </span>
        <div className="flex justify-center items-center gap-4">
          <button className=" px-2 py-1  text-[7px]  rounded-lg border border-black  bg-black text-white  font-medium  transition-colors duration-150 hover:bg-black/90 focus:outline-none focus:ring-1 focus:ring-black/40 flex justify-center items-center">
            Start
            <ArrowRight size={12} />
          </button>
        </div>
      </div>

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
    </motion.div>
  );
};

const LockSvg = () => {
  return (
    <svg
      className="opacity-50  group-hover:opacity-100 transition-all duration-300 ease-in-out"
      viewBox="0 0 24 24"
      height={10}
      width={10}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z"
          stroke="#000"
          strokeWidth="1.5"
        ></path>{" "}
        <path
          d="M6 10V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V10"
          stroke="#000"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{" "}
      </g>
    </svg>
  );
};

const TechTags = ({ item }) => {
  return (
    <div className="flex justify-center items-center gap-2 px-2 py-1 bg-[#7C3AED]/5 border border-[#7C3AED]/5 rounded-sm cursor-default hover:scale-95 transition-all duration-300 ease-in-out">
      <Image src={item.image} alt={item.name} width={18} height={18} />
      <span className="md:text-[12px] text-[10px]">{item.name}</span>
    </div>
  );
};

// const ServiceSection = () => {
//   return (
//     <div
//       id="services"
//       className="w-full min-h-200 flex flex-col gap-14 bg-white rounded-xl lg:p-12 border-black"
//     >
//       <div className="w-full flex flex-col gap-4 items-center justify-center">
//         <Heading />
//         {/* <HeadingCard
//           head={"I am a Full-Stack Developer & UI/UX Designer"}
//           subHead={"I design it. I build it. I ship it."}
//         /> */}

//         <div className="w-full flex gap-3 flex-wrap items-center justify-center">
//           {[
//             { name: "React JS", image: "/techIcons/react.svg" },
//             { name: "Next JS", image: "/techIcons/next.svg" },
//             { name: "Tailwind CSS", image: "/techIcons/tailwind.svg" },
//             { name: "Node JS", image: "/techIcons/nodejs.svg" },
//             { name: "Javascript", image: "/techIcons/javascript.svg" },
//             { name: "Figma", image: "/techIcons/figma.svg" },
//             { name: "Vercel", image: "/techIcons/vercel.svg" },
//             { name: "Framer Motion", image: "/techIcons/figma.svg" },
//           ].map((item, idx) => (
//             <TechTags key={idx} item={item} />
//           ))}
//         </div>
//       </div>

//       <div className="w-full h-fit flex flex-col flex-wrap gap-4 justify-center items-center">
//         <div className="w-full lg:h-100 h-200 border-black flex lg:flex-row flex-col gap-4 justify-center items-center">
//           <ServiceCard1 />
//           <ServiceCard2 />
//         </div>

//         <BigServiceCard />
//       </div>
//     </div>
//   );
// };
