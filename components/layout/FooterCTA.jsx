"use client";
import React from "react";
import { motion } from "framer-motion";
import BookaCallPopUp from "../ui/BookaCallPopUp";
import PrimaryButtonV2 from "../ui/PrimaryButtonV2";
import SecondaryButton from "../ui/SecondaryButton";
import Link from "next/link";

const FooterCTA = () => {
  return (
    <div className="w-full md:h-100 h-fit flex flex-col gap-8 justify-start items-start mt-40 rounded-[12px] p-6 bg-sec-bg border border-main-border mb-20 relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e3a34c1f 1px, transparent 1px),
        linear-gradient(to bottom, #e3a34c1f 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
           radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)
      `,
          WebkitMaskImage: `
                   repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
           radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <p className="md:text-[52px] text-[32px] w-fit flex flex-col justify-start items-start text-main-text font-head tracking-tight leading-[1.4] relative z-1 bg-sec-bg">
        Let's get your website{" "}
        <span className="w-full">
          <span className="relative px-1">
            <span className="relative z-2 sm:bg-transparent bg-accent-main sm:text-main-text text-main-bg ">
              built and deployed
            </span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className={
                "absolute inset-0 sm:flex hidden bg-accent-main overflow-hidden  rounded-[4px] z-3"
              }
            >
              <span className="relative  text-sec-bg shrink-0 whitespace-nowrap italic">
                built and deployed
              </span>{" "}
            </motion.span>
          </span>{" "}
          in no time.
        </span>
      </p>

      <p className="md:text-[16px] md:w-2/3 w-full text-[14px] font-body text-sec-text text-pretty tracking-wide leading-[1.5] relative z-1 bg-sec-bg">
        From idea to live website — I'll handle the design, development, and technical details so you don't have to.
      </p>

      <div className="w-fit flex md:flex-row flex-col justify-start items-start gap-4 mt-2 relative z-1 bg-sec-bg">
        <BookaCallPopUp>
          <PrimaryButtonV2 text={"Take with Yash"} />
        </BookaCallPopUp>
        <Link href="/#work">
          <SecondaryButton text={"Explore Work"} />
        </Link>
      </div>
    </div>
  );
};

export default FooterCTA;
