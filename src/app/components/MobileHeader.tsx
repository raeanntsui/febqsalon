"use client";
import { useState } from "react";
import Image from "next/image";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const menuToggler = () => {
    setOpen(!open);
  };
  return (
    <>
      <div onClick={menuToggler} className="md:hidden sticky top-0 left-0 z-50">
        {open ? (
          <Image
            width={80}
            height={80}
            src="./chev-up.svg"
            alt="chevron-up-icon"
          />
        ) : (
          <Image
            width={80}
            height={80}
            src="./burger-bars.svg"
            alt="burger-open-icon"
          />
        )}
      </div>
    </>
  );
}
