import React from "react";
import Head from 'next/head';

import Navbar from '../../components/organisms/Navbar';
import Reviews from '../../components/organisms/Reviews';
import Footer from '../../components/organisms/Footer';

export default function ProgramLiterasiGoingPage() {
  return (
    <>
      <Head>
        <title>Program | #LiterasiGoing</title>
        <link rel="icon" sizes="192x192" href="/icon/favicon.ico"></link>
      </Head>
      <Navbar active="Programs" />

      <div className="w-11/12 max-w-[1000px] mx-auto flex flex-col gap-8 my-5 lg:my-16">
        <div className="mb-16">
          <h1 className="font-ptserif font-bold text-title3 md:text-title2 text-center text-main-green">
            Get to Know #LiteracyGoing
          </h1>
          <p className="font-ptserif text-lg text-light-orange text-center">
            by Literacy Power
          </p>
        </div>

        <div>
          <h2 className="font-ptserif font-bold text-base text-main-orange">
            Apa itu #LiteracyGoing?
          </h2>
          <p className="font-ptserif text-justify mb-4">
          Program ini adalah wadah bagi pemuda-pemudi Indonesia yang ingin berkontribusi dalam meminimalisir permasalahan yang terjadi di wilayah pedesaan. Bidang yang disediakan bermacam-macam seperti Literasi Sekolah, Literasi Lingkungan, Literasi Ekonomi, dan Literasi Kesehatan. 
          </p>
        </div>

        <div>
          <h2 className="font-ptserif font-bold text-base text-main-orange">
            Galeri
          </h2>
          <div className="flex flex-row flex-wrap gap-2 w-full">
            <img
              className="rounded-md h-[250px]"
              src="/images/program_literacygoing_1.jpg" alt="Kegiatan Literacy Going"
            />
            <img
              className="rounded-md h-[250px]"
              src="/images/program_literacygoing_2.jpg" alt="Kegiatan Literacy Going"
            />
            <img
              className="rounded-md h-[250px]"
              src="/images/program_literacygoing_3.jpg" alt="Kegiatan Literacy Going"
            />
            <img
              className="rounded-md h-[250px]"
              src="/images/program_literacygoing_4.jpg" alt="Kegiatan Literacy Going"
            />
          </div>
        </div>
      </div>

      <Reviews />
      <Footer />
    </>
  );
}
