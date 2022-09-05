import React from "react";
import Image from "next/image";
// react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// react-slick
import { settingsSlick } from "./settings";
import { imageList } from "./imageList";




export default function SimpleSlider() {
  const settings = settingsSlick
  const images = imageList
    
  return (
    <div className="w-[80%] m-auto mt-10">
      <Slider {...settings} className=''>

        {images.map((each: any) => {
          return (
            <div className="py-2 text-center">
              <Image
                className='rounded-lg relative'
                width={400}
                height={250}
                src={each}
                alt="Dokumentasi"
              />
            </div>
          )
        })}

      </Slider>
    </div>

  );
}