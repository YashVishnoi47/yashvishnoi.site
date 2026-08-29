"use client";
import { cn, easing } from "@/lib/utils";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CheckCheck, Copy } from "lucide-react";

const Installation = ({ component, code }) => {
  const [copied, setCopied] = useState(false);
  const MotionCheckCheck = motion(CheckCheck);
  const MotionCopy = motion(Copy);

  const copyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  return (
    <div className="w-full flex gap-8 flex-col justify-start items-start">
      <div className="w-full flex flex-col gap-2 justify-start items-start">
        <p className="text-[24px] font-head text-main-text tracking-tight leading-tight font-medium">
          Installation
        </p>
        <p className="text-[14px] w-1/2 text-pretty text-sec-text tracking-wide leading-snug">
          No CLI here — this isn't a Tailwind/React library, so setup is just
          two files, not a package install.
        </p>
      </div>

      {/* dependencies */}
      <div className="w-full flex flex-col justify-start items-start gap-6 px-1">
        <div className="flex justify-center gap-4 items-start">
          <Number n={1} />
          <div className="flex flex-col gap- justify-center items-start">
            <span className="text-[14px] font-medium text-main-text">
              Install the dependency
            </span>
            <span className="text-[12px] text-sec-text">
              Install the required package in your project
            </span>
          </div>
        </div>

        <div className="w-full min-h-fit flex flex-col justify-start items-center border border-main-border rounded-[12px] overflow-hidden bg-card-bg ">
          <div className="w-full h-12 flex justify-between items-center border-b border-main-border bg-sec-bg shrink-0">
            <div className="w-1/2 h-full flex justify-start items-center">
              <span className="text-sec-text text-[12px] px-4">
                Command Line
              </span>
            </div>

            <div className="w-1/2 h-full flex justify-end items-center px-4">
              <AnimatePresence mode="sync">
                {copied ? (
                  <MotionCheckCheck
                    className="text-green-500 cursor-pointer transition-all duration-200 ease-in-out absolute"
                    size={16}
                    key="check"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      y: 20,
                      filter: "Blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "Blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      y: 20,
                      filter: "Blur(10px)",
                    }}
                    transition={{ duration: 0.2, delay: 0, ease: easing }}
                  />
                ) : (
                  <MotionCopy
                    onClick={() =>
                      copyCode(`npm install @tailwindcss/typography`)
                    }
                    className="text-sec-text cursor-pointer hover:text-main-text transition-all duration-200 ease-in-out absolute"
                    size={16}
                    key="copy"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      y: 20,
                      filter: "Blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "Blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      y: 20,
                      filter: "Blur(10px)",
                    }}
                    transition={{ duration: 0.2, delay: 0, ease: easing }}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="w-full h-fit max-h-[60vh] flex justify-center items-center hide-scrollbar">
            <SyntaxHighlighter
              className={"hide-scrollbar"}
              language="bash"
              style={oneDark}
              showLineNumbers
              customStyle={{
                margin: 0,
                width: "100%",
                height: "100%",
                background: "transparent",
                fontSize: "14px",
                padding: "20px",
              }}
              codeTagProps={{
                style: {
                  fontFamily: "monospace",
                },
              }}
            >
              {"npm install @tailwindcss/typography"}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>

      {/* utils */}
      <div className="w-full flex flex-col justify-start items-start gap-6 px-1">
        <div className="flex justify-center gap-4 items-start">
          <Number n={2} />
          <div className="flex flex-col gap- justify-center items-start">
            <span className="text-[14px] font-medium text-main-text">
              Add the utility function
            </span>
            <span className="text-[12px] text-sec-text">
              Add the cn utility to your project
            </span>
          </div>
        </div>

        <div className="w-full min-h-fit flex flex-col justify-start items-center border border-main-border rounded-[12px] overflow-hidden bg-card-bg ">
          <div className="w-full h-12 flex justify-between items-center border-b border-main-border bg-sec-bg shrink-0">
            <div className="w-1/2 h-full flex justify-start items-center">
              <span className="text-sec-text text-[12px] px-4">
                /lib/utils.js
              </span>
            </div>

            <div className="w-1/2 h-full flex justify-end items-center px-4">
              <AnimatePresence mode="sync">
                {copied ? (
                  <MotionCheckCheck
                    className="text-green-500 cursor-pointer transition-all duration-200 ease-in-out absolute"
                    size={16}
                    key="check"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      y: 20,
                      filter: "Blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "Blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      y: 20,
                      filter: "Blur(10px)",
                    }}
                    transition={{ duration: 0.2, delay: 0, ease: easing }}
                  />
                ) : (
                  <MotionCopy
                    onClick={() =>
                      copyCode(`import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`)
                    }
                    className="text-sec-text cursor-pointer hover:text-main-text transition-all duration-200 ease-in-out absolute"
                    size={16}
                    key="copy"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      y: 20,
                      filter: "Blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "Blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      y: 20,
                      filter: "Blur(10px)",
                    }}
                    transition={{ duration: 0.2, delay: 0, ease: easing }}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="w-full h-fit max-h-[60vh] flex justify-center items-center hide-scrollbar">
            <SyntaxHighlighter
              className={"hide-scrollbar"}
              language="javascript"
              style={oneDark}
              showLineNumbers
              customStyle={{
                margin: 0,
                width: "100%",
                height: "100%",
                background: "transparent",
                fontSize: "14px",
                padding: "20px",
              }}
              codeTagProps={{
                style: {
                  fontFamily: "monospace",
                },
              }}
            >
              {`import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>

      {/* Code */}

      <div className="w-full flex flex-col justify-start items-start gap-6 px-1">
        <div className="flex justify-center gap-4 items-start">
          <Number n={3} />
          <div className="flex flex-col gap- justify-center items-start">
            <span className="text-[14px] font-medium text-main-text">
              Add the component
            </span>
            <span className="text-[12px] text-sec-text">
              Copy the component code into your project
            </span>
          </div>
        </div>

        <div className="w-full min-h-[50vh] flex flex-col justify-start items-start border border-main-border rounded-[12px] overflow-hidden bg-card-bg ">
          <div className="w-full h-12 flex justify-between items-center border-b border-main-border bg-sec-bg shrink-0">
            <div className="w-1/2 h-full flex justify-start items-center">
              <span className="text-sec-text text-[12px] px-4">
                /components/{component.name.replace(" ", "")}.jsx
              </span>
            </div>

            <div className="w-1/2 h-full flex justify-end items-center px-4">
              <AnimatePresence mode="sync">
                {copied ? (
                  <MotionCheckCheck
                    className="text-green-500 cursor-pointer transition-all duration-200 ease-in-out absolute"
                    size={16}
                    key="check"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      y: 20,
                      filter: "Blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "Blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      y: 20,
                      filter: "Blur(10px)",
                    }}
                    transition={{ duration: 0.2, delay: 0, ease: easing }}
                  />
                ) : (
                  <MotionCopy
                    onClick={() => copyCode(component)}
                    className="text-sec-text cursor-pointer hover:text-main-text transition-all duration-200 ease-in-out absolute"
                    size={16}
                    key="copy"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      y: 20,
                      filter: "Blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "Blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      y: 20,
                      filter: "Blur(10px)",
                    }}
                    transition={{ duration: 0.2, delay: 0, ease: easing }}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="w-full h-fit max-h-[50vh] flex justify-start items-start hide-scrollbar">
            <SyntaxHighlighter
              className={"hide-scrollbar"}
              language="javascript"
              style={oneDark}
              showLineNumbers
              customStyle={{
                margin: 0,
                width: "100%",
                height: "100%",
                background: "transparent",
                fontSize: "14px",
                padding: "20px",
              }}
              codeTagProps={{
                style: {
                  fontFamily: "monospace",
                },
              }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;

const Number = ({ n }) => {
  return (
    <div className="size-8 text-accent-main text-[12px] rounded-full border border-accent-border bg-accent-tint flex justify-center items-center">
      {n}
    </div>
  );
};
