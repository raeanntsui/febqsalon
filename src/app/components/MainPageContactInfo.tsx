export default function MainPageContactInfo() {
  return (
    <>
      <div className="">
        <div>
          <h1 className="text-center font-bold text-lg">
            NINE HAIR & NAILS SALON
          </h1>
        </div>
        <section className="max-w-md mt-6">
          <h2 className="font-semibold mb-2">Location 01</h2>

          <div className="flex justify-start gap-5">
            <div className="font-semibold w-20">
              Address <br />
              Phone <br />
              Email <br />
            </div>
            <div>
              942 E El Camino Real, Sunnyvale, CA 94087 <br />
              669-649-9639 <br />
              qninebeautysalon@gmail.com
            </div>
          </div>
        </section>

        <section className="max-w-md mt-6">
          <h2 className="font-semibold mb-2 ">Location 02</h2>
          <div className="flex justify-start gap-5">
            <div className="font-semibold w-20">
              Address <br />
              Phone <br />
            </div>
            <div>
              938 E El Camino Real, Sunnyvale, CA 94087 <br />
              408-739-2960
            </div>
          </div>
        </section>

        <section className="max-w-md mt-6">
          <h1 className="font-semibold mb-2">BUSINESS HOURS</h1>
          <div className="flex justify-start gap-5">
            <div className="font-semibold w-20">
              Mon - Sat <br />
              Sunday
            </div>
            <div>
              10:00am to 7:00pm <br />
              Closed
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
