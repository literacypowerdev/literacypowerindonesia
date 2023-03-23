import React, { useState } from "react";
import Image from "next/image";

import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function DocSlider({setImageSelectedIndex, setShowModal}: any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
    ],
  };

  const images = [
    "/images/fotoslider1.png",
    "/images/fotoslider2.png",
    "/images/fotoslider3.png",
    "/images/fotoslider4.png",
    "/images/fotoslider5.png",
    "/images/fotoslider6.png",
  ];

  const [imageSelected, setImageSelected] = useState<number>(0)

  const handleZoom = (index: any) => {
    setImageSelected(index)
    setImageSelectedIndex(index)
    setShowModal(true)
  }

  return (
    <>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={"key"} className="px-5 md:px-2"  >
            <Image
              key={index}
              id={`image${index}`}
              onClick={() => handleZoom(index)}
              className="object-cover z-10 rounded-lg"
              width={300}
              height={300}
              src={image}
              alt="Dokumentasi"
            />
          </div>
        ))}
      </Slider>
      
    </>
  );
}
