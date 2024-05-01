"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

import './styles.css';
const SwiperCustomized = () => {
  return (
    <div className='ml-[32px] mr-[32px] lg:ml-[160px] lg:mr-[160px]'>
        <Swiper
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper"
        >
        <SwiperSlide>
          <Image src={'/carrousel/thumbnail.png'} width='1120' height='400'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={'/carrousel/thumbnail.png'} width='1120' height='400'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={'/carrousel/thumbnail.png'} width='1120' height='400'/>
        </SwiperSlide>

        </Swiper>
    </div>

  )
}

export default SwiperCustomized