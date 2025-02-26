"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import CallButton from "./call-button/page";

export default function Home() {
  const ImageCarousel = () => {
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
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
      </Swiper>
    );
  };
  return (
    <>
      <div className="z-0">
        <div>Welcome to Nine Hair and Nails Salon!</div>
        <ImageCarousel />
        <div className="flex items-center gap-4 place-content-center py-3">
          <hr className="border-t-2 border-gray-300 my-4" />
          <svg
            className="object-center w-10 class-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#FFC107">
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
              clipRule="evenodd"
            />
          </svg>{" "}
          <h2 className="text-center">
            WELCOME TO <br></br>NINE HAIR & NAILS SALON
          </h2>
          <svg
            className="object-center w-10 class-5 transform rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#FFC107">
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
              clipRule="evenodd"
            />
          </svg>{" "}
        </div>
        <p className="text-center">
          From the moment you walk into our nail salon, you will feel welcomed
          by our courteous and professional staff. Our nail salon offers you a
          place to re-energize your spirit and experience the latest treatments
          in an atmosphere that combines superior hygiene with friendly service
          and relaxation.
        </p>
      </div>
      <Link href="/about" className="flex justify-center">
        View More
      </Link>
      <div className="">
        <CallButton />
      </div>
    </>
  );
}
