import ConnectPopOver from '@/components/shared/ConnectPopOver'
import { AuroraBackground } from '@/components/ui/aurora-background'
import CTAButton from '@/components/ui/CTAButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const CtaCardSection = () => {

    return (


        <div data-ext="Let's Work Together" className="w-full min-h-160 max-w-360 rounded-tl-lg rounded-tr-lg bg-bg-light flex flex-col gap-12 border-black justify-center items-center mt-37.5 relative overflow-hidden">

            <div className='absolute w-full h-full flex justify-center   items-center '>
                {/* <MotionImage src="/gradiant/gradiant.svg" alt="logo" width={700} height={700} /> */}

                <div style={{ backgroundImage: "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)" }} />

            </div>


            <div className='w-full h-fit flex flex-col gap-4 justify-center items-center relative z-2'>
                <Link target='_blank' href={"https://x.com/Yash_Vishnoi7"} >
                    <Image
                        className="hover:-rotate-15 transition-all duration-300 ease-in-out" src="/yash-logo-black.svg" alt="logo" width={80} height={80} />

                </Link>

                <div className='w-full -space-y-0.5 flex flex-col justify-center items-center'>
                    <h5 className='lg:text-[48px] text-[32px] lg:w-[70%] w-full text-text font-black text-center'>I don’t just build websites</h5>
                    <h5 className='lg:text-[48px] text-[32px] lg:w-[70%] w-full text-text font-black text-center'>I build systems that bring you growth.</h5>
                </div>
            </div>

            <ConnectPopOver />

            <div className='w-full h-fit flex flex-col gap-4 justify-center items-center relative z-2'>
                <span className='lg:text-[24px] text-[20px] text-text font-bold'>Let’s do your next project toghter</span>
                <span className='lg:text-[16px] text-[12px] text-text-muted2 font-light lg:w-[40%] w-[98%] text-center'>Fast, high-converting websites designed to turn visitors into customers — built for performance, clarity, and real business growth without the hassle.</span>
            </div>

        </div>

    )
}

export default CtaCardSection
