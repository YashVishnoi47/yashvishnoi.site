import ConnectPopOver from '@/components/shared/ConnectPopOver'
import CTAButton from '@/components/ui/CTAButton'
import Image from 'next/image'
import React from 'react'

const CtaCardSection = () => {
    return (
        <div data-ext="Let's Work Together" className="w-full min-h-160 max-w-360 rounded-tl-lg rounded-tr-lg bg-bg-light flex flex-col gap-12 border-black justify-center items-center mt-37.5 relative overflow-hidden">

            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      `,
                    backgroundSize: "40px 40px",
                }}
            />


            <div className='w-full h-fit flex flex-col gap-4 justify-center items-center relative z-2'>
                <Image
                    className="hover:-rotate-15 transition-all duration-300 ease-in-out" src="/yash-logo-black.svg" alt="logo" width={80} height={80} />
                <div className='w-full -space-y-0.5 flex flex-col justify-center items-center'>
                    <h5 className='lg:text-[48px] text-[32px] lg:w-[70%] w-full text-text font-black text-center'>I dont just build websites </h5>
                    <h5 className='lg:text-[48px] text-[32px] lg:w-[70%] w-full text-text font-black text-center'>I build Web Systems that perform.</h5>
                </div>
            </div>

            <ConnectPopOver />

            <div className='w-full h-fit flex flex-col gap-4 justify-center items-center relative z-2'>
                <span className='lg:text-[24px] text-[20px] text-text font-bold'>Let’s do your next project toghter</span>
                <span className='lg:text-[16px] text-[12px] text-text-muted2 font-light lg:w-[40%] w-[98%] text-center'>Thoughtfully engineered products, designed with performance at the core, built for maintainability, and structured to support long-term growth.</span>
            </div>




        </div>
    )
}

export default CtaCardSection
