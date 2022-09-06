import React from 'react'
import Button from '../../atoms/Button'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReviewSlider } from './slider';
import Image from 'next/image';
import Kutip from '/public/icon/quotes.svg'


const Reviews = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const data = ReviewSlider;
    return (
        <div className='Container bg-main-orange flex flex-col md:flex-row justify-between items-center px-40 py-16 m-auto lg:justify-around lg:px-10'>
            <div className="Left flex flex-col gap-4">
                <div className='Bergabung text-white font-semibold text-4xl text-center md:text-left'>
                    <h1>Apa<br />Kata Mereka?</h1>
                </div>
                <div className="Button font-bold max-w-[400px] min-w-[200px]">
                    <Button text='See More Reviews' size='normal' border='full' />
                </div>
            </div>
            <div className='Slider text-left md:text-justify p-5'>
                <div className='bg-white rounded-lg py-5 px-8 lg:w-[550px] w-[250px] md:w-[400px]'>
                    <Slider {...settings}>
                        {data.map((item) => {
                            return (
                                <div key={item.id} className="!flex flex-col gap-2">
                                    <p className='font-semibold'>{item.reviews}</p>
                                    <p className='font-semibold text-orange-500 text-xl'>Good job for the team!</p>
                                    <div className='flex items-center justify-between'>
                                        <p className='font-semibold'>{item.reviewer}</p>
                                        <Image
                                            className=''
                                            src={Kutip}
                                            width={80}
                                            height={80}

                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Reviews