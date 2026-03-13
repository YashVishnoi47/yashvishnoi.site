"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

const SmallNav = () => {
    const { scrollY } = useScroll();
    const [scrollDirection, setScrollDirection] = useState("down");
    const [open, setOpen] = useState(false)

    useMotionValueEvent(scrollY, "change", (current) => {
        const diff = current - scrollY.getPrevious()
        setScrollDirection(diff > 0 ? "down" : "up")

        if (current > 450) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    })

    if (!open) return

    return (
        <motion.div
            initial={{ opacity: 1, y: -100 }}
            animate={scrollDirection === "down" ? { opacity: 1, y: -100 } : { opacity: 1, y: 0 }}
            transition={{ ease: "easeIn" }}
            exit={{ opacity: 0 }}
            className={`h-fit w-fit  border border-black px-8 py-4 bg-black text-white sm:flex hidden gap-6 justify-center items-center rounded-md fixed top-4 z-1000000 >
            `}>


            {[
                { name: "Home", link: "/" },
                { name: "About", link: "#about" },
                { name: "Services", link: "#services" },
                { name: "Projects", link: "/projects" },
            ].map((item, idx) => {
                return (
                    <div key={idx}>
                        <NavLink idx={idx} item={item} />
                    </div>
                );
            })}

            {/* <Link className='border border-white text-[15px] font-medium text-black bg-white px-2 py-2 ml-2 rounded-sm' href={"/bookacall"}>Book a Call</Link> */}
        </motion.div>
    )
}

export default SmallNav



const NavLink = ({ item, idx }) => {
    return (
        <Link
            key={idx}
            href={item.link}
            className="cursor-pointer text-[17px] font-medium flex relative group"
            data-text={item.name}
        >
            <span>{item.name}</span>
            <span className="absolute bottom-0 right-0 group-hover:left-0 w-0 group-hover:w-full h-0.5 bg-white transition-all duration-300 ease-in-out"></span>
        </Link>
    );
};
