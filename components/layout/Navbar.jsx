"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import PrimaryButtonV2 from "../ui/PrimaryButtonV2";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import BookaCallPopUp from "../ui/BookaCallPopUp";
import Image from "next/image";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("up");

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
    {
      name: "Guestbook",
      href: "/guestbook",
    },
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
            "sm:w-[33%] w-full h-full",
            "flex gap-3 justify-start items-center",
          )}
        >
          <Image src="/website-logo.svg" alt="logo" width={40} height={40} />

          <p className="text-[16px] tracking-tighter text-main-text font-head cursor-pointer">
            Yash Vishnoi
          </p>
        </div>

        <div
          className={cn(
            "w-[33%] h-full",
            "sm:flex hidden gap-8 justify-center items-center",
          )}
        >
          {Links.map((item, idx) => {
            return (
              <Link
                href={item.href}
                key={idx}
                className="text-[14px] text-sec-text font-body hover:text-main-text transition-all duration-200 ease-in-out"
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div
          className={cn(
            "sm:w-[33%] w-1/2 h-full",
            "flex gap-2 justify-end items-center",
          )}
        >
          <BookaCallPopUp>
            <PrimaryButtonV2 text="Talk with Yash" />
          </BookaCallPopUp>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
