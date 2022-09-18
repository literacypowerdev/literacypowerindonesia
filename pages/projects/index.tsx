import React from "react";
import Navbar from "../../components/organisms/Navbar";
import Head from "next/head";
import Reviews from "../../components/organisms/Reviews";
import Footer from "../../components/organisms/Footer";
import Project from "../../components/organisms/Project";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Literacy Power | Projects</title>
        <meta
          name="description"
          content="Project-project yang dijalankan oleh Literacy Power."
        />
      </Head>
      <Navbar />
      <div className="w-full bg-body-doodle bg-contain py-7">
        <div className="w-11/12 md:w-10/12 mx-auto">
          <h1 className="text-title3 font-bold font-ptserif text-center text-main-green">
            OUR PROJECTS
          </h1>
          <div>
            <Project />
          </div>
        </div>
      </div>
      <Reviews />
      <Footer />
    </>
  );
}
