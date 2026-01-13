"use client"
import HeadingCard from '@/components/ui/HeadingCard'
import { ArrowBigDown, ArrowDown, CaseLower } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const FaqSection = () => {
    const FAQ = [
        { question: "This is the question which you might have?", Answer: "This is the answer we will provide you to the question above so that there in no doubte in your mind..." },
        { question: "This is the question which you might have?", Answer: "This is the answer we will provide you to the question above so that there in no doubte in your mind..." },
        { question: "This is the question which you might have?", Answer: "This is the answer we will provide you to the question above so that there in no doubte in your mind..." },
        { question: "This is the question which you might have?", Answer: "This is the answer we will provide you to the question above so that there in no doubte in your mind..." },
        { question: "This is the question which you might have?", Answer: "This is the answer we will provide you to the question above so that there in no doubte in your mind..." },
    ]

    return (
        <div className="w-full flex flex-col gap-16 justify-start items-center min-h-165 mt-37.5">
            <HeadingCard head={"Frequently Asked Questions"} subHead={`Can’t find the answer you’re looking for? Reach out to us and we will get in touch with you`} />


            <div className='w-full h-fit flex flex-col gap-4 justify-center items-center'>
                {FAQ.map((faq, idx) => {
                    return (
                        <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.7 }} key={idx} className='w-[45%] h-17.5 flex justify-between items-center border border-black/20 p-3 bg-white rounded-md cursor-pointer'>
                            <span className='text-[20px] font-medium'>{faq.question}</span>
                            <ArrowDown />
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default FaqSection
