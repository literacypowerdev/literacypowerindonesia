import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../../public/images/fotoslider6.png'
import image2 from '../../../public/images/fotoslider4.png'
import '../../../styles/Home.module.css'

const DocumentationSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="App container m-auto">
            <Slider {...settings} className='w-full text-center'>

                <div className="card">
                    <div className="card-top">
                        <img
                            src={image1.src}
                            alt=''
                        />
                        <h1>tes</h1>
                    </div>

                </div>
                <div className="card">
                    <div className="card-top">
                        <img
                            src={image2.src}
                            alt=''
                        />
                        <h1>tes</h1>
                    </div>

                </div>
                <div className="card">
                    <div className="card-top">
                        <img
                            src={image1.src}
                            alt=''
                        />
                        <h1>tes</h1>
                    </div>

                </div>
                <div className="card">
                    <div className="card-top">
                        <img
                            src={image2.src}
                            alt=''
                        />
                        <h1>tes</h1>
                    </div>

                </div>
                <div className="card">
                    <div className="card-top">
                        <img
                            src={image2.src}
                            alt=''
                        />
                        <h1>tes</h1>
                    </div>

                </div>

            </Slider>
        </div>
    )


}
export default DocumentationSlider