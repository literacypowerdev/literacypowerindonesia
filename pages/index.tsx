import type { NextPage } from "next";
import Link from "next/link";
import Button from "../components/atoms/Button";
import About from "../components/organisms/About";
import Footer from "../components/organisms/Footer";
import Hero from "../components/organisms/Hero";
import Navbar from "../components/organisms/Navbar";
import Newsletter from "../components/organisms/Newsletter";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
