"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileHeader from "../components/MobileHeader";

export default function Header() {
  const linksLeft = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Services", url: "/services" },
  ];
  const linksRight = [
    { name: "Booking", url: "/booking" },
    { name: "Gallery", url: "/gallery" },
    { name: "Contact Us", url: "/contactus" },
  ];

  return (
    <>
      <MobileHeader />
      <div className="hidden md:flex flex-row justify-between items-center bg-[#E2D0BE] sticky top-0 z-10">
        {linksLeft.map((link, index) => (
          <Link href={link.url} key={index} className="font-bold">
            {link.name}
          </Link>
        ))}
        <Link href="/">
          <Image
            priority
            width={100}
            height={100}
            alt="home"
            className="h-24"
            src="/qninebeautysalonlogo-transparent.png"
          />
        </Link>
        {linksRight.map((link, index) => (
          <Link href={link.url} key={index} className="font-bold">
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
}
