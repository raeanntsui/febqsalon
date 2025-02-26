import Link from "next/link";
export default function Header() {
  return (
    <>
      <div className="flex flex-row justify-between p-4 items-center  bg-[#E2D0BE]">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        <a href="/">
          <img className="h-24" src="/qninebeautysalonlogo-transparent.png" />
        </a>
        <Link href="/booking">Booking</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/contactus">Contact Us</Link>
      </div>
    </>
  );
}
