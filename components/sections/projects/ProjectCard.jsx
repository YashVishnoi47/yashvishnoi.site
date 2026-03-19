"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Link2, LinkIcon } from 'lucide-react'

const ProjectCard = ({ item, idx }) => {
    return (
        <motion.div
            className={`w-full lg:h-155 h-fit flex flex-col rounded-2xl py-4 gap-6 transition duration-300 ease-in-out relative group ${idx % 2 == 0 ? "lg:flex-row flex-col" : "lg:flex-row-reverse flex-col"} bg-whte ursor-pointer lg:px-4 px-2 group bg-white`}
        >
            <motion.div
                initial={{ opacity: 0, x: idx % 2 == 1 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="lg:h-full h-90 overflow-hidden w-full rounded-xl relative flex justify-center items-center select-none">

                {idx % 2 == 1 ? (
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: `
        radial-gradient(circle 600px at 0% 200px, #a99bf7, transparent),
        radial-gradient(circle 600px at 100% 200px, #a99bf7, transparent)
      `,
                        }}
                    />

                ) : (
                    <div
                        className="absolute inset-0 z-0 "
                        style={{
                            backgroundImage: `
        radial-gradient(circle 600px at 0% 200px, #bfdbfe, transparent),
        radial-gradient(circle 600px at 100% 200px, #bfdbfe, transparent)`,
                        }}
                    />



                )}


                <Image
                    src={item.Screenshots}
                    alt={item.name}
                    width={500}
                    height={500}
                    className="absolute lg:w-125 lg:h-125 w-full h-full object-contain z-10 rounded-2xl -bottom-35 group-hover:-bottom-30 group-hover:-rotate-2 transition-all duration-400 ease-in-out shdaow-2xl shadow-black"
                />

            </motion.div>



            <motion.div
                initial={{ opacity: 0, x: idx % 2 == 1 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-full w-full flex relative flex-col justify-start gap-8 items-center border-black">

                <div className="w-full flex justify-between lg:items-start items-center flex-col gap-4 relative">

                    <div className="w-full h-fit flex flex-col gap-1 justify-start items-start">
                        <h5 className="text-[48px] font-medium text-text text-start w-full">
                            {item.name}
                        </h5>

                        <p className="text-[16px] font-light text-text-muted">
                            {item.subHeading}
                        </p>
                    </div>
                    <div className="flex flex-wrap lg:w-[80%] w-full justify-start gap-2 items-start h-fit">
                        {item.techIcons.map((item, idx) => (
                            <TechTags idx={idx} item={item} />
                        ))}
                    </div>
                </div>

                <div className="w-full flex flex-col border-black gap-4 h-fit justify-start items-start relative">
                    <h4 className="w-full text-[24px] font-medium text-text">Key Features</h4>

                    <div className="w-full h-fit flex flex-col justify-start items-start gap-2">
                        {item.features.map((item, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx, duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }}
                                key={idx}
                                className="w-full flex gap-1 justify-start items-start">
                                <p className="text-[16px] font- text-text-muted">{idx + 1}.</p>
                                <p className="text-[16px] font- text-text-muted">{item}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>

                <div className="w-full flex  md:flex-row flex-col gap-4 justify-center items-center bottom-2">

                    <Link target='_blank' href={item.links[0].liveLink} className="w-full py-3 cursor-pointer bg-white border border-black/10 shadow-sm hover:shadow-md hover:-translate-y-1 shadow-black/20 rounded-sm flex justify-center items-center gap-2 trasniaition-all duration-200 ease-in-out ">
                        <LinkIcon size={20} />
                        <span>
                            Live Link
                        </span>
                    </Link>



                    <button disabled target='_blank' href={item.links[0].liveLink} className="w-full py-3 cursor-pointer bg-white border border-black/10 shadow-sm hover:shadow-md hover:-translate-y-1 shadow-black/20 rounded-sm flex justify-center items-center gap-1 trasniaition-all duration-200 ease-in-out disabled:cursor-not-allowed">
                        <span>
                            Case Study
                        </span>
                        <span className='text-[12px] text-black/80'>
                            (Coming Soon)
                        </span>
                    </button>
                </div>

            </motion.div>




        </motion.div>
    )
}

export default ProjectCard


const TechTags = ({ item, idx }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 * idx, duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }}
            className="flex justify-center items-center gap-2 px-2 py-1 bg-white/50 text-black border border-black/15 rounded-sm cursor-default shadow-inner-2xl shadow-black">
            <Image src={item.icon} alt={item.name} width={18} height={18} />
            <span className="md:text-[11px] text-[9px]">{item.name}</span>
        </motion.div>
    );
};
