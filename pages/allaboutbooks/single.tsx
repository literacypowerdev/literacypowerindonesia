import React from 'react'
import Footer from '../../components/organisms/Footer'
import Navbar from '../../components/organisms/Navbar'
import Reviews from '../../components/organisms/Reviews'
import Review from '../reviews'

const AllAboutBooksSinglePages = () => {
  const content = "Men Without Women adalah kumpulan tujuh cerita pendek yang diwarnai oleh berbagai karakter dengan profesi yang berbeda-beda; mulai dari aktor, penulis, dokter kecantikan, ibu rumah tangga biasa sampai pemilik bar. Namun, tujuh kisah ini mempunyai satu benang merah, yaitu bagaimana kehadiran wanita yang sangat mempengaruhi kehidupan seorang laki-laki. Buku ini terdiri dari tujuh cerita pendek, di antaranya, Drive My Car, An Independent Organ dan Men Without Women, yang membuat saya termehek-mehek, tertusuk sembilu, berasa bener. Pada bagian Drive My Car, menceritakan kisah apakah kita bisa bersahabat dengan orang yang menjadi selingkuhan pasangan kita? Sebagai seorang aktor, Kafuku keluar dari karakter aslinya untuk berteman dengan lelaki yang ia yakini pernah tidur dengan mendiang istrinya. Somehow you just know! Tapi pertanyaan yang tak pernah bisa ia dapat adalah kenapa istrinya memilih lelaki itu sebagai selingkuhannya, apa yang dicari, apa yang kurang dari dirinya."
  const content2 = "Sedangkan, An Independent Organ, di mana jatuh cinta itu menyakitkan, yet, you cant stop the feeling. Tokai, dokter bedah plastik yang tidak pernah jatuh cinta selama 30 tahun terakhir. Ia menikmati hubungan tanpa statusnya dengan berbagai perempuan, empat sampai lima kali sekaligus yang jam dan tempat pertemuannya diatur secara profesional oleh asisten pribadinya. Sampai suatu kali bertemu dengan perempuan yang sudah menikah dan punya seorang anak lelaki. Tokai jatuh cinta, tapi perempuan itu berkata tak bisa meninggalkan suaminya. Suatu hari perempuan itu meninggalkan suaminya, tapi bukan untuk Tokai. Patah hati, Tokai memilih mati, meninggalkan jasadnya tanpa makan selama dua bulan, tanpa bergerak sama sekali dari tidurnya."

  return (
    <>
      <div>
        <Navbar active='All About Books' />
        <div className='container w-full m-auto flex flex-col px-20 gap-5 pt-24'>
          <div className='Heading'>
            <p>Andrea Hirata</p>
            <h1 className='text-2xl font-bold'>Men Without Women</h1>
          </div>
          <div className='Heading-Image flex flex-col md:flex-row gap-5'>
            <div className='image'>
              {/* <img src="" alt="" /> */}
              <div className='w-[257px] bg-slate-200 h-[257px] rounded-lg'></div>
            </div>
            <div className='identitas-buku flex flex-col'>
              <h1>Judul: Men Without Women</h1>
              <h1>Penulis: Andrea Hinata</h1>
              <h1>Negara: Indonesia</h1>
              <h1>Bahasa: Bahasa Indonesia</h1>
              <h1>Genre: Roman</h1>
              <h1>Penerbit: Bentang Pustaka, Yogyakarta</h1>
              <h1>Tahun Terbit: 2005</h1>
              <h1>Jumlah Halaman: 529</h1>
            </div>
          </div>
          <div className='tag flex gap-2 text-white'>
            <div className='px-4 py-1 bg-light-orange rounded-xl'>Tag</div>
            <div className='px-4 py-1 bg-light-orange rounded-xl'>Tag</div>
          </div>
          <div className='heading-content text-main-green'>
            <h1>Review</h1>
          </div>
          <div className='content text-justify'>
            <p>
              {content}
              <br />
              <br />
              {content2}
              <br />
              <br />
            </p>
          </div>
        </div>



      </div>
      <br />
      <br />
      <Reviews />
      <br />
      <Footer />
    </>
  )
}

export default AllAboutBooksSinglePages