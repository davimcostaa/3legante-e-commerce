import BigCard from "@/components/Cards/BigCard";
import SmallCard from "@/components/Cards/SmallCard";
import ValueCard from "@/components/Cards/ValueCard";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Notification from "@/components/Notification";
import SwiperCustomized from "@/components/SwiperCustomized";
import SwiperProducts from "@/components/SwiperProducts";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Notification />
      <NavBar />
      <section className='w-full'>
        <SwiperCustomized />
      </section>
      <section className='ml-[32px] mr-[32px] lg:ml-[160px] lg:mr-[160px]'>
          <h2 className='font-semibold text-3xl lg:text-5xl mt-6 mb-6'>Simply Unique / <br />
           Simply Better
          </h2>

          <div className='flex flex-col justify-center lg:flex-row gap-5'>
            <BigCard />

            <div className='flex flex-col gap-5'>
              <SmallCard image='drawers' text='Bedroom'  />
              <SmallCard image='toaster' text='Kitchen'  />
            </div>
          </div>
      </section>

      <section className='mb-10 ml-[32px] mr-[32px] lg:ml-[160px] lg:mr-[160px]'>
        <div className='flex justify-between items-center mt-10 mb-10'>
              <h3 className='font-semibold text-3xl'>New <br /> Arrivals</h3>
              <Link className='font-semibold border-b-2 ' href='/'>More products &#8594;</Link>
        </div>
        <SwiperProducts />
      </section>

      <section className='flex flex-col md:grid md:grid-cols-2 w-full h-[391px] mb-40'>
        <div className="h-full">
            <img src="/cards/backgroundimage.svg" />    
        </div>

        <div className='bg-secondaryGray flex flex-col justify-center p-10 lg:pl-20 lg:pr-56 gap-3'>
            <h4 className='font-semibold text-blue text-sm'>SALE UP TO 35% OFF</h4>
            <p className='font-medium text-3xl '>HUNDREDS of <br /> new lower prices!</p>

            <p className='break-words'>It's more affordable than ever to give every room in your home a stylish makeover</p>

            <Link className='font-semibold w-fit border-b-2 ' href='/'>Shop Now &#8594;</Link>

        </div>
        
      </section>
      
      <section className="flex flex-row justify-center flex-wrap lg:flex-nowrap mt-[252px] ml-[32px] mr-[32px] lg:ml-[160px] lg:mr-[160px] lg:mt-[100px] lg:mb-[100px] gap-8">
        <ValueCard image='shipping' title='Free Shipping' text='Order above $200' />
        <ValueCard image='money' title='Money-back' text='30 days guarantee' />
        <ValueCard image='security' title='Secure Payments' text='Secured by Stripe' />
        <ValueCard image='call' title='24/7 Support' text='Phone support' />
      </section>

      <Footer />

    </>
  );
}
