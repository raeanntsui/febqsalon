"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "@/app/styles.css";

import { homeBannerImages } from "@/app/page";

export default function ImageCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="mySwiper">
      {homeBannerImages.map((banner, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={banner.image}
            width={500}
            height={500}
            alt={banner.altText}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
