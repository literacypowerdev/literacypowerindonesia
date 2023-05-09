import React from "react";

interface AboutContentProps {
  title: string;
  content?: string;
  emphasize?: boolean;
}

export default function AboutContent(props: AboutContentProps) {
  const { title, content, emphasize } = props;

  return (
    <div
      className="w-11/12 max-w-[750px] md:w-10/12 mx-auto flex flex-col gap-2 lg:gap-4 items-center"
      data-aos="fade-up"
    >
      <h2
        className={`w-fit px-2 text-base lg:text-title3 font-ptserif font-bold ${emphasize ? "text-main-background bg-main-orange" : "text-main-orange"
          }`}
      >
        {title}
      </h2>
      <p className="w-full font-ptserif text-main-blue text-justify ">
        {content}
      </p>
      {!content && (
        <p className="w-full font-ptserif text-main-blue text-justify m-auto">
          Literacy Power Indonesia memiliki beberapa kegiatan untuk mempromosikan literasi di Indonesia. Pertama, kami melakukan pengabdian secara offline di berbagai provinsi di Indonesia. Kegiatan ini melibatkan anggota tim kami yang langsung datang ke lokasi dan melakukan kegiatan-kegiatan yang terkait dengan literasi. Kedua, kami juga memberikan informasi mengenai buku, peningkatan literasi, maupun informasi bermanfaat lainnya melalui akun Instagram kami @literacypower.id dan website kami. Ketiga, kami juga berkolaborasi dengan berbagai komunitas yang memiliki kepentingan atau tujuan yang sama dengan kami dalam mempromosikan literasi di Indonesia. Terakhir, kami menciptakan program-program yang memberikan dampak nyata bagi anak-anak maupun masyarakat di wilayah terpinggir di Indonesia, sehingga literasi dapat terus berkembang dan menjadi semakin penting di masyarakat.
        </p>
      )}

    </div>
  );
}
