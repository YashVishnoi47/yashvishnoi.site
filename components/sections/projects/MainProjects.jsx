"use client"
import ConnectPopOver from "@/components/shared/ConnectPopOver";
import HeadingCard from "@/components/ui/HeadingCard";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectsList } from "@/lib/projects";

// TODO: Make it resposive and add the remaining design elements...
const MainProjects = () => {
  const [open, setOpen] = useState(0);
  const [expanded, setExpanded] = useState(null);
  const projects = [
    {
      name: "ParaMotion",
      subHeading:
        "A comprehensive and highly customizable library of React components, designed to facilitate the creation of visually stunning user interfaces.",
      link: "https://github.com/yashvishnoi/nextjs-portfolio",
      techIcons: [
        { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
        { icon: "/techIcons/next.svg", name: "Next JS" },
        { icon: "/techIcons/javascript.svg", name: "Javascript" },
        { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
        { icon: "/techIcons/next.svg", name: "Next JS" },
        { icon: "/techIcons/javascript.svg", name: "Javascript" },
        { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
        { icon: "/techIcons/next.svg", name: "Next JS" },
        { icon: "/techIcons/javascript.svg", name: "Javascript" },
      ],

      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
    {
      name: "ParaMotion",
      subHeading:
        "A comprehensive and highly customizable library of React components, designed to facilitate the creation of visually stunning user interfaces.",
      link: "https://github.com/yashvishnoi/nextjs-portfolio",
      techIcons: [
        { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
        { icon: "/techIcons/next.svg", name: "Next JS" },
        { icon: "/techIcons/javascript.svg", name: "Javascript" },
        { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
        { icon: "/techIcons/next.svg", name: "Next JS" },
        { icon: "/techIcons/javascript.svg", name: "Javascript" },
        { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
        { icon: "/techIcons/next.svg", name: "Next JS" },
        { icon: "/techIcons/javascript.svg", name: "Javascript" },
      ],

      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
    {
      name: "ParaMotion",
      subHeading:
        "A comprehensive and highly customizable library of React components, designed to facilitate the creation of visually stunning user interfaces.",
      link: "https://github.com/yashvishnoi/nextjs-portfolio",
      techIcons: [
        { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
        { icon: "/techIcons/next.svg", name: "Next JS" },
        { icon: "/techIcons/javascript.svg", name: "Javascript" },
        { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
        { icon: "/techIcons/next.svg", name: "Next JS" },
        { icon: "/techIcons/javascript.svg", name: "Javascript" },
        { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
        { icon: "/techIcons/next.svg", name: "Next JS" },
        { icon: "/techIcons/javascript.svg", name: "Javascript" },
      ],

      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },

  ];



  return (
    <div
      id="projects"
      className="w-full max-w-400 flex flex-col gap-8 justify-center items-center mt-37.5 mb-10 border-black "
    >


      {ProjectsList.map((item, idx) => {
        return (
          <motion.div
            key={idx}
            className={`w-full lg:h-155 h-fit flex flex-col rounded-2xl py-4 gap-6 transition duration-300 ease-in-out relative group ${idx % 2 == 0 ? "lg:flex-row flex-col" : "lg:flex-row-reverse flex-col"} bg-whte ursor-pointer lg:px-0 px-2`}
          >
            <motion.div
              initial={{ opacity: 0, x: idx % 2 == 1 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:h-full h-87.5 bg-blac/20 overflow-hidden w-full rounded-xl relative">

              {idx % 2 == 1 ? (
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `
              radial-gradient(circle 600px at 0% 200px, #a99bf7, transparent),
              radial-gradient(circle 600px at 100% 200px, #a99bf7, transparent)
            `,
                  }}
                />

              ) : (
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `
              radial-gradient(circle 600px at 0% 200px, #bfdbfe, transparent),
              radial-gradient(circle 600px at 100% 200px, #bfdbfe, transparent)
            `,
                  }}
                />
              )}


            </motion.div>



            <motion.div
              initial={{ opacity: 0, x: idx % 2 == 1 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-full w-full flex relative flex-col justify-start gap-8 items-center border-black">

              <div className="w-full flex justify-between lg:items-start items-center flex-col gap-4">

                <div className="w-full h-fit flex flex-col gap-1 justify-start items-start">
                  <h5 className="text-[48px] font-medium text-text text-start w-full">
                    {item.name}
                  </h5>

                  <p className="text-[16px] font-light text-text-muted">
                    {item.subHeading}
                  </p>
                </div>
                <div className="flex flex-wrap w-[80%] justify-start gap-2 items-start h-fit">
                  {item.techIcons.map((item, idx) => (
                    <TechTags key={idx} item={item} />
                  ))}
                </div>
              </div>

              <div className="w-full flex flex-col border-black gap-4 h-fit justify-start items-start">
                <h4 className="w-full text-[24px] font-medium text-text">Key Features</h4>

                <div className="w-full flex flex-col justify-start items-start gap-2">
                  {item.features.map((item, idx) => (
                    <div key={idx} className="w-full flex gap-1 justify-start items-start">
                      <p className="text-[16px] font- text-text-muted">{idx + 1}.</p>
                      <p className="text-[16px] font- text-text-muted">{item}</p>
                    </div>
                  ))}
                </div>

              </div>

              <div className="w-full flex gap-4 justify-center items-center absolute bottom-2">
                <button className="w-full py-3 cursor-pointer bg-white border border-black/10 shadow-sm shadow-black/20 rounded-sm">Read Case study</button>
              </div>

            </motion.div>




          </motion.div>
        )
      })}


    </div>
  );
};

export default MainProjects;

const TechTags = ({ item }) => {
  return (
    <div className="flex justify-center items-center gap-2 px-2 py-1 bg-black/5 border border-[#7C3AED]/5 rounded-sm cursor-default shadow-inner-2xl shadow-black">
      <Image src={item.icon} alt={item.name} width={18} height={18} />
      <span className="md:text-[11px] text-[9px]">{item.name}</span>
    </div>
  );
};
