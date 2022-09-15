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
        "Literacy Power memberikan pengabdian secara offline ke berbagai provinsi di Indonesia. Selain itu, Literacy juga aktif berkontribusi secara online seperti memberikan informasi mengenai buku, peningkatan literasi, meupun informasi bermanfaat lain melalui instagram @literacypower.id. Dalam mencapai visi organisasi, tim Literacy Power membangun kolaborasi dengan berbagai komunitas yang memiliki kepentingan atau tujuan yang sama. Literacy berusaha menciptakan program yang memberikan dampak nyata bagi anak-anak maupun masyarakat di wilayah terpinggir.",
    },
  };

  return (
    <div className="w-full py-16 lg:py-[120px] bg-body-doodle bg-contain">
      <div className="flex flex-col gap-8 md:gap-10 lg:gap-16">
        <AboutContent
          emphasize
          title={contents.tentang.title}
          content={contents.tentang.content}
        />
        <AboutContent
          title={contents.visi.title}
          content={contents.misi.content}
        />
        <AboutContent
          title={contents.misi.title}
          content={contents.misi.content}
        />
      </div>
      <Benefit />
    </div>
  );
}
