import React from "react";

export interface ReviewCardProps {
  name: string;
  occupation: string;
  title: string;
  content: string;
}

export default function ReviewCard(props: ReviewCardProps) {
  const { name, occupation, title, content } = props;

  return (
    <div
      className="w-full max-w-[1100px] text-center mx-auto h-fit bg-white shadow-lg my-5 rounded-[20px] overflow-hidden p-4 pb-6 flex flex-col gap-3 md:gap-2 transition-all duration-150 ease-in-out"
      data-aos="fade-up"
    >
      <div>
        <h3 className="font-ptserif font-bold text-main-blue">{name}</h3>
        <p className="font-ptserif text-main-blue">{occupation}</p>
      </div>
      <h2 className="font-ptserif font-bold text-base text-main-orange">
        {title}
      </h2>
      <p className="font-ptserif text-main-blue">“{content}”</p>
    </div>
  );
}
