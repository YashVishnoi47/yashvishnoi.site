"use client"
import ConnectPopOver from "@/components/shared/ConnectPopOver";
import HeadingCard from "@/components/ui/HeadingCard";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { div } from "three/src/nodes/math/OperatorNode";

// TODO: Make it resposive and add the remaining design elements...
// const ProjectsSection = () => {
//   const [open, setOpen] = useState(0);
//   const [expanded, setExpanded] = useState(null);
//   const projects = [
//     {
//       name: "ParaMotion",
//       subHeading:
//         "A comprehensive and highly customizable library of React components, designed to facilitate the creation of visually stunning user interfaces.",
//       link: "https://github.com/yashvishnoi/nextjs-portfolio",
//       techIcons: [
//         { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
//         { icon: "/techIcons/next.svg", name: "Next JS" },
//         { icon: "/techIcons/javascript.svg", name: "Javascript" },
//       ],
//     },
//     {
//       name: "Vibrium",
//       subHeading:
//         "This is the subheading of the project which I will include later.!!!",
//       link: "https://github.com/yashvishnoi/nextjs-portfolio",
//       techIcons: [
//         { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
//         { icon: "/techIcons/next.svg", name: "Next JS" },
//         { icon: "/techIcons/javascript.svg", name: "Javascript" },
//       ],
//     },
//   ];

//   const designs = [
//     {
//       name: "Designs 1",
//       subHeading:
//         "A comprehensive and highly customizable library of React components, designed to facilitate the creation of visually stunning user interfaces.",
//       link: "https://github.com/yashvishnoi/nextjs-portfolio",
//       techIcons: [
//         { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
//         { icon: "/techIcons/next.svg", name: "Next JS" },
//         { icon: "/techIcons/javascript.svg", name: "Javascript" },
//       ],
//     },

//   ];

//   return (
//     <div
//       id="projects"
//       className="w-full max-w-360 flex flex-col gap-16 justify-start items-center min-h-165 mt-37.5 mb-10 border-black "
//     >
//       <div className="w-full h-fit justify-center items-center flex flex-col gap-8">
//         <HeadingCard
//           head={"Featured Work"}
//           subHead={"Highlighting the best of my development journey."}
//         />

//         <div className="w-full flex justify-center items-center">
//           <div className="px-3 py-2 bg-bg-light border-black flex gap-2 justify-center items-center rounded-md relative">
//             {["Full Stacks Projects", "Designs and Templates"].map((item, idx) => (
//               <div key={idx}
//                 onClick={() => setOpen(idx)}
//                 className={`flex justify-center items-center px-2 py-2 cursor-pointer relative `}>
//                 {open === idx &&
//                   <motion.div layoutId="box" className={`absolute w-full h-full bg-bg-c z-0 rounded-sm`} />
//                 }
//                 <span className={`relative z-1 transition-all duration-300 ease-in-out ${open === idx ? "text-text" : "text-text-muted"} `}>
//                   {item}

//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>

//       <AnimatePresence mode="wait">
//         {open === 0 ? (
//           <motion.div key={"projects"}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="w-full h-fit flex lg:flex-row flex-col flex-wrap justify-center items-center gap-6 relative">
//             {projects.map((item, idx) => {
//               return (
//                 <motion.div
//                   data-text={item.name}
//                   key={idx}
//                   onClick={() => setExpanded(idx)}
//                   className={`lg:w-[40%] w-full h-150 flex flex-col border hover:border-[#7C3AED]/30 bg-bg-light cursor-pointer rounded-2xl p-4 gap-6 transition duration-300 ease-in-out shadow-md hover:shadow-md shadow-black/10 hover:shadow-[#7C3AED]/30 hover:-translate-y-1  active:translate-y-1  active:shadow-white relative group`}
//                 >
//                   <div className="h-[55%] bg-black/20 w-full rounded-xl" />

//                   <div className="h-fit w-full flex flex-col justify-start items-center border-black">
//                     <div className="w-full flex justify-center lg:items-start items-center flex-col gap-6">
//                       <div className="w-full h-fit flex flex-col gap-1 justify-start items-start">
//                         <h5 className="text-[36px] font-medium text-text text-start w-full">
//                           {item.name}
//                         </h5>

//                         <p className="text-[15px] font-light text-text-muted">
//                           {item.subHeading}
//                         </p>
//                       </div>

//                       <div className="flex justify-start gap-1 items-start w-fit h-fit">
//                         {item.techIcons.map((item, idx) => (
//                           <TechTags key={idx} item={item} />
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="w-full flex justify-end gap-2 items-end h-[12%] ">
//                     <div className="flex justify-center items-center gap-2 px-3 py-1 rounded-md group-hover:bg-bg-c transition-all duration-300 ease-in-out">
//                       <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
//                         See more
//                       </span>
//                       <ArrowRight
//                         size={26}
//                         className="-rotate-45 group-hover:rotate-0 transition-all duration-300 ease-in-out"
//                       />
//                     </div>
//                   </div>
//                 </motion.div>
//               )

