"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import AniButton1 from '../ui/AniButton1'
import Image from 'next/image'
import Link from 'next/link'

const ConnectPopOver = ({ children }) => {
    return (
        <Dialog>
            <DialogTrigger>
                {children || (

                    <AniButton1 text={"Start a Project"} />
                )}
            </DialogTrigger>
            <DialogContent className={""}>
                <DialogHeader>
                    <DialogTitle></DialogTitle>

                    <div className='w-full h-90 border-black flex flex-col justify-center items-center gap-4'>
                        <h6 className='text-[32px] font-normal border-black'>Get in touch</h6>

                        <div className='w-full h-full flex flex-col gap-4 border-black justify-start items-center'>
                            <div className='w-full h-37.5 flex gap-4 border-black justify-center items-center'>
                                <Link href="/bookacall" className='h-full w-1/2 bg-bg-dark boder border-black flex flex-col rounded-md p-3 gap-1 cursor-pointer transition-all duration-300 ease-in-out shadow-sm hover:shadow-md shadow-black/20 border hover:shadow-[#7C3AED]/50 hover:-translate-y-1 border border-black/10'>
                                    <div className='w-10 h-10 rounded-full flex justify-center bg-white border-[#7C3AED]/30 items-center border'>
                                        <Image src={"/other/call.svg"} alt={""} width={17} height={17} />
                                    </div>
                                    <span className='text-[20px] font-medium'>Book a call</span>
                                    <span className='text-[15px] font-light'>Book a 30min voice call</span>
                                </Link>

                                <Link href='mailto:yashvishnoi309@gmail.com' className='h-full w-1/2 bg-bg-dark boder border-black/10 flex flex-col rounded-md p-3 gap-1 cursor-pointer transition-all duration-300 ease-in-out shadow-sm hover:shadow-md shadow-black/20 border hover:shadow-[#7C3AED]/50 hover:-translate-y-1'>
                                    <div className='w-10 h-10 rounded-full flex justify-center bg-white border-[#7C3AED]/30 items-center border'>
                                        <Image src={"/other/email.svg"} alt={""} width={24} height={24} />
                                    </div>
                                    <span className='text-[20px] font-medium'>Email me</span>
                                    <span className='text-[15px] font-light'>yashvishnoi309@gmail.com</span>
                                </Link>
                            </div>


                            <div className='w-full h-15 bg-bg-dark flex gap-4 justify-start px-3 items-center border border-black/10 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#7C3AED]/10 hover:border-[#7C3AED]/30 shadow-sm hover:shadow-md shadow-black/15 hover:shadow-[#7C3AED]/50 hover:-translate-y-1'>
                                <div className='w-10 h-10 rounded-full flex justify-center bg-white border-[#7C3AED]/30 items-center border'>
                                    <Image src={"/other/message.svg"} alt={""} width={20} height={20} />
                                </div>

                                <span className='text-[15px] font-medium'>Or write me a message here</span>
                            </div>
                        </div>

                        <div className='w-full h-fit flex flex-col gap-4 justify-center px-3 items-center rounded-md'>
                            <span className='text-[15px] text-center text-[#1A1A1A] font-medium'>CONNECT ON SOCIALS</span>

                            <div className="flex gap-4 w-full justify-center items-center border-black">
                                {[
                                    { name: "Github", link: "/socials/github.svg" },
                                    { name: "Twitter", link: "/socials/twitter.svg" },
                                    { name: "LinkedIn", link: "/socials/linkedin.svg" },
                                ].map((item, idx) => (
                                    <div key={idx}>
                                        <Image
                                            className="cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                                            src={item.link}
                                            alt={item}
                                            width={18}
                                            height={18}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default ConnectPopOver
