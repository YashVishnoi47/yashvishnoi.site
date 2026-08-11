import React from "react";

const SecondaryButton = ({ text, arrow = false, icon }) => {
  return (
    <button className="px-6 h-[45px] hover:bg-main-bg bg-sec-bg cursor-pointer rounded-[8px] transition-all duration-300 ease-out flex justify-center items-center gap-1.5 group active:scale-[0.97] border border-main-border shadow-xs shadow-black/20">
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
