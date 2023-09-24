import React from "react";
import Head from 'next/head';

import Navbar from '../../components/organisms/Navbar';
import Reviews from '../../components/organisms/Reviews';
import Footer from '../../components/organisms/Footer';

export default function ProgramLiterasiGivingPage() {
  return (
    <>
      <Head>
        <title>Program | Literacy Giving</title>
        <link rel="icon" sizes="192x192" href="/icon/favicon.ico"></link>
      </Head>
      <Navbar active="Programs" />

      <div className="w-11/12 max-w-[1000px] mx-auto flex flex-col gap-8 my-5 lg:my-16">
        <div className="mb-16">
          <h1 className="font-ptserif font-bold text-title3 md:text-title2 text-center text-main-green">
            Get to Know Literacy Giving
          </h1>
          <p className="font-ptserif text-lg text-light-orange text-center">
            by Literacy Power
          </p>
        </div>

        <div>
          <h2 className="font-ptserif font-bold text-base text-main-orange">
            Apa itu Literacy Giving?
          </h2>
          <p className="font-ptserif text-justify mb-4">
            Literacy Giving adalah program berbagi yang bertujuan untuk menyalurkan donasi alat tulis dan buku kepada adik asuh di sekolah binaan, anak jalanan, maupun penerima manfaat lainnya yang akan ditentukan oleh Literacy Power.\nLiteracy Power akan mengumpulkan donasi untuk ditukarkan dengan alat tulis, buku, atau seragam bagi adik-adik asuh terpilih. 
          </p>
        </div>

        <div>
          <h2 className="font-ptserif font-bold text-base text-main-orange">
            Galeri
          </h2>
          <div className="flex flex-row flex-wrap gap-2 w-full">
            <img
              className="rounded-md h-[250px]"
              src="/images/program_literacygiving_1.jpg" alt="Kegiatan Literacy Going"
            />
            <img
              className="rounded-md h-[250px]"
              src="/images/program_literacygiving_2.jpg" alt="Kegiatan Literacy Going"
            />
          </div>
        </div>
      </div>

      <Reviews />
      <Footer />
    </>
  );
}
