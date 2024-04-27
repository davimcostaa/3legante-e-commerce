import Image from "next/image"
import Link from "next/link"

const Notification = () => {
  return (
    <div className='h-[35px] bg-gray w-full flex items-center justify-center gap-4'>
        <Image src='/icons/navbar/ticket.svg' width='20' height='18' />
        <p className='font-semibold text-xs'>30% off storewide — Limited time!</p>
        <span className='text-blue text-xs font-semibold border-b-2 border-blue'>
            <Link href='/'>
                Shop Now!
            </Link>
        </span>
    </div>
  )
}

export default Notification