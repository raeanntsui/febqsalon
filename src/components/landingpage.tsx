import Link from "next/link";
export default function NavigationBar() {
  return (
    <>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/booking">Booking</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/contactus">Contact Us</Link>
      </div>
    </>
  );
}
