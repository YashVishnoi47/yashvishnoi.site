"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CTAButton from "../ui/CTAButton";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { motion } from "framer-motion";
import { Duru_Sans } from "next/font/google";

const Navbar = () => {
  return (
    <motion.div
      className="h-20 max-w-[1228.8px] flex items-center justify-center gap-8 px-4 mt-4 rounded-lg text-white bg-black border border-black sm:w-[75%] w-[90%]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        bounce: 0.3,
        visualDuration: 0.5,
        stiffness: 50,
      }}
    >
      <div className="h-full w-full flex justify-start items-center">
        <Link
          href={"/"}
          className="flex justify-center items-center gap-4 cursor-pointer"
        >
          <Image src="/yash-logo.svg" alt="logo" width={50} height={50} />
          <h1 className="lg:text-2xl text-lg sm:block hidden font-bold">
            Yash Vishnoi
          </h1>
        </Link>
      </div>

      <div className="h-full w-full lg:flex hidden gap-6 justify-center items-center">
        {[
          { name: "Home", link: "/" },
          { name: "About", link: "/" },
          { name: "Services", link: "/" },
          { name: "Projects", link: "/" },
        ].map((item, idx) => {
          return (
            <div key={idx}>
              <NavLink idx={idx} item={item} />
            </div>
          );
        })}
      </div>

      <div className="h-full w-full flex justify-end items-center">
        <div className="lg:block hidden">
          <CTAButton text={"Book a call"} />
        </div>

        <MobileDropdown />
      </div>
    </motion.div>
  );
};

export default Navbar;

const NavLink = ({ item, idx }) => {
  return (
    <Link
      key={idx}
      href={item.link}
      className="cursor-pointer text-[17px] font-medium flex relative group"
    >
      {item.name}
      <span className="absolute bottom-0 right-0 group-hover:left-0 w-0 group-hover:w-full h-0.5 bg-white transition-all duration-300 ease-in-out"></span>
    </Link>
  );
};

const MobileDropdown = () => {
  return (
    <div className="lg:hidden block">
      <Popover>
        <PopoverTrigger>
          <Image src="/menu.svg" alt="logo" width={40} height={40} />
        </PopoverTrigger>
        <PopoverContent className="mr-5 mt-5 w-56 rounded-xl border border-white/10 bg-black/90 p-3 text-white shadow-2xl backdrop-blur-xl">
          <ul className="flex flex-col gap-1">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/" },
              { name: "Services", link: "/" },
              { name: "Projects", link: "/" },
            ].map((item, idx) => (
              <li
                key={idx}
                className="group relative overflow-hidden rounded-lg"
              >
                <NavLink
                  idx={idx}
                  item={item}
                  className="relative z-10 flex w-full items-center px-4 py-2 text-sm font-medium text-white/80 transition-colors duration-300 ease-out group-hover:text-white"
                />
                <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
};
