import React from "react";

interface AboutContentProps {
  title: string;
  content: string;
  emphasize?: boolean;
}

export default function AboutContent(props: AboutContentProps) {
  const { title, content, emphasize } = props;

  return (
    <div
      className="w-11/12 max-w-[750px] md:w-10/12 mx-auto flex flex-col gap-2 lg:gap-4 items-center"
      data-aos="fade-up"
    >
      <h2
        className={`w-fit px-2 text-base lg:text-title3 font-ptserif font-bold ${
          emphasize ? "text-main-background bg-main-orange" : "text-main-orange"
        }`}
      >
        {title}
      </h2>
      <p className="w-full font-ptserif text-main-blue text-justify ">
        {content}
      </p>
    </div>
  );
}
