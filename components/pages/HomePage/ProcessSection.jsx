"use client";
import CardButton from "@/components/ui/CardButton";
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

  const techStack = [
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
    <div id="process" className="w-full h-100 grid gap-4 grid-cols-3">
      <div className="w-full h-full flex flex-col justify-center items-center border border-main-border rounded-[8px] gap-2 bg-card-bg p-4">
        <div className="w-full h-[75%] "></div>

        <div className="w-full h-[25%] flex gap-3 flex-col justify-center items-start">
          <p className="text-[20px] text-main-text font-head font-medium">
            Design and Development
          </p>
          <CardButton text={"Book The Call"} />
        </div>
      </div>

      <div className="col-span-2 gap-4 grid grid-rows-3 w-full h-full">
        <div className="grid grid-cols-2 gap-4 w-full row-span-2 min-h-0 min-w-0">
          <div className="cols-span-1 w-full h-full flex flex-col justify-center items-center  border border-main-border rounded-[8px] bg-card-bg p-4">
            <div className="w-full h-[15%] flex gap-3 flex-col justify-center items-start">
              <p className="text-[20px] text-main-text font-head font-medium">
                Get found on Google
              </p>
            </div>
            <div className="w-full h-[85%] "></div>
          </div>

          <div className="cols-span-1 w-full h-full flex flex-col justify-center items-center  border border-main-border rounded-[8px] bg-card-bg p-4">
            <div className="w-full h-[85%] "></div>

            <div className="w-full h-[15%] flex gap-3 flex-col justify-center items-start">
              <p className="text-[20px] text-main-text font-head font-medium">
                Maintain a Updates
              </p>
            </div>
          </div>
        </div>

        <div className="row-span-1 flex justify-center items-center w-full h-full border border-main-border rounded-[8px] bg-card-bg px-4 min-h-0 min-w-0 overflow-hidden">
          <div className="h-full w-[30%] flex justify-start items-center">
            <p className="text-[20px] text-main-text font-head font-medium">
              Technologies I use
            </p>
          </div>

          <div className="h-full w-[70%] flex justify-center items-center">
            <Marquee
              gradient={true}
              gradientWidth={10}
              gradientColor={"hsl(210,13%,9%)"}
              pauseOnHover={true}
              direction={"left"}
            >
              {techStack.map((tech, index) => (
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
