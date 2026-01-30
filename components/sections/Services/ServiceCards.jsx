import ConnectPopOver from '@/components/shared/ConnectPopOver'
import HeadingCard from '@/components/ui/HeadingCard'
import Tag from '@/components/ui/Tag'
import { Check, Cross, CrossIcon, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ServiceCards = () => {
    return (
        <div className='w-full max-w-360 h-fit flex flex-col gap-16 justify-center items-center min-h-165 borde border-black mt-32 overflow-hidden'>
            <HeadingCard head={"Websites tailored to your goals"} subHead={"End-to-end website experiences designed with a strong focus on performance, scalability, and long-term growth"} />

            <div className='w-full flex 2xl:flex-row flex-col gap-8 justify-center items-center'>
                <div className='lg:w-[42%] w-full lg:h-216.5 min-h-216.5 p-6 border flex flex-col justify-between border-black/40 rounded-xl bg-bg-light gap-10'>
                    <div className="gap-2 flex flex-col justify-start items-start w-full">
                        <Tag text={"Clean. Fast. Professional Online Presence."} />
                        <h4 className="lg:text-[36px] text-text text-[30px] lg:text-left font-medium text-start">
                            Core Website
                        </h4>
                        <span className="text-[16px] text-text-muted2 font-light text-left">
                            Perfect for startups, local businesses & personal brands
                        </span>
                    </div>

                    <div className='w-full h-[70%] border-black flex flex-col gap-4 jucctify-start items-start'>
                        {[
                            "4-page responsive website",
                            "Mobile-first design",
                            "CTC & WhatsApp integration for instant customer contact",
                            "Contact form integration",
                            "Google Maps / Location integration",
                            "Basic SEO setup",
                            "Fast loading & secure setup",
                            "Basic performance optimization",

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

                    <div className='w-full flex flex-col gap-6 h-fit'>
                        <ConnectPopOver>
                            <div className='w-full text-text flex justify-center items-center border border-black py-3 rounded-md cursor-pointer shadow-sm shadow-white hover:shadow-[#7C3AED]/50 transition-all duration-300 ease-in-out inset-shadow-sm inset-shadow-black/10 hover:inset-shadow-white '>Start your project</div>

                        </ConnectPopOver>

                        <div className='flex flex-col gap-3 justify-start items-start w-full'>
                            <span className='text-text-muted text-[16px]'>Questions? <span className='text-text font-medium cursor-pointer hover:underline transition-all duration-300 ease-in-out'>Chat with us</span></span>
                            <span className='text-text text-[16px]'>or email us at <Link data-text="Email me" href='mailto:yashvishnoi309@gmail.com' className='text-text font-medium'>@yashvishnoi309@gmail.com</Link></span>
                        </div>
                    </div>

                </div>


                <div className='lg:w-[42%] w-full p-2 lg:h-216.5 min-h-220 shadow-2xl shadow-black/15 rounded-xl bg-[#7C3AED]'>

                    <div className='w-full flex flex-col justify-between items-center h-216.5 p-6 border-black rounded-lg bg-bg-light gap-10'>
                        {/* <div className='bg-[#7C3AED] text-white font-medium w-fit rounded-bl-md px-6 py-2 text-sm absolute right-0'>Best for Growth</div> */}

                        <div className="gap-2 flex flex-col justify-start items-start w-full">
                            <Tag text={"Engaging. Scalable. Conversion-Focused."} />
                            <h4 className="lg:text-[36px] text-[30px] text-text lg:text-left font-medium text-start">
                                Interactive Experience Website
                            </h4>
                            <span className="text-[16px] font-light text-text-muted2 text-left">
                                For brands that want to stand out & convert visitors into customers
                            </span>
                        </div>

                        <div className='w-full h-[70%]  border-black flex flex-col gap-4 jucctify-start items-start'>
                            <span className='text-[17px] text-text mb-2 font-bold'>Everything in Tier 1, plus:</span>
                            {[
                                "CMS integration - easily manage content without coding",
                                "Advanced SEO optimization",
                                "Smooth animations & micro-interactions",
                                "Advanced UI components",
                                "Media optimization",
                                "Enhanced performance optimization",
                                "Scalable structure for future upgrades",

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

                        <div className='w-full flex flex-col gap-6 h-fit'>
                            <ConnectPopOver>
                                <div className='w-full text-text flex justify-center items-center border border-black py-3 rounded-md cursor-pointer shadow-sm shadow-white hover:shadow-[#7C3AED]/50 transition-all duration-300 ease-in-out inset-shadow-sm inset-shadow-black/10 hover:inset-shadow-white '>Start your project</div>

                            </ConnectPopOver>

                            <div className='flex flex-col gap-3 justify-start items-start w-full'>
                                <span className='text-text-muted text-[16px]'>Questions? <span className='text-text font-medium cursor-pointer hover:underline transition-all duration-300 ease-in-out'>Chat with us</span></span>
                                <span className='text-text text-[16px]'>or email us at <Link data-text="Email me" href='mailto:yashvishnoi309@gmail.com' className='text-text font-medium' >@yashvishnoi309@gmail.com</Link></span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default ServiceCards
