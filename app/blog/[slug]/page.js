import { getAllBlogs, getBlogBySlug } from "@/lib/BlogFunctions";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import VerticalBlogBox from "@/components/pages/BlogPage/VerticalBlogBox";

const page = async ({ params }) => {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  const OtherBolgs = getAllBlogs().filter((item) => item.slug !== blog.slug);

  return (
    <div
      className={cn(
        "min-h-screen w-full relative",
        "flex flex-col justify-start items-center sm:px-0 p-2 gap-25",
      )}
    >
      <div
        className={cn(
          "w-full h-fit",
          "flex flex-col sm:gap-6 gap-6 justify-center items-start sm:mt-30 border-b border-main-border pb-10",
        )}
      >
        <Link
          href="/blog"
          className="text-[11px] mb-8 flex gap-2 text-sec-text font-label hover:text-accent-main transition-all duration-200 ease-in-out"
        >
          <ArrowLeft size={16} />
          Return to Blog
        </Link>

        <span className="text-[11px] uppercase text-sec-text font-label tracking-widest">
          <span className="uppercase text-accent-main">TECH</span>
          {" - "}
          {blog.date} - {blog.read || "XX min read"}
        </span>

        <h1 className="md:text-[48px] text-[32px] md:w-[80%] w-full text-main-text text-balance font-head tracking-tight leading-[1.27]">
          {blog.title}
        </h1>

        <h2 className="md:text-[18px] text-[14px] md:w-[70%] w-full text-sec-text text-pretty font-body mt-1">
          {blog.description}
        </h2>
      </div>

      <div className="w-full flex flex-col gap-8 justify-center items-start">
        <div className="w-full aspect-video bg-white/10 rounded-[12px]"></div>

        <div className="w-full text-[16px] text-sec-text prose prose-invert max-w-none mt-12">
          <MDXRemote source={blog.content} />
        </div>
      </div>

      {OtherBolgs.length > 0 && (
        <div className="w-full flex flex-col justify-center items-start">
          <span className="text-[12px] uppercase text-sec-text font-label tracking-wider">
            Other Posts
          </span>
          <div className="w-full h-[1px] bg-sec-border mt-6" />
          <div className="w-full grid gap-8 md:grid-cols-2 grid-cols-1 mt-10">
            {OtherBolgs.map((item, idx) => {
              return <VerticalBlogBox item={item} key={idx} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
