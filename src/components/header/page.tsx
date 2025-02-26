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
      <div className="flex flex-row justify-between items-center bg-[#E2D0BE] sticky top-0 z-10">
        {linksLeft.map((link, idx) => (
          <a href={link.url} key={idx} className="font-bold">
            {link.name}
          </a>
        ))}
        <a href="/">
          <img className="h-24" src="/qninebeautysalonlogo-transparent.png" />
        </a>
        {linksRight.map((link, idx) => (
          <a href={link.url} key={idx} className="font-bold">
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
}
