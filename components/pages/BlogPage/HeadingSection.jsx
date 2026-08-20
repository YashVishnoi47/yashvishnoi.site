"use client";
import BookaCallPopUp from "@/components/ui/BookaCallPopUp";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

const HeadingSection = () => {
  return (
    <div
      className={cn(
        "w-full h-fit",
        "flex flex-col sm:gap-6 gap-6 justify-center items-start sm:mt-30 mt-20",
      )}
    >
      <span className="text-[13px] uppercase text-sec-text font-label tracking-widest">
        Guestbook
      </span>

      <h1 className="text-h1 md:w-1/2 w-full text-main-text text-balance font-head tracking-tight leading-[1.27]">
        Leave Your Mark on the{" "}
        <span className="relative px-1">
          <span className="relative z-2 sm:bg-transparent bg-accent-main sm:text-main-text">
            Journey
          </span>{" "}
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className={
              "absolute inset-0 sm:flex hidden bg-accent-main overflow-hidden  rounded-[4px] z-3"
            }
          >
            <span className="relative  text-main-bg shrink-0 whitespace-nowrap italic">
              Journey
            </span>{" "}
          </motion.span>
        </span>
      </h1>

      <h2 className="md:text-[18px] text-[14px] md:w-[70%] w-full text-sec-text text-pretty font-body mt-1">
        Every visitor experiences my portfolio a little differently. Leave a
        note and share what you think about me, my work, and the journey behind
        it.
      </h2>

      {/* <div className="w-full flex justify-start items-start gap-8 mt-8">
        <div className="text-[13px] flex gap-1.5">
          <div className="text-sec-text">{messages || 0}</div>
          <div className="text-faint-text">Notes</div>
        </div>

        <div className="text-[13px] flex gap-1.5">
          <div className="text-faint-text">Last one</div>
          <div className="text-sec-text">{latestUploaded}</div>
        </div>
      </div> */}
    </div>
  );
};

export default HeadingSection;
