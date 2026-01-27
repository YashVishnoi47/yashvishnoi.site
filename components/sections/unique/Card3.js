import Tag from "@/components/ui/Tag";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Card3 = () => {
  return (
    <div className="w-full boder shadow-md shadow-black/10 rounded-xl p-6 flex flex-col gap-10 overflow-hidden justify-center items-center border-black/30 h-full  bg-white group">
      <div className="gap-2 flex flex-col justify-center items-start w-full">
        <Tag text={"Built to Scale"} />
        <h4 className="text-[36px]  font-medium">
          Modern & Secure Technology{" "}
        </h4>
        <span className="text-[16px] font-light">
          I choose reliable, production-ready technologies that are secure,
          scalable, and built to last — not just trendy.
        </span>
      </div>

      <div className="w-full h-full flex flex-col gap-6 border-black justify-center items-center oveflow-hidden ">
        <Marquee
          autoFill={true}
          gradient={true}
          gradientWidth={15}
          pauseOnHover={false}
          direction={"left"}
        >
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
            <TechTags2 key={idx} item={item} />
          ))}
        </Marquee>
        <Marquee
          autoFill={true}
          gradient={true}
          gradientWidth={15}
          pauseOnHover={false}
          direction={"right"}
        >
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
            <TechTags2 key={idx} item={item} />
          ))}
        </Marquee>
        <Marquee
          delay={2}
          autoFill={true}
          gradient={true}
          gradientWidth={15}
          pauseOnHover={false}
          direction={"left"}
        >
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
            <TechTags2 key={idx} item={item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Card3;

const TechTags2 = ({ item }) => {
  return (
    <div className="flex ml-2 mr-2 justify-center items-center gap-2 px-2 py-2 bg-black/5 border border-black/5 rounded-md cursor-default">
      <Image src={item.image} alt={item.name} width={20} height={20} />
      <span className="md:text-[12px] text-[10px]">{item.name}</span>
    </div>
  );
};
