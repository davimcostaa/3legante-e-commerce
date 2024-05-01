import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SmallCard = ({image, text}) => {
  return (
    <div>
<div className='absolute ml-10 md:ml-20 lg:ml-10 mt-20 md:mt-30 lg:mt-48'>
            <p className='font-medium text-2xl md:text-3xl'>{text}</p>
            <Link href='/' className='text-neutral text-xs font-semibold border-b-2 border-neutral'> Shop Now &#8594; </Link>
        </div>

        <Image src={`/cards/${image}.svg`} width='548' height='319'/>
    </div>
  )
}

export default SmallCard