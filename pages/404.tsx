import Head from "next/head";
import Link from "next/link";
import React from "react";
import Button from "../components/atoms/Button";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Literacy Power | Not Found</title>
        <link rel="icon" sizes="192x192" href="/icon/favicon.ico"></link>
      </Head>
      <div className="w-screen h-screen bg-[url('/icon/mountains.svg')] bg-contain xl:bg-cover bg-no-repeat bg-bottom flex justify-center items-center">
        <div className="flex flex-col gap-3 md:gap-4 justify-center items-center md:mb-40">
          <h1 className="font-ptserif text-6xl md:text-8xl font-bold text-main-orange">
            404
          </h1>
          <p className="font-ptserif text-main-blue text-base">
            Page yang kamu cari tidak ada
          </p>
          <Link href="/">
            <div className="w-[170px]">
              <Button text="Kembali ke Home" link border="full" size="normal" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
