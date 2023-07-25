import type { NextPage } from "next";
import React, { useEffect } from "react";
import AOS from "aos";

import Head from "next/head";
import About from "../components/organisms/About";
import Footer from "../components/organisms/Footer";
import Hero from "../components/organisms/Hero";
import Navbar from "../components/organisms/Navbar";
import Newsletter from "../components/organisms/Newsletter";
import Documentation from "../components/organisms/Documentation";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Literacy Power | Home</title>
        <meta
          name="description"
          content="Literacy Power adalah organisasi yang berfokus pada pengembangan literasi, kempemimpinan anak muda, dan pemberdayaan masyarakat desa. Organisasi ini dikembangkan oleh mahasiswa/i dari berbagai universitas di Indonesias. Kami berharap melalui berbagai proyek yang dilakukan mampu membawa perubahan kecil maupun besar bagi masyarakat di Indonesia, terutama generasi muda."
        />
        <link rel="icon" sizes="192x192" href="/icon/favicon.ico"></link>
      </Head>
      <Navbar />
      <Hero />
      <Documentation />
      <About />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
