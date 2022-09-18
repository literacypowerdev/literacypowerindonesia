import type { NextPage } from "next";
import About from "../components/organisms/About";
import Footer from "../components/organisms/Footer";
import Hero from "../components/organisms/Hero";
import Navbar from "../components/organisms/Navbar";
import Newsletter from "../components/organisms/Newsletter";
import Documentation from "../components/organisms/Documentation";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Literacy Power | Home</title>
        <meta
          name="description"
          content="Literacy Power adalah organisasi yang berfokus pada pengembangan literasi, kempemimpinan anak muda, dan pemberdayaan masyarakat desa. Organisasi ini dikembangkan oleh mahasiswa/i dari berbagai universitas di Indonesias. Kami berharap melalui berbagai proyek yang dilakukan mampu membawa perubahan kecil maupun besar bagi masyarakat di Indonesia, terutama generasi muda."
        />
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
