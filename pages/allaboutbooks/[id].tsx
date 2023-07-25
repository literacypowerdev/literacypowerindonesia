import useSWR from 'swr';
import Navbar from '../../components/organisms/Navbar';
import Footer from '../../components/organisms/Footer';
import Reviews from '../../components/organisms/Reviews';
import { useRouter } from 'next/router';


const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.data[0];
};

const AllAboutBooksSinglePages = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: buku, error } = useSWR(`https://api.literacypowerid.com/api/buku/${id}`, fetcher);
  console.log(buku)
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!buku) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <Navbar active='All About Books' />
        <div className='container w-full m-auto flex flex-col px-5 lg:px-20 gap-5 pt-24'>
          <div className='Heading'>
            <p></p>
            <h1 className='text-3xl font-bold text-main-green'>{buku.judul}</h1>
          </div>
          <div className='Heading-Image flex flex-col md:flex-row gap-5 w-full'>
            <div className='image'>
              <div className='w-full lg:w-[375px] h-fit bg-slate-200 rounded-lg'><img src={`https://api.literacypowerid.com/api/images/${buku.coverUrl}`} alt="" /></div>
            </div>
            <div className='identitas-buku flex flex-col'>
              <h2 className='text-2xl font-bold text-main-orange'>Identitas Buku</h2>
              <h3>Judul: {buku.judul}</h3>
              <h3>Penulis: {buku.penulis}</h3>
              <h3>Negara: {buku.negara}</h3>
              <h3>Bahasa: {buku.bahasa}</h3>
              <h3>Genre: {buku.genre}</h3>
              <h3>Penerbit: {buku.penerbit}</h3>
              <h3>Tahun Terbit: {buku.tahun}</h3>
              <h3>Jumlah Halaman: {buku.halaman}</h3>
            </div>
          </div>
          <div className='heading-content'>
            <h2 className='text-2xl font-bold text-main-orange'>Ringkasan</h2>
          </div>
          <div className='content text-justify mb-5'>
            <p>{buku.ringkasan}</p>
          </div>
          <div className='heading-content'>
            <h2 className='text-2xl font-bold text-main-orange'>Review</h2>
          </div>
          <div className='content text-justify mb-5'>
            <p>{buku.review}</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Reviews />
      <br />
      <Footer />
    </>
  );
};

export default AllAboutBooksSinglePages;
