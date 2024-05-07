import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-neutral w-full h-[625px] mt-[40px] lg:h-[249px] lg:pl-[160px] lg:pr-[160px] lg:pt-[80px]'>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='flex flex-col md:flex-row gap-2 lg:gap-6  pt-[40px] pb-[30px] md:pt-[0px] md:pb-[0px] items-center '>
            <Image src={'/whiteLogo.svg'} width={105} height={24} /> 
            <Image src={'/icons/divider.svg'} width={1} height={24} className="transform rotate-90 lg:rotate-180" />
            <span className='text-secondaryGray text-sm'>Gift & Decoration Store</span>
          </div>
          <div className='gap-9 flex flex-col items-center lg:flex-row'>
                <Link href={'/'} className='text-white text-sm'> 
                    Home
                </Link>
                <Link href={'/'} className='text-white text-sm'>
                    Shop
                </Link>
                <Link href={'/'} className='text-white text-sm'>
                    Product
                </Link>
                <Link href={'/'} className='text-white text-sm'>
                    Contact Us
                </Link>
            </div>
        </div>

        <div className='flex flex-col-reverse lg:flex-row mt-[50px] mr-[30px] ml-[30px] lg:mr-[0px] lg:ml-[0px] items-center justify-between pt-2 border-t border-darkGray '>
            <div className='flex flex-col-reverse md:flex-col lg:flex-row gap-9 '>
              <span className='text-secondaryGray text-center text-sm'>Copyright © 2023 3legant. All rights reserved</span>

              <div className='flex justify-between lg:gap-6'>
                <Link href={'/'} className='text-white text-sm'> 
                      Privacy Policy
                </Link>
                <Link href={'/'} className='text-white text-sm'> 
                      Terms of Use
                </Link>
              </div>
            </div>

            <div>
            <ul className='flex mt-[20px] mb-[20px] lg:mt-[0px] lg:mb-[20px] gap-3 items-center'>
                <li>
                  <Image src='/icons/socials/whiteInstagram.svg' width='24' height='24'/>
                </li>
                <li>
                  <Image src='/icons/socials/whiteFacebook.svg' width='24' height='24'/>
                </li>
                <li>
                <Image src='/icons/socials/whiteYoutube.svg' width='24' height='24'/>
                </li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer