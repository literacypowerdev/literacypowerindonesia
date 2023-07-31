import React from "react";
import Head from 'next/head';
import useSWR from 'swr';
import { useRouter } from 'next/router';

import Navbar from '../../components/organisms/Navbar';
import ProjectBody from '../../components/organisms/ProjectBody';
import Reviews from '../../components/organisms/Reviews';
import Footer from '../../components/organisms/Footer';

const fetchProject = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  const proyek = data && data.data && data.data.length > 0 ? data.data[0] : null;
  return proyek;
};

export default function ProjectSinglePage() {

  const router = useRouter();
  const { id } = router.query;

  const { data: proyek } = useSWR(`https://api.literacypowerid.com/api/proyek/${id}`, fetchProject);

  if (!proyek) {
    return <div>Loading...</div>;
  }

  const cover = proyek.image.split('"');
  console.log(proyek)
  console.log(cover);
  
  return (
    <>
      <Head>
        <title>{proyek.nama}</title>
        <meta
          name="description"
          content="Project-project yang dijalankan oleh Literacy Power."
        />
        <link rel="icon" sizes="192x192" href="/icon/favicon.ico"></link>
      </Head>
      <Navbar active="Projects" />

      {/* Hero */}
      <div
        style={{ backgroundImage: `url("https://api.literacypowerid.com/api/images/${cover[1]}")` }}
        className={`h-[200px]  md:h-[300px] lg:h-[350px] bg-cover bg-center relative `}
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
        {proyek.content?.length == 0 || undefined ? (
          ''
        ) : (
          <ProjectBody name={proyek.nama} text={proyek.content} dokumentasi={cover[1]} />
        )}

        {proyek.content?.length == 0 || undefined ? (
          ''
        ) : (
          <ProjectBody type="Sebelum" text={proyek.dampak_sebelum} dokumentasi={cover[3]} />
        )}

        {proyek.content?.length == 0 || undefined ? (
          ''
        ) : (
          <ProjectBody type="Sesudah" text={proyek.dampak_sesudah} dokumentasi={cover[5]} />
        )}
      </div>

      <Reviews />
      <Footer />
    </>
  );
}
