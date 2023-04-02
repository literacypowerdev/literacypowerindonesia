import Link from "next/link";
import React from "react";

export interface ArticleCardProps {
  id: number;
  thumbnail: string;
  name: string;
  content: string;
  author: string;
}

const ArticleCard = (props: ArticleCardProps) => {
  const { id, thumbnail, name, content, author } = props;
  const justifyClass = `${id % 2 != 0 ? "md:flex-row" : "md:flex-row-reverse"}`;

  return (
    <Link href={`/article/${id}`}>
      <div
        className={`w-full max-w-[1100px] mx-auto h-[500px] md:h-[200px] bg-white shadow-lg my-5 rounded-[20px] overflow-hidden p-4 flex flex-col ${justifyClass} flex gap-3 md:gap-5 transition-all duration-150 ease-in-out group hover:bg-main-green cursor-pointer`}
        data-aos="fade-up"
      >
        <img
          className="w-full md:w-[250px] h-[200px] md:h-[170px] object-cover rounded-t-[10px] md:rounded-[10px]"
          src={`https://api.literacypowerid.com/images/${thumbnail}`}
          alt="Thumbnail"
        />
        <div className="h-[258px] md:h-[170px] flex flex-col gap-2 md:gap-0 overflow-hidden">
          <h2 className="font-ptserif text-base group-hover:text-white font-bold text-main-orange transition-all duration-150 ease-in-out">
            {name}
          </h2>
          <p className="font-ptserif text-justify text-main-blue group-hover:text-white transition-all duration-150 ease-in-out">
            {/* Display the HTML content using dangerouslySetInnerHTML */}
            <div
              dangerouslySetInnerHTML={{
                __html: content.slice(0, 550) + "....",
              }}
            ></div>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
