import React from "react";
import Image from "next/image";

import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function DocSlider() {
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

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={"key"} className="px-5 md:px-2">
          <Image
            className="object-cover z-10 rounded-lg"
            width={300}
            height={300}
            src={image}
            alt="Dokumentasi"
          />
        </div>
      ))}
    </Slider>
  );
}
