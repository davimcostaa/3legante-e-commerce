import Image from 'next/image'
import React from 'react'

const ValueCard = ({image, title, text}) => {
  return (
    <div className='w-[152px] h-[198px] lg:w-[262px] lg:h-[220px] flex flex-col items-left pl-3 lg:pl-8 justify-center gap-2 bg-secondaryGray'>
        <Image src={`/icons/cards/${image}.svg`} width='32' height='40' />
        <h4 className='font-semibold lg:text-lg'>{title}</h4>
        <p className='text-darkGray text-sm lg:text-base'>{text}</p>
    </div>
  )
}

export default ValueCard