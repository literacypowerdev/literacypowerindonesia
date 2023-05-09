import Link from "next/link";
import React from "react";
import Image from "next/image";


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
        className="container p-3 flex flex-col md:flex-row mb-5 font-ptserif gap-4 rounded-md max-w-[771px] m-auto shadow-md bg-white hover:bg-main-green hover:text-white transition-all duration-150 ease-in-out cursor-pointer"
        data-aos="fade-up"
      >
        <div className="image md:w-[512px] bg-slate-300 rounded-md">
          {/* <img
            className="h-full"
            src={`https://api.literacypowerid.com/images/${image}`}
            alt=""
            
          /> */}
          <Image
            src={`https://api.literacypowerid.com/images/${image}`}
            width={50}
            height={50}
            quality={50}

          />
        </div>
        <div className="content flex flex-col gap-2 text-justify">
          <p className="font-bold text-main-orange">{title}</p>
          <p>{content && `${content.slice(0, 350)}....`}</p>
          <div className="tag-container text-white flex gap-3">
            <div className="bg-main-orange px-3 py-1 rounded-md inline-block">
              tag
            </div>
            <div className="bg-main-orange px-3 py-1 rounded-md inline-block">
              tag
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllAboutBooksCard;
