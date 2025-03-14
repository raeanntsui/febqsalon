import Image from "next/image";
export default function ContactUs() {
  const contactInfo = [
    {
      image: "/icons8-address-48.png",
      title: "Our Location",
      info: "942 E El Camino Real, Sunnyvale, CA 94807",
    },
    {
      image: "/icons8-store-48.png",
      title: "Email Us",
      info: "qninebeautysalon@gmail.com",
    },
    {
      image: "/icons8-new-contact-48.png",
      title: "Call Us",
      info: "669-649-9639",
    },
  ];
  return (
    <>
      <div className="flex items-center my-4">
        <h2 className="text-center py-2 font-bold text-2xl">CONTACT US</h2>
        <hr className="flex-grow border-t-2 border-gray-300 mx-4" />
      </div>
      <div className="flex flex-row border-2 border-solid border-red-600">
        {contactInfo.map((card, idx) => (
          <div key={idx} className="flex flex-row">
            <div className="">
              <Image
                className=""
                src={card.image}
                alt={card.title}
                width={48}
                height={48}
              />
            </div>
            <div className="">
              <div>{card.title}</div>
              <div>{card.info}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
