import Image from "next/image";
export default function About() {
  return (
    <>
      <div className="flex items-center my-4">
        <h2 className="text-center py-4 font-bold text-2xl">ABOUT US</h2>
        <hr className="flex-grow border-t-2 border-gray-300 mx-4" />
      </div>
      <div className="flex py-4 gap-x-6">
        <div className="w-3/4 ">
          <div className=" flex items-center gap-4 place-content-center py-3 ">
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
              Welcome to Nine Hair & Nails Salon
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
          </div>
          <span>
            Located at a beautiful place in Sunnyvale, CA, Nine Hair & Nails
            Salon is proud of being one of the best nail salons with many
            high-quality products. <br className="mb-4" />
            Come to visit our nail salon, you’re ensured to experience the best
            services at a reasonable price as well as an airy and clean space.
            Nine Hair & Nails Salon is always up-to-date with the latest
            technology and trends in the nail industry. We offer a wide range of
            services such as Hair, Manicures, Pedicures, Waxing, and Eyelash
            Extensions. If you are short on time or want to come in and relax,
            we will be able to accommodate your preferences.{" "}
            <br className="mb-4" />
            Above all, we place the highest emphasis on cleanliness, and all the
            technicians are trained to adhere to the strictest sanitation
            standards. Buffers and files are used only once and then discarded.
            Paraffin waxed is also never recycled for another use. All pedicure
            procedures are done with liner protection. Clients could place 100
            percent of your faith on us because your safety is our top priority.{" "}
            <br className="mb-4" />
            Nine Hair & Nails Salon- where you feel unique and special!{" "}
          </span>
        </div>
        <div className="w-1/4 ">
          <Image src="/about.png" alt="about-photo" width={500} height={500} />
        </div>
      </div>
    </>
  );
}
