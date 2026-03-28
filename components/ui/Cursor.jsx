"use client"
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'

const Cursor = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [hover, setHover] = useState(false);
    const [text, settext] = useState("");

    const opacity = useMotionValue(0)

    const smoothX = useSpring(mouseX, {
        stiffness: 150,
        damping: 20,
        mass: 0.5,
    });
    const smoothY = useSpring(mouseY, {
        stiffness: 150,
        damping: 20,
        mass: 0.5,
    });

    const smoothOpacity = useSpring(opacity, {
        stiffness: 150,
        damping: 20,
    });

    useEffect(() => {
        if (hover) {
            opacity.set(1)
        } else {
            opacity.set(0)
        }
    }, [])

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX + 15);
            mouseY.set(e.clientY + 15);
        };

        const handleMouseOver = (e) => {
            const target = e.target.closest("[data-text]")
            if (target) {
                setHover(true);
                settext(target.getAttribute("data-text"))
            }
        }

        const handleMouseOut = (e) => {
            const target = e.target.closest("[data-text]")
            if (target) {
                settext("")
                setHover(false);
            }
        }

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver)
        window.addEventListener("mouseout", handleMouseOut)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseover", handleMouseOver)
            window.removeEventListener("mouseout", handleMouseOut)
        }
    }, [mouseX, mouseY])

    return (
        <AnimatePresence>
            <motion.div
                exit={{ opacity: 0 }}
                style={{ x: smoothX, y: smoothY, opacity: smoothOpacity }}

                className={`fixed top-0 left-0 px-4 py-2 z-1000 pointer-events-none  flex items-center justify-center rounded-sm border border-[#7C3AED]/50 ${hover ? " bg-[#7C3AED] text-white" : " bg-[#7C3AED]"}`}
            >
                <AnimatePresence>
                    {text && (
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='text-[12px] text-white'>{text}</motion.span>
                    )}
                </AnimatePresence>
            </motion.div>

        </AnimatePresence>
    )
}

export default Cursor
