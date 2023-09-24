import React from "react";

import ProgramCard from "../../molecules/ProgramCard";

export default function Projects({ children }: any) {

  const data = [
    {
      id: 0,
      link: "literasidesa",
      thumbnail: "/images/program_thumbnail_literasidesa.jpg",
      name: "Literasi Desa",
      desription: ""
    },
    {
      id: 1,
      link: "literacygoing",
      thumbnail: "/images/program_thumbnail_literacygoing.jpg",
      name: "#Literacy Going",
      desription: "Program ini adalah wadah bagi pemuda-pemudi Indonesia yang ingin berkontribusi dalam meminimalisir permasalahan yang terjadi di wilayah pedesaan. Bidang yang disediakan bermacam-macam seperti Literasi Sekolah, Literasi Lingkungan, Literasi Ekonomi, dan Literasi Kesehatan."
    },
    {
      id: 2,
      link: "literacyinaction",
      thumbnail: "/images/program_thumbnail_literacyinaction.jpg",
      name: "Literacy in Action",
      desription: "Program ini adalah program berkepanjangan dari #LiteracyGoing, di mana para relawan akan mengawasi perkembangan desa dari tempat pengabdian sebelumnya untuk menjadi sebuah desa binaan.\nLiteracy Power mengembangkan program ini agar kegiatan yang diciptakan dapat memberikan dampak lebih besar bagi masyarakat desa."
    },
    {
      id: 3,
      link: "literacygiving",
      thumbnail: "/images/program_thumbnail_literacygiving.jpg",
      name: "Literacy Giving",
      desription: "Literacy Giving adalah program berbagi yang bertujuan untuk menyalurkan donasi alat tulis dan buku kepada adik asuh di sekolah binaan, anak jalanan, maupun penerima manfaat lainnya yang akan ditentukan oleh Literacy Power.\nLiteracy Power akan mengumpulkan donasi untuk ditukarkan dengan alat tulis, buku, atau seragam bagi adik-adik asuh terpilih."
    },
    {
      id: 4,
      link: "sharingsession",
      thumbnail: "/images/program_thumbnail_sharingsession.png",
      name: "Sharing Session: Go Listen!",
      desription: "Program ini bertujuan untuk memberikan motivasi kepada Sobat Literacy melalui pengalaman dari berbagai narasumber inspiratif. Materi yang dibahas cukup luas, bukan hanya terkait buku namun juga pembahasan untuk self-growth lainnya."
    },
    {
      id: 5,
      link: "chitchatchill",
      thumbnail: "/images/program_thumbnail_chitchatchill.png",
      name: "CHITCHATCHILL: Basa Basi Bareng Literacy",
      desription: "Program ini bertujuan bukan untuk sekadar chit chat aja tapi juga improving communication skill dari internal Literacy Power. Anggota Literacy Power akan membagikan pengalaman mereka selama bekerja bersama tim, termasuk kesulitan maupun hal menyenangkan yang dialami. Sobat bisa semakin tahu mengenai Literacy Power, bukan?"
    }
  ]

  return (
    <>
      {
        data.map((program) => {
          return <ProgramCard
            key={program.id} 
            id = {program.id}
            link = {program.link}
            thumbnail = {program.thumbnail}
            name = {program.name}
            description = {program.desription}/>
        })
      }
    </>
  );
}
