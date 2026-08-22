import BlogBox from "@/components/pages/BlogPage/BlogBox";
import VerticalBlogBox from "@/components/pages/BlogPage/VerticalBlogBox";
import HeadingSection from "@/components/pages/GuestBook/HeadingSection";
import { getAllBlogs } from "@/lib/BlogFunctions";
import { cn } from "@/lib/utils";
import React from "react";

const Blog = () => {
  const blogPosts = getAllBlogs();

  const latestBlog = blogPosts[0];


  const renderBlogSList = () => {
    if (blogPosts.length > 0) {
      return (
        <div className="w-full flex flex-col gap-10 justify-center items-center">
          <div className="w-full flex flex-col justify-center items-start">
            <span className="text-[12px] uppercase text-sec-text font-label tracking-wider">
              All Posts
            </span>
            <div className="w-full h-[1px] bg-sec-border mt-6" />
          </div>
          <div className="w-full grid gap-8 md:grid-cols-2 grid-cols-1">
            {blogPosts.map((item, idx) => {
              return <VerticalBlogBox item={item} key={idx} />;
            })}
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full h-[1px] bg-sec-border mb-6" />
            <span className="text-[12px] text-sec-text font-label">
              That's everything so far — more soon.
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-screen flex flex-col gap-10 justify-center items-center">
        <span className="text-[32px] font-head font-bold text-main-text">
          Blogs coming soon
        </span>
      </div>
    );
  };

  return (
    <div
      className={cn(
        "min-h-fit w-full relative",
        "flex flex-col justify-start items-center sm:px-0 p-2 gap-40",
      )}
    >
      {blogPosts.length > 0 && <HeadingSection />}


      <BlogBox item={latestBlog} />

      {renderBlogSList()}
    </div>
  );
};

export default Blog;
