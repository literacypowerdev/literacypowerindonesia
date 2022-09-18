import React from "react";
import DocSlider from "./Slider";

export default function Documentation() {
  return (
    <div className="w-[280px] md:w-[540px] xl:w-[800px] mx-auto -mt-[120px] rounded-[18px] overflow-hidden shadow-xl">
      <div className="w-full px-3 sm:px-5 py-1 sm:py-2 bg-main-green flex justify-between items-center">
        <h2 className="text-white font-ptserif font-bold">Documentation</h2>
        <div className="flex gap-1 md:gap-2">
          <div className="w-[18px] h-[18px] bg-very-light-orange rounded-full"></div>
          <div className="w-[18px] h-[18px] bg-main-orange rounded-full"></div>
          <div className="w-[18px] h-[18px] bg-dark-green rounded-full"></div>
        </div>
      </div>
      <div className="w-full py-5 md:px-10 h-[280px] md:h-[200px] xl:h-[290px] bg-white">
        <div className="w-full">
          <DocSlider />
        </div>
      </div>
    </div>
  );
}