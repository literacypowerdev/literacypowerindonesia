import React from 'react'
import Footer from '../../components/organisms/Footer'
import Navbar from '../../components/organisms/Navbar'
import Reviews from '../../components/organisms/Reviews'


export const getStaticPaths = async () => {
  return {
    paths: new Array(200).fill(null).map((_, index) => (
      { params: { id: `${index + 1}` } }
    )),
    fallback: false,
  }
}

export const getStaticProps = async (paths: number | any) => {
  const response = await fetch(`https://api.literacypowerid.com/api/buku/${paths.params.id}`);
  const data = await response.json();

  return {
    props: {
      buku: data.data[0]
    },
  }
}


const AllAboutBooksSinglePages = ({ buku }: any) => {
  return (
    <>
      <div>
        <Navbar active='All About Books' />
        <div className='container w-full m-auto flex flex-col px-20 gap-5 pt-24'>
          <div className='Heading'>
            <p></p>
            <h1 className='text-2xl font-bold'>{buku.judul}</h1>
          </div>
          <div className='Heading-Image flex flex-col md:flex-row gap-5'>
            <div className='image'>

              <div className='w-[275px] h-fit bg-slate-200 rounded-lg'><img src={`https://api.literacypowerid.com/images/${buku.coverUrl}`} alt="" /></div>
            </div>
            <div className='identitas-buku flex flex-col'>
              <h1>Judul: {buku.judul}</h1>
              <h1>Penulis: {buku.penulis}</h1>
              <h1>Negara: {buku.negara}</h1>
              <h1>Bahasa: {buku.bahasa}</h1>
              <h1>Genre: {buku.genre}</h1>
              <h1>Penerbit: {buku.penerbit}</h1>
              <h1>Tahun Terbit: {buku.tahun}</h1>
              <h1>Jumlah Halaman: {buku.halaman}</h1>
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
              {buku.review}
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