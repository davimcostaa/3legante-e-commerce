import Image from 'next/image'
import React from 'react'

const CartIcon = ({isHidden}) => {
  return (
    <div className={`flex gap-1 items-center ${isHidden ? 'xl:hidden' : ''}`}>
        <Image src='/icons/navbar/cart.svg' width='24' height='24' />
        <span className="flex w-5 h-5 rounded-full bg-primary text-white text-xs items-center justify-center">2</span>
    </div>
  )
}

export default CartIcon