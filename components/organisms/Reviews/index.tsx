import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Slider from "react-slick";
import { ReviewSlider } from "./slider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Kutip from "/public/icon/quotes.svg";

import Button from "../../atoms/Button";

export interface ReviewsProps {
  isReview?: boolean;
}

const Reviews = (props: ReviewsProps) => {
  const { isReview } = props;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data = ReviewSlider;

  const [reviewData, setReviewData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(
      `https://api.literacypowerid.com/api/article/pagination?page=0&table=review&pageSize=5`
    );
    setReviewData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-main-orange py-5">
      <div className="w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row lg:justify-around justify-between items-center ">
        <div className="Left flex flex-col gap-4">
          <div className="Bergabung text-white font-bold text-title2 text-center md:text-left font-ptserif">
            <h1>
              {isReview ? "Bergabung" : "Apa"}
              <br />
              {isReview ? "Dengan Kami!" : "Kata Mereka?"}
            </h1>
          </div>
          {isReview ? (
            <Link href="/apply">
              <div className="Button font-bold max-w-[400px] min-w-[200px]">
                <Button text="Apply" link size="normal" border="full" />
              </div>
            </Link>
          ) : (
            <Link href="/reviews">
              <div className="Button font-bold max-w-[400px] min-w-[200px]">
                <Button text="See More Reviews" size="normal" border="full" />
              </div>
            </Link>
          )}
        </div>

        <div className="Slider w-full md:w-fit text-left md:text-justify p-5">
          <div className="bg-white mx-auto rounded-lg py-5 w-full max-w-[500px] md:w-[400px]">
            <Slider {...settings}>
              {reviewData.map((review: any) => {
                return (
                  <div key={review.id} className="!flex flex-col justify-between h-[130px] px-8">
                    <p className="font-semibold">&quot;{review.testimoni}&quot;</p>
                    <div className="flex flex-col">
                      <p className="font-semibold text-orange-500 text-xl">
                        Good job for the team!
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">{review.username}, {review.userProfession}</p>
                        <Image src={Kutip} width={40} height={40} alt="Quote" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
