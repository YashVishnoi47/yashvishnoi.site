import CTAButton from '@/components/ui/CTAButton'
import Image from 'next/image'
import React from 'react'

const CtaCardSection = () => {
    return (
        <div className="w-full min-h-180 flex justify-center items-center mt-37.5 ">

            <div className='w-[80%] gap-10 flex justify-center items-center h-125 overflow-hidden rounded-[24px] bg-white shadow-xl shadow-black/20'>
                <div className='w-1/2 flex ml-10 gap-7 flex-col justify-start items-start h-full py-10 border-black'>

                    <Image src="/yash-logo-black.svg" width={60} height={60} alt="graphics" />

                    <h6 className='text-[40px] font-bold leading-12 tracking-[-0.04em]'>I don’t just build websites I build Web Systems that perform.</h6>

                    <p className='text-[16px]'> Thoughtfully engineered products, designed with performance at the core, built for maintainability, and structured to support long-term growth.</p>

                    <button className="w-35 h-12.5 border border-black rounded-lg bg-black overflow-hidden text-white cursor-pointer text-md font-semibold flex justify-center relative group transition-all duration-300 ease-in-out active:scale-95 shadow-lg shadow-black/4">
                        <div className="flex flex-col h-40 absolute gap-4 top-1/4 group-hover:-top-[55%] transition-all duration-300 ease-in-out border-black w-fit">
                            <span>{"Chat with Yash"}</span>
                            <span>{"Chat with Yash"}</span>
                        </div>
                    </button>
                </div>


                <div className='w-1/2 min-h-180 flex gap-4 justify-center overflow-hidden items-center h-fit border-black'>
                    <div className='h-full w-1/2 items-start justify-start border-black flex flex-col gap-4'>
                        <div className='h-60 w-full bg-black/10 rounded-lg'></div>
                        <div className='h-75 w-full bg-black/10 rounded-lg'></div>
                    </div>
                    <div className='h-full w-1/2 items-start justify-center border-black flex flex-col gap-4'>
                        <div className='h-75 w-full bg-black/10 rounded-lg'></div>
                        <div className='h-60 w-full bg-black/10 rounded-lg'></div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CtaCardSection
