import BlogBox from "@/components/pages/BlogPage/BlogBox";
import HeadingSection from "@/components/pages/GuestBook/HeadingSection";
import { cn } from "@/lib/utils";
import React from "react";

const Blog = () => {
  return (
    <div
      className={cn(
        "min-h-screen w-full relative",
        "flex flex-col justify-start items-center sm:px-0 p-2 gap-40",
      )}
    >
      <HeadingSection />
      <BlogBox />
    </div>
  );
};

export default Blog;
