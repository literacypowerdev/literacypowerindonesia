import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Button from "../../atoms/Button";
import MobileMenu from "./MobileMenu";

export interface NavbarProps {
  active?:
    | "Divisions"
    | "Programs"
    | "Projects"
    | "Reviews"
    | "Article"
    | "All About Books";
}

export default function Navbar(props: NavbarProps) {
  const { active } = props;

  const [isOpen, setIsOpen] = useState(false);

  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  return (
    <nav className="z-30">
      <div className="w-full h-[90px] md:h-[100px] bg-main-orange flex justify-center relative z-20">
        <div className="w-11/12 md:w-11/12 h-full flex justify-between items-center">
          <div className="w-[72px] md:w-[82px] h-full py-2 cursor-pointer">
            <Link href="/" passHref>
              <a href="">
                <Image
                  src="/icon/logo.svg"
                  alt="Logo"
                  width="100%"
                  height="100%"
                />
              </a>
            </Link>
          </div>

          <ul
            onMouseLeave={() => setIsProgramsOpen(false)}
            className="w-fit h-full sm:gap-5 md:gap-8 lg:gap-16 xl:gap-28 hidden md:flex  items-center"
          >
            <li className="relative">
              <p
                onMouseEnter={() => setIsProgramsOpen(true)}
                className={`text-white font-ptserif cursor-pointer ${
                  active == "Divisions" ? "underline" : ""
                }`}
              >
                Divisions
              </p>

              <ul
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
                className={`${
                  isProgramsOpen ? "" : "hidden"
                } w-[150px] h-fit bg-white absolute rounded-md overflow-hidden top-8`}
              >
                <li>
                  <Link href="/divisions/pendidikan" passHref>
                    <a className="text-main-orange block w-full px-4 py-2 font-ptserif cursor-pointer transition duration-150 ease-in-out hover:bg-light-orange hover:text-white">
                      Literasi <br /> Sekolah
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/divisions/lingkungan" passHref>
                    <a className="text-main-orange block w-full px-4 py-2 font-ptserif cursor-pointer transition duration-150 ease-in-out hover:bg-light-orange hover:text-white">
                      Literasi Lingkungan
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/divisions/ekonomi" passHref>
                    <a className="text-main-orange block w-full px-4 py-2 font-ptserif cursor-pointer transition duration-150 ease-in-out hover:bg-light-orange hover:text-white">
                      Literasi Ekonomi
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/divisions/kesehatan" passHref>
                    <a className="text-main-orange block w-full px-4 py-2 font-ptserif cursor-pointer transition duration-150 ease-in-out hover:bg-light-orange hover:text-white">
                      Literasi Kesehatan
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            {/* <li>
              <Link href="/programs" passHref>
                <a
                  className={`text-white font-ptserif ${
                    active == "Programs" ? "underline" : ""
                  }`}
                >
                  Programs
                </a>
              </Link>
            </li> */}
            <li>
              <Link href="/projects" passHref>
                <a
                  className={`text-white font-ptserif ${
                    active == "Projects" ? "underline" : ""
                  }`}
                >
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="/reviews" passHref>
                <a
                  className={`text-white font-ptserif ${
                    active == "Reviews" ? "underline" : ""
                  }`}
                >
                  Reviews
                </a>
              </Link>
            </li>
            <li>
              <Link href="/article" passHref>
                <a
                  className={`text-white font-ptserif ${
                    active == "Article" ? "underline" : ""
                  }`}
                >
                  Article
                </a>
              </Link>
            </li>
            <li>
              <Link href="/allaboutbooks" passHref>
                <a
                  className={`text-white font-ptserif ${
                    active == "All About Books" ? "underline" : ""
                  }`}
                >
                  All About Books
                </a>
              </Link>
            </li>
          </ul>

          <div className="hidden md:flex justify-center items-center rounded-full">
            <Link href="/apply" passHref>
              <div className="w-[100px] lg:w-[125px]">
                <Button
                  text="Apply"
                  link
                  border="full"
                  size="large"
                  animate={true}
                />
              </div>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div
            className="w-[28px] h-[24px] flex flex-col justify-between md:hidden cursor-pointer"
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
