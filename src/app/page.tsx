import Link from "next/link";
import Image from "next/image";
import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./styles.css";
import ImageCarousel from "./components/swiper";

export const services = [
  { name: "Facial", image: "/home-facial.jpg" },
  { name: "Manicure", image: "/home-manicure.jpg" },
  { name: "Dipping Powder", image: "/home-dp.jpg" },
  { name: "Pedicure", image: "/home-pedi.jpg" },
  { name: "Hair Cut", image: "/home-hc.png" },
  { name: "Waxing", image: "/home-waxing.jpg" },
  { name: "Eyelash Extension", image: "/home-ee.jpg" },
];

export const GalleryZoom = () => {
  const gallerySample = [
    { image: "/home-sample-1.jpg", altText: "Men's haircut back view" },
    { image: "/home-sample-2.jpg", altText: "Hair before and after treatment" },
    { image: "/home-sample-3.jpg", altText: "Side profile of haircut" },
    { image: "/home-sample-4.jpg", altText: "Hair cut from back view" },
    { image: "/home-sample-5.jpg", altText: "Men's haircut from side view" },
    { image: "/home-sample-6.jpg", altText: "Multiple hair styles shown" },
    { image: "/home-sample-7.jpg", altText: "Hair cut and styled with curls" },
    { image: "/home-sample-8.jpg", altText: "Hair cut and styled with curls" },
    { image: "/home-sample-9.jpg", altText: "Hair cut and styled with curls" },
    { image: "/home-sample-10.jpg", altText: "Straight hair cut" },
    { image: "/home-sample-11.jpg", altText: "Straight hair cut" },
    { image: "/home-sample-12.jpg", altText: "Hair cut and styled with curls" },
  ];
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-3">
      {gallerySample.map((gallerySq, index) => (
        <Zoom key={index}>
          <div className="relative group">
            <Image
              alt={gallerySq.altText}
              width={500}
              height={500}
              src={gallerySq.image}
              className="rounded-md "
            />
            <div className="absolute bottom-1/2 left-1/2 hidden group-hover:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="size-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
                />
              </svg>
            </div>
          </div>
        </Zoom>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <>
      {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1/2" />
      </Head> */}
      <div className="z-0">
        <div className="py-2">
          <ImageCarousel />
        </div>
        <div className="flex items-center gap-4 place-content-center py-3">
          <hr className="flex-grow border-t-2 border-gray-300 my-4" />
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
          <hr className="flex-grow border-t-2 border-gray-300 my-4" />
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
        {services.map((service, index) => (
          <div key={index} className="grid place-content-center gap-2">
            <Link href="/services">
              <Image
                width={500}
                height={500}
                alt={service.image}
                className="rounded-md object-fill cursor-pointer"
                src={service.image}
              />
              <h2 className="text-center font-bold">{service.name}</h2>
              <div className="flex justify-center">
                <button className="bg-white text-stone-600 hover:bg-stone-400 hover:text-white rounded-full px-3">
                  View More
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 place-content-center py-3">
        {/* <hr className="flex-grow border-t-2 border-gray-300 my-4" /> */}
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
        <h2 className="text-center py-4 font-bold text-2xl">OUR GALLERY</h2>
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
        <hr className="flex-grow border-t-2 border-gray-300 my-4" />
      </div>

      <div className="grid grid-cols-2 grid-rows-1 py-4 gap-x-6">
        <div>
          <GalleryZoom />
        </div>
        <div className="">
          <div>
            <h1 className="text-center font-bold text-lg">
              NINE HAIR & NAILS SALON
            </h1>
          </div>
          <section className="max-w-md mt-6">
            <h2 className="font-semibold mb-2">Location 01</h2>

            <div className="flex justify-start gap-5">
              <div className="font-semibold w-20">
                Address <br />
                Phone <br />
                Email <br />
              </div>
              <div>
                942 E El Camino Real, Sunnyvale, CA 94087 <br />
                669-649-9639 <br />
                qninebeautysalon@gmail.com
              </div>
            </div>
          </section>

          <section className="max-w-md mt-6">
            <h2 className="font-semibold mb-2 ">Location 02</h2>
            <div className="flex justify-start gap-5">
              <div className="font-semibold w-20">
                Address <br />
                Phone <br />
              </div>
              <div>
                938 E El Camino Real, Sunnyvale, CA 94087 <br />
                408-739-2960
              </div>
            </div>
          </section>

          <section className="max-w-md mt-6">
            <h1 className="font-semibold mb-2">BUSINESS HOURS</h1>
            <div className="flex justify-start gap-5">
              <div className="font-semibold w-20">
                Mon - Sat <br />
                Sunday
              </div>
              <div>
                10:00am to 7:00pm <br />
                Closed
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
