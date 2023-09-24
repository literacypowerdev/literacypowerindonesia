import React from "react";
import Head from 'next/head';
import Image from 'next/image';

import Navbar from '../../components/organisms/Navbar';
import Reviews from '../../components/organisms/Reviews';
import Footer from '../../components/organisms/Footer';

export default function ProgramLiterasiDesaPage() {
  return (
    <>
      <Head>
        <title>Program | Literasi Desa</title>
        <link rel="icon" sizes="192x192" href="/icon/favicon.ico"></link>
      </Head>
      <Navbar active="Programs" />

      <div className="w-11/12 max-w-[1000px] mx-auto flex flex-col gap-8 my-5 lg:my-16">
        <div>
          <h1 className="font-ptserif font-bold text-title3 md:text-title2 text-center text-main-green">
            Get to Know Literasi Desa
          </h1>
          <p className="font-ptserif text-lg text-light-orange text-center">
            by Literacy Power
          </p>
        </div>

        <div>
          <h2 className="font-ptserif font-bold text-base text-main-orange">
            Apa itu Literasi Desa?
          </h2>
          <p className="font-ptserif text-justify mb-4">
            Literasi Desa by Literacy Power adalah program pengabdian dan pembelajaan Sekolah Binaan di Desa Terpilih. Kegiatan pengabdian dan pembelajaran akan berlangsung secara berkelanjutan dengan periode penilaian 2 Semester di setiap tahunnya. 
          </p>
          <div className="flex flex-row flex-wrap gap-2 w-full">
            <img
              className="rounded-md h-[250px]"
              src="/images/program_literasidesa_1.jpg" alt="Kegiatan Literasi Desa"
            />
            <img
              className="rounded-md h-[250px]"
              src="/images/program_thumbnail_literasidesa.jpg" alt="Kegiatan Literasi Desa"
            />
          </div>
        </div>

        <div>
          <h2 className="font-ptserif font-bold text-base text-main-orange">
            Dimana lokasinya?
          </h2>
          <p className="font-ptserif text-justify">
            Sekolah Binaan Literasi Desa saat ini adalah SDN Cisondari 02 yang terletak di Mekarsari, Kab. Bandung. 
          </p>
          <div className="flex gap-2 w-full justify-left my-4">
            <img
              className="rounded-md h-[250px]"
              src="/images/program_literasidesa_2.jpg" alt="Kegiatan Literasi Desa"
            />
          </div>
        </div>

        <div>
          <h2 className="font-ptserif font-bold text-base text-main-orange">
            Mengapa SDN Cisondari 02?
          </h2>
          <p className="font-ptserif text-justify mb-4">
            SDN Cisondari 2 merupakan sekolah yang terletak di kaki Gunung Tilu Kabupaten Bandung. Sekolah ini dikelilingi oleh Kebun Teh dengan total jumlah 300 Siswa ampuan. Mayoritas perekonomian siswa/i SDN Cisondari 2 berasal dari keluarga pekerja Kebun teh.  
          </p>
          <p className="font-ptserif text-justify mb-4">
            Sistem pembelajaran di sekolah ini terbagi menjadi 2 Rombel (Rombongan Belajar) di setiap kelasnya. Dikarenakan lokasi rumah siswa yang jauh dari sekolah, untuk menjaga semangat mereka dalam bersekolah seringkali pihak sekolak melakukan ‘Jemput Bola’ untuk memastikan anak-anak tetap sekolah.   
          </p>
          <p className="font-ptserif text-justify mb-4">
            Meskipun begitu, tidak ada biaya yang dibebankan kepada pihak siswa untuk kegiatan belajar mengajar di SDN Cisondari 2.  
          </p>
          <p className="font-ptserif text-justify mb-4">
            Dalam kualitas literasi, SDN Cisondari 2 mengaku mengalami kendala di pembelajaran Bahasa Asing dan TIK. Perpustakaan sekolah mengalami kerusakan akibat gempa di tahun 2009, sehingga bubu-buku simpanan telah rusak dan tinggal sedikit. Pembelajaran Bahasa Asing bergantung pada Guru Honorer dengan pembelajaran terbatas melalui Ekskul Pilihan. Sedangkan pembelajaran TIK menjadi sangat terbatas karena pengetahuan teknologi yang minim dari Tenaga Ajar dan tidak didukung oleh sarana-prasarana yang memadai.  
          </p>
          <p className="font-ptserif text-justify mb-4">
            Sebagai contoh, untuk melaksanakan Asesmen Nasional Berbasis Komputer (ANBK) siswa kelas 5 harus menumpang ke SMP terdekat yang berjarak ± 10KM untuk meminjam komputer.  
          </p>
          <div className="flex gap-2 w-full justify-left flex-wrap">
            <img
              className="rounded-md h-[250px]"
              src="/images/program_literasidesa_3.jpg" alt="Kegiatan Literasi Desa"
            />
            <img
              className="rounded-md h-[250px]"
              src="/images/program_literasidesa_4.jpg" alt="Kegiatan Literasi Desa"
            />
          </div>
        </div>

        <div>
          <h2 className="font-ptserif font-bold text-base text-main-orange">
            Apa saja yang akan dilakukan?
          </h2>
          <p className="font-ptserif text-justify mb-4">
            Belajar, Bermain, dan Bertumbuh!  
          </p>
          <p className="font-ptserif text-justify mb-4">
            Melalui Kurikulum Ajar yang telah disusun, siswa/i SDN Cisondari 2 akan Belajar bersama mengenai Literasi Umum, Literasi Lingkungan, Literasi Kesehatan, Literasi Digital, dan Literasi Asing.   
          </p>
          <p className="font-ptserif text-justify mb-4">
            Tak hanya belajar di kelas, melalui program yang telah dirancang, siswa/i SDN Cisondari 2 akan mendapatkan pembelajaran melalui Bermain dan Outdoor Learning untuk meningkatkan kepekaan siswa terhadap sekitar..  
          </p>
          <p className="font-ptserif text-justify mb-4">
            Melalui rangkaian Asesmen yang telah dirancang, siswa/i diharapkan dapat Bertumbuh dan menyerap proses pembelajaran dengan optimal.  
          </p>

          <table className="border-collapse text-[8pt] w-full border-2 border-slate-800 md:w-[1000px] md:text-md lg:text-lg">
            <tbody>
              <tr className="text-center">
                <th
                  className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2 bg-main-orange text-main-background"
                  rowSpan={6}
                >
                  Learning Outcomes
                </th>
                <th
                  className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2 bg-main-orange text-main-background"
                  colSpan={4}
                >
                  Program Learning Outcomes (PLO)
                </th>
              </tr>
              <tr>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">PLO 1</td>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">Literasi Umum</td>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2" colSpan={2}>
                  Mampu memahami informasi faktual dengan cara mengamati (mendengar, melihat, membaca) dan bertanya berdasarkan rasa ingin tahu.
                </td>
              </tr>
              <tr>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">PLO 2</td>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">Literasi Lingkungan</td>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2" colSpan={2}>
                  Mampu memahami dan menginterpretasikan peran serta tindakan manusia dalam memelihara, memulihkan, dan meningkatkan kondisi lingkungan.
                </td>
              </tr>
              <tr>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">PLO 3</td>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">Literasi Kesehatan</td>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2" colSpan={2}>
                  Mampu memperoleh, membaca, memahami, dan menggunakan informasi kesehatan untuk membuat keputusan yang tepat dan mengikuti protokol dengan benar.
                </td>
              </tr>
              <tr>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">PLO 4</td>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">Literasi Digital</td>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2" colSpan={2}>
                  Mampu mendayagunakan teknologi digital dalam pengembangan kompetensi diri secara mandiri. Terbagi menjadi 4 pilar; Digital Skill, Digital Culture, Digital Ethic, Digital Safety.
                </td>
              </tr>
              <tr>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">PLO 5</td>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">Literasi Asing</td>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2" colSpan={2}>
                  Mampu memahami pemanfaatan penerapan Bahasa asing dalam peningkatan kompetensi diri mendasar.
                </td>
              </tr>
              <tr className="text-center">
                <th
                  className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2 bg-main-orange text-main-background"
                  rowSpan={4}
                >
                  Tabel Penilaian
                </th>
                <th
                  className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2 bg-main-orange text-main-background"
                >
                  No
                </th>
                <th
                  className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2 bg-main-orange text-main-background"
                >
                  Bentuk Asesmen
                </th>
                <th
                  className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2 bg-main-orange text-main-background"
                >
                  Bobot
                </th>
                <th
                  className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2 bg-main-orange text-main-background"
                >
                  Keterangan
                </th>
              </tr>
              <tr>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">1</td>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">Hands on Class Project</td>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">20%</td>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">Project yang dilakukan di dalam kelas selama kegiatan belajar mengajar</td>
              </tr>
              <tr>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">2</td>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">Review Quiz</td>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">50%</td>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">Quiz wajib yang diberikan di akhir sesi kegiatan belajar mengajar</td>
              </tr>
              <tr>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">3</td>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">Take Home Quiz</td>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">30%</td>
                <td className="border-2 border-slate-800 px-1 py-1 md:px-3 md:py-2">Quiz tidak wajib yang diberikan untuk dikerjakan setelah kegiatan belajar mengajar</td>
              </tr>
            </tbody>
          </table>

          <div className="flex gap-2 w-full justify-left my-10 flex-wrap">
            <img
              className="rounded-md h-[250px]"
              src="/images/program_literasidesa_5.jpg" alt="Kegiatan Literasi Desa"
            />
            <img
              className="rounded-md h-[250px]"
              src="/images/program_literasidesa_6.jpg" alt="Kegiatan Literasi Desa"
            />
          </div>
        </div>
      </div>

      <Reviews />
      <Footer />
    </>
  );
}
