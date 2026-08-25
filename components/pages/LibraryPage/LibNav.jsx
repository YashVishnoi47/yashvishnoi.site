import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const LibNav = () => {
  const links = [
    {
      name: "Components",
      href: "/library/components",
      soon: true,
    },
    {
      name: "Templates",
      href: "/library/components",
      soon: true,
    },
    {
      name: "Blocks",
      href: "/library/components",
      soon: true,
    },
  ];

  return (
    <div
      className={cn(
        "w-full",
        "flex justify-between md:px-0 px-4 h-20 items-center bg-main-bg/90 backdrop-blur-2xl z-10000 sticky top-0",
      )}
    >
      <div className="sm:w-[30%] w-full h-full flex gap-3 justify-start items-center">
        <Link href="/library/components" className="flex gap-3 justify-start items-center">
          <div className="size-10 rounded-[4px] flex justify-center items-center border border-main-border bg-sec-bg text-accent-main font-label">
            UI
          </div>

          <p className="text-[16px] tracking-tighter text-main-text font-label cursor-pointer">
            yv/ui
          </p>
        </Link>
        <span className="text-[10px] px-1.5 py-0.5 text-faint-text font-label border border-main-border rounded-[4px] bg-sec-bg">
          Beta
        </span>
      </div>

      <div className="sm:w-[30%] w-full h-full md:flex hidden gap-4 justify-center items-center">
        {links.map((item, idx) => (
          <button
            key={idx}
            disabled={item.soon}
            className="px-2 py-2 text-[13px] text-sec-text flex gap-2 justify-center items-center cursor-pointer hover:bg-accent-tint hover:border-accent-border rounded-[6px] transition-all duration-200 ease-in-out active:scale-[0.99] hover:text-accent-main disabled:cursor-not-allowed disabled:text-faint-text disabled:hover:bg-sec-bg disabled:hover:border-main-border"
          >
            {item.name}

            {item.soon && (
              <span className="text-[10px] px-1.5 py-0.5 text-faint-text font-label border border-main-border rounded-[4px] bg-sec-bg">
                Soon
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="sm:w-[32%] w-full h-full flex gap-6 justify-end items-center">
        {/* Search */}
        <div className="w-[50%] h-10 px-2 py-1 md:flex hidden justify-between items-center border-main-border border rounded-[4px] hover:bg-sec-bg cursor-pointer transition-all duration-300 ease-in-out active:scale-[0.97]">
          <span className="text-[12px] text-faint-text font-label">
            Search...
          </span>
          <span className="text-[10px] px-1.5 py-0.5 text-faint-text fontlabel border border-main-border rounded-[4px] bg-sec-bg">
            ⌘ K
          </span>
        </div>

        <Link
          href="/"
          className="text-[12px] text-sec-text hover:text-main-text flex gap-1 justify-end items-center transition-all duration-200 group ease-in-out"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-0.5 transition-all duration-150  ease-in-out"
          />
          Home
        </Link>
      </div>
    </div>
  );
};

export default LibNav;
