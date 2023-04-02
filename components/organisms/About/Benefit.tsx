import React from "react";
import BenefitCard from "./BenefitCard";

export default function Benefit() {
  const benefitData = {
    1: {
      imageUrl: "/icon/benefit-1.svg",
      text: "Mendapatkan pengalaman relawan ke berbagai provinsi di Indonesia",
    },
    2: {
      imageUrl: "/icon/benefit-2.svg",
      text: "Memiliki harga pengabdian yang terjangkau",
    },
    3: {
      imageUrl: "/icon/benefit-3.svg",
      text: "Menjalin relasi dengan pemuda-pemudi dari berbagai universitas di Indonesia",
    },
    4: {
      imageUrl: "/icon/benefit-4.svg",
      text: "Memiliki kesempatan melakukan kegiatan relawan dengan tim yang berpengalaman",
    },
  };

  return (
    <div className="w-11/12 mx-auto mt-10 md:mt-12 lg:mt-16 flex flex-col items-center">
      <h2
        className="w-fit px-2 text-base lg:text-title3 font-ptserif font-bold text-main-background bg-main-green text-center"
        data-aos="fade-up"
      >
        Kenapa harus menjadi Relawan Literacy Power
      </h2>
      <div className="w-full mt-7 lg:mt-10 flex flex-col gap-4 items-center">
        <BenefitCard
          imageUrl={benefitData[1].imageUrl}
          text={benefitData[1].text}
        />
        <BenefitCard
          imageUrl={benefitData[2].imageUrl}
          text={benefitData[2].text}
        />
        <BenefitCard
          imageUrl={benefitData[3].imageUrl}
          text={benefitData[3].text}
        />
        <BenefitCard
          imageUrl={benefitData[4].imageUrl}
          text={benefitData[4].text}
        />
      </div>
    </div>
  );
}
