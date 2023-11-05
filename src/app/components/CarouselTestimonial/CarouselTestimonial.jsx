"use client"

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './CarouselTestimonial.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function CarouselTestimonial() {
  return (
    <div className="swiper">
      <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={100}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 4,
          }}
          pagination={true}
          navigation={{
            enabled: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className='mySwiper'
        >
          
        <div className='imagesWrapper'>
          <SwiperSlide>
            <Image
              src="/testimonials/img_1.jpg" // Route of the image file
              fill
              alt="Depoimentos"
              className="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/testimonials/img_2.jpg" // Route of the image file
              fill
              alt="Depoimentos"
              className="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/testimonials/img_3.jpg" // Route of the image file
              fill
              alt="Depoimentos"
              className="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/testimonials/img_4.jpg" // Route of the image file
              fill
              alt="Depoimentos"
              className="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/testimonials/img_5.jpg" // Route of the image file
              fill
              alt="Depoimentos"
              className="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/testimonials/img_6.jpg" // Route of the image file
              fill
              alt="Depoimentos"
              className="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/testimonials/img_7.jpg" // Route of the image file
              fill
              alt="Depoimentos"
              className="img"
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
