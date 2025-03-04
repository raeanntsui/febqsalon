export default function Services() {
  const facialPackages = [
    {
      facialType: "Basic Facial (60 minutes)",
      description:
        "Begin with examining and discussing specific concerns. Remove makeup and clean the face. Exfoliate and steam. Hot towel relaxation. Then massage and apply point pressure to promote blood circulation. Continue with oxygenating the skin and apply the appropriate mask specific to the skin type. Finish with head, arm and shoulder massage.",
      cost: 70,
    },
    {
      facialType: "Blemish Relief Facial",
      description:
        "Begin with examining and discussing specific concerns. Remove makeup and clean the face. Exfoliate and steam. Hot towel relaxation. Then massage and apply point pressure to promote blood circulation. Acne extraction and oxygenate the skin. Apply light therapy to kill bacteria and mask specifically for skin with acne. Finish with head, arm and shoulder massage.",
      cost: 80,
    },
    {
      facialType: "Skin Lifting & Rejuvenating Facial",
      description:
        "Begin with examining and discussing specific concerns. Remove makeup and clean the face. Exfoliate and steam. Remove oil and impurities. Hot towel relaxation. Then massage and apply point pressure to promote blood circulation. Microcurrent facial lift using the special machine. Apply a collagen mask and oxygenate the skin. Finish with head, arm, and shoulder massage.",
      cost: 90,
    },
  ];

  const manicures = [
    {
      title: "Classic Manicure",
      description:
        "This treatment includes nail grooming and massage. The service is finished with a natural buff or polish.",
      cost: 25,
    },
    {
      title: "Signature Manicure",
      description:
        "Intense therapy for dry skin. This treatment includes Collagen Gloves to nourish hand skin, followed by 5 minutes massage and a warm herbal neck pillow.",
      cost: 35,
    },
    {
      title: "Deluxe Manicure",
      description:
        "This treatment includes a scrub to exfoliate the skin, the mask wrapped with warm towels for your arms, followed by 5 minutes massage, and a warm herbal neck pillow.",
      cost: 35,
    },
  ];

  const addOns = [
    { title: "Color Change", priceRange: [15, 25] },
    { title: "Color Change Gel", priceRange: [25, 35] },
    { title: "French Finish", priceRange: [10, 12] },
    { title: "Nail Repair", cost: 5, startingPrice: true },
    { title: "Remove Gel/Dip with Service", cost: 5 },
    { title: "Remove Gel/Dip", priceRange: [10, 15] },
    { title: "Paraffin Wax", cost: 12 },
    { title: "Callus Treatment", cost: 12 },
    { title: "Deluxe/Sig Treatment", cost: 15 },
    { title: "Nine Treatment", cost: 35 },
    { title: "Massage (10 minutes)", cost: 15 },
  ];

  const dippingPowder = [
    { title: "Full Set", cost: 60, startingPrice: true },
    { title: "Overlay", cost: 50, startingPrice: true },
    { title: "Gel Manicure", cost: 35 },
    { title: "Gel Extension", cost: 70 },
  ];

  const pedicures = [
    {
      title: "Classic Pedicure",
      description:
        "This treatment includes nail grooming, and a scrub to exfoliate the skin, followed by a 5-minute massage with hot stone and warm lotion. The service is finished with a natural buff or polish.",
      cost: 35,
    },
    {
      title: "Signature Pedicure",
      description:
        "Intense therapy for dry skin. This treatment includes nail grooming, a scrub to exfoliate the skin, followed by Collagen Socks to nourish the skin, a 10-minute massage with hot stone, and a warm herbal neck pillow.",
      cost: 47,
    },
    {
      title: "Deluxe Pedicure",
      description:
        "This treatment includes nail grooming, the 4-step Deluxe package (sea salt soak, moisture scrub, mud mask, massage lotion), followed by a 10-minute massage with hot stone, and a warm herbal neck pillow.",
      cost: 47,
    },
    {
      title: "Nine Pedicure",
      description:
        "This treatment includes nail grooming, the 4-step Deluxe package (sea salt soak, moisture scrub, mud mask, massage lotion), callus treatment, followed by a 10-minute massage with hot stone, warm paraffin wax, and a warm herbal neck pillow.",
      cost: 67,
    },
    {
      title: "Gel Pedicure",
      description: "Classic pedicure with gel polish.",
      cost: 45,
    },
  ];

  const hairCuts = [
    { title: "Men's Haircut", cost: 25, startingPrice: true },
    { title: "Women's Haircut", cost: 35, startingPrice: true },
    {
      title: "Cut, Shampoo, Scalp Massage & Mini Facial",
      cost: 45,
      startingPrice: true,
    },
    { title: "Color", cost: 65, startingPrice: true },
    { title: "Highlight", cost: 65, startingPrice: true },
    { title: "Hot Oil Treatment", cost: 100, startingPrice: true },
    { title: "Digital Perm", cost: 80, startingPrice: true },
    { title: "Japan Straight", cost: 180, startingPrice: true },
    { title: "Keratin Treatment", cost: 180, startingPrice: true },
  ];

  const waxingServices = [
    { title: "Full Face", cost: 50 },
    { title: "Eyebrows", cost: 18 },
    { title: "Lip", cost: 12 },
    { title: "Chin", cost: 12 },
    { title: "Side Burns", cost: 15 },
    { title: "Chest", cost: 40, startingPrice: true },
    { title: "Back", cost: 40, startingPrice: true },
    { title: "Under Arms", cost: 20 },
    { title: "Half Arm", cost: 23, startingPrice: true },
    { title: "Full Arm", cost: 38, startingPrice: true },
    { title: "Upper Leg", cost: 30, startingPrice: true },
    { title: "Lower Leg", cost: 30, startingPrice: true },
    { title: "Full Leg", cost: 55, startingPrice: true },
    { title: "Bikini Line", cost: 35 },
    { title: "Bikini Ext", cost: 45 },
    { title: "Brazilian", cost: 55 },
  ];

  return (
    <>
      <div className="flex items-center my-4">
        <h2 className="text-center py-2 font-bold text-2xl">SERVICES</h2>
        <hr className="flex-grow border-t-2 border-gray-300 mx-4" />
      </div>
      <div className="py-4">
        <h1 className="text-xl font-bold underline underline-offset-2 text-red-500 ">
          FACIALS
        </h1>
        <p className="text-xs">
          All nature skincare products are used for long-term results.
        </p>

        {facialPackages.map((item, index) => (
          <div key={index}>
            <li className="flex justify-between items-center" key={index}>
              <div className="block font-bold py-3">{item.facialType}</div>
              <div className="flex-grow mx-3">
                <hr />
              </div>
              <div className="font-bold">${item.cost}</div>
            </li>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <h1 className="text-xl font-bold underline underline-offset-2 text-red-500 py-4 ">
        MANICURE
      </h1>
      <div>
        {manicures.map((item, index) => (
          <>
            <li className="flex justify-between items-center" key={index}>
              <div className="block font-bold py-3">{item.title}</div>
              <div className="flex-grow mx-3">
                <hr />
              </div>

              <p className="font-bold">${item.cost}</p>
            </li>
            <p>{item.description}</p>
          </>
        ))}
      </div>

      <div className="">
        <h1 className="text-xl font-bold underline underline-offset-2 text-red-500 py-4 ">
          ADD-ONS
        </h1>
        {addOns.map((item, index) => (
          <li className="flex justify-between items-center" key={index}>
            <div className="block font-bold">{item.title}</div>{" "}
            <div className="flex-grow mx-3">
              <hr />
            </div>
            <p className="block font-bold">
              {item.priceRange
                ? `$${item.priceRange[0]} - $${item.priceRange[1]}`
                : item.startingPrice
                ? `$${item.cost}+`
                : `$${item.cost}`}
            </p>
          </li>
        ))}
      </div>

      <div className="">
        <h1 className="text-xl font-bold underline underline-offset-2 text-red-500 py-4 ">
          DIPPING POWDER
        </h1>
        {dippingPowder.map((item, index) => (
          <li className="flex justify-between items-center" key={index}>
            <div className="block font-bold">{item.title}</div>{" "}
            <div className="flex-grow mx-3">
              <hr />
            </div>
            <p className="block font-bold">
              {item.startingPrice ? `$${item.cost}+` : `$${item.cost}`}
            </p>
          </li>
        ))}
      </div>

      <div>
        {" "}
        <h1 className="text-xl font-bold underline underline-offset-2 text-red-500 py-4 ">
          PEDICURE
        </h1>
        {pedicures.map((item, index) => (
          <>
            <li className="flex justify-between items-center" key={index}>
              <div className="block font-bold py-3">{item.title}</div>
              <div className="flex-grow mx-3">
                <hr />
              </div>

              <p className="font-bold">${item.cost}</p>
            </li>
            <p>{item.description}</p>
          </>
        ))}
      </div>

      <div className="">
        <h1 className="text-xl font-bold underline underline-offset-2 text-red-500 py-4 ">
          HAIR CUTS
        </h1>
        {hairCuts.map((item, index) => (
          <li className="flex justify-between items-center" key={index}>
            <div className="block font-bold">{item.title}</div>{" "}
            <div className="flex-grow mx-3">
              <hr />
            </div>
            <p className="block font-bold">
              {item.startingPrice ? `$${item.cost}+` : `$${item.cost}`}
            </p>
          </li>
        ))}
      </div>

      <div className="">
        <h1 className="text-xl font-bold underline underline-offset-2 text-red-500 py-4 ">
          WAXING SERVICES
        </h1>
        {waxingServices.map((item, index) => (
          <li className="flex justify-between items-center" key={index}>
            <div className="block font-bold">{item.title}</div>{" "}
            <div className="flex-grow mx-3">
              <hr />
            </div>
            <p className="block font-bold">
              {item.startingPrice ? `$${item.cost}+` : `$${item.cost}`}
            </p>
          </li>
        ))}
      </div>
    </>
  );
}
