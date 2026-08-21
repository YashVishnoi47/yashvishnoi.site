"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import PrimaryButtonV2 from "../ui/PrimaryButtonV2";
import BookaCallPopUp from "../ui/BookaCallPopUp";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import NavOptionsMenu from "./NavOptionsMenu";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("up");
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - scrollY.getPrevious();
    setScrollDirection(diff > 0 ? "down" : "up");
  });

  const Links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Work",
      href: "/#work",
    },
    {
      name: "About",
      href: "/#about",
    },
    {
      name: "Services",
      href: "/#services",
    },
    // {
    //   name: "Guestbook",
    //   href: "/guestbook",
    // },
  ];

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === "up" ? 0 : -100 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={cn(
        "w-full sticky top-0",
        "flex justify-center items-center bg-main-bg/90 backdrop-blur-2xl z-10000",
      )}
    >
      <div className={cn("w-[100%] h-20", "flex justify-between items-center")}>
        <div
          className={cn(
            "sm:w-[30%] w-full h-full",
            "flex gap-3 justify-start items-center",
          )}
        >
          <Link href="/" className="flex gap-3 justify-start items-center">
            <Image src="/website-logo.svg" alt="logo" width={40} height={40} />

            <p className="text-[16px] tracking-tighter text-main-text font-head cursor-pointer">
              Yash Vishnoi
            </p>
          </Link>
        </div>

        <div
          className={cn(
            "w-[39%] h-[50px]",
            "sm:flex hidden gap-8 justify-center items-center relative",
          )}
        >
          {Links.map((item, idx) => {
            return (
              <Link
                href={item.href}
                key={idx}
                className="text-[14px] text-sec-text font-body hover:text-main-text transition-all duration-200 ease-in-out relative z-2"
              >
                {item.name}
              </Link>
            );
          })}

          <NavOptionsMenu open={open} setOpen={setOpen} />
          <button
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className={cn(
              "text-[14px] font-body hover:text-mai-text transition-all duration-200 ease-in-ou cursor-pointer flex justify-center items-center gap-1 relative z-2",
              open ? "text-main-text" : "text-sec-text",
            )}
          >
            More
            <ChevronDown
              size={18}
              className={
                open
                  ? "rotate-180 transition-all duration-500 ease-in-out"
                  : "transition-all duration-500 ease-in-out"
              }
            />
          </button>
        </div>

        <div
          className={cn(
            "sm:w-[30%] w-1/2 h-full",
            "md:flex hidden gap-2 justify-end items-center",
          )}
        >
          <BookaCallPopUp>
            <PrimaryButtonV2 text="Talk with Yash" />
          </BookaCallPopUp>
        </div>

        {/* Mobile nav menu */}
        <div
          className={cn(
            "sm:w-[33%] w-1/2 h-full",
            "md:hidden flex gap-2 justify-end items-center mr-2",
          )}
        >
          <Popover>
            <PopoverTrigger render={<Menu className="text-main-text" />} />
            <PopoverContent
              className={
                "bg-main-bg flex flex-col gap-2 border relative z-100000 border-main-border h-fit mr-2 mt-5"
              }
            >
              <PopoverHeader>
                {Links.map((item, idx) => {
                  return (
                    <Link
                      href={item.href}
                      key={idx}
                      className="text-[14px] w-full py-2 text-sec-text font-body hover:text-main-text transition-all duration-200 ease-in-out flex justify-start items-start"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
