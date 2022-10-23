import Head from "next/head";
import Image from "next/image";
import React from "react";
import Accordion from "../components/molecules/Accordion";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import Reviews from "../components/organisms/Reviews";

export default function apply() {
  const data = [
    {
      title: "Donasi Buku",
      steps: [
        "Kontak +62 821-1010-4702 (Laudza) atau DM Instagram @literacypower.id",
        "Cek kondisi buku, perhatikan coretan dan sobekan",
        "Lampirkan informasi mengenai buku, foto buku, jumlah buku, dan tempat donatur",
        "Apabila buku sesuai, maka akan dikirimkan ke Jakarta atau lokasi pengabdian terdekat",
        "Setelah buku sampai pada tujuan, kami akan menginfokan dan mengirimkan foto kepada donatur",
      ],
    },
    {
      title: "Donasi Uang",
      steps: [
        "Kontak +62 821-1010-4702 (Laudza) atau DM Instagram @literacypower.id",
        "Mengirimkan donasi melalui BCA 2870072247 a/n Kireina Asyera",
        "Donasi dapat juga dikirim melalui +62 82158158152 (GoPay/OVO) ",
        "Kirimkan bukti transfer ke salah satu kontak pada poin 1 dan anggota akan mengkonfirmasi",
        "Terima kasih atas ketersediaan Anda untuk membantu Literacy Power Indonesia",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Literacy Power | Apply</title>
        <meta name="description" content="Bergabung dengan kami." />
      </Head>
      <Navbar />

      <div className="w-screen relative py-[70px] md:py-[200px]">
        <div className="hidden md:block w-full h-full absolute top-0 left-0 right-0 bottom-0">
          <img
            src="/icon/doodle-top-left.svg"
            alt=""
            className="absolute top-0 left-0"
          />
          <img
            src="/icon/doodle-top-right.svg"
            alt=""
            className="absolute top-0 right-0"
          />
          <img
            src="/icon/doodle-bottom-left.svg"
            alt=""
            className="absolute bottom-0 left-0"
          />
          <img
            src="/icon/doodle-bottom-right.svg"
            alt=""
            className="absolute bottom-0 right-0"
          />
        </div>

        <div className="w-full h-full relative flex flex-col gap-10 md:gap-16 lg:gap-24 justify-center items-center">
          <div className="w-11/12 md:w-10/12 max-w-[700px] p-8 bg-white rounded-[20px] shadow-lg">
            <p className="font-ptserif text-base font-bold text-main-orange">
              “Bagi kalian yang ingin mengikuti program kami, silakan kontak
              kami melalui{" "}
              <a
                className="underline text-main-green"
                href="https://wa.me/6282110104702"
                target="_blank"
                rel="norefferer noreferrer"
              >
                WhatsApp (Laudza)
              </a>
              ”
            </p>
          </div>

          <div className="w-11/12 md:w-10/12 max-w-[1200px] flex flex-col justify-center items-center gap-5 md:gap-10">
            <h1 className="font-ptserif font-bold text-title3 text-main-green">
              Cara Donasi
            </h1>
            <div className="w-full flex flex-col gap-2">
              <Accordion title={data[0].title} steps={data[0].steps} />
              <Accordion title={data[1].title} steps={data[1].steps} />
            </div>
          </div>
        </div>
      </div>

      <Reviews />
      <Footer />
    </>
  );
}
