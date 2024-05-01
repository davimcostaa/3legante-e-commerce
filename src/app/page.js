import BigCard from "@/components/Cards/BigCard";
import SmallCard from "@/components/Cards/SmallCard";
import NavBar from "@/components/NavBar";
import Notification from "@/components/Notification";
import ProductCard from "@/components/ProductCard";
import SwiperCustomized from "@/components/SwiperCustomized";


export default function Home() {
  return (
    <>
      <Notification />
      <NavBar />
      <section className='w-full'>
        <SwiperCustomized />
      </section>
      <section className='ml-[32px] mr-[32px] lg:ml-[160px] lg:mr-[160px]'>
          <h2 className='font-semibold  text-3xl lg:text-5xl mt-6 mb-6'>Simply Unique / <br />
           Simply Better
          </h2>

          <div className='flex flex-col lg:flex-row gap-5'>
            <BigCard />

            <div className='flex flex-col gap-5'>
              <SmallCard image='drawers' text='Bedroom'  />
              <SmallCard image='toaster' text='Kitchen'  />
            </div>
          </div>
      </section>

      <section className="mt-10 flex ml-[32px] mr-[32px] lg:ml-[160px] lg:mr-[160px]">
          <ProductCard image='couch' productTitle='Loveseat Sofa' price='199.00' />
      </section>
    </>
  );
}
