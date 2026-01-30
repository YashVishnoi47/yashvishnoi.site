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
    <div id="projects" className="w-full flex flex-col gap-16 justify-start items-center min-h-165 mt-37.5 border-black ">
      <HeadingCard
        head={"Featured Work"}
        subHead={"Highlighting the best of my development journey."}
      />
      <div className="w-full h-fit flex flex-wrap justify-center items-center gap-6">
        {projects.map((item, idx) => (
          <div
            data-text={item.name}
            key={idx}
            className={`w-[40%] h-150 flex flex-col border hover:border-[#7C3AED]/30 bg-bg-light cursor-pointer rounded-2xl p-4 gap-6 transition duration-300 ease-in-out hover:shadow-md shadow-[#7C3AED]/30 hover:-translate-y-1  active:translate-y-1  active:shadow-white relative group`}
          >
            <div className="h-[55%] bg-black/20 w-full rounded-xl" />

            <div className="h-fit w-full flex flex-col justify-start items-center border-black">
              <div className="w-full flex justify-center lg:items-start items-center flex-col gap-3">
                <h5 className="text-[36px] font-medium text-text">{item.name}</h5>

                <p className="text-[15px] font-light text-text-muted">
                  {item.subHeading}
                </p>

                <div className="flex justify-center gap-1 items-center w-fit h-fit">
                  {item.techIcons.map((item, idx) => (
                    <TechTags key={idx} item={item} />
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full flex justify-end gap-2 items-end h-[12%] ">
              <div className="flex justify-center items-center gap-2 px-2 py-1 rounded-md group-hover:bg-black/5 transition-all duration-300 ease-in-out">
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

        <h4 className="text-[50px] w-[85%] text-text leading-14 font-bold text-center relative z-1000">
          Building reliable, scalable web applications with clarity and
          precision.
        </h4>
        <CTAButton text={"Let's work"} />
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
