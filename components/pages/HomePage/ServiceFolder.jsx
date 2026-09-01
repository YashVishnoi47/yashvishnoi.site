"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { easing } from "@/lib/utils";

const ServiceFolder = ({ heading, subheading  }) => {
  const [hover, setHover] = useState(false);

const InnerCard3 = [
  {
    name: "1",
    image: "/screenshots/legalintakeos.png",
    cls: "bg-[#E3A34C] rounded-[12px] absolute h-35 left-1/2 shadow-xl overflow-hidden p-[2px]",

    initialWidth: "78%",
    initialX: "-48%",
    initialY: "-68px",
    initialRotate: "-7deg",
    initialScale: 1,
    Iz: 1,

    finalWidth: "78%",
    finalX: "-60%",
    finalY: "-105px",
    rotate: "-10deg",
    scale: 0.95,
    Fz: 30,
  },

  {
    name: "2",
    image: "/screenshots/portfolio.png",
    cls: "bg-[#E3A34C] rounded-[12px] absolute h-35 left-1/2 shadow-2xl overflow-hidden p-[2px]",

    initialWidth: "78%",
    initialX: "-50%",
    initialY: "-48px",
    initialRotate: "2deg",
    initialScale: 1,
    Iz: 2,

    finalWidth: "78%",
    finalX: "-38%",
    finalY: "-92px",
    rotate: "3deg",
    scale: 1,
    Fz: 50,
  },
];

  return (
    <div className="w-fit h-fit relative ">
      <motion.div
        className="w-80 aspect-[1.45/1] bg-card-bg bg[hsl(0,0%,0%)] rounded-[20px] rounded-tl-[0px] relative cursor-pointer z-2"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="absolute -top-6 flex justify-center items-center gap-0 z-100">
          <div className="w-15 h-[35px] bg-card-bg bg[hsl(0,0%,0%)] rounded--[30px] rounded-tl-[20px] " />
          <SVG color={"white"} />
        </div>

        <div className="w-full h-full flex flex-col gap-3 justify-start p-6 items-start">
          <div className="flex justify-start items-start gap-2">
            <div className="h-8 aspect-square bg-faint-text rounded-[4px]" />
            <div className="h-8 aspect-square bg-faint-text rounded-[4px]" />
            <div className="h-8 aspect-square bg-faint-text rounded-[4px]" />
          </div>

          <p className="text-[22px] font-bold text-main-text mt-1">Website Design</p>
          <p className="text-[14px] text-sec-text text-pretty">
            A short call to understand your goals, followed by a working preview
            of your site.
          </p>
        </div>
      </motion.div>

      {InnerCard3.map((item, index) => (
        <motion.div
          initial={{
            width: item.initialWidth,
            rotate: item.initialRotate,
            y: item.initialY,
            x: item.initialX,
          }}
          animate={{
            width: hover ? item.finalWidth : item.initialWidth,
            y: hover ? item.finalY : item.initialY,
            x: hover ? item.finalX : item.initialX,
            rotate: hover ? item.rotate : item.initialRotate,
          }}
          whileHover={{ scale: 1.05 }}
          key={index}
          transition={{
            duration: 0.5,
            ease: easing,
          }}
          style={{ transformOrigin: "bottom center" }}
          className={`${item.cls} z-1 absolute top-0`}
        >
          <Image
            src={item.image}
            width={100}
            height={100}
            alt="folder"
            className="w-full h-full rounded-[8px] "
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceFolder;

const SVG = ({ color }) => {
  return (
    <svg
      width="84"
      height="40"
      className="absolute left-14 top-[0px]"
      viewBox="0 0 84 40"
      fill="#15181B"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H32.6524C41.8387 0 50.0154 5.82237 53.0204 14.5033C55.5642 21.8521 60.9776 27.8562 68.0246 31.1448L82.9153 38.0938C83.8849 38.5463 83.5624 40 82.4924 40H0V0Z"
        fill="#15181B"
      />
    </svg>
  );
};
