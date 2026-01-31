import ConnectPopOver from "@/components/shared/ConnectPopOver";
import CTAButton from "@/components/ui/CTAButton";
import HeadingCard from "@/components/ui/HeadingCard";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

// TODO: Make it resposive and add the remaining design elements...
const ProjectsSection = () => {
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
      ],
    },
    {
      name: "Vibrium",
      subHeading:
        "This is the subheading of the project which I will include later.!!!",
      link: "https://github.com/yashvishnoi/nextjs-portfolio",
      techIcons: [
        { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
        { icon: "/techIcons/next.svg", name: "Next JS" },
        { icon: "/techIcons/javascript.svg", name: "Javascript" },
      ],
    },
  ];

  return (
    <div
      id="projects"
      className="w-full max-w-360 flex flex-col gap-16 justify-start items-center min-h-165 mt-37.5 border-black "
    >
      <HeadingCard
        head={"Featured Work"}
        subHead={"Highlighting the best of my development journey."}
      />
      <div className="w-full h-fit flex lg:flex-row flex-col flex-wrap justify-center items-center gap-6">
        {projects.map((item, idx) => (
          <div
            data-text={item.name}
            key={idx}
            className={`lg:w-[40%] w-full h-150 flex flex-col border hover:border-[#7C3AED]/30 bg-bg-light cursor-pointer rounded-2xl p-4 gap-6 transition duration-300 ease-in-out shadow-md hover:shadow-md shadow-black/10 hover:shadow-[#7C3AED]/30 hover:-translate-y-1  active:translate-y-1  active:shadow-white relative group`}
          >
            <div className="h-[55%] bg-black/20 w-full rounded-xl" />

            <div className="h-fit w-full flex flex-col justify-start items-center border-black">
              <div className="w-full flex justify-center lg:items-start items-center flex-col gap-6">
                <div className="w-full h-fit flex flex-col gap-1 justify-start items-start">
                  <h5 className="text-[36px] font-medium text-text text-start w-full">
                    {item.name}
                  </h5>

                  <p className="text-[15px] font-light text-text-muted">
                    {item.subHeading}
                  </p>
                </div>

                <div className="flex justify-start gap-1 items-start w-fit h-fit">
                  {item.techIcons.map((item, idx) => (
                    <TechTags key={idx} item={item} />
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full flex justify-end gap-2 items-end h-[12%] ">
              <div className="flex justify-center items-center gap-2 px-3 py-1 rounded-md group-hover:bg-bg-c transition-all duration-300 ease-in-out">
                <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  See more
                </span>
                <ArrowRight
                  size={26}
                  className="-rotate-45 group-hover:rotate-0 transition-all duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[90%] flex flex-col justify-center items-center relative overflow-hidden text-whie p-6 gap-8 h-90 border bg-white shadow-black/5 shadow-xl rounded-2xl">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(
      135deg,
      #F5F3FF 0%,   /* very light violet base */
      #EDE9FE 25%,  /* subtle brand tint */
      #F8FAFC 50%,  /* near-white for maximum readability */
      #EEF2FF 75%,  /* soft indigo hint */
      #FFFFFF 100%  /* clean white finish */
    )`,
          }}
        />

        <h4
          className=" lg:text-[50px] lg:leading-15 md:text-[40px] md:leading-12.5 sm:text-[30px] sm:leading-8.5 w-[85%] text-text font-bold text-center relative z-100
"
        >
          Building reliable, scalable web applications with clarity and
          precision.
        </h4>

        <ConnectPopOver />
      </div>
    </div>
  );
};

export default ProjectsSection;

const TechTags = ({ item }) => {
  return (
    <div className="flex justify-center items-center gap-2 px-2 py-1 bg-[#7C3AED]/5 border border-[#7C3AED]/5 rounded-sm cursor-default hover:scale-95 transition-all duration-300 ease-in-out">
      <Image src={item.icon} alt={item.name} width={18} height={18} />
      <span className="md:text-[12px] text-[10px]">{item.name}</span>
    </div>
  );
};
