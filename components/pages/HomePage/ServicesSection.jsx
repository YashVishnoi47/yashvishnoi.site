"use client"
import React ,{ useState } from "react";
import { Globe as Globee, Smartphone, Palette, Search, Wrench, Bot, ArrowRight } from "lucide-react";
import PrimaryButtonV2 from "@/components/ui/PrimaryButtonV2";
import BookaCallPopUp from "@/components/ui/BookaCallPopUp";
import Folder from "@/components/ui/Folder";
import ServiceFolder from "./ServiceFolder";
import Globe from "@/components/ui/Globe";
import Link from "next/link";
import {motion} from "framer-motion";
import { cn } from "@/lib/utils";
import ProjectButton from "@/components/ui/ProjectButton";
const ServicesSection = () => {
  const IconStyles = "size-4 text-accent-main";

  const Services = [
    {
      icon: <Globee className={IconStyles} />,
      heading: "Custom Websites",
      subheading:
        "A site built around your business, not a template — fast, clean, and yours.",
    },
    {
      icon: <Palette className={IconStyles} />,
      heading: "Website Design",
      subheading:
        "Interfaces people enjoy using, with a flow that just makes sense.",
    },
    {
      icon: <Smartphone className={IconStyles} />,
      heading: "Responsive Design",
      subheading:
        "Looks sharp on phones, tablets, and desktops — no zooming, no squinting.",
    },
    {
      icon: <Search className={IconStyles} />,
      heading: "SEO Optimization",
      subheading: "Built to get found on Google, not just built to look good.",
    },
    {
      icon: <Wrench className={IconStyles} />,
      heading: "Website Maintenance",
      subheading:
        "Updates, fixes, and check-ins — so your site stays fast and never breaks silently.",
    },
    {
      icon: <Bot className={IconStyles} />,
      heading: "Automation & Integrations",
      subheading:
        "Connect your tools and cut the repetitive busywork out of your day.",
    },
  ];

  return (
    <div className="w-full grid md:grid-rows-2 grid-rows-1 gap-20 min-h-0 min-w-0">
      <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-center items-center">
        {Services.map((item, idx) => (
          <div
            key={idx}
            className="flex gap-3 w-full flex-col justify-start items-start sm:px-0 px-2 py-4"
          >
            <div className="size-10 rounded-[4px] flex justify-center items-center border border-main-border bg-sec-bg">
              {item.icon}
            </div>

            <p className="text-[20px] font-head text-main-text mt-3">
              {item.heading}
            </p>

            <p className="md:text-[16px] text-[14px] text-sec-text text-pretty tracking-wide leading-[1.5]">
              {item.subheading}
            </p>
          </div>
        ))}

        {/* <ServiceFolder /> */}
      </div>

      <div className="w-full md:h-100 h-fit flex gap-4 justify-start items-start rounded-[8px] bg-sec-bg border border-main-border">
        <div className="w-1/2 h-full flex flex-col gap-4 justify-start items-start p-8">
          <p className="text-[20px] font-head text-main-text font-medium">
            Global Website Development.{" "}
          </p>

          <p className="md:text-[16px] text-[14px] font-body text-sec-text text-pretty tracking-wide leading-[1.5]">
            High-performance websites designed to make your business look
            credible, stand out from competitors, and turn visitors into
            customers.
          </p>

          <div className="w-[46%] mt-8 flex gap-2 flex-col justify-start items-start">
            <span className="text-[14px] text-sec-text font-label">
              Worked with 10+ Businesses and Law Firms
            </span>
            <Link href="/" className={"mt-2"}>
              <BookaCallPopUp>
                {/* <ProjectButton text={"Work with me"} /> */}
                <PrimaryButtonV2 text={"Talk with Yash"} />
              </BookaCallPopUp>
            </Link>
          </div>
        </div>

        <div className="w-1/2 h-full flex flex-col gap-4 justify-center items-center relative overflow-hidden">
          <Globe />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;




