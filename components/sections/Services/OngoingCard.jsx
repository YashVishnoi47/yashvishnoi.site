import ConnectPopOver from '@/components/shared/ConnectPopOver'
import Tag from '@/components/ui/Tag'
import { Check } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const OngoingCard = () => {
    return (
        <div className="w-full max-w-360 flex mt-32  justify-center items-center">
            <div className='h-170 w-[93%] rounded-xl bg-brand p-4 border-black'>
                <div className='w-full h-full flex lg:flex-row flex-col gap-8 bg-bg-light p-6 rounded-xl'>

                    <div className='lg:w-[40%] w-full h-full flex flex-col gap-8'>
                        <div className="gap-2 flex flex-col justify-center items-start w-full">
                            <Tag text={"Ongoing Care"} />
                            <h4 className="lg:text-[36px] font-bold text-[30px] lg:text-left text-center">
                                Website Maintenance & Support +
                            </h4>
                            <span className="text-[16px] font- lg:text-left text-text-muted text-center">
                                Keep your website fast, secure, and up-to-date — without the hassle.
                            </span>
                        </div>

                        <div className='w-full flex flex-col justify-start items-start gap-4'>
                            {[
                                "On-demand small changes",
                                "Monthly speed optimization",
                                "Basic on-page SEO checks",
                                "Monthly Report",
                                "On-demand small changes",
                                "Monthly speed optimization",
                                "Basic on-page SEO checks",

                            ].map((item, index) => {
                                return (
                                    <div key={index} className='w-full flex justify-start items-center gap-2'>
                                        <div className='w-5 h-5 bg-[#7C3AED] rounded-full border-black flex justify-center items-center'>
                                            <Check size={12} className='text-white' />

                                        </div>
                                        <span className='text-text/90 lg:text-[17px] text-[15px] font-medium'>{item}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <ConnectPopOver>
                            <div className='w-full text-text flex justify-center items-center border border-black py-3 rounded-md cursor-pointer shadow-sm shadow-white hover:shadow-[#7C3AED]/50 transition-all duration-300 ease-in-out inset-shadow-sm inset-shadow-black/10 hover:inset-shadow-white '>Know More</div>

                        </ConnectPopOver>



                    </div>

                    <div className='lg:w-[60%] border-black h-full lg:flex hidden flex-col gap-3'>
                        <div className='w-full h-1/2 flex justify-center items-center gap-3 border-black'>
                            <div className='w-[60%] border border-black/10 shadow-md shadow-black/10 h-full rounded-xl'></div>
                            <div className='w-[40%] border border-black/10 shadow-md shadow-black/10 h-full rounded-xl'></div>
                        </div>

                        <div className='w-full h-1/2 flex justify-center items-center gap-3 border-black'>
                            <div className='w-[40%] border border-black/10 shadow-md shadow-black/10 h-full rounded-xl'></div>
                            <div className='w-[60%] border border-black/10 shadow-md shadow-black/10 h-full rounded-xl'></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default OngoingCard
