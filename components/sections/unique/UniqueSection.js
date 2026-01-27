"use client";
import React from "react";
import HeadingCard from "@/components/ui/HeadingCard";
import WorldMap from "@/components/ui/world-map";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";


const UniqueSection = () => {
  return (
    <div className="w-full flex flex-col gap-16 justify-start items-center min-h-165 mt-37.5">
      <HeadingCard
        head={"What sets me apart?"}
        subHead={
          "A rare blend of engineering precision, design clarity, and execution speed."
        }
      />

      <div className="w-full h-fit flex flex-col gap-6 justify-center  items-center">
        <div className="w-[96%] lg:h-122.5 h-245 order border-black bg-transparent flex lg:flex-row flex-col gap-6 justify-center items-center">
          <Card1 />
          <Card2 />
        </div>

        <div className="w-[96%] lg:h-110 h-245 order border-black bg-transparent flex lg:flex-row flex-col gap-6 justify-center items-center">
          <Card3 />
          <Card4 />
        </div>
      </div>
    </div>
  );
};

export default UniqueSection;
