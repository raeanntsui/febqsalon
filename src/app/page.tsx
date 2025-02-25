"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

export default function Home() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const ImageCarousel = () => {
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <img src="/home1.png" alt="Home 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/home2.png" alt="Home 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/home3.png" alt="Home 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/home4.png" alt="Home 4" />
        </SwiperSlide>
        {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>
    );
  };
  return (
    <>
      <div className="bg-white">
        <div>Welcome to Q Nine and Hair Salon!</div>
        <ImageCarousel />
        <p>
          From the moment you walk into our nail salon, you will feel welcomed
          by our courteous and professional staff. Our nail salon offers you a
          place to re-energize your spirit and experience the latest treatments
          in an atmosphere that combines superior hygiene with friendly service
          and relaxation.
        </p>
        <Link href="/about">View More</Link>
      </div>
    </>
  );
}
