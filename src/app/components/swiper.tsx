"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "@/app/styles.css";

export default function ImageCarousel() {
  const homeBannerImages = [
    { url: "/home1.png", altText: "Red nail manicure" },
    { url: "/home2.png", altText: "Natural pedicure" },
    { url: "/home3.png", altText: "Hair waxing" },
    { url: "/home4.png", altText: "Spa treatment" },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="mySwiper">
      {homeBannerImages.map((banner, index) => (
        <SwiperSlide key={index}>
          <Image
            priority
            src={banner.url}
            width={500}
            height={500}
            alt={banner.altText}
            unoptimized
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
