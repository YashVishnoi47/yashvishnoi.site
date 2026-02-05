"use client"
import React, { useState } from 'react'
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
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldLabel } from '../ui/field'
import { SendHorizontal } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'
import { toast } from 'sonner'

const ConnectPopOver = ({ children }) => {
    const [state, handleSubmit] = useForm("mqedzplw");
    const [open, setOpen] = useState(false);

    if (state.succeeded) {
        toast.success("Message Sent Successfully!✅");
    }

    const close = () => {
        if (!open) return
        setTimeout(() => {
            setOpen(false)
        }, 300)
    }

    return (
        <Dialog onOpenChange={() => close()}>
            <DialogTrigger>
                {children || (

                    <AniButton1 text={"Get in Touch"} />
                )}
            </DialogTrigger>
            <DialogContent className={" z-1000000"}>


                {open ? (
                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                        <form onSubmit={handleSubmit} className='w-full h-90  border-black flex flex-col justify-center items-center gap-4'>
                            <h6 className='text-[32px] font-normal border-black '>Feel free to reach me out</h6>

                            <div className='w-full h-full flex flex-col gap-4 border-black justify-start items-center'>
                                <div className='w-full h-fit flex gap-4 border-black justify-center items-center'>

                                    <div className='h-full w-full bg-bg-dar border-black flex flex-col rounded-md gap-1 transition-all duration-300 ease-in-out'>

                                        <FieldLabel
                                            htmlFor="name"
                                            className='lg:text-[14px] text-[12px] w-full text-text-muted text-start'>Name</FieldLabel >
                                        <Input
                                            name="name"
                                            id="name"
                                            type={"text"}
                                            placeholder={"Eg. John Doe"}
                                            className={"placeholder:text-xs bg-bg-dark"} />
                                        <ValidationError
                                            prefix="Name"
                                            field="name"
                                            errors={state.errors}
                                        />
                                    </div>

                                    <div className='h-full w-full bg-bg-dar border-black flex flex-col rounded-md gap-1 transition-all duration-300 ease-in-out'>

                                        <FieldLabel
                                            htmlFor="email"
                                            className='lg:text-[14px] text-[12px] w-full text-text-muted text-start'>Email</FieldLabel >
                                        <Input name="email" id="email" type={"text"} placeholder={"Eg. joz3m@example.com"} className={"placeholder:text-xs bg-bg-dark"} />
                                        <ValidationError
                                            prefix="Email"
                                            field="email"
                                            errors={state.errors}
                                        />
                                    </div>


                                </div>

                                <div className='w-full h-fit flex gap-4 border-black justify-center items-center'>
                                    <div className='h-full w-full bg-bg-dar border-black flex flex-col rounded-md gap-1'>
                                        <FieldLabel
                                            htmlFor="message"
                                            className='lg:text-[14px] text-[12px] w-full text-text-muted text-start'>Your Message</FieldLabel >
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder={"Your Message"}
                                            className={"placeholder:text-xs bg-bg-dark resize-none h-30"} />
                                        <ValidationError
                                            prefix="Message"
                                            field="message"
                                            errors={state.errors}
                                        />
                                    </div>

                                </div>
                            </div>

                            <div className='w-full h-fit flex flex-col gap-4 justify-center items-center rounded-md'>
                                <button type="submit" disabled={state.submitting} className='w-full h-12 bg-bg-dark flex gap-4 justify-center px-3 items-center border border-black/10 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#7C3AED]/10 hover:border-[#7C3AED]/30 shadow-sm hover:shadow-md shadow-black/15 disabled:cursor-not-allowed'>
                                    <span className='lg:text-[15px] text-[12px] font-medium flex justify-center items-center text-center'>Send message</span>
                                    <div className='w-8 h-8 rounded-full flex justify-center bg-white border-[#7C3AED]/30 items-center border'>
                                        <SendHorizontal size={17} />
                                    </div>

                                </button>

                            </div>

                        </form>
                    </DialogHeader>
                ) :
                    (
                        <DialogHeader>
                            <DialogTitle></DialogTitle>
                            <div className='w-full h-90  border-black flex flex-col justify-center items-center gap-4'>
                                <h6 className='text-[32px] font-normal border-black '>Get in touch</h6>

                                <div className='w-full h-full flex flex-col gap-4 border-black justify-start items-center'>
                                    <div className='w-full h-37.5 flex gap-4 border-black justify-center items-center'>
                                        <Link href="/bookacall" className='h-full w-1/2 bg-bg-dark boder border-black flex flex-col rounded-md p-3 gap-1 cursor-pointer transition-all duration-300 ease-in-out shadow-sm hover:shadow-md shadow-black/20 border hover:shadow-[#7C3AED]/50 hover:-translate-y-1 border border-black/10'>
                                            <div className='w-10 h-10 rounded-full flex justify-center bg-white border-[#7C3AED]/30 items-center border'>
                                                <Image src={"/other/call.svg"} alt={""} width={17} height={17} />
                                            </div>
                                            <span className='lg:text-[20px] text-[18px] font-medium w-full text-start'>Book a call</span>
                                            <span className='lg:text-[15px] text-[12px] font-light w-full text-start'>Book a 30min voice call</span>
                                        </Link>

                                        <Link href='mailto:yashvishnoi309@gmail.com' className='h-full w-1/2 bg-bg-dark boder border-black/10 flex flex-col rounded-md p-3 gap-1 cursor-pointer transition-all duration-300 ease-in-out shadow-sm hover:shadow-md shadow-black/20 border hover:shadow-[#7C3AED]/50 hover:-translate-y-1'>
                                            <div className='w-10 h-10 rounded-full flex justify-center bg-white border-[#7C3AED]/30 items-center border'>
                                                <Image src={"/other/email.svg"} alt={""} width={24} height={24} />
                                            </div>
                                            <span className='lg:text-[20px] text-[18px] text-start w-full font-medium'>Email me</span>
                                            <span className='lg:text-[15px] text-[12px] text-start w-full font-light'>yashvishnoi309@gmail.com</span>
                                        </Link>
                                    </div>


                                    <div onClick={() => setOpen(!open)} className='w-full h-15 bg-bg-dark flex gap-4 justify-start px-3 items-center border border-black/10 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#7C3AED]/10 hover:border-[#7C3AED]/30 shadow-sm hover:shadow-md shadow-black/15 hover:shadow-[#7C3AED]/50 hover:-translate-y-1'>
                                        <div className='w-10 h-10 rounded-full flex justify-center bg-white border-[#7C3AED]/30 items-center border'>
                                            <Image src={"/other/message.svg"} alt={""} width={20} height={20} />
                                        </div>

                                        <span className='lg:text-[15px] text-[12px] font-medium text-start'>Or write me a message here</span>
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
                    )
                }
            </DialogContent>
        </Dialog>
    )
}

export default ConnectPopOver
