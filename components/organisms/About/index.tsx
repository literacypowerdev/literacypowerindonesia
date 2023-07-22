import React from "react";

import AboutContent from "./AboutContent";
import Benefit from "./Benefit";

export default function About() {
  const contents = {
    tentang: {
      title: "Tentang Literacy Power",
      content:
        "Literacy Power adalah organisasi yang berfokus pada pengembangan literasi, kempemimpinan anak muda, dan pemberdayaan masyarakat desa. Organisasi ini dikembangkan oleh mahasiswa/i dari berbagai universitas di Indonesias. Kami berharap melalui berbagai proyek yang dilakukan mampu membawa perubahan kecil maupun besar bagi masyarakat di Indonesia, terutama generasi muda.",
    },
    visi: {
      title: "Visi",
      content:
        "Literacy Power adalah komunitas yang bertujuan untuk meningkatkan literasi anak, memberikan edukasi, dan meminimalisir permasalahan di wilayah terpinggir Indonesia. Selain itu, menciptakan ruang untuk generasi muda agar dapat berperan aktif dalam isu sosial dan meningkatkan jiwa kepemimpinan mereka guna membangun sumber daya manusia yang berkualitas.",
    },
    misi: {
      title: "Misi",
      content:
        "Melakukan pengabdian secara offline di berbagai provinsi di Indonesia. Memberikan informasi mengenai buku, peningkatan literasi, maupun informasi bermanfaat lainnya melalui instagram @literacypower.id dan website. Berkolaborasi dengan berbagai komunitas yang memiliki kepentingan atau tujuan yang sama.",
    },
  };

  return (
    <div className="w-full py-16 lg:py-[120px] bg-body-doodle bg-contain ">
      <div className="flex flex-col gap-8 py-20 md:gap-10 lg:gap-16 lg:py-32">
        <AboutContent
          emphasize
          title={contents.tentang.title}
          content={contents.tentang.content}
        />
        <AboutContent
          title={contents.visi.title}
          content={contents.visi.content}
        />
        <AboutContent
          title={contents.misi.title}
        />
        
      </div>
      <Benefit />
    </div>
  );
};