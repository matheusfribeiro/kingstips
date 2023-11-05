"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

// required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <div className="container-1">
      <div className="swiper">
        <h2 className="headline">Confira nossos Tickets PREMIADOS</h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={150}
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
        >
          <div className="imagesWrapper">
            <SwiperSlide>
              <Image
                src="/tickets/img_1.png" // Route of the image file
                fill
                alt="tickets premiados"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/tickets/img_2.png" // Route of the image file
                fill
                alt="tickets premiados"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/tickets/img_3.png" // Route of the image file
                fill
                alt="tickets premiados"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/tickets/img_4.png" // Route of the image file
                fill
                alt="tickets premiados"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/tickets/img_5.png" // Route of the image file
                fill
                alt="tickets premiados"
              />
            </SwiperSlide>
          </div>
          
        </Swiper>
      </div>
    </div>
  );
}
