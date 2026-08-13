import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  const iconsStyles = "size-4 text-sec-text text-sec-text hover:text-main-text transition-all duration-200 ease-out";
  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/yashvishnoi",
      icon: <Twitter className={iconsStyles} />,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/yashvishnoi/",
      icon: <Linkedin className={iconsStyles} />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/yashvishnoi/",
      icon: <Instagram className={iconsStyles} />,
    },
  ];

  const links = [
    {
      type: "Explore",
      l: [
        { name: "About", href: "/" },
        { name: "Work", href: "/" },
        { name: "Stack", href: "/" },
        { name: "Process", href: "/" },
      ],
    },
    {
      type: "Company",
      l: [
        { name: "About", href: "/" },
        { name: "Work", href: "/" },
        { name: "Stack", href: "/" },
        { name: "Process", href: "/" },
      ],
    },
  ];
  return (
    <div className="w-full h-fit border-t border-main-border py-8 flex md:flex-row flex-col justify-between items-center">
      <div className="md:w-1/2 w-full h-full flex flex-col gap-6 justify-start items-start">
        <div className={cn("flex gap-3 justify-start items-center")}>
          <div className="size-10 rounded-[4px] border border-main-border text-[16px] flex justify-center items-center font-head text-accent-main bg-card-bg p-2 cursor-pointer">
            Y
          </div>

          <p className="text-[16px] tracking-tighter text-main-text font-head cursor-pointer">
            Yash Vishnoi
          </p>
        </div>

        <p className="text-[14px] text-sec-text w-[65%]">
          Extremely Good Looking Websites for Businesses and Startups Businesses
        </p>

        <div className="flex gap-3 justify-start items-start">
          {socialLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              target="_blank"
              className="text-[12px] text-sec-text flex justify-center items-center"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className="md:w-1/2 w-full h-full flex gap-8 justify-end items-start">
        {links.map((item, idx) => (
          <div key={idx} className="h-fit w-1/3 md:flex hidden flex-col md:justify-start justify-center md:items-end items-center gap-4">
            <div className={"w-fit flex flex-col gap-4"}>

            <span className="text-[14px] text-faint-text font-medium">
              {item.type}
            </span>
            <div className="flex flex-col items-start gap-2">
              {item.l.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="text-[14px] text-sec-text hover:text-main-text transition-all duration-200 ease-in-out flex justify-center items-center"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
