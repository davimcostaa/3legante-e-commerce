"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { Pagination, Navigation } from 'swiper/modules';

import { Scrollbar } from 'swiper/modules';

import Image from 'next/image';

import products from '../../data/products.json'

import ProductCard from '../ProductCard';

import './styles.css';


const SwiperProducts = () => {
  return (
    <div className=''>
        <Swiper
          navigation
          breakpoints={{
            300: {
              slidesPerView: 1.5,
              spaceBetween: 80,
              shortSwipes: false
            },
            768: {
              slidesPerView: 3.4,
              shortSwipes: false
            },
          }}
          slidesPerView={3}
          spaceBetween={80}
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar, Navigation]}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.productTitle}>
              <ProductCard image={product.image} productTitle={product.productTitle} price={product.price} />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>

  )
}

export default SwiperProducts