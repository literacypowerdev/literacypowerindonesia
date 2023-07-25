import React from "react";
import Head from "next/head";

import Navbar from "../components/organisms/Navbar";
import ReviewList from "../components/organisms/Review";
import Reviews from "../components/organisms/Reviews";
import Footer from "../components/organisms/Footer";

export default function Review() {
  return (
    <>
      <Head>
        <title>Literacy Power | Reviews</title>
        <meta
          name="description"
          content="Kata orang mengenai Literacy Power."
        />
        <link rel="icon" sizes="192x192" href="/icon/favicon.ico"></link>
      </Head>

      <Navbar active="Reviews" />

      <div className="w-full bg-body-doodle bg-contain bg-repeat py-7 lg:pb-20">
        <div className="w-11/12 md:w-10/12 mx-auto">
          <h1 className="text-title3 my-2 lg:my-12 font-bold font-ptserif text-center text-main-green">
            Apa Kata Mereka
          </h1>
          <div>
            <ReviewList />
          </div>
        </div>
      </div>

      <Reviews isReview />
      <Footer />
    </>
  );
}
