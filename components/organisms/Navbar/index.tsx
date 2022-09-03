import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <nav>
      <div className="w-full h-[90px] md:h-[100px] bg-main-orange flex justify-center z-30">
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
              <a href="/projects" className="text-white font-ptserif">
                Projects
              </a>
            </li>
            <li>
              <a href="/reviews" className="text-white font-ptserif">
                Reviews
              </a>
            </li>
            <li>
              <a href="/allaboutbooks" className="text-white font-ptserif">
                All About Books
              </a>
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
            <span className="w-full h-[2px] bg-white"></span>
            <span className="w-full h-[2px] bg-white"></span>
            <span className="w-full h-[2px] bg-white"></span>
          </div>
        </div>
      </div>

      {/* Mobile Popup */}
    </nav>
  );
}
