"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {
  Workflow,
  Clock,
  Smartphone,
  TrendingUp,
  LifeBuoy,
  DollarSign,
} from "lucide-react";
import BookaCallPopUp from "@/components/ui/BookaCallPopUp";
import IconBox from "@/components/ui/IconBox";

const FAQ = () => {
  const [open, setOpen] = React.useState([]);
  const IconStyles = "size-5 text-white";

  const FAQ = [
    {
      icon: <Workflow className={IconStyles} />,
      question: "What's your process for building a website?",
      Answer:
        "It starts with understanding your goals, then moves through design, development, testing, and deployment — with you in the loop at every key stage so the end result actually matches what you had in mind.",
    },
    {
      icon: <Clock className={IconStyles} />,
      question: "How long will my project take?",
      Answer:
        "A standard website typically takes 4-8 Days; more complex builds with custom integrations can run longer. You'll get a clear timeline upfront, before any work begins.",
    },
    {
      icon: <Smartphone className={IconStyles} />,
      question: "Will it work well on mobile?",
      Answer:
        "Every site I build is fully responsive by default — tested across desktops, tablets, and phones so it looks and performs the same everywhere.",
    },
    {
      icon: <TrendingUp className={IconStyles} />,
      question: "Can it grow as my business does?",
      Answer:
        "Yes. Everything is built with scalability baked in, so adding new pages, features, or integrations later is straightforward — not a rebuild.",
    },
    {
      icon: <LifeBuoy className={IconStyles} />,
      question: "What happens after launch?",
      Answer:
        "You're not on your own. I offer post-launch support for fixes and small updates, plus an ongoing maintenance plan if you want long-term coverage.",
    },
    {
      icon: <DollarSign className={IconStyles} />,
      question: "How much does a project cost?",
      Answer:
        "It depends on scope — a simple site costs less than a custom app with integrations. You'll get a clear, itemized quote before we start, with no surprise charges along the way.",
    },
  ];

  return (
    <div className="w-full h-fit flex flex-col justify-center gap-4 items-start">
      <div className="w-full h-fit grid gap-6 md:grid-cols-2 grid-cols-1 flex-wrap">
        {FAQ.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "md:h-45  h-fit mdw[50%] w-full flex flex-col justify-start items-start gap-4",
            )}
          >
            <div
              key={idx}
              className={cn(
                "h-fit w-full gap-3 flex md:flex-row flex-col md:justify-start justify-center md:items-center items-start group transition-all duration-300 ease-in-out",
              )}
            >
              <IconBox>{item.icon}</IconBox>
              {/* <div className="size-10 rounded-[8px] flex justify-center items-center border border-accent-border bg-accent-main">
                {item.icon}
              </div> */}

              <p className="text-[16px] text-main-text font-medium">
                {item.question || "Some text here"}
              </p>
            </div>

            <div className="flex w-[90%] justify-start items-start">
              <span className="md:text-[14px] text-[14px] font-body text-sec-text text-pretty tracking-wide leading-[1.5]">
                {item.Answer}{" "}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div
        className={cn(
          "w-full h-12 flex gap-1 justify-center items-center",
          open.includes(5) || (open.includes(7) && "-t"),
        )}
      >
        <span className="md:text-[14px] text-[12px] text-sec-text">
          Can't find the answer you're looking for?
        </span>{" "}
        <BookaCallPopUp>
          <div className="text-[14px] text-accent-main cursor-pointer font-medium underline decoration-accent-main">
            Talk to Yash
          </div>
        </BookaCallPopUp>
      </div>
    </div>
  );
};

export default FAQ;
