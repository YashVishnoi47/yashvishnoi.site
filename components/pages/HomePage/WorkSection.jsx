"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import BookaCallPopUp from "@/components/ui/BookaCallPopUp";

const WorkSection = () => {
  const Projects = [
    {
      Label: "Own Product 2026",
      name: "Legal Intake OS™",
      desc: " An AI receptionist built for U.S. law firms. It answers every call, qualifies the lead, detects emergencies, and books the consultation directly onto the firm's calendar — so no client ever reaches voicemail.",
      tech: [
        {
          name: "Retell AI",
        },
        {
          name: "N8N",
        },
        {
          name: "Hostinger",
        },
        {
          name: "Chat GPT",
        },
      ],
    },
  ];

  return (
    <div
      id="work"
      className="w-full flex flex-col gap-6 justify-center items-center"
    >
      <div className="w-full gap-6 flex justify-center items-center flex-wrap">
        {Projects.map((item, idx) => (
          <div
            key={idx}
            className="w-full h-fit bg-card-bg border border-main-border rounded-[12px] flex justify-between items-center md:flex-row flex-col-reverse"
          >
            <div className="h-full md:w-[55%] w-full flex gap-4 flex-col justify-start items-start md:p-10 p-8">
              <p className="text-[12px] text-accent-main font-label uppercase tracking-wider">
                {item.Label}
              </p>
              <p className="text-main-text font-head text-[28px]">
                {item.name}
              </p>
              <p className="text-[16px] w-[90%] text-sec-text text-pretty tracking-wide leading-[1.5]">
                {item.desc}
              </p>

              <div className="w-full flex gap-3 justify-start items-start flex-wrap mt-4">
                {item.tech.map((item, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-1 flex justify-center items-center border border-main-border text-sec-text text-[12px] rounded-[4px] bg-sec-bg font-label cursor-default"
                  >
                    {item.name}
                  </div>
                ))}
              </div>

              <Link href="/" className={"mt-4"}>
                <ProjectButton />
              </Link>
            </div>

            <div className="h-100 md:w-[45%] w-full bg-sec-bg border-l border-main-border"></div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center gap-6 items-start md:flex-row flex-col">
        <div className="md:w-1/2 w-full md:h-60 h-fit p-8 flex flex-col gap-4 justify-center items-start rounded-[8px] bg-sec-bg border border-main-border">
          <p className="text-[20px] font-head text-main-text font-medium">
            Website Services and AI Automation
          </p>

          <p className="md:text-[16px] text-[14px] font-body text-sec-text text-pretty tracking-wide leading-[1.5]">
            I build Websites and AI Automations for founders who need a website
            and the backend systems behind it — booking flows, CRM sync, and
            internal automation, custom-coded rather than templated.
          </p>

          <Link href="/" className={"mt-2"}>
            <BookaCallPopUp>
              <ProjectButton text={"Work with me"} />
            </BookaCallPopUp>
          </Link>
        </div>
        <div className="md:w-1/2 w-full md:h-60 h-fit p-8 flex flex-col gap-4 justify-center items-start rounded-[8px] bg-sec-bg border border-main-border">
          <p className="text-[20px] font-head text-main-text font-medium">
            More on request
          </p>

          <p className="md:text-[16px] text-[14px] font-body text-sec-text text-pretty tracking-wide leading-[1.5]">
            Client work is often under NDA. Happy to walk through additional
            case studies, code samples, or architecture decisions on a call.
          </p>

          <Link href="/" className={"mt-2"}>
            <BookaCallPopUp>
              <ProjectButton text={"Book a call"} />
            </BookaCallPopUp>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;

const ProjectButton = ({ text }) => {
  const [hovered, setHovered] = useState(false);
  const easing = [0.19, 1, 0.22, 1];
  const MotionArrowRight = motion(ArrowRight);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "rounded-[4px] border border-main-border  font-label flex gap-3 justify-center items-center cursor-pointer relative overflow-hidden",
        hovered ? "p-1" : "py-1 px-1 ",
      )}
    >
      <motion.div
        style={{ order: hovered ? 1 : 0 }}
        layout
        transition={{ duration: 0.9, ease: easing }}
        initial={{ rotate: 0 }}
        animate={
          {
            //   rotate: hovered ? 360 : 0,
          }
        }
        className={cn(
          "z-2 size-[20px] bg-accent-main flex justify-center items-center rounded-[4px]",
        )}
      >
        <MotionArrowRight
          size={16}
          initial={{ rotate: -45 }}
          animate={{ rotate: hovered ? 0 : -45 }}
          transition={{ duration: 0.9, ease: easing }}
          className="text-main-text"
        />
      </motion.div>

      <motion.span
        style={{ order: hovered ? 0 : 1 }}
        layout
        transition={{ duration: 0.9, ease: easing }}
        initial={false}
        className={cn(
          "sm:text-[12px] text-[9px] tracking-wide",
          !hovered ? "mr-2" : "ml-2",
          hovered ? "text-accent-main" : "text-main-text",
        )}
      >
        {text || " View Live Site"}
      </motion.span>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: hovered ? "100%" : 0 }}
        transition={{ duration: 0.9, ease: easing }}
        className={cn(
          "absolute flex justify-center items-center sm:text-[13px] text-[9px] tracking-wider inset-0 z-1 pointer-events-none h-full bg-accent-tint",
        )}
      ></motion.div>
    </motion.div>
  );
};
