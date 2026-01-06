import React from 'react'

const HeadingCard = ({head,subHead}) => {
  return (
    <div className='w-full h-fit flex flex-col gap-4 justify-center items-center'>
      <h3 className='text-[40px] font-semibold text-center'>{head || "Heading"}</h3>
      <span className='text-[16] font-light text-center'>{subHead || "This is the one and only Sub Heading."}</span>
    </div>
  )
}

export default HeadingCard
