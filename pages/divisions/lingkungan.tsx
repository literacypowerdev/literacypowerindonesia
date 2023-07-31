import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";

import Logo from "../../public/icon/logo.svg";
import FAQContent from "./FAQContent.json";

import Head from "next/head";
import Button from "../../components/atoms/Button";
import VerticalSlider from "../../components/molecules/VerticalSlider";
import Navbar from "../../components/organisms/Navbar";
import LiteractFAQ from "../../components/organisms/LiteracyFAQ";
import Reviews from "../../components/organisms/Reviews";
import Footer from "../../components/organisms/Footer";

const Lingkungan = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const headingContent =
    "Literacy Power memberikan ruang bagi generasi muda untuk mengimplementasikan program pendidikan sesuai keahlian yang dimiliki. Relawan akan memiliki pengalaman dalam mengajar anak-anak dan memberikan bantuan berupa edukasi maupun mentoring di daerah yang berkekurangan. Tidak hanya itu, kemampuan untuk mengembangkan karakter pribadi dan membuka perspektif baru bisa didapatkan melalui program kerelawanan ini.";

  let siapayangcocok =
    "Literacy Power membutuhkan pribadi yang berjiwa sosial dan memiliki passion untuk membantu sesama. Selain itu, seseorang yang bisa beradaptasi, menyukai anak-anak, dan memiliki keahlian di bidang tertentu (mengajar bahasa inggris, matematika, atau keterampilan hidup, dll).";

  return (
    <>
    <Head>
        <title>Literacy Power | Lingkungan</title>
        <meta
          name="description"
          content="Literacy Power adalah organisasi yang berfokus pada pengembangan literasi, kempemimpinan anak muda, dan pemberdayaan masyarakat desa. Organisasi ini dikembangkan oleh mahasiswa/i dari berbagai universitas di Indonesias. Kami berharap melalui berbagai proyek yang dilakukan mampu membawa perubahan kecil maupun besar bagi masyarakat di Indonesia, terutama generasi muda."
        />
        <link rel="icon" sizes="192x192" href="/icon/favicon.ico"></link>
      </Head>
      <Navbar active="Divisions" />
      
      <div className="m-auto mt-16 xl:text-xl font-ptserif">
        
        <div className="container m-auto heading flex flex-col-reverse md:flex-row md:w-[1300px] lg:w-10/12 px-5 ">
          <div
            className="left lg:pr-44 md:pr-24  flex flex-col gap-3"
            data-aos="fade-up"
          >
            <h1 className="text-2xl font-bold">Program Lingkungan</h1>
            <p className="text-justify text-xl">{headingContent}</p>
            <Link href="/apply">
              <div className="button w-full md:w-80 font-semibold">
                <Button link text="Apply Program" border="full" size="normal" />
              </div>
            </Link>
          </div>
          <div className="right">
            <VerticalSlider />
          </div>
        </div>

        <br />

        <div className="font-ptserif">
          <div className="py-10 flex flex-col-reverse md:flex-row text-white items-center justify-around bg-main-orange gap-2">
            <div className="content lg:w-[78%] w-10/12 flex flex-col md:flex-row items-center gap-3 justify-between">
              <div className="left flex flex-col gap-2 w-8/12">
                <h1 className="font-bold text-xl">
                  Siapa yang cocok dalam program ini?
                </h1>
                <p className="!text-justify">{siapayangcocok}</p>
              </div>
              <div className="right">
                <Image src={Logo} width={150} height={150} alt=""/>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="/icon/doodle-bottom-left.svg"
            alt=""
            className="hidden md:block bottom-0 absolute"
          />
          <img
            src="/icon/doodle-bottom-right.svg"
            alt=""
            className="hidden md:block bottom-0 right-0 absolute"
          />
          <img
            src="/icon/doodle-top-left.svg"
            alt=""
            className="hidden md:block  top-0 absolute w-40"
          />
          <img
            src="/icon/doodle-top-right.svg"
            alt=""
            className="hidden md:block top-0 right-0 absolute w-40"
          />

          <div className="literacyFAQ container m-auto pt-16 pb-16 px-5  ">
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-semibold z-10">
                Literacy Power F.A.Q
              </h1>

              <div className="literacyfAQ py-5">
                {
                    FAQContent.map((faq, idx) => {
                      return (
                        <LiteractFAQ
                          key={idx}
                          title={faq.title}
                          details={faq.details}
                          name={faq.name}
                        />
                      );    
                    })
                  }
              </div>
            </div>
          </div>
        </div>
      </div>

      <Reviews />
      <Footer />
    </>
  );
};

export default Lingkungan;
