"use client"

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './CarouselTestimonial.css';

// import required modules
import { Pagination, EffectCoverflow } from 'swiper/modules';

export default function CarouselTestimonial() {
  return (
    <div className="swiper">
      <Swiper
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 4,
        }}
        direction={"vertical"}
        grabCursor={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={40}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/testimonials/img_1.jpg" // Route of the image file
            height={274} // Desired size with correct aspect ratio
            width={828} // Desired size with correct aspect ratio
            alt="Depoimentos"
            className="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/testimonials/img_2.jpg" // Route of the image file
            height={179} // Desired size with correct aspect ratio
            width={739} // Desired size with correct aspect ratio
            alt="Depoimentos"
            className="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/testimonials/img_3.jpg" // Route of the image file
            height={163} // Desired size with correct aspect ratio
            width={728} // Desired size with correct aspect ratio
            alt="Depoimentos"
            className="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/testimonials/img_4.jpg" // Route of the image file
            height={191} // Desired size with correct aspect ratio
            width={739} // Desired size with correct aspect ratio
            alt="Depoimentos"
            className="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/testimonials/img_5.jpg" // Route of the image file
            height={185} // Desired size with correct aspect ratio
            width={739} // Desired size with correct aspect ratio
            alt="Depoimentos"
            className="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/testimonials/img_6.jpg" // Route of the image file
            height={207} // Desired size with correct aspect ratio
            width={739} // Desired size with correct aspect ratio
            alt="Depoimentos"
            className="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/testimonials/img_7.jpg" // Route of the image file
            height={175} // Desired size with correct aspect ratio
            width={739} // Desired size with correct aspect ratio
            alt="Depoimentos"
            className="img"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
