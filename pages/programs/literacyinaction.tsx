import React from "react";
import Head from 'next/head';

import Navbar from '../../components/organisms/Navbar';
import Reviews from '../../components/organisms/Reviews';
import Footer from '../../components/organisms/Footer';

export default function ProgramLiterasiInActionPage() {
  return (
    <>
      <Head>
        <title>Program | Literacy in Action</title>
        <link rel="icon" sizes="192x192" href="/icon/favicon.ico"></link>
      </Head>
      <Navbar active="Programs" />

      <div className="w-11/12 max-w-[1000px] mx-auto flex flex-col gap-8 my-5 lg:my-16">
        <div className="mb-16">
          <h1 className="font-ptserif font-bold text-title3 md:text-title2 text-center text-main-green">
            Get to Know Literacy in Action
          </h1>
          <p className="font-ptserif text-lg text-light-orange text-center">
            by Literacy Power
          </p>
        </div>

        <div>
          <h2 className="font-ptserif font-bold text-base text-main-orange">
            Apa itu Literacy in Action?
          </h2>
          <p className="font-ptserif text-justify mb-4">
            Program ini adalah program berkepanjangan dari #LiteracyGoing, di mana para relawan akan mengawasi perkembangan desa dari tempat pengabdian sebelumnya untuk menjadi sebuah desa binaan.\nLiteracy Power mengembangkan program ini agar kegiatan yang diciptakan dapat memberikan dampak lebih besar bagi masyarakat desa. 
          </p>
        </div>

        <div>
          <h2 className="font-ptserif font-bold text-base text-main-orange">
            Galeri
          </h2>
          <div className="flex flex-row flex-wrap gap-2 w-full">
            <img
              className="rounded-md h-[250px]"
              src="/images/program_literacyinaction_1.jpg" alt="Kegiatan Literacy Going"
            />
            <img
              className="rounded-md h-[250px]"
              src="/images/program_literacyinaction_2.jpg" alt="Kegiatan Literacy Going"
            />
            <img
              className="rounded-md h-[250px]"
              src="/images/program_literacyinaction_3.jpg" alt="Kegiatan Literacy Going"
            />
          </div>
        </div>
      </div>

      <Reviews />
      <Footer />
    </>
  );
}
