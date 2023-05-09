import React from "react";

export interface ProjectBodyProps {
  type?: "Sebelum" | "Sesudah";
  name?: String;
  text: string;
  dokumentasi: string;
}

export default function ProjectBody(props: ProjectBodyProps) {
  const { type, name, text, dokumentasi } = props;

  return (
    <>
      <div className="w-full">
        {dokumentasi == "" ? (
          ""
        ) : (
          <img
            className={`rounded-[10px] w-full md:w-[300px] md:h-[300px] object-cover ${
              type == "Sebelum" ? "float-left" : "float-right"
            } ${type == "Sebelum" ? "mr-4" : "ml-4"} mb-1`}
            src={`https://api.literacypowerid.com/images/${dokumentasi}`}
            alt="Project Documentation"
          />
        )}
        <h2 className="font-ptserif font-bold text-base text-main-orange">
          {type ? type : name}
        </h2>
        <p className="font-ptserif text-justify">{text}</p>
      </div>
    </>
  );
}
