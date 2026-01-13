"use client";
import dynamic from "next/dynamic";
import React from "react";
import Tag from "@/components/ui/Tag";
import WorldMap from "@/components/ui/world-map";
const Card2 = () => {
  return (
    <div className="lg:w-[40%] w-full relative border rounded-xl p-6 flex flex-col gap-10 overflow-hidden justify-center items-center border-black/30 h-full  bg-white group">
      <div className="gap-2 flex flex-col justify-center items-start w-full">
        <Tag text={"Remote-Work"} />
        <h4 className="text-[36px]  font-medium">Borderless Collaboration</h4>
        <span className="text-[16px] font-light">
          Remote-first workflow — working seamlessly with clients worldwide.
        </span>
      </div>

      <div className="w-full h-full flex justify-center overflow-hidden items-center">
        {/* <WorldMap
          dots={[
            // India → USA (huge freelance & startup market)
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi, India
              end: { lat: 37.7749, lng: -122.4194 }, // San Francisco, USA
            },

            // India → Canada (remote-friendly & tech-heavy)
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi, India
              end: { lat: 43.6532, lng: -79.3832 }, // Toronto, Canada
            },

            // India → UK (agencies + SaaS clients)
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi, India
              end: { lat: 51.5074, lng: -0.1278 }, // London, UK
            },

            // India → Germany (product companies & startups)
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi, India
              end: { lat: 52.52, lng: 13.405 }, // Berlin, Germany
            },

            // India → Australia (design + web contracts)
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi, India
              end: { lat: -33.8688, lng: 151.2093 }, // Sydney, Australia
            },

            // India → UAE (fast-growing business & startups)
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi, India
              end: { lat: 25.2048, lng: 55.2708 }, // Dubai, UAE
            },

            // India → Singapore (tech hub of Asia)
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi, India
              end: { lat: 1.3521, lng: 103.8198 }, // Singapore
            },
          ]}
          lineColor="#0ea5e9"
        /> */}
      </div>
    </div>
  );
};

export default Card2;
