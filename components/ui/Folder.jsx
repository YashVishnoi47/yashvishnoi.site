"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Folder = ({ InnerCards }) => {
  const [hover, setHover] = useState(false);

  const InnerCard3 = [
    {
      name: "1",
      image:"/screenshots/legalintakeos.png",
      cls: "bg-accent-hover rounded-2xl absolute h-35 left-1/2 shadow-xl overflow-hidden p-[2px]",

      initialWidth: "96%",
      initialX: "-50%",
      initialY: "0px",
      initialRotate: "0deg",
      initialScale: 1,
      Iz: 1,

      finalWidth: "86%",
      finalX: "-95%",
      finalY: "-80px",
      rotate: "-14deg",
      scale: 0.94,
      Fz: 30,
    },

    {
      name: "2",
      image:"/screenshots/portfolio.png",
      cls: "bg-accent-hover rounded-2xl absolute h-35 left-1/2 shadow-2xl overflow-hidden p-[2px]",

      initialWidth: "92%",
      initialX: "-50%",
      initialY: "6px",
      initialRotate: "0deg",
      initialScale: 1,
      Iz: 2,

      finalWidth: "90%",
      finalX: "-50%",
      finalY: "-118px",
      rotate: "-2deg",
      scale: 1,
      Fz: 50,
    },

    {
      name: "3",
      image:"/screenshots/legalintakeos.png",
      cls: "bg-accent-hover rounded-2xl absolute h-35 left-1/2 shadow-xl overflow-hidden p-[2px]",

      initialWidth: "88%",
      initialX: "-50%",
      initialY: "12px",
      initialRotate: "0deg",
      initialScale: 1,
      Iz: 1,

      finalWidth: "86%",
      finalX: "-5%",
      finalY: "-72px",
      rotate: "14deg",
      scale: 0.94,
      Fz: 30,
    },
  ];

  return (
    <motion.div
      className="w-50 h-40 bg-accent-main bg[hsl(0,0%,0%)] rounded-[20px] rounded-tl-[0px] relative cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="w-15 h-[35px] bg-accent-main bg[hsl(0,0%,0%)] absolute -top-6 rounded-tl-[20px] " />
      <SVG color={"white"} />

      {InnerCard3.map((item, index) => (
        <motion.div
          initial={{
            width: item.initialWidth,
            rotate: "0deg",
            y: item.initialY,
            x: item.initialX,
          }}
          animate={{
            width: hover ? item.finalWidth : item.initialWidth,
            y: hover ? item.finalY : item.initialY,
            x: hover ? item.finalX : item.initialX,
            rotate: hover ? item.rotate : "0deg",
          }}
          whileHover={{ scale: 1.05 }}
          key={index}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
            mass: 1,
          }}
          style={{ transformOrigin: "bottom center" }}
          className={item.cls}
        >
          <Image
            src={item.image}
            width={100}
            height={100}
            alt="folder"
            className="w-full h-full rounded-[16px]"
          />
        </motion.div>
      ))}

      {/* Cover */}
      <motion.div
        initial={false}
        animate={{ rotateX: hover ? "20deg" : "0deg" }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          mass: 1,
        }}
        style={{ transformOrigin: "bottom" }}
        className="w-full h-[90%] absolute bottom-0 bg-accent-hover bg[#262626] rounded-[20px] rounded-t-[25px] shadow-[0px_-1px_40px_rgba(244,244,244,0)] z-10000 perspective-distant"
      />
    </motion.div>
  );
};

export default Folder;

const SVG = ({ color }) => {
  return (
    <svg
      width="84"
      height="40"
      className="absolute left-14 -top-6"
      viewBox="0 0 84 40"
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H32.6524C41.8387 0 50.0154 5.82237 53.0204 14.5033C55.5642 21.8521 60.9776 27.8562 68.0246 31.1448L82.9153 38.0938C83.8849 38.5463 83.5624 40 82.4924 40H0V0Z"
        fill="#5B8DEF"
      />
    </svg>
  );
};
