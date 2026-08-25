import ComingSoon from "@/components/layout/ComingSoon";
import FiltersBar from "@/components/pages/LibraryPage/FiltersBar";
import LibHeading from "@/components/pages/LibraryPage/LibHeading";
import ShowCaseArea from "@/components/pages/LibraryPage/ShowCaseArea";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";
import React from "react";
import { ButtonsRegistry, IconsRegistry } from "@/LibraryDatabase/registry";

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

const ComponentsPage = async ({ searchParams }) => {
  const params = await searchParams;
  const show = params.show;
  const registries = [...ButtonsRegistry, ...IconsRegistry];

  if (process.env.NEXT_PUBLIC_ENV === "prod") {
    return <ComingSoon />;
  }

  return (
    <div
      className={cn(
        "min-h-screen w-full relative",
        "flex flex-col justify-start items-center sm:px-0 p-2 gap-12 pb-30",
      )}
    >
      <LibHeading
        heading={"Components"}
        subHeading={
          "Every reusable piece from yashvishnoi.site, laid out for a quick scan. Click through to a component for the full preview and code."
        }
      />

      <div className="w-full h-fit flex flex-col gap-10">
        <FiltersBar show={show} registries={registries} />
        <ShowCaseArea show={show} registries={registries} />
      </div>
    </div>
  );
};

export default ComponentsPage;
