import MainProjects from "@/components/sections/projects/MainProjects";
import ProjectHeader from "@/components/sections/projects/ProjectHeader";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import React from "react";

const page = () => {
  return (
    <div className="bg-bg-k flex max-w-360 flex-col justify-start items-center h-fit w-full  relative ">
      <ProjectHeader />

      <MainProjects />
    </div>
  );
};

export default page;
