import ConnectPopOver from '@/components/shared/ConnectPopOver'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const CtaCardSection = () => {

    return (
        <div data-ext="Let's Work Together" className="w-full min-h-160 max-w-360 rounded-tl-lg rounded-tr-lg bg-bg-light flex flex-col gap-12 border-black justify-center items-center mt-37.5 relative overflow-hidden ">



            <div className='w-full h-fit flex flex-col gap-4 justify-center items-center relative z-2'>
                <Link target='_blank' href={"https://x.com/Yash_Vishnoi7"} >
                    <Image
                        className="hover:-rotate-15 transition-all duration-300 ease-in-out" src="/yash-logo-black.svg" alt="logo" width={80} height={80} />

                </Link>

                <div className='w-full -space-y-0.5 flex flex-col justify-center items-center'>
                    <h5 className='lg:text-[50px] text-[32px] lg:w-[70%] w-full text-text font-black text-center lg:leading-16.5 sm:leading-12 leading-9 tracking-[-0.03em]'>Want a High-Performance Web System Designed to Turn Visitors Into Customers?
                    </h5>
                </div>
            </div>

            <ConnectPopOver />

            <div className='w-full h-fit flex flex-col gap-4 justify-center items-center relative z-2'>
                <span className='lg:text-[28px] text-[20px] text-text font-bold'>Let’s do your next project toghter</span>
                <span className='lg:text-[18px] text-[12px] text-text-muted2 font-ight lg:w-[50%] w-[98%] text-center'>Fast, high-converting websites designed to turn visitors into customers — built for performance, clarity, and real business growth without the hassle.</span>
            </div>

        </div>

    )
}

export default CtaCardSection
