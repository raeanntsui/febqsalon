"use client";
import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const menuToggler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div onClick={menuToggler} className="md:hidden sticky top-0 left-0 z-50">
        {isOpen ? (
          <div>
            <Modal isOpen={open} onClose={() => setIsOpen(false)}></Modal>
            <Image
              width={80}
              height={80}
              src="./chev-up.svg"
              alt="chevron-up-icon"
            />
          </div>
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
