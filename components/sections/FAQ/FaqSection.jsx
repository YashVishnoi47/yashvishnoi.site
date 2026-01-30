"use client"
import HeadingCard from '@/components/ui/HeadingCard'
import { ArrowBigDown, ArrowDown, CaseLower } from 'lucide-react'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from "lucide-react"

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


        <div className="w-full flex flex-col gap-16 justify-start  items-center min-h-165 mt-37.5">
            <HeadingCard head={"Frequently Asked Questions"} subHead={`Can’t find the answer you’re looking for? Reach out to us and we will get in touch with you`} />


            <div className="w-full flex flex-col items-center gap-4">
                {FAQ.map((faq, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        className="w-full max-w-3xl bg-bg-light border border-black/10 rounded-xl overflow-hidden"
                    >
                        <button
                            onClick={() => setOpen(open === idx ? null : idx)}
                            className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-black/5 transition-colors"
                        >
                            <span className="text-lg font-medium text-text">
                                {faq.question}
                            </span>

                            <motion.span
                                animate={{ rotate: open === idx ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-gray-600"
                            >
                                <ChevronDown />
                            </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                            {open === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="px-5 pb-4"
                                >
                                    <p className="text-text-muted2lay
                                     leading-relaxed">
                                        {faq.Answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default FaqSection
