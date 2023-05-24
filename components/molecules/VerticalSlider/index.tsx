import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick'


const VerticalSlider = () => {

    const images = [
        "/images/fotoslider1.png",
        "/images/fotoslider2.png",
        "/images/fotoslider3.png",
        "/images/fotoslider4.png",
        "/images/fotoslider5.png",
        "/images/fotoslider6.png",
    ];

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        verticalSwiping: true,
        beforeChange: function (currentSlide: any, nextSlide: any) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide: any) {
            console.log("after change", currentSlide);
        }
    };
    return (
        <div className='w-72'>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="">
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
        </div>
    )
}

export default VerticalSlider