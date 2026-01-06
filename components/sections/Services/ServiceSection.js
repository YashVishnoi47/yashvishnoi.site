"use client";
import Tag from "@/components/ui/Tag";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// TODO: MAke it resposive and  add micro  hover animations.
const ServiceSection = () => {
  return (
    <div
      id="services"
      className="w-full min-h-200 flex flex-col gap-14 bg-white rounded-xl p-12 border-black/30"
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
          <ServiceCard1 />
          <ServiceCard2 />
        </div>
        <BigServiceCard />
      </div>
    </div>
  );
};

export default ServiceSection;

const Heading = () => {
  return (
    <h1 className="lg:text-[40px] text-[36px] font-semibold w-full lg:leading-17.5 tracking-[-0.02em] text-center">
      I am a Full-Stack Developer & UI/UX Designer
    </h1>
  );
};

const TechTags = ({ item }) => {
  return (
    <div className="flex justify-center items-center gap-2 px-3 py-2 bg-[#7C3AED]/3 border border-[#7C3AED]/5 rounded-md cursor-default hover:scale-95 transition-all duration-300 ease-in-out">
      <Image src={item.image} alt={item.name} width={20} height={20} />
      <span className="text-[14px]">{item.name}</span>
    </div>
  );
};

const ServiceCard1 = () => {
  return (
    <div className="w-full border rounded-xl overflow-hidden p-6 flex flex-col gap-10 border-black/30 h-full CardGradiant">
      <div className="gap-2 flex flex-col justify-center items-start w-full">
        <Tag text={"Modern. Efficient. Reliable."} />
        <h4 className="text-[36px]">Full-Stack Web development</h4>
        <span className="text-[16px] font-light">
          Creating reliable, high-performance digital systems.
        </span>
      </div>
      <div className="w-full  h-fit flex justify-center items-center">
        <Window />
      </div>
    </div>
  );
};

const ServiceCard2 = () => {
  return (
    <div className="w-full border rounded-xl p-6 flex flex-col gap-10 overflow-hidden justify-center items-center border-black/30 h-full CardGradiant group">
      <div className="gap-2 flex flex-col justify-center items-start w-full">
        <Tag text={"Design that performs"} />
        <h4 className="text-[36px]">UI/UX Designing</h4>
        <span className="text-[16px] font-light">
          Crafting clean, modern layouts optimized for clarity, usability, and
          visual balance.
        </span>
      </div>

      <div className="w-fit h-full flex gap-5 border-black justify-center items-center oveflow-hidden ">
        {[
          { dim: "60", image: "/techIcons/figma.svg" },
          { dim: "70", image: "/techIcons/react.svg" },
          { dim: "80", image: "/techIcons/figma.svg" },
          { dim: "90", image: "/techIcons/shadcn.svg" },
          { dim: "100", image: "/techIcons/figma.svg" },
          { dim: "90", image: "/techIcons/framer-motion.svg" },
          { dim: "80", image: "/techIcons/figma.svg" },
          { dim: "70", image: "/techIcons/tailwind.svg" },
          { dim: "60", image: "/techIcons/react.svg" },
        ].map((item, idx) => {
          return (
            <div
              key={idx}
              style={{
                height: `${item.dim}px`,
                width: `${item.dim}px`,
                animationDelay: `${idx * 1}s`,
              }}
              className={`border-6 border-black/20 flex justify-center items-center bg-white rounded-lg group-over:bg-black/10 transition-all duration-300  ease-in-out`}
            >
              <Image src={item.image} alt={item.dim} width={55} height={55} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const BigServiceCard = () => {
  return (
    <div className="w-full h-125 rounded-xl border border-black/30 flex flex-col gap-4 justify-start items-center CardGradiant p-6">
      <div className="gap-2 flex flex-col justify-center items-center w-full">
        <Tag text={"Design that performs"} />
        <h4 className="text-[36px] font-medium">
          End to End Website Devlopment
        </h4>
        <span className="text-[16px] font-light">
          Creating high-impact digital experiences with and precision.
        </span>
      </div>

      <div className="w-full h-full flex gap-5 border-black justify-center items-center oveflow-hidden  border rounded-2xl"></div>
    </div>
  );
};

const Window = () => {
  return (
    <motion.div
      className="w-[60%] h-75 rounded-xl border border-black/30 flex flex-col gap-8  justify-start items-center group-hover:w-[65%] transition-all duration-300 ease-in-out bg-white"
      initial={{ y: 100, opacity: 0.7 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 22,
        mass: 0.5,
      }}
    >
      <div className="w-full h-[12%] flex px-3 gap-1 justify-star items-center  border-b border-black/20">
        {["#FF0000", "#F6FF00", "#00FF62"].map((item, idx) => (
          <div
            key={idx}
            style={{ backgroundColor: item }}
            className={`w-4 h-4 rounded-full `}
          ></div>
        ))}
      </div>

      <div className="w-full h-fit gap-4 flex flex-col justify-center items-center">
        <span className="text-[18px] font-bold  w-[55%] tracking-tight leading-6 text-center">
          Websites that stand out and make a difference
        </span>

        <div className="flex justify-center items-center gap-2">
          {/* Primary button */}
          <button className=" px-2 py-1  text-[10px]  rounded-lg border border-black  bg-black text-white  font-medium  transition-colors duration-150 hover:bg-black/90 focus:outline-none focus:ring-1 focus:ring-black/40">
            Button
          </button>

          {/* Secondary button */}
          <button className=" px-2 py-1  text-[10px]  rounded-lg border border-black/40  text-black  font-medium  bg-transparent transition-colors duration-150 hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/30">
            Button
          </button>
        </div>
      </div>
    </motion.div>
  );
};
