import React from 'react'
import Footer from '../../components/organisms/Footer'
import Navbar from '../../components/organisms/Navbar'
import Reviews from '../../components/organisms/Reviews'


export const getStaticPaths = async () => {
  try {
    const response = await fetch("https://api.literacypowerid.com/api/buku");
    const data = await response.json();

    // Check if data contains valid book information
    if (data?.data && Array.isArray(data.data) && data.data.length > 0) {
      const paths = data.data.map((book: any) => ({
        params: { id: book.id.toString() },
      }));

      return {
        paths,
        fallback: false,
      };
    }

    // Return empty paths if no valid book data is available
    return {
      paths: [],
      fallback: false,
    };
  } catch (error) {
    console.error(error);
    return {
      paths: [],
      fallback: false,
    };
  }
};


export const getStaticProps = async ({ params }: any) => {
  try {
    const response = await fetch(`https://api.literacypowerid.com/api/buku/${params.id}`);
    const data = await response.json();

    const buku = data && data.data && data.data.length > 0 ? data.data[0] : null;

    return {
      props: {
        buku,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        buku: null,
      },
    };
  }
};



const AllAboutBooksSinglePages = ({ buku }: any) => {
  console.log(buku.judul)

  
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