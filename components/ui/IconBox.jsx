import { cn } from "@/lib/utils";
import React from "react";

const IconBox = ({ children, className }) => {
  return (
    <div className="relative flex aspect-square size-10 items-center justify-center rounded-sm bg-linear-to-b from-[var(--color-accent-hover)] to-[var(--accent-main)] align-middle shadow-lg ring-1 ring-white/20 ring-offset-2 ring-offset-[var(--accent-main)] ring-inset">
      {children}
    </div>
  );
};

export default IconBox;
