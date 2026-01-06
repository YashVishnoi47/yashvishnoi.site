import HeadingCard from "@/components/ui/HeadingCard";
import Image from "next/image";
import React from "react";

// TODO: Make it resposive and add the remaining design elements...
const ProjectsSection = () => {
  const projects = [
    {
      name: "Project 1",
      subHeading:
        "This is the subheading of the project which I will include later.!!!",
      link: "https://github.com/yashvishnoi/nextjs-portfolio",
      techIcons: [
        "/techIcons/react.svg",
        "/techIcons/next.svg",
        "/techIcons/javascript.svg",
      ],
    },
    {
      name: "Project 1",
      subHeading:
        "This is the subheading of the project which I will include later.!!!",
      link: "https://github.com/yashvishnoi/nextjs-portfolio",
      techIcons: [
        "/techIcons/javascript.svg",
        "/techIcons/javascript.svg",
        "/techIcons/javascript.svg",
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col gap-16 justify-start items-center min-h-165 mt-37.5 border-black ">
      <HeadingCard
        head={"Featured Work"}
        subHead={"Highlighting the best of my development journey."}
      />
      <div className="w-full h-fit flex flex-col justify-center items-center gap-6">
        {projects.map((item, idx) => (
          <div
            key={idx}
            className={`w-[78.5%] h-112.5 flex lg:flex-row flex-col border ${
              idx % 2 == 0 ? "lg:flex-row-reverse" : "flex-row"
            } bg-white cursor-pointer rounded-2xl p-8 gap-8 transition duration-300 ease-in-out hover:shadow-md hover:-translate-y-1  active:translate-y-1  active:shadow-white`}
          >
            <div className="h-full bg-black/40 lg:w-1/2 w-full rounded-2xl" />

            <div className="h-full lg:w-1/2 w-full flex flex-col justify-start items-center border-black">
              <div className="w-full flex justify-center lg:items-start items-center flex-col gap-3">
                <h5 className="text-[36px] font-bold">{item.name}</h5>
                <span className="text-[16px] text-[#1A1A1A]">
                  {item.subHeading}
                </span>
                <div className="flex justify-center gap-1 items-center w-fit h-fit">
                  {item.techIcons.map((item, idx) => (
                    <Image
                      key={idx}
                      src={item}
                      alt={item}
                      width={20}
                      height={20}
                      className="rouded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
