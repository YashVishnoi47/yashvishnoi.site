import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="w-full h-80 flex md:flex-row flex-col md:gap-0 gap-12 justify-start items-center"
    >
      <div className="md:w-[30%] w-full h-full flex md:justify-start justify-center items-start">
        
        <div className="size-65 rounded-[12px] bg-sec-bg border border-main-border flex justify-center items-center overflow-hidden">
          <Image
            src="/me/me.jpeg"
            className="w-full h-full object-cover border border-main-border"
            alt="yash"
            width={300}
            height={300}
          />
        </div>

        
      </div>

      <div className="md:w-[70%] w-full h-full flex flex-col gap-4 justify-start items-start">
        <h4
          className={
            "md:text-[20px] text-[16px] mb-5 text-main-text tracking-wide text-pretty"
          }
        >
          Hi, I'm Yash — a full-stack developer who builds things from the
          ground up and makes them work.
        </h4>
        <p className="md:text-[17px] text-[14px] font-body text-sec-text text-pretty tracking-wide leading-[1.7] md:w-[85%] w-full">
          Most of my time right now goes into{" "}
          <span className="text-main-text"> Legal Intake OS™</span>, an AI
          receptionist and lead intake platform I designed and built for law
          firms. Alongside that, I work on{" "}
          <span className="text-main-text">custom websites</span> and{" "}
          <span className="text-main-text">AI automation</span> projects for
          businesses, combining software with practical solutions to real
          problems.
        </p>
        <p className="md:text-[17px] text-[14px] font-body text-sec-text text-pretty tracking-wide leading-[1.7] md:w-[85%] w-full">
          I enjoy understanding the whole system, from frontend to backend,
          APIs, AI, and deployment. My goal is simple: build software that is
          fast, reliable, and useful.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
