import React from "react";
import Link from "next/link";

interface bukuProps {
  id: number;
  title: string;
  content: string;
  image: string;
}

const AllAboutBooksCard = ({ id, title, content, image }: bukuProps) => {
  return (
    <Link href={`/allaboutbooks/${id}`}>
      <div
        className="group container p-3 flex flex-col md:flex-row mb-5 font-ptserif gap-4 rounded-md max-w-[771px] m-auto shadow-md bg-white hover:bg-main-green hover:text-white transition-all duration-150 ease-in-out cursor-pointer"
        data-aos="fade-up"
      >
        <div className="image md:w-[512px] bg-slate-300 rounded-md">
          <img
            className="h-full"
            src={`https://api.literacypowerid.com/images/${image}`}
            alt=""
          />
          
        </div>
        <div className="content flex flex-col gap-2 text-justify">
          <p className="group-hover:text-white font-bold text-main-orange">{title}</p>
          <p>{content && `${content.slice(0, 350)}....`}</p>
        </div>
      </div>
    </Link>
  );
};

export default AllAboutBooksCard;
