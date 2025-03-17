import Image from "next/image";
import GoogleMaps from "../components/GoogleMaps";

export default function ContactUs() {
  const contactInfo = [
    {
      image: "./google-maps.svg",
      title: "Our Location",
      info: "942 E El Camino Real, Sunnyvale, CA 94807",
    },
    {
      image: "/gmail.png",
      title: "Email Us",
      info: "qninebeautysalon@gmail.com",
    },
    {
      image: "/phone-call.png",
      title: "Call Us",
      info: "669-649-9639",
    },
  ];

  const messageBox = [
    { title: "Your Name" },
    { title: "Your Email" },
    { title: "Your Subject" },
    { title: "Your Message" },
  ];
  return (
    <>
      <div className="flex items-center my-4">
        <h2 className="text-center py-2 font-bold text-2xl">CONTACT US</h2>
        <hr className="flex-grow border-t-2 border-gray-300 mx-4" />
      </div>
      <div className="flex flex-row justify-around">
        {contactInfo.map((card, index) => (
          <div
            key={index}
            className="flex flex-row  w-full justify-center items-start py-4 gap-4">
            <Image
              src={card.image}
              alt={card.title}
              width={48}
              height={48}
              className="object-contain"
              objectFit="contain"
            />
            <div>
              <div className="font-bold text-lg">{card.title}</div>
              <div>{card.info}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center justify-around">
        <div className="p-4 w-full">
          <h1 className="text-lg font-bold">Send Us A Message!</h1>
          {messageBox.map((field, index) =>
            field.title === "Your Message" ? (
              <div
                className="border-solid border-3 border-green-600"
                key={index}>
                <p className="font-bold">{field.title}</p>
                <textarea
                  className="border-solid border-2 w-full px-2 pb-4 pt-2"
                  placeholder={field.title}></textarea>
              </div>
            ) : (
              <div key={index}>
                <p className="font-bold">{field.title}</p>
                <input
                  className="border-solid border-2 w-full p-2"
                  placeholder={field.title}
                  type="text"
                />
              </div>
            )
          )}
          <button>Send Message</button>
        </div>
        <div className=" w-full flex justify-center">
          <GoogleMaps />
        </div>
      </div>
    </>
  );
}
