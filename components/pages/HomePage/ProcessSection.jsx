"use client";
import BookaCallPopUp from "@/components/ui/BookaCallPopUp";
import Folder from "@/components/ui/Folder";
import PrimaryButtonV2 from "@/components/ui/PrimaryButtonV2";
import ProjectButton from "@/components/ui/ProjectButton";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiVercel,
} from "react-icons/si";

const ProcessSection = () => {
  const iconsClasses = "size-5 text-accent-main";

  const Clients = [
    {
      name: "Next.js",
      icon: <SiNextdotjs className={iconsClasses} />,
      image: "/techIcons/next.svg",
    },
    {
      name: "React",
      icon: <SiReact className={iconsClasses} />,
      image: "/techIcons/react.svg",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className={iconsClasses} />,
      image: "/techIcons/tailwind.svg",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className={iconsClasses} />,
      image: "/techIcons/next.svg",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className={iconsClasses} />,
      image: "/techIcons/nodejs.svg",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className={iconsClasses} />,
      image: "/techIcons/next.svg",
    },
    {
      name: "Vercel",
      icon: <SiPostgresql className={iconsClasses} />,
      image: "/techIcons/vercel.svg",
    },
    {
      name: "ShadCN",
      icon: <SiPostgresql className={iconsClasses} />,
      image: "/techIcons/shadcn.svg",
    },
    {
      name: "Git",
      icon: <SiGit className={iconsClasses} />,
      image: "/techIcons/next.svg",
    },
    {
      name: "Vercel",
      icon: <SiVercel className={iconsClasses} />,
      image: "/techIcons/next.svg",
    },
  ];

  return (
    <div id="process" className="w-full h-fit grid gap-6 grid-cols-3">
      <div className="w-full h-100 flex flex-col justify-center items-center border border-main-border rounded-[8px] gap-2 bg-sec-bg p-4">
        <div className="w-full h-[75%] "></div>

        <div className="w-full h-[25%] flex gap-3 flex-col justify-center items-start">
          <p className="text-[20px] text-main-text font-head font-medium">
            Design and Development
          </p>
          <ProjectButton text={"Book The Call"} />
        </div>
      </div>

      <div className="col-span-2 gap-6 grid grid-rows-3 w-full h-100">
        <div className="grid grid-cols-2 gap-6 w-full row-span-2 min-h-0 min-w-0">
          <div className="cols-span-1 w-full h-full flex flex-col justify-between items-center  border border-accent-border rounded-[8px] bg-accent-tint ">
            <div className="w-full h-fit flex gap-3 flex-col justify-center items-start p-4">
              <p className="md:text-[16px] text-[14px] font-body text-sec-text text-pretty tracking-wide leading-[1.5]">
                "High-performance websites designed to make your business look
                credible, stand out from competitors, and turn visitors into
                customers."
              </p>
            </div>

            <div className="w-full h-fit p-4 border-t border-accent-border flex gap-3 justify-start items-center">
              <div className="size-10 bg-white/10 border border-main-border rounded-full" />
              <div className="flex flex-col justify-center items-start">
                <span className="text-[15px] text-main-text font-medium">
                  Alivin Okoli
                </span>
                <span className="text-[12px] text-faint-text font-medium">
                  Co-Founder
                </span>
              </div>
            </div>
          </div>

          <div className="cols-span-1 w-full h-full flex flex-col justify-center items-center  border border-main-border rounded-[8px] bg-sec-bg p-4">
            <div className="w-full h-[85%] "></div>

            <div className="w-full h-[15%] flex gap-3 flex-col justify-center items-start">
              <p className="text-[20px] text-main-text font-head font-medium">
                Maintain a Updates
              </p>
            </div>
          </div>
        </div>

        <div className="row-span-1 flex justify-center items-center w-full h-full border border-main-border rounded-[8px] bg-sec-bg px-4 min-h-0 min-w-0 overflow-hidden gap-4">
          <div className="h-full w-[25%] flex justify-start items-center">
            <p className="text-[20px] text-main-text font-head font-medium">
              Worked With
            </p>
          </div>

          <div className="h-full w-[75%] flex justify-center items-center">
            <Marquee
              gradient={true}
              gradientWidth={10}
              gradientColor={"hsl(210,13%,9%)"}
              pauseOnHover={true}
              direction={"left"}
            >
              {Clients.map((tech, index) => (
                <div className="bg-sec-bg size-15 border-main-border mr-2 ml-2 flex justify-center items-center rotate-[8px]">
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    width={40}
                    height={40}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
