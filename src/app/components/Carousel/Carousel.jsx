"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <div className='swiper'>
      <h2 className='heading'>Depoimentos do nossos VIP's</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        spaceBetween={150}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 4,
        }}
        pagination={true}
        navigation={{
          enabled: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        
      >
        <SwiperSlide>
          <img src="/img_1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img_2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img_3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img_4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img_5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img_6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img_7.jpg" />
        </SwiperSlide>
      </Swiper>

    </div>
  );
}



