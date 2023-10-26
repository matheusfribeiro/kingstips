"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css';

// required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <div className="container-1">
      <div className='swiper'>
        <h2 className='headline'>Confira nossos Tickets PREMIADOS</h2>
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
    </div>
  );
}



