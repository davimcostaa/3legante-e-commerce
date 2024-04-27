"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/Button';
import CartIcon from '@/components/CartIcon';

const menuVariants = {
  hidden: {
    x: '-100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.9]
    }
  }
}

const MobileNav = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className='xl:hidden'>
      <div onClick={() => setOpenMenu(true)}>
        <Image src={'/icons/navbar/mobile.svg'} width='20' height='8' />
      </div>
        <motion.div 
          variants={menuVariants} 
          initial='hidden'
          animate={openMenu ? 'show' : ''}
          className='bg-white shadow-2x1 w-full h-svh absolute top-0 left-0 z-20 '>

          <div className='flex flex-col  h-svh justify-between pt-10 ml-10 mr-10 overflow-y-auto'>

            <div>
                  <div className='flex justify-between'>
                    <Image src='/logo.svg' width='70' height='24' />
                    <div onClick={() => setOpenMenu(false)} 
                        className='text-4x1 z-30 top-14 text-primary cursor-pointer'> 
                        <Image src={'/icons/navbar/close.svg'} width='20' height='8' />
                    </div>
                  </div>  
                  <ul className='flex flex-col 
                      justify-center gap-y-8 mt-10 mb-10
                      text-primary font-semibold'>
                    <li className='border-b-2 border-gray pb-3 lr-10'>
                      <Link href='/'>Home</Link>
                      
                    </li>
                    <li className='border-b-2 border-gray pb-3 lr-10'>
                      <Link href='/about'>Shop</Link>
                    </li>
                    <li className='border-b-2 border-gray pb-3 lr-10'>
                      <Link href='/portfolio'>Product</Link>
                    </li>
                    <li className='border-b-2 border-gray pb-3 lr-10'>
                      <Link href='/contact'>Contact Us</Link>
                    </li>
                </ul>
            </div>

            <div>
              <div className='flex w-full  justify-between border-b-2 border-gray pb-3'>
                    <span className='text-2xl text-neutral'>Cart</span>
                    <CartIcon />
              </div>
              <Button text='Sign in' />

              <ul className='flex gap-3 pt-5 pb-10'>
                <li>
                  <Image src='/icons/socials/instagram.svg' width='35' height='35'/>
                </li>
                <li>
                  <Image src='/icons/socials/facebook.svg' width='35' height='35'/>
                </li>
                <li>
                <Image src='/icons/socials/youtube.svg' width='35' height='35'/>

                </li>
              </ul>
            </div>

          </div>

        </motion.div>
      
    </nav>
  )
}

export default MobileNav;
