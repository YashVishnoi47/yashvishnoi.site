import { cn } from "@/lib/utils";
import React from "react";

const SecondaryButton = ({ text, arrow = false, icon }) => {
  return (
    <button
      className={cn(
        "px-6 h-[45px] cursor-pointer rounded-[8px] transition-all duration-300 ease-out flex justify-center items-center gap-1.5 group active:scale-[0.97] border border-[var(--main-border)]",

        "bg-[var(--sec-bg)] text-[var(--main-text)] shadow-sm",

        "hover:bg-[var(--card-bg)] hover:border-[var(--accent-main)]/60",
      )}
    >
      {icon && icon}
      <span className="text-main-text">{text || "Click me"}</span>

      {arrow && (
        <ArrowRight
          size={16}
          className="text-secondary-text group-hover:translate-x-1 group-hover:text-primary-text scale-[0.95] group-hover:scale-[1] transition-all duration-300 ease-out"
        />
      )}
    </button>
  );
};

export default SecondaryButton;
