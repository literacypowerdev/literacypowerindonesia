import React from "react";
import Link from "next/link";

export interface ProjectCardProps {
  id: number;
  link: string;
  thumbnail: string;
  name: string;
  description: string;
}

export default function ProgramCard(props: ProjectCardProps) {
  const { id, link, thumbnail, name, description } = props;
  
  const justifyClass = `${id % 2 != 0 ? "md:flex-row" : "md:flex-row-reverse"}`;
 
  return (
    <Link href={`/programs/${link}`}>
      <div
        className={`w-full max-w-[1100px] mx-auto h-[500px] md:h-[200px] bg-white shadow-lg my-5 rounded-[20px] justify-between overflow-hidden p-4 flex flex-col ${justifyClass} flex gap-3 md:gap-5 transition-all duration-150 ease-in-out group hover:bg-main-green cursor-pointer`}
      >
        <img
          className="w-full md:w-[250px] h-[200px] md:h-[170px] object-cover rounded-t-[10px] md:rounded-[10px]"
          src={thumbnail}
          alt="Thumbnail"
        />
        <div className="h-[260px] md:h-[180px] flex flex-col gap-2 md:gap-0 overflow-hidden">
          <h2 className="font-ptserif text-base group-hover:text-white font-bold text-main-orange transition-all duration-150 ease-in-out">
            {name}
          </h2>
          <p className="font-ptserif text-justify text-main-blue group-hover:text-white transition-all duration-150 ease-in-out">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
