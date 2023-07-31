import React, { useRef, useEffect, useState } from "react";
import DocSlider from "./Slider";
import { gsap } from "gsap/dist/gsap";
import Draggable from "gsap/dist/Draggable";

export default function Documentation() {
  const [isResetVisible, setIsResetVisible] = useState(false);
  const boxRef = useRef<React.MutableRefObject<undefined> | any>();
  const handleReset = () => {
    gsap.to(boxRef.current, { x: 0, y: 0, duration: 0.3 });
    setIsResetVisible(false);
  };

  // useEffect(() => {
  //   let screenWidth = window.innerWidth
  //   console.log(screenWidth);
  //   if (screenWidth > 768) {
  //     gsap.registerPlugin(Draggable);
  //     Draggable.create(boxRef.current, {
  //       bounds: "body",
  //       inertia: true,
  //       onDrag: () => setIsResetVisible(true),
  //     });
  //   }
  // }, []);
  
  const images = [
    "/images/fotoslider1.png",
    "/images/fotoslider2.png",
    "/images/fotoslider3.png",
    "/images/fotoslider4.png",
    "/images/fotoslider5.png",
    "/images/fotoslider6.png",
  ];
  const [showModal, setShowModal] = useState<boolean>(false);
  const [imageSelectedIndex, setImageSelectedIndex] = useState<number>(0);
  return (
    <>
      <div
        ref={boxRef}
        className="w-[280px] md:w-[540px] xl:w-[800px] mx-auto -mt-[120px]  rounded-[18px] overflow-hidden shadow-xl"
      >
        {isResetVisible && (
          <div onClick={handleReset} className="absolute bottom-0">
            <button className="p-2">
              <svg
                width="20"
                height="21"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>Reload</title>{" "}
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    {" "}
                    <g id="Reload">
                      {" "}
                      <rect id="Rectangle" fillRule="nonzero" x="0" y="0">
                        {" "}
                      </rect>{" "}
                      <path
                        d="M4,13 C4,17.4183 7.58172,21 12,21 C16.4183,21 20,17.4183 20,13 C20,8.58172 16.4183,5 12,5 C10.4407,5 8.98566,5.44609 7.75543,6.21762"
                        id="Path"
                        stroke="#000000"
                        strokeWidth="3"
                        strokeLinecap="round"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M9.2384,1.89795 L7.49856,5.83917 C7.27552,6.34441 7.50429,6.9348 8.00954,7.15784 L11.9508,8.89768"
                        id="Path"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </button>
          </div>
        )}
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
            <DocSlider
              setImageSelectedIndex={setImageSelectedIndex}
              setShowModal={setShowModal}
            />
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative pb-2/3">
              <img
                src={images[imageSelectedIndex]}
                alt=""
                className="w-[600px]"
              />
            </div>
            <button
              className="absolute top-0 right-0 m-4 p-2 bg-main-green text-white rounded-full"
              onClick={() => setShowModal(!showModal)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
