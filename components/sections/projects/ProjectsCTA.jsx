import ConnectPopOver from '@/components/shared/ConnectPopOver'
import Link from 'next/link'
import React from 'react'

const ProjectsCTA = () => {
    return (
        <div className='w-full max-w-360 h-120 bg-[#020617] rounded-2xl mt-20 relative border border-black flex justify-center items-center flex-col overflow-hidden'>

            {/* Dark Radial Glow Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)`,
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6">

                {/* Small Tag */}
                <span className="text-gray-400 text-sm mb-3 tracking-wide uppercase">
                    Work
                </span>

                {/* Main Heading */}
                <h1 className='text-white text-4xl md:text-5xl font-bold leading-tight'>
                    Crafted Projects <br />
                    <span className="text-gray-300">That Deliver Results</span>
                </h1>

                {/* Subtext */}
                <p className='text-gray-400 text-base mt-4 max-w-xl'>
                    Explore real-world projects built to solve problems, drive engagement,
                    and deliver impactful user experiences.
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-4 mt-6">
                    <Link href="/projects" className="bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition cursor-pointer">
                        View Projects
                    </Link>

                    <ConnectPopOver>

                        <button className="border border-gray-500 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-white hover:text-black transition cursor-pointer">
                            Hire Me
                        </button>

                    </ConnectPopOver>
                </div>
            </div>
        </div>

    )
}

export default ProjectsCTA
