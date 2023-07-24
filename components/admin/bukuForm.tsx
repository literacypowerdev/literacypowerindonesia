import React, { SyntheticEvent, useState } from 'react'
const Cookie = require('js-cookie')

const BukuForm = () => {

  interface bookDataProps {
    judul: string
    penulis: string
    negara: string
    bahasa: string
    genre: string
    penerbit: string
    tahun: number | string
    halaman: number | string
    ringkasan: string
    review: string
  }

  const [bookData, setBookData] = useState<bookDataProps>({
    judul: '',
    penulis: '',
    negara: '',
    bahasa: '',
    genre: '',
    penerbit: '',
    tahun: '',
    halaman: '',
    ringkasan: '',
    review: '',
  })
  const [coverFile, setCoverFile] = useState<any>();
  const cookieToken = Cookie.get('token');

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', coverFile as Blob);
    Object.entries(bookData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const res = await fetch('https://api.literacypowerid.com/api/buku', {
        method: 'POST',
        headers: {'Authorization': 'Bearer ' + cookieToken},
        body: formData
      });
      const response = await res.json();
      console.log(response.message);
      window.location.reload();

    } catch (err) {
      console.log('error bro', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBookData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setCoverFile(file);
  };

  const inputStyles = 'py-2 rounded-md px-2 text-main-blue'

  return (
      <div className='bg-main-orange w-full p-5 rounded-lg'>
        <h2 className='text-[1.6rem] font-bold mb-5'>Book Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className='flex flex-col gap-1'>
                <label>Image</label>
                <input className="block w-full rounded-md cursor-pointer bg-white text-main-blue py-1" type="file" placeholder='Cover Url' name='coverUrl' onChange={handleUploadImage} required/>
            </div>
            <div className='flex flex-col gap-1'>
                <label>Title</label>
                <input className={inputStyles} type="text" placeholder='How To Win Friends and Influence People' name='judul' onChange={handleChange} required/>
            </div>
            <div className='flex flex-col gap-1'>
                <label>Author</label>
                <input className={inputStyles} type="text" placeholder='Dale Carnegie' name='penulis' onChange={handleChange} required/>
            </div>
            <div className='flex flex-col gap-1'>
                <label>Country</label>
                <input className={inputStyles} type="text" placeholder='United States' name='negara' onChange={handleChange} required/>
            </div>
            <div className='flex flex-col gap-1'>
                <label>Language</label>
                <input className={inputStyles} type="text" placeholder='Inggris' name='bahasa' onChange={handleChange} required/>
            </div>
            <div className='flex flex-col gap-1'>
                <label>Genre</label>
                <input className={inputStyles} type="text" placeholder='Self development' name='genre' onChange={handleChange} required/>
            </div>
            <div className='flex flex-col gap-1'>
                <label>Publisher</label>
                <input className={inputStyles} type="text" placeholder='Simon & Schuster' name='penerbit' onChange={handleChange} required/>
            </div>
            <div className='flex flex-col gap-1'>
                <label>Year</label>
                <input className={inputStyles} type="text" placeholder='1936' name='tahun' onChange={handleChange} required/>
            </div>
            <div className='flex flex-col gap-1'>
                <label>Number of pages</label>
                <input className={inputStyles} type="text" placeholder='304' name='halaman' onChange={handleChange} required/>
            </div>
            <div className='flex flex-col gap-1'>
                <label>Summary</label>
                <textarea className="py-2 rounded-lg px-2 h-60 w-full text-main-blue" placeholder='Nasihat-nasihat Dale Carnegie yang teruji waktu telah membawa hingga tidak terhitung banyaknya orang yang berhasil mendaki tangga kesuksesan dalam kehidupan pribadi dan bisnis. Salah satu buku terlaris sepanjang masa yang menjadi landasan buku-buku laris lainnya, How to Win Friends and Influence People akan memberi Anda, 6 cara untuk membuat orang menyukai Anda, 12 cara untuk membuat orang menerima pemikiran Anda, 9 cara untuk mengubah orang tanpa membuat mereka kesal dan masih banyak lagi. Raih potensi maksimal Anda dengan buku wajib baca di abad ke-21 ini!' name='ringkasan' onChange={handleChange} required/>
            </div>
            <div className='flex flex-col gap-1'>
                <label>Review</label>
                <textarea className="py-2 rounded-lg px-2 h-60 w-full text-main-blue" placeholder='How To Win Friends and Influence People merupakan judul dari sebuah buku yang ditulis oleh Dale Carnegie. Buku ini akan menghadirkan isi tentang bagaimana cara untuk dapat meraih kesuksesan dalam berbisnis maupun kehidupan dengan cara meningkatkan kualitas diri. Buku ini memiliki pembahasan yang menarik. Pembahasan yang terbagi kedalam beberapa bab ini mampu dijelaskan dengan sangat detail dan rinci oleh buku ini. Selain itu, buku ini juga menggunakan gaya bahasa yang ringin, sehingga pembaca dapat lebih mudah untuk memahami pembahasan yang ada di buku ini. Selain sebagai media untuk meningkatkan kualitas diri, buku ini juga akan membantu Anda untuk meraih kesuksesan di dalam kehidupan maupun berbisnis. Diharapkan buku ini dapat memberikan manfaat dan ilmu wawasan yang lebih luas bagi setiap pembaca.' name='review' onChange={handleChange} required/>
            </div>
            <button type='submit' className='py-3 bg-main-green hover:bg-dark-green text-white rounded-lg mt-5'>Submit</button>
        </form>
      </div>
  )
}

export default BukuForm