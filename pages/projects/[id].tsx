import { url } from "inspector";
import Head from "next/head";
import React from "react";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import ProjectBody from "../../components/organisms/ProjectBody";
import Reviews from "../../components/organisms/Reviews";

export default function ProjectSinglePage({ proyek }: any) {
  return (
    <>
      <Head>
        <title>Literacy Power | {proyek.nama}</title>
      </Head>
      <Navbar active="Projects" />

      {/* Hero */}
      <div
        style={{ backgroundImage: `url("http://localhost:4500/images/${proyek.dokumentasi}")` }}
        className={`md:h-[300px] lg:h-[350px] bg-cover bg-center relative `}
      >
        <div className="absolute w-full h-full bg-main-green/[0.85] flex flex-col justify-center items-center">
          <p className="font-ptserif font-bold text-base md:text-title3 text-light-orange">
            {proyek.lokasi}
          </p>
          <h1 className="font-ptserif font-bold text-title3 md:text-title2 text-center text-white">
            {proyek.nama}
          </h1>
          <p className="font-ptserif font-bold md:text-base text-white bg-light-orange px-2">
            {proyek.tanggal}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-11/12 max-w-[1000px] mx-auto flex flex-col gap-8 my-5 lg:my-16">
        {proyek.content.length == 0 ? (
          ""
        ) : (
          <ProjectBody
            name={proyek.nama}
            text={proyek.content}
            dokumentasi={proyek.dokumentasi}
          />
        )}

        {proyek.dampak_sebelum.length == 0 ? (
          ""
        ) : (
          <ProjectBody
            type="Sebelum"
            text={proyek.dampak_sebelum}
            dokumentasi={proyek.dokumentasi}
          />
        )}

        {proyek.dampak_sesudah.length == 0 ? (
          ""
        ) : (
          <ProjectBody
            type="Sesudah"
            text={proyek.dampak_sesudah}
            dokumentasi={proyek.dokumentasi}
          />
        )}
      </div>

      <Reviews />
      <Footer />
    </>
  );
}


export const getStaticPaths = async () => {
  return {
    paths: new Array(200).fill(null).map((_, index) => (
      { params: { id: `${index + 1}` } }
    )),
    fallback: false,
  }
}

export const getStaticProps = async (paths: number | any) => {
  const response = await fetch(`http://localhost:4500/api/proyek/${paths.params.id}`);
  const data = await response.json();

  return {
    props: {
      proyek: data.data[0]
    },
  }
}