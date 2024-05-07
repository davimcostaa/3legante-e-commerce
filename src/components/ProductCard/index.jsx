import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import Tag from './Tag'

const ProductCard = ({image, productTitle, price}) => {
  return (
    <div className='w-[231px] h-[308px] lg:w-[262px] lg:h-[433px]'>

        <Tag />
        <div className='relative z-10 group' >
            <Image src={`/products/${image}.svg`} width={262} height={433} />
            <div className='absolute z-20 bottom-1 w-full pr-3 pl-3 pb-3 opacity-0 group-hover:opacity-100 '>
                <Button text='Add to cart' />
            </div>
        </div>

        <div className='flex flex-col gap-1 pt-2'>
            <Image src={'/cards/stars.svg'} width={88} height={16} />  
            <h3 className='font-semibold '>{productTitle}</h3>
            <p className='font-semibold text-[15px]'>${price}</p>
        </div>

    </div>
  )
}

export default ProductCard