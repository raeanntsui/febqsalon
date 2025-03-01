export default function Services() {
  const facialTreatments = [
    {
      serviceName: "Facial",
      serviceSubtitle:
        "All nature skincare products are used for long-term results.",
      subTreatment: [
        {
          subTreatName: "Basic Facial (60 minutes)",
          description:
            "Begin with examining and discussing specific concerns. Remove makeup and clean the face. Exfoliate and steam. Hot towel relaxation. Then massage and apply point pressure to promote blood circulation. Continue with oxygenating the skin and apply the appropriate mask specific to the skin type. Finish with head, arm and shoulder massage.",
          cost: 70,
        },
        {
          subTreatName: "Blemish Relief Facial",
          description:
            "Begin with examining and discussing specific concerns. Remove makeup and clean the face. Exfoliate and steam. Hot towel relaxation. Then massage and apply point pressure to promote blood circulation. Acne extraction and oxygenate the skin. Apply light therapy to kill bacteria and mask specifically for skin with acne. Finish with head, arm and shoulder massage.",
          cost: 80,
        },
        {
          subTreatName: "Skin Lifting & Rejuvenating Facial",
          description:
            "Begin with examining and discussing specific concerns. Remove makeup and clean the face. Exfoliate and steam. Remove oil and impurities. Hot towel relaxation. Then massage and apply point pressure to promote blood circulation. Microcurrent facial lift using the special machine. Apply a collagen mask and oxygenate the skin. Finish with head, arm, and shoulder massage.",
          cost: 90,
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex items-center my-4">
        <h2 className="text-center py-4 font-bold text-2xl">SERVICES</h2>
        <hr className="flex-grow border-t-2 border-gray-300 mx-4" />
      </div>
      <div>
        {facialTreatments.map((facialTreatment, idx) => (
          <div>{facialTreatment.serviceName}</div>
        ))}
      </div>
    </>
  );
}
