import React from "react";
import Image from "next/image";

interface BenefitCardProps {
  imageUrl: string;
  text: string;
}

export default function BenefitCard(props: BenefitCardProps) {
  const { imageUrl, text } = props;

  return (
    <div
      className="w-full max-w-[520px] min-h-[150px] sm:min-h-[90px] bg-white shadow-md rounded-[18px] flex items-center justify-center sm:justify-start flex-col sm:flex-row py-4 px-2 sm:px-6 gap-3 sm:gap-6"
      data-aos="fade-up"
    >
      <img src={imageUrl} width={50} height={50} alt="Benefit icon" />
      <p className="text-center sm:text-left font-ptserif text-main-blue">
        {text}
      </p>
    </div>
  );
}
