import ConnectPopOver from '@/components/shared/ConnectPopOver'
import CTAButton from '@/components/ui/CTAButton'
import Image from 'next/image'
import React from 'react'

const CtaCardSection = () => {
    return (
        <div data-text="Let's Work Together" className="w-full min-h-160 max-w-360 rounded-lg bg-bg-light flex flex-col gap-12 border-black justify-center items-center mt-37.5 ">

            <div className='w-full h-fit flex flex-col gap-4 justify-center items-center'>
                <Image src="/yash-logo-black.svg" alt="logo" width={80} height={80} />
                <div className='w-full -space-y-1 flex flex-col justify-center items-center'>
                    <h5 className='text-[40px] w-[50%] font-black text-center'>I dont just build websites </h5>
                    <h5 className='text-[40px] w-[50%] font-black text-center'>I build Web Systems that perform.</h5>
                </div>
            </div>

            <ConnectPopOver />

            <div className='w-full h-fit flex flex-col gap-4 justify-center items-center'>
                <span className='text-[24px] font-bold'>Let’s do your next project toghter</span>
                <span className='text-[16px] font-light w-[40%] text-center'>Thoughtfully engineered products, designed with performance at the core, built for maintainability, and structured to support long-term growth.</span>
            </div>




        </div>
    )
}

export default CtaCardSection
