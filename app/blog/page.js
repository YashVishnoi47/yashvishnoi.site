import BlogBox from "@/components/pages/BlogPage/BlogBox";
import VerticalBlogBox from "@/components/pages/BlogPage/VerticalBlogBox";
import HeadingSection from "@/components/pages/GuestBook/HeadingSection";
import { cn } from "@/lib/utils";
import React from "react";

const Blog = () => {
  const blogs = ["", "", "", "", ""];
  return (
    <div
      className={cn(
        "min-h-screen w-full relative",
        "flex flex-col justify-start items-center sm:px-0 p-2 gap-40",
      )}
    >
      <HeadingSection />

      <BlogBox />

      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="w-full flex flex-col justify-center items-start">
          <span className="text-[12px] uppercase text-sec-text font-label tracking-wider">
            All Posts
          </span>
          <div className="w-full h-[1px] bg-sec-border mt-6" />
        </div>
        <div className="w-full grid gap-8 md:grid-cols-2 grid-cols-1">
          {blogs.map((item, idx) => {
            return <VerticalBlogBox key={idx} />;
          })}
        </div>

        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full h-[1px] bg-sec-border mb-6" />
          <span className="text-[12px] text-sec-text font-label">
            That's everything so far — more soon.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
