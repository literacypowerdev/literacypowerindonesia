import Head from "next/head";
import React from "react";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import ProjectBody from "../../components/organisms/ProjectBody";
import Reviews from "../../components/organisms/Reviews";

export default function ProjectSinglePage() {
  const data = {
    id: 1,
    thumbnail: "/images/fotoslider1.png",
    name: "Dari Donasi untuk Literasi",
    location: "Cikarang",
    date: "27 November 2021",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus dui, varius non quam in, viverra luctus lorem. Phasellus tincidunt placerat lectus sit amet venenatis. Maecenas tempus risus ac lectus laoreet, et laoreet massa ultricies. Aliquam nec odio ac arcu auctor rutrum. Etiam nec nibh eros. Nulla enim ante, vulputate eu diam quis, aliquet feugiat diam. Nullam auctor egestas arcu, suscipit ultrices nunc porta id.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus dui, varius non quam in, viverra luctus lorem. Phasellus tincidunt placerat lectus sit amet venenatis. Maecenas tempus risus ac lectus laoreet, et laoreet massa ultricies. Aliquam nec odio ac arcu auctor rutrum. Etiam nec nibh eros. Nulla enim ante, vulputate eu diam quis, aliquet feugiat diam. Nullam auctor egestas arcu, suscipit ultrices nunc porta id.",
    ],
    dampakSebelum: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus dui, varius non quam in, viverra luctus lorem. Phasellus tincidunt placerat lectus sit amet venenatis. Maecenas tempus risus ac lectus laoreet, et laoreet massa ultricies. Aliquam nec odio ac arcu auctor rutrum. Etiam nec nibh eros. Nulla enim ante, vulputate eu diam quis, aliquet feugiat diam. Nullam auctor egestas arcu, suscipit ultrices nunc porta id.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus dui, varius non quam in, viverra luctus lorem. Phasellus tincidunt placerat lectus sit amet venenatis. Maecenas tempus risus ac lectus laoreet, et laoreet massa ultricies. Aliquam nec odio ac arcu auctor rutrum. Etiam nec nibh eros. Nulla enim ante, vulputate eu diam quis, aliquet feugiat diam. Nullam auctor egestas arcu, suscipit ultrices nunc porta id.",
    ],
    dampakSesudah: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus dui, varius non quam in, viverra luctus lorem. Phasellus tincidunt placerat lectus sit amet venenatis. Maecenas tempus risus ac lectus laoreet, et laoreet massa ultricies. Aliquam nec odio ac arcu auctor rutrum. Etiam nec nibh eros. Nulla enim ante, vulputate eu diam quis, aliquet feugiat diam. Nullam auctor egestas arcu, suscipit ultrices nunc porta id.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus dui, varius non quam in, viverra luctus lorem. Phasellus tincidunt placerat lectus sit amet venenatis. Maecenas tempus risus ac lectus laoreet, et laoreet massa ultricies. Aliquam nec odio ac arcu auctor rutrum. Etiam nec nibh eros. Nulla enim ante, vulputate eu diam quis, aliquet feugiat diam. Nullam auctor egestas arcu, suscipit ultrices nunc porta id.",
    ],
    dokumentasi: [
      "/images/fotoslider1.png",
      "/images/fotoslider2.png",
      "/images/fotoslider3.png",
    ],
  };

  return (
    <>
      <Head>
        <title>Literacy Power | {data.name}</title>
      </Head>
      <Navbar active="Projects" />

      {/* Hero */}
      <div
        className={`h-[240px] md:h-[300px] lg:h-[350px] bg-[url('/images/fotoslider1.png')] bg-cover bg-center relative`}
      >
        <div className="absolute w-full h-full bg-main-green/[0.85] flex flex-col justify-center items-center">
          <p className="font-ptserif font-bold text-base md:text-title3 text-light-orange">
            {data.location}
          </p>
          <h1 className="font-ptserif font-bold text-title3 md:text-title2 text-center text-white">
            {data.name}
          </h1>
          <p className="font-ptserif font-bold md:text-base text-white bg-light-orange px-2">
            {data.date}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-11/12 max-w-[1000px] mx-auto flex flex-col gap-8 my-5 lg:my-16">
        {data.content.length == 0 ? (
          ""
        ) : (
          <ProjectBody
            name={data.name}
            text={data.content}
            dokumentasi={data.dokumentasi[0]}
          />
        )}

        {data.dampakSebelum.length == 0 ? (
          ""
        ) : (
          <ProjectBody
            type="Sebelum"
            text={data.dampakSebelum}
            dokumentasi={data.dokumentasi[1]}
          />
        )}

        {data.dampakSesudah.length == 0 ? (
          ""
        ) : (
          <ProjectBody
            type="Sesudah"
            text={data.dampakSesudah}
            dokumentasi={data.dokumentasi[2]}
          />
        )}
      </div>

      <Reviews />
      <Footer />
    </>
  );
}
