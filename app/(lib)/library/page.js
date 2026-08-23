import LibHeading from "@/components/pages/LibraryPage/LibHeading";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Components Library",
  description: "Modern web applications, SaaS products, and modern websites.",

  alternates: {
    canonical: "/library",
  },

  openGraph: {
    title: "Guestbook | Yash Vishnoi",
    description:
      "Explore Yash Vishnoi's portfolio of web applications, SaaS products, and modern websites.",
    url: "https://yashvishnoi.site/library",
  },
};

const Library = async ({ searchParams }) => {
  const params = await searchParams;
  const show = params.show;

  if (!show) {
    redirect("/library/?show=components");
  }

  return (
    <div
      className={cn(
        "min-h-fit w-full relative",
        "flex flex-col justify-start items-center sm:px-0 p-2 gap-40",
      )}
    >
      {show === "components" && (
        <LibHeading
          heading={"Components"}
          subHeading={
            "Every reusable piece from yashvishnoi.site, laid out for a quick scan. Click through to a component for the full preview and code."
          }
        />
      )}
    </div>
  );
};

export default Library;
