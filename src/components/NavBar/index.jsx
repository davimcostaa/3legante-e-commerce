import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CartIcon from '../CartIcon';
import MobileNav from './MobileNav';

const NavBar = () => {
  return (
    <nav className='w-full flex h-[64px] lg:pl-[160px] lg:pr-[160px] lg:justify-between justify-around items-center '>

        <MobileNav />
   
        <Link href='/'>
            <Image src='/logo.svg' width='105' height='24' />
        </Link>
        
            <div className='gap-9 hidden xl:flex'>
                <Link href={'/'} className='text-neutral font-medium text-sm'> 
                    Home
                </Link>
                <Link href={'/'} className='text-neutral font-medium text-sm'>
                    Shop
                </Link>
                <Link href={'/'} className='text-neutral font-medium text-sm'>
                    Product
                </Link>
                <Link href={'/'} className='text-neutral font-medium text-sm'>
                    Contact Us
                </Link>
            </div>

            <div className='gap-4 hidden xl:flex'>
                <Image src='/icons/navbar/user-circle.svg' width='24' height='24' />
                <CartIcon />
            </div>

            <CartIcon isHidden />
    </nav>
  )
}

export default NavBar