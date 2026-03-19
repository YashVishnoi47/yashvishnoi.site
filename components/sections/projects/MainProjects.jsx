"use client"
import ConnectPopOver from "@/components/shared/ConnectPopOver";
import HeadingCard from "@/components/ui/HeadingCard";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectsList } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

// TODO: Make it resposive and add the remaining design elements...
const MainProjects = () => {
  const [open, setOpen] = useState(0);
  const [expanded, setExpanded] = useState(null);
  const projects = [
    {
      name: "ParaMotion",
      subHeading:
        "A comprehensive and highly customizable library of React components, designed to facilitate the creation of visually stunning user interfaces.",
      link: "https://github.com/yashvishnoi/nextjs-portfolio",
      techIcons: [
        { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
        { icon: "/techIcons/next.svg", name: "Next JS" },
        { icon: "/techIcons/javascript.svg", name: "Javascript" },
        { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
        { icon: "/techIcons/next.svg", name: "Next JS" },
        { icon: "/techIcons/javascript.svg", name: "Javascript" },
        { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
        { icon: "/techIcons/next.svg", name: "Next JS" },
        { icon: "/techIcons/javascript.svg", name: "Javascript" },
      ],

      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
    {
      name: "ParaMotion",
      subHeading:
        "A comprehensive and highly customizable library of React components, designed to facilitate the creation of visually stunning user interfaces.",
      link: "https://github.com/yashvishnoi/nextjs-portfolio",
      techIcons: [
        { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
        { icon: "/techIcons/next.svg", name: "Next JS" },
        { icon: "/techIcons/javascript.svg", name: "Javascript" },
        { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
        { icon: "/techIcons/next.svg", name: "Next JS" },
        { icon: "/techIcons/javascript.svg", name: "Javascript" },
        { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
        { icon: "/techIcons/next.svg", name: "Next JS" },
        { icon: "/techIcons/javascript.svg", name: "Javascript" },
      ],

      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
    {
      name: "ParaMotion",
      subHeading:
        "A comprehensive and highly customizable library of React components, designed to facilitate the creation of visually stunning user interfaces.",
      link: "https://github.com/yashvishnoi/nextjs-portfolio",
      techIcons: [
        { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
        { icon: "/techIcons/next.svg", name: "Next JS" },
        { icon: "/techIcons/javascript.svg", name: "Javascript" },
        { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
        { icon: "/techIcons/next.svg", name: "Next JS" },
        { icon: "/techIcons/javascript.svg", name: "Javascript" },
        { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
        { icon: "/techIcons/next.svg", name: "Next JS" },
        { icon: "/techIcons/javascript.svg", name: "Javascript" },
      ],

      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },

  ];



  return (
    <div
      id="projects"
      className="w-full max-w-400 flex flex-col gap-8 justify-center items-center mt-37.5 mb-10 border-black "
    >


      {ProjectsList.map((item, idx) => {
        return (
          <div key={idx}>
            <ProjectCard item={item} idx={idx} />
          </div>
        )
      })}


    </div>
  );
};

export default MainProjects;

