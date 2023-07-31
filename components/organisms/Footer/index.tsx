import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../../atoms/Button";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full h-fit py-10">
        <div className="w-11/12 lg:w-10/12 max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center gap-8 lg:gap-20">
          <div className="flex flex-col gap-5 items-center">
            <div className="w-[290px] h-[113px] md:mb-3">
              <Image
                src="/icon/logo-2.svg"
                alt="Logo"
                width={280}
                height={110}
              />
            </div>
            <div className="w-full">
              <p className="font-ptserif text-main-orange text-center lg:text-justify">
                Literacy Power adalah organisasi yang berfokus pada pengembangan
                literasi, kempemimpinan anak muda, dan pemberdayaan masyarakat
                desa. Organisasi ini dikembangkan oleh mahasiswa/i dari berbagai
                universitas di Indonesia. Kami berharap melalui berbagai proyek
                yang dilakukan mampu membawa perubahan kecil maupun besar bagi
                masyarakat di Indonesia, terutama generasi muda.
              </p>
            </div>
          </div>

          <div className="hidden md:block h-[280px] w-[4px] bg-main-orange"></div>

          <div className="w-full lg:w-[300px] flex flex-col gap-5">
            <Link href="/apply">
              <div className="w-[250px] mx-auto">
                <Button
                  link
                  text="HOW TO DONATE?"
                  border="rectangle"
                  size="normal"
                />
              </div>
            </Link>
            <div className="flex flex-col items-center gap-2">
              <span className="block mb-1 font-ptserif font-bold text-main-orange">
                Follow Us On
              </span>
              <div className="w-[170px] mx-auto flex flex-col gap-2">
                <div className="w-full mx-auto flex items-start gap-3">
                  <Image
                    src="/icon/instagram.svg"
                    alt="instagram"
                    width={24}
                    height={24}
                  />
                  <a
                    href="https://www.instagram.com/literacypower.id/"
                    target="_blank"
                    rel="norefferer noreferrer"
                    className="font-ptserif text-main-orange hover:underline"
                  >
                    @literacypower.id
                  </a>
                </div>
                <div className="w-full mx-auto flex items-start gap-3">
                  <Image
                    src="/icon/youtube.svg"
                    alt="youtube"
                    width={24}
                    height={24}
                  />
                  <a
                    href="https://www.youtube.com/channel/UCWu1NrLhYG4ByE-ReHQsFrA"
                    target="_blank"
                    rel="norefferer noreferrer"
                    className="font-ptserif text-main-orange hover:underline"
                  >
                    Literacy Power
                  </a>
                </div>
                <div className="w-full mx-auto flex items-start gap-3">
                  <Image
                    src="/icon/tiktok.svg"
                    alt="tiktok"
                    width={24}
                    height={24}
                  />
                  <a
                    href="https://www.tiktok.com/@literacypower.id"
                    target="_blank"
                    rel="norefferer noreferrer"
                    className="font-ptserif text-main-orange hover:underline"
                  >
                    @literacypower.id
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-2 bg-main-green">
        <p className="w-11/12 md:w-fit text-center mx-auto font-ptserif text-white">
          &copy; Literacy Power Indonesia 2022 | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
