import React, { useState, useEffect } from "react";
import AOS from "aos";

export interface AccordionProps {
  title: string;
  steps: string[];
};

export default function Accordion(prop: AccordionProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  
  const { title, steps } = prop;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-1 ">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-main-orange mb-1 hover:bg-light-orange transition-all duration-150 ease-in-out cursor-pointer px-5 py-2 rounded-[20px] flex justify-between shadow-md"
        data-aos="fade-up"
      >
        <h2 className="text-white font-ptserif font-bold">{title}</h2>
        <img src="/icon/accordion-arrow.svg" alt="" className="w-[16px]" />
      </div>
      <div
        className={`w-full flex flex-col gap-1 mb-5 ${isOpen ? "" : "hidden"}`}
      >
        {steps.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full bg-white px-5 py-2 rounded-[20px] shadow-md flex justify-center"
            >
              <h2 className="text-main-orange font-ptserif text-center">
                {index + 1}. {item}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
