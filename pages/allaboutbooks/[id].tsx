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
          <div className='heading-content text-main-green'>
            <h1>Review</h1>
          </div>
          <div className='content text-justify'>
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