//             })}
//           </motion.div>
//         ) :
//           (
//             <motion.div
//               key={"designs"}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//               className="w-full h-fit flex lg:flex-row flex-col flex-wrap justify-center items-center gap-6">
//               {designs.map((item, idx) => (
//                 <div
//                   data-text={item.name}
//                   key={idx}
//                   className={`lg:w-[40%] w-full h-150 flex flex-col border hover:border-[#7C3AED]/30 bg-bg-light cursor-pointer rounded-2xl p-4 gap-6 transition duration-300 ease-in-out shadow-md hover:shadow-md shadow-black/10 hover:shadow-[#7C3AED]/30 hover:-translate-y-1  active:translate-y-1  active:shadow-white relative group`}
//                 >
//                   <div className="h-[55%] bg-black/20 w-full rounded-xl" />

//                   <div className="h-fit w-full flex flex-col justify-start items-center border-black">
//                     <div className="w-full flex justify-center lg:items-start items-center flex-col gap-6">
//                       <div className="w-full h-fit flex flex-col gap-1 justify-start items-start">
//                         <h5 className="text-[36px] font-medium text-text text-start w-full">
//                           {item.name}
//                         </h5>

//                         <p className="text-[15px] font-light text-text-muted">
//                           {item.subHeading}
//                         </p>
//                       </div>

//                       <div className="flex justify-start gap-1 items-start w-fit h-fit">
//                         {item.techIcons.map((item, idx) => (
//                           <TechTags key={idx} item={item} />
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="w-full flex justify-end gap-2 items-end h-[12%] ">
//                     <div className="flex justify-center items-center gap-2 px-3 py-1 rounded-md group-hover:bg-bg-c transition-all duration-300 ease-in-out">
//                       <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
//                         See more
//                       </span>
//                       <ArrowRight
//                         size={26}
//                         className="-rotate-45 group-hover:rotate-0 transition-all duration-300 ease-in-out"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           )}
//       </AnimatePresence>




//     </div>
//   );
// };

const ProjectsSection2 = () => {
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

  const designs = [
    {
      name: "Designs 1",
      subHeading:
        "A comprehensive and highly customizable library of React components, designed to facilitate the creation of visually stunning user interfaces.",
      link: "https://github.com/yashvishnoi/nextjs-portfolio",
      techIcons: [
        { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
        { icon: "/techIcons/next.svg", name: "Next JS" },
        { icon: "/techIcons/javascript.svg", name: "Javascript" },
      ],
    },

  ];

  return (
    <div
      id="projects"
      className="w-full max-w-360 flex flex-col gap-16 justify-start items-center min-h-165 mt-37.5 mb-10 border-black "
    >
      <div className="w-full h-fit justify-center items-center flex flex-col gap-8">
        <HeadingCard
          head={"Featured Work"}
          subHead={"Highlighting the best of my development journey."}
        />
      </div>

      {projects.map((item, idx) => {
        return (
          <motion.div
            key={idx}
            className={`w-full lg:h-155 h-fit flex flex-col rounded-2xl py-4 gap-6 transition duration-300 ease-in-out relative group ${idx % 2 == 0 ? "lg:flex-row flex-col" : "lg:flex-row-reverse flex-col"} bg-whte ursor-pointer lg:px-0 px-2`}
          >
            <div className="lg:h-full h-87.5 bg-black/20 w-full rounded-xl" />

            <div className="h-full w-full flex relative flex-col justify-start gap-8 items-center border-black">

              <div className="w-full flex justify-between lg:items-start items-center flex-col gap-4">

                <div className="w-full h-fit flex flex-col gap-1 justify-start items-start">
                  <h5 className="text-[48px] font-medium text-text text-start w-full">
                    {item.name}
                  </h5>

                  <p className="text-[16px] font-light text-text-muted">
                    {item.subHeading}
                  </p>
                </div>
                <div className="flex flex-wrap w-full justify-start gap-2 items-start h-fit">
                  {item.techIcons.map((item, idx) => (
                    <TechTags key={idx} item={item} />
                  ))}
                </div>
              </div>

              <div className="w-full flex flex-col border-black gap-4 h-fit justify-start items-start">
                <h4 className="w-full text-[24px] font-medium text-text">Key Features</h4>

                <div className="w-full flex flex-col justify-start items-start gap-2">
                  {item.features.map((item, idx) => (
                    <div key={idx} className="w-full flex gap-1 justify-start items-start">
                      <p className="text-[16px] font- text-text-muted">{idx + 1}.</p>
                      <p className="text-[16px] font- text-text-muted">{item}</p>
                    </div>
                  ))}
                </div>

              </div>

              <div className="w-full flex gap-4 justify-center items-center absolute bottom-2">
                <button className="w-full py-3 cursor-pointer bg-white border border-black/10 shadow-sm shadow-black/20 rounded-sm">Read Case study</button>
              </div>

            </div>




          </motion.div>
        )
      })}




    </div>
  );
};




export default ProjectsSection2;

const TechTags = ({ item }) => {
  return (
    <div className="flex justify-center items-center gap-2 px-2 py-1 bg-black/5 border border-[#7C3AED]/5 rounded-sm cursor-default shadow-inner-2xl shadow-black">
      <Image src={item.icon} alt={item.name} width={18} height={18} />
      <span className="md:text-[11px] text-[9px]">{item.name}</span>
    </div>
  );
};
