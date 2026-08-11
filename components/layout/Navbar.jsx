import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import PrimaryButtonV2 from "../ui/PrimaryButtonV2";

const Navbar = () => {
  const Links = [
    {
      name: "Work",
      href: "/",
    },
    {
      name: "Stack",
      href: "/",
    },
    {
      name: "Process",
      href: "/",
    },
    {
      name: "About",
      href: "/",
    },
  ];

  return (
    <div className={cn("w-full ", "flex justify-center items-center")}>
      <div className={cn("w-[100%] h-20", "flex justify-between items-center")}>
        <div
          className={cn(
            "w-[33%] h-full",
            "flex gap-3 justify-start items-center",
          )}
        >
          <div className="size-10 rounded-[4px] border border-main-border text-[16px] flex justify-center items-center font-head text-accent-main bg-card-bg p-2 cursor-pointer">
            Y
          </div>

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
            "w-[33%] h-full",
            "flex gap-2 justify-end items-center",
          )}
        >
          <PrimaryButtonV2 text="Talk with Yash" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
