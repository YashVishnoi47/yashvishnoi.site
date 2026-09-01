"use client";
import React from "react";
import { motion } from "framer-motion";
import { easing } from "@/lib/utils";
import BookaCallPopUp from "@/components/ui/BookaCallPopUp";
import Image from "next/image";
import LegalIntakeOS from "@/assets/svg/LegalIntakeOS";
import PrimaryButtonV2 from "@/components/ui/PrimaryButtonV2";
import Folder from "@/components/ui/Folder";

const ClientWorkSection = () => {
  const Projects = [
    {
      Label: "Portfolio",
      name: "Alvin Okoli",
      link: "https://yashvishnoi.pro",
      image: "/screenshots/clinetProject/AlvinMacScreen.png",
      desc: "Designed and developed a modern portfolio website with a strong visual identity, smooth animations, responsive layouts, and an SEO-focused structure.",
      tech: [
        { name: "Design & Development" },
        { name: "SEO Optimization" },
        { name: "Animation & Microinteractions" },
      ],
    },
    {
      Label: "Client Work",
      name: "Wiscripts",
      link: "https://yashvishnoi.pro",
      image: "/screenshots/clinetProject/wiscripts1.png",
      desc: "Built the website experience for Wiscripts' client, focusing on modern UI, responsive development, and AI-powered automation tailored to their business.",
      tech: [
        { name: "Design & Development" },
        { name: "Website Development" },
        { name: "AI and Automation" },
      ],
    },
    {
      Label: "Website",
      name: "Meridian Immigration Law",
      image: "/screenshots/clinetProject/Meridian.png",
      link: "https://yashvishnoi.pro",
      desc: "Designed and developed a professional law firm website with a conversion-focused structure, SEO optimization, responsive design, and subtle microinteractions.",
      tech: [
        { name: "Design & Development" },
        { name: "SEO Optimization" },
        { name: "Animation & Microinteractions" },
      ],
    },
    {
      Label: "Portfolio",
      name: "Book Stone LawFirm",
      link: "https://yashvishnoi.pro",
      image: "/screenshots/clinetProject/bookstone.png",
      desc: "Designed and developed a polished law firm website focused on credibility, user experience, responsive performance, and search engine optimization.",
      tech: [
        { name: "Design & Development" },
        { name: "SEO Optimization" },
        { name: "Animation & Microinteractions" },
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6 justify-center items-center">
      <div className="w-full gap-6 grid grid-cols-2 justify-center items-center flex-wrap">
        {Projects.map((item, idx) => (
          <motion.div
            initial={{ sacale: 1 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.1, ease: easing }}
            key={idx}
            className="w-full min-h-[578px] bg-sec-bg border border-main-border rounded-[12px] flex justify-between items-center flex-col-reverse overflow-hidden hover:shadow-accent-tint shadow-lg transition-all duration-300 ease-in-out pb-10"
          >
            <div className="h-fit w-full flex gap-3 flex-col justify-start items-start p-5">
              <p className="text-main-text font-head text-[28px]">
                {item.name}
              </p>
              <p className="text-[14px] w-[100%] text-sec-text text-pretty tracking-wide leading-[1.6] line-clamp-3">
                {item.desc}
              </p>

              <div className="w-full flex flex-wrap gap-3 justify-start items-start mt-4">
                {item.tech.map((item, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-1 flex justify-center items-center border border-main-border text-sec-text text-[12px] rounded-[4px] bg-sec-bg font-label cursor-default"
                  >
                    {item.name}
                  </div>
                ))}
              </div>

              {/* <Link href={item.link} target="_blank" className={"mt-4"}>
                <ProjectButton />
              </Link> */}
            </div>

            <div className="w-full shrink-0 h-80 flex justify-center items-center bg-card-bg border-b border-main-border relative p-2">
              <div className="w-[90%] h-[90%]  flex justify-center items-center p1 rounded-[8px]">
                {item.image && (
                  <Image
                    className="w-full h-full rounded-[8px] object-cover"
                    unoptimized
                    src={item.image}
                    alt={item.name}
                    width={160}
                    height={160}
                  />
                )}
                <p className="text-[10px] text-accent-main font-label uppercase tracking-wider absolute top-4 right-4 p-2 bg-accent-tint rounded-[4px] backdrop-blur-xl">
                  {item.Label}
                </p>

                {item.icon && item.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full col-span-3 md:h-90 h-fit bg-card-bg border border-main-border rounded-[12px] flex justify-between items-center md:flex-row flex-col-reverse">
        <div
          className={
            "h-full md:w-[55%] w-full flex gap-4 flex-col justify-start items-start md:p-10 p-8"
          }
        >
          <p className="text-[20px] font-head text-main-text font-medium">
            Your Next Project Starts Here.{" "}
          </p>
          <p className="text-[16px] w-[90%] text-sec-text text-pretty tracking-wide leading-[1.5] mb-4">
            High-performance websites designed to make your business look
            credible, stand out from competitors, and turn visitors into
            customers.
          </p>

          <div className="w-[46%] flex gap-4 flex-col justify-start items-start">
            <span className="text-[14px] text-sec-text font-label">
              Let's Build it
            </span>
            <BookaCallPopUp>
              <PrimaryButtonV2 text={"Start a Project"} />
            </BookaCallPopUp>
          </div>
        </div>

        <div
          className={
            "md:w-[45%] w-full md:h-full flex justify-center items-center h-fit bg-sec-bg border-l border-main-border"
          }
        >
          <Folder />
        </div>
      </div>
    </div>
  );
};

export default ClientWorkSection;
