import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <nav className="z-30">
      <div className="w-full h-[90px] md:h-[100px] bg-main-orange flex justify-center relative z-20">
        <div className="w-11/12 md:w-10/12 h-full flex justify-between items-center">
          <div className="w-[72px] md:w-[82px] h-full py-2 cursor-pointer">
            <Link href="/">
              <Image
                src="/icon/logo.svg"
                alt="Logo"
                width="100%"
                height="100%"
              />
            </Link>
          </div>

          <ul className="w-fit h-full gap-4 lg:gap-16 xl:gap-28 hidden md:flex items-center">
            <li>
              <p className="text-white font-ptserif cursor-pointer">Programs</p>
            </li>
            <li>
              <Link href="/projects">
                <a className="text-white font-ptserif">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/reviews">
                <a className="text-white font-ptserif">Reviews</a>
              </Link>
            </li>
            <li>
              <Link href="/allaboutbooks">
                <a className="text-white font-ptserif">All About Books</a>
              </Link>
            </li>
          </ul>

          <div className="hidden md:flex justify-center items-center rounded-full">
            <Link href="/apply">
              <div className="w-[100px] lg:w-[125px]">
                <Button text="Apply" link border="full" size="large" />
              </div>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div
            className="w-[28px] h-[24px] flex flex-col justify-between md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`w-full h-[2px] bg-white transition duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-[11px]" : ""
              }`}
            ></span>
            <span
              className={`w-full h-[2px] bg-white transition duration-300 ease-in-out ${
                isOpen ? "scale-0 opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-full h-[2px] bg-white transition duration-300 ease-in-out ${
                isOpen ? "-rotate-45 translate-y-[-11px]" : ""
              }`}
            ></span>
          </div>
        </div>
      </div>

      {/* Mobile Popup */}
      <MobileMenu toggleOpen={isOpen} />
    </nav>
  );
}
