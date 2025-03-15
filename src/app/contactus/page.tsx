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
      <div className="flex flex-row ">
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
      <div className="flex flex-row items-center justify-around">
        <div>
          <h1>Send Message</h1>
          {messageBox.map((field, idx) =>
            field.title === "Your Message" ? (
              <div key={idx}>
                <p>{field.title}</p>
                <textarea placeholder={field.title}></textarea>
              </div>
            ) : (
              <div key={idx}>
                <p>{field.title}</p>
                <input placeholder={field.title} type="text" />
              </div>
            )
          )}
          <button>Send Message</button>
        </div>
        <div>Placeholder for Google Maps</div>
      </div>
    </>
  );
}
