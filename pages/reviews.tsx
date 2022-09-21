import React from "react";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import Reviews from "../components/organisms/Reviews";

export default function Review() {
  return (
    <>
      <Navbar active="Reviews" />
      <Reviews isReview />
      <Footer />
    </>
  );
}
