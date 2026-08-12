import React from 'react'

const HeadingCard = ({head,subHead}) => {
  return (
    <div className='w-full h-fit flex flex-col gap-2 justify-center items-center lg:px-0 px-2'>
      <h3 className='text-[40px] font-semibold text-center text-text'>{head || "Heading"}</h3>
      <span className='text-[18px] w-1/2 font-normal text-center text-text-muted'>{subHead || "This is the one and only Sub Heading."}</span>
    </div>
  )
}

export default HeadingCard
