"use client"
import { Tilt } from '@/components/motion-primitives/tilt'
import { motion } from 'framer-motion'
import HeadingCard from '@/components/ui/HeadingCard'
import Tag from '@/components/ui/Tag'
import Image from 'next/image'
import React from 'react'

const PerksComponent = () => {
    const perks = [
        { icon: "/other/CTA.svg", head: "SEO-ready foundations", subHead: "Built with clean structure, performance in mind, and SEO best practices, so your site is discoverable from day one.", tag: "Discoverability" },

        { icon: "/other/content.svg", head: "Website content support", subHead: "Help with structuring content, page flow, and clarity — turning ideas into clear, user-friendly web copy.", tag: "Clarity" },

        { icon: "/other/hosting.svg", head: "Hosting & deployment", subHead: "Guidance and setup for hosting and deployment, ensuring your site is live, stable, and production-ready.", tag: "Launch" },

        { icon: "/other/domain.svg", head: "Domain setup assistance", subHead: "Support with domain selection, configuration, and linking — so everything works smoothly without confusion.", tag: "Identity" },

        { icon: "/other/updates.svg", head: "Regular updates & improvements", subHead: "Ongoing fixes, refinements, and updates based on feedback — not a “build once and disappear” approach.", tag: "Continuity" },

        { icon: "/other/performance.svg", head: "Performance-focused builds", subHead: "Optimized layouts, efficient code, and thoughtful architecture for fast, reliable user experiences.", tag: "Performance" },

    ]
    return (
        <div
            className="w-full max-w-360 min-h-200 flex flex-col gap-14 rounded-xl lg:py-12 border-black mt-37.5"
        >
            <HeadingCard head={"Additional Perks"} subHead={"What you can expect beyond just code and deliverables"} />

            <div className='w-full flex flex-wrap justify-center items-center border-black gap-4'>
                {perks.map((item, idx) => (

                    <motion.div
                        key={idx}
                        className='w-[32%] rounded-xl flex flex-col gap-6 min-h-62.5 border p-6 bg-bg-light backdrop-blu text-black border-black/10 transition-all duration-300 ease-in-out shadow-bg-c shadow-md hover:shadow-brand/30 relative cursor-default'>

                        <div
                            className="absolute inset-0 z-0 pointer-events-none opacity-50"
                            style={{
                                backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      `,
                                backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
                            }}
                        />

                        <Image src={item.icon} alt={item.head} width={32} height={32} />
                        <div className='w-full flex flex-col gap-2'>
                            <h5 className='text-[24px] font-medium text-text'>{item.head}</h5>
                            <span className='text-[15px]  font-light text-text-muted2'>{item.subHead}</span>

                        </div>

                        <Tag text={item.tag} />
                    </motion.div>

                ))}
            </div>

        </div>
    )
}

export default PerksComponent
