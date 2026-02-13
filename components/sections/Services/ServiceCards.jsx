import ConnectPopOver from '@/components/shared/ConnectPopOver'
import HeadingCard from '@/components/ui/HeadingCard'
import Tag from '@/components/ui/Tag'
import { Check, Cross, CrossIcon, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ServiceCards = () => {
    return (
        <div id="services" className='w-full max-w-360 h-fit flex flex-col gap-16 justify-center items-center min-h-165 borde border-black mt-32 overflow-hidden'>
            <HeadingCard head={"Websites tailored to your goals"} subHead={"End-to-end website experiences designed with a strong focus on performance, scalability, and long-term growth"} />

            <div className='w-full flex 2xl:flex-row flex-col gap-8 justify-center items-center'>
                <div className='lg:w-[42%] w-full lg:h-216.5 min-h-216.5 p-6 border flex flex-col justify-between border-black/40 rounded-xl bg-bg-light gap-10'>
                    <div className="gap-2 flex flex-col justify-start items-start w-full">
                        <Tag text={"Best for small Businesses"} />
                        <h4 className="lg:text-[36px] text-text text-[30px] lg:text-left font-medium text-start">
                            Business Starter Website
                        </h4>
                        <span className="text-[16px] text-text-muted2 font-light text-left">
                            Perfect for small businesses & personal brands who need a strong, trustworthy online presence.
                        </span>
                    </div>

                    <div className='w-full h-[70%] border-black flex flex-col gap-4 jucctify-start items-start'>
                        {[
                            "Up to 5 strategic Website pages",
                            "Custom UI design tailored for your website",
                            "Modern, mobile-optimized design for all devices",
                            "Lead capture forms with email integration",
                            "SEO-ready structure for better visibility",
                            "Fast-loading optimized performance",
                            "Custom Code and file based CMS integration",
                            "Delivered within 10–15 business days",

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
                                Premium Business Website
                            </h4>
                            <span className="text-[16px] font-light text-text-muted2 text-left">
                                For brands that want to stand out, build authority, and convert more visitors into customers.
                            </span>
                        </div>

                        <div className='w-full h-[70%]  border-black flex flex-col gap-4 jucctify-start items-start'>
                            <span className='text-[17px] text-text mb-2 font-bold'>Everything in Tier 1, plus:</span>
                            {[
                                "8–12 strategically structured pages",
                                "Custom-designed UI components with interactive animations",
                                "Blog or dynamic content system setup",
                                "Advanced technical & on-page SEO optimization",
                                "Core Web Vitals & performance optimization",
                                "Scalable architecture built for future growth",
                                "CMS dashboard for easy content management",
                                "Priority project timeline (20–30 business days)",
                                "10 days of post-launch priority support",

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
