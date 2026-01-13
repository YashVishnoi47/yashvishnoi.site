import SplitText from '@/components/SplitText'
import CTAButton from '@/components/ui/CTAButton'
import React from 'react'

const OnlyText = () => {
    return (
        <div className="w-full flex flex-col gap-16 justify-center items-center min-h-140 mt-37.5 bordr border-black">
            {/* <span className='text-[50px] font-bold text-center lg:leading-15 sm:leading-12 w-[90%]'>I build modern web applications with a strong focus on clarity, scalability, and real-world usability.</span> */}
            <SplitText
                text="I turn complex ideas into clean, scalable web experiences people actually enjoy using."
                className="text-[60px] font-bold text-center lg:leading-15 sm:leading-12 w-[80%]"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
            />

            <CTAButton />
        </div>

    )
}

export default OnlyText
