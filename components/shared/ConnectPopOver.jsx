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

const ConnectPopOver = () => {
    return (
        <Dialog>
            <DialogTrigger><AniButton1 text={"Start a Project"} /></DialogTrigger>
            <DialogContent className={""}>
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription className={"w-full h-50 bg-white"}>
                        <div asChild className='w-full h-full p-2 flex justify-center items-center gap-4'>
                            <div className='h-full w-1/2 flex justify-center items-center border border-black rounded-xl cursor-pointer'>
                                <span className='text-xl font-medium'>Book a call</span>
                            </div>
                            <div className='h-full w-1/2 flex justify-center items-center border border-black rounded-xl cursor-pointer'>
                                <span className='text-xl font-medium'>Email me</span>
                            </div>

                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default ConnectPopOver
