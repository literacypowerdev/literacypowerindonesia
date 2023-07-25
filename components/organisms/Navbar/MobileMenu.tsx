import React, { useState } from "react";
import Link from "next/link";
import Button from "../../atoms/Button";

interface MobileMenuProps {
  toggleOpen: boolean;
}

export default function MobileMenu(props: MobileMenuProps) {
  const { toggleOpen } = props;

  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  return (
    <div
      className={`${
        toggleOpen ? "" : "translate-y-[-600px]"
      } md:hidden w-full h-fit bg-white absolute z-10 transition duration-300 ease-in-out`}
    >
      <ul>
        <li>
          <p
            onClick={() => setIsProgramsOpen(!isProgramsOpen)}
            className="w-100 py-4 px-6 text-main-orange hover:text-white font-ptserif cursor-pointer transition duration-150 ease-in-out hover:bg-light-orange"
          >
            Divisions
          </p>
        </li>

        <li>
          <Link href="/divisions/kesehatan">
            <a
              className={`${
                isProgramsOpen ? "block" : "hidden"
              } w-100 py-4 px-12 text-main-orange hover:text-white font-ptserif transition duration-150 ease-in-out hover:bg-light-orange`}
            >
              Kesehatan
            </a>
          </Link>
        </li>
        <li>
          <Link href="/divisions/pendidikan">
            <a
              className={`${
                isProgramsOpen ? "block" : "hidden"
              } w-100 py-4 px-12 text-main-orange hover:text-white font-ptserif transition duration-150 ease-in-out hover:bg-light-orange`}
            >
              Pendidikan
            </a>
          </Link>
        </li>
        <li>
          <Link href="/divisions/lingkungan">
            <a
              className={`${
                isProgramsOpen ? "block" : "hidden"
              } w-100 py-4 px-12 text-main-orange hover:text-white font-ptserif transition duration-150 ease-in-out hover:bg-light-orange`}
            >
              Lingkungan
            </a>
          </Link>
        </li>
        <li>
          <Link href="/divisions/ekonomi">
            <a
              className={`${
                isProgramsOpen ? "block" : "hidden"
              } w-100 py-4 px-12 text-main-orange hover:text-white font-ptserif transition duration-150 ease-in-out hover:bg-light-orange`}
            >
              Ekonomi
            </a>
          </Link>
        </li>
        {/* <li>
          <Link href="/programs">
            <a className="block w-100 py-4 px-6 text-main-orange hover:text-white font-ptserif transition duration-150 ease-in-out hover:bg-light-orange">
              Programs
            </a>
          </Link>
        </li> */}
        <li>
          <Link href="/projects">
            <a className="block w-100 py-4 px-6 text-main-orange hover:text-white font-ptserif transition duration-150 ease-in-out hover:bg-light-orange">
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="/reviews">
            <a className="block w-100 py-4 px-6 text-main-orange hover:text-white font-ptserif transition duration-150 ease-in-out hover:bg-light-orange">
              Reviews
            </a>
          </Link>
        </li>
        <li>
          <Link href="/article">
            <a className="block w-100 py-4 px-6 text-main-orange hover:text-white font-ptserif transition duration-150 ease-in-out hover:bg-light-orange">
              Artikel
            </a>
          </Link>
        </li>
        <li>
          <Link href="/allaboutbooks">
            <a className="block w-100 py-4 px-6 text-main-orange hover:text-white font-ptserif transition duration-150 ease-in-out hover:bg-light-orange">
              All About Books
            </a>
          </Link>
        </li>
        <li>
          <Link href="/apply">
            <div className="w-[100px] mx-5 mt-2 mb-5">
              <Button text="Apply" border="full" size="normal" />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
