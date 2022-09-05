import React from 'react'
import Button from '../../atoms/Button'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReviewSlider } from './Slider';



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
        <div className='Container bg-main-orange flex flex-col md:flex-row justify-between items-center px-40'>
            <div className="Left flex flex-col gap-4">
                <div className='Bergabung text-white font-semibold text-4xl'>
                    <h1>Apa<br />Kata Mereka?</h1>
                </div>
                <div className="Button font-bold w-[400px]">
                    <Button text='See More Reviews' size='normal' border='full' />
                </div>
            </div>
            <div className='Slider text-justify p-5'>
                <div className='lg:w-[480px] md:w-[300px] w-[400px] bg-white rounded-lg py-5 px-8 '>
                    <Slider {...settings}>
                    {data.map((item) => {
                        return(
                            <div key={item.id} className="bg-red-200">
                                <p>{item.reviews}</p>
                                <p>Good job for the team!</p>
                                <p>{item.reviewer}</p>
                                
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