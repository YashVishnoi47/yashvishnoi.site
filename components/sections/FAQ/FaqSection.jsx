"use client"
import HeadingCard from '@/components/ui/HeadingCard'
import { ArrowBigDown, ArrowDown, CaseLower } from 'lucide-react'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const FaqSection = () => {
    const FAQ = [
        {
            question: "What is your process for building a website?",
            Answer:
                "I start by understanding your goals and requirements, then move into design planning, development, testing, and final deployment. You’ll be involved at every key stage to ensure the result aligns with your expectations.",
        },
        {
            question: "How long will it take to complete my website?",
            Answer:
                "Timelines depend on the scope and complexity of the project. A standard website usually takes 2–4 weeks, while more complex applications may take longer. I always provide a clear timeline before starting.",
        },
        {
            question: "Will my website be responsive and mobile-friendly?",
            Answer:
                "Yes. All websites I build are fully responsive and optimized to work smoothly across desktops, tablets, and mobile devices.",
        },
        {
            question: "Can you scale or update the website in the future?",
            Answer:
                "Absolutely. I build websites with scalability in mind, making it easy to add new features, pages, or integrations as your business grows.",
        },
        {
            question: "Do you provide support after the project is completed?",
            Answer:
                "Yes. I offer post-launch support to fix issues, make minor updates, and ensure everything runs smoothly. Ongoing maintenance can also be arranged if needed.",
        },
    ];
    const [open, setOpen] = useState(0);

    return (


        <div className="w-full flex flex-col gap-16 justify-start items-center min-h-165 mt-37.5">
            <HeadingCard head={"Frequently Asked Questions"} subHead={`Can’t find the answer you’re looking for? Reach out to us and we will get in touch with you`} />


            <div className='w-full h-fit flex flex-col gap-4 justify-center items-center'>
                {FAQ.map((faq, idx) => {
                    return (
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 * idx, duration: 0.7 }}
                            viewport={{ once: true }}
                            animate={
                                open === idx ? { height: "140px" } :
                                    { height: "70px" }

                            }
                            key={idx}
                            onClick={() => setOpen(idx)}
                            className={`w-[60%]  flex flex-col gap-2 justify-cnter items-center border border-black/20 p-3 bg-white rounded-md cursor-pointer overflow-hidden`}>

                            <div className='w-full flex justify-between items-center transition-all duration-300 ease-in-out'>

                                <span className='text-[20px] font-medium'>{faq.question}</span>

                                <ArrowDown className={`${open === idx ? "rotate-180" : ""} transition-all duration-500 ease-in-out`} />
                            </div>

                            <motion.div animate={
                                open === idx ? { opacity: 1 } :
                                    { opacity: 0 }}
                                transition={{ delay: 0.5 }}
                                className='w-full'>
                                <span className='text-[16px] font-light'>{faq.Answer}</span>
                            </motion.div>

                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default FaqSection
