"use client";
import { cn, easing } from "@/lib/utils";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CheckCheck, Copy } from "lucide-react";

const CodeBox = ({ component, code }) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const MotionCheckCheck = motion(CheckCheck);
  const MotionCopy = motion(Copy);

  const copyCode = async () => {
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
    <div className="w-full min-h-[50vh] flex flex-col justify-start items-center border border-main-border rounded-[12px] overflow-hidden bg-card-bg ">
      <div className="w-full h-12 flex justify-between items-center border-b border-main-border bg-sec-bg shrink-0">
        <div className="w-1/2 h-full flex justify-start items-start">
          <button
            onClick={() => setShowCode(false)}
            className={cn(
              "text-[14px] px-4 text-sec-text h-full flex justify-center items-center transition-all duration-200 ease-in-out cursor-pointer relative",
              !showCode
                ? "text-main-text"
                : "border-transparent hover:text-main-text",
            )}
          >
            Preview
            {!showCode && (
              <motion.span
                layoutId="span"
                className="w-full h-[2px] bg-accent-main absolute bottom-0 left-0"
                transition={{ duration: 0.2, ease: easing }}
              />
            )}
          </button>
          <button
            onClick={() => setShowCode(true)}
            className={cn(
              "text-[14px] px-4 text-sec-text h-full flex justify-center items-center transition-all duration-200 ease-in-out cursor-pointer relative",
              showCode
                ? "text-main-text"
                : "border-transparent hover:text-main-text",
            )}
          >
            Code
            {showCode && (
              <motion.span
                layoutId="span"
                className="w-full h-[2px] bg-accent-main absolute bottom-0 left-0"
                transition={{ duration: 0.2, ease: easing }}
              />
            )}
          </button>
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
                animate={{ opacity: 1, scale: 1, y: 0, filter: "Blur(0px)" }}
                exit={{ opacity: 0, scale: 0.8, y: 20, filter: "Blur(10px)" }}
                transition={{ duration: 0.2, delay: 0, ease: easing }}
              />
            ) : (
              <MotionCopy
                onClick={copyCode}
                className="text-sec-text cursor-pointer hover:text-main-text transition-all duration-200 ease-in-out absolute"
                size={16}
                key="copy"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 20,
                  filter: "Blur(10px)",
                }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "Blur(0px)" }}
                exit={{ opacity: 0, scale: 0.8, y: 20, filter: "Blur(10px)" }}
                transition={{ duration: 0.2, delay: 0, ease: easing }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="w-full h-[50vh] max-h-[60vh] flex justify-center items-center hide-scrollbar">
        {showCode ? (
          <SyntaxHighlighter
            className={"hide-scrollbar"}
            language="jsx"
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
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            {component.component}
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeBox;
