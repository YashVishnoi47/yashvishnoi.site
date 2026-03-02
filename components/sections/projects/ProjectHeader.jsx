"use client"
import ConnectPopOver from '@/components/shared/ConnectPopOver'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const ProjectHeader = () => {

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
            ],
        },
        {
            name: "Vibrium",
            subHeading:
                "This is the subheading of the project which I will include later.!!!",
            link: "https://github.com/yashvishnoi/nextjs-portfolio",
            techIcons: [
                { icon: "/techIcons/nodejs.svg", name: "NODE JS" },
                { icon: "/techIcons/next.svg", name: "Next JS" },
                { icon: "/techIcons/javascript.svg", name: "Javascript" },
            ],
        },
    ];


    return (
        <div className="w-full max-w-360 flex flex-col gap-16 justify-center mt-10 rounded-lg shadow-m shadow-black/20 items-center min-h-120 border border-black/10 bg-bg-light relative ">
            <div
                className="absolute inset-0 z-0 rounded-lg"
                style={{
                    backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
                    backgroundSize: "20px 20px",
                    backgroundPosition: "0 0, 0 0",
                    maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
                    WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                }}
            />
            <div className="w-full flex flex-col justify-center items-center gap-4 relative z-2">
                {/* <Tag /> */}
                <MainHeading />
                <SubHeading />
            </div>



            {/* <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    bounce: 0.3,
                    visualDuration: 0.5,
                    stiffness: 50,
                    delay: 1.4,
                }}
                className="w-full flex md:flex-row flex-col justify-center items-center gap-6"
            >

                <button
                    data-text="Click to copy"
                    type="button"
                    // onClick={() => handleCopy()}
                    className="relative  px-8 py-4 rounded-lg text-sm font-medium text-black border border-black/10  bg-white/60 backdrop-blur-md shadow-sm transition-all duration-300 ease-out hover:border-[#7C3AED]/40 hover:text-[#7C3AED] hover:shadow-[#7C3AED]/30 active:scale-[0.98] cursor-pointer"
                >
                    yashvishnoi309@gmail.com
                </button>
            </motion.div> */}
        </div>
    )
}

export default ProjectHeader




const MainHeading = () => {
    return (
        <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                ease: "easeOut",
                duration: 0.7,
            }}
            className="lg:text-[60px] sm:text-[40px] text-[30px] font-bold lg:w-[70%] w-[90%] lg:leading-17.5 sm:leading-12 leading-9 tracking-[-0.02em] text-center text-text"
        >
            Selected Work & Case Studies
        </motion.h1>
    );
};

const SubHeading = () => {
    return (
        <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                ease: "easeOut",
                duration: 1,
                delay: 0.7,
            }}
            className="lg:text-[16px] sm:text-[14px] lg:w-[40%] w-[70%] text-center text-text-muted"
        >
            A selection of high-performing websites built for real businesses — focused on design, performance, and conversions.
        </motion.p>
    );
};

const Tag = () => {
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                delay: 1.4,
                duration: 1,
                ease: "easeOut",
            }}
            data-text="Explore the Selected work & case studies"
            className="bg-[#7C3AED]/15 rounded-sm border flex justify-center items-center gap-3 md:text-[13px] text-[10px] border-[#7C3AED]/5 px-2 py-1 cursor-pointer select-none ring-1 ring-white hover:ring-[#7C3AED] transition-all duration-300 ease-in-out active:scale-[0.95]"
        >
            Selected work & case studies
            <div className="bg-white h-5 w-8.75 rounded-[2px] flex justify-center items-center">
                <ArrowRight height={18} width={18} />
            </div>
        </motion.span>
    );
};
