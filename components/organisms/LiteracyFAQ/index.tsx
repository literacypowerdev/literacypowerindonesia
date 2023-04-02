import React, { useState } from "react";
import AccordionParent from "../../../public/icon/accordion-parent.svg";
import AccordionChild from "../../../public/icon/accordion-child.svg";
import Image from "next/dist/client/image";
import Arrow from "/icon/accordion-arrow.svg";

interface Content {
  title: string;
  details: string[];
  name: string;
}

const LiteractFAQ = ({ title, details, name }: Content) => {
  // state
  const [isOpen, setIsOpen] = useState(false);

  // state
  return (
    <div data-aos="fade-up">
      <div className="w-full flex flex-col gap-1 ">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-full m-auto bg-white shadow-lg mb-2 hover:bg-main-green text-gray-600 hover:text-white transition-all duration-150 ease-in-out cursor-pointer px-5 py-2 rounded-[20px] flex justify-between"
        >
          <div className="flex gap-2">
            <Image src={AccordionParent} width={20} height={20} />
            <h2 className=" font-ptserif font-bold">{title}</h2>
          </div>
          <img src="/icon/accordion-arrow.svg" alt="" className="w-[16px]" />
        </div>

        <div
          className={`w-full flex flex-col gap-1 mb-2 ${
            isOpen ? "" : "hidden"
          }`}
        >
          <div className="w-full m-auto bg-main-background mb-1 shadow-lg transition-all duration-150 ease-in-out cursor-pointer px-5 py-2 rounded-[20px] flex justify-start  gap-2">
            <div className="flex flex-col">
              <ul>
                <li className="flex flex-col gap-2">
                  {details.map((item) => {
                    return (
                      <div className="flex gap-2 items-center">
                        <Image src={AccordionChild} width={20} height={20} />
                        <p>{item}</p>
                      </div>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiteractFAQ;
