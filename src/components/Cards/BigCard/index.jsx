import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BigCard = () => {
  return (
    <div>
        <div className='absolute ml-10 mt-10'>
            <p className='font-medium  text-2xl md:text-3xl'>Living Room</p>
            <Link href='/' className='text-neutral text-xs font-semibold border-b-2 border-neutral'> Shop Now &#8594; </Link>
        </div>

        <Image src={'/cards/chair.svg'} width='548' height='664'/>
    </div>
  )
}

export default BigCard