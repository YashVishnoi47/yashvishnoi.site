import { cn } from "@/lib/utils";
import GuestList from "@/components/pages/GuestBook/GuestList";
import HeadingSection from "@/components/pages/GuestBook/HeadingSection";
import React from "react";

const page = () => {
  return (
    <div
      className={cn(
        "min-h-screen w-full relative",
        "flex flex-col justify-start items-center sm:px-0 p-2 md:gap-30 gap-20",
      )}
    >
      <HeadingSection />
      <GuestList />
    </div>
  );
};

export default page;
