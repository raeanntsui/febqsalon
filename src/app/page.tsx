"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import CallButton from "./call-button/page";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/services");
  };

  const homeBannerImages = [
    { image: "home1.png" },
    { image: "home2.png" },
    { image: "home3.png" },
    { image: "home4.png" },
  ];

  const services = [
    { name: "Facial", image: "home-facial.jpg" },
    { name: "Manicure", image: "home-manicure.jpg" },
    { name: "Dipping Powder", image: "home-dp.jpg" },
    { name: "Pedicure", image: "home-pedi.jpg" },
    { name: "Hair Cut", image: "home-hc.png" },
    { name: "Waxing", image: "home-waxing.jpg" },
    { name: "Eyelash Extension", image: "home-ee.jpg" },
  ];

  const gallerySample = [
    { image: "home-sample-1.jpg" },
    { image: "home-sample-2.jpg" },
    { image: "home-sample-3.jpg" },
    { image: "home-sample-4.jpg" },
    { image: "home-sample-5.jpg" },
    { image: "home-sample-6.jpg" },
    { image: "home-sample-7.jpg" },
    { image: "home-sample-8.jpg" },
    { image: "home-sample-9.jpg" },
    { image: "home-sample-10.jpg" },
    { image: "home-sample-11.jpg" },
    { image: "home-sample-12.jpg" },
  ];

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
        {homeBannerImages.map((singleBanner, idx) => (
          <SwiperSlide key={idx}>
            <img src={singleBanner.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  return (
    <>
      <div className="">
        <CallButton />
      </div>
      <div className="z-0">
        <div className="py-4">
          <ImageCarousel />
        </div>
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
          <h2 className="text-center py-4 font-bold text-2xl">
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
      <div className="flex justify-center py-4">
        <Link
          href="/about"
          className="inline-flex justify-center py-3 bg-white text-stone-600 hover:bg-stone-400 hover:text-white rounded-full px-4 w-sm">
          View More
        </Link>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-4 py-4 ">
        {services.map((service, idx) => (
          <div key={idx} className="grid place-content-center gap-2">
            <img
              onClick={handleNavigation}
              className="rounded-md object-fill cursor-pointer"
              src={service.image}
            />
            <h2 className="text-center font-bold">{service.name}</h2>
            <div className="flex justify-center">
              <button
                onClick={handleNavigation}
                className="bg-white text-stone-600 hover:bg-stone-400 hover:text-white rounded-full py-2 px-5">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 grid-rows-3 gap-3">
        {gallerySample.map((gallerySq, idx) => (
          <img key={idx} src={gallerySq.image} className="rounded-md" />
        ))}
      </div>
    </>
  );
}
