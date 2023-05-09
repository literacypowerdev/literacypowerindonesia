import React, { SyntheticEvent, useState } from 'react'
const Cookie = require('js-cookie')
import axios from 'axios'

const bukuForm = () => {

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
      console.log(key, value);
    });

    try {
      const res = await fetch('https://api.literacypowerid.com/api/buku', {
        method: 'POST',
        headers: {'Authorization': 'Bearer ' + cookieToken},
        body: formData
      })
      const response = await res.json();
      console.log(response)
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
    if (file) console.log('Selected file:', file.name);
  };

  const inputStyles = 'py-2 rounded-md px-2'
  const textAreaStyles = 'py-2 rounded-sm px-2 h-60 w-72'

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-very-light-orange p-5 w-fit text-black">
        <input className={inputStyles} type="file" placeholder='cover url' name='coverUrl' onChange={handleUploadImage} />
        <input className={inputStyles} type="text" placeholder='judul' name='judul' onChange={handleChange} />
        <input className={inputStyles} type="text" placeholder='penulis' name='penulis' onChange={handleChange} />
        <input className={inputStyles} type="text" placeholder='negara' name='negara' onChange={handleChange} />
        <input className={inputStyles} type="text" placeholder='bahasa' name='bahasa' onChange={handleChange} />
        <input className={inputStyles} type="text" placeholder='genre' name='genre' onChange={handleChange} />
        <input className={inputStyles} type="text" placeholder='penerbit' name='penerbit' onChange={handleChange} />
        <input className={inputStyles} type="text" placeholder='tahun' name='tahun' onChange={handleChange} />
        <input className={inputStyles} type="text" placeholder='halaman' name='halaman' onChange={handleChange} />
        <textarea className={textAreaStyles} placeholder='ringkasan' name='ringkasan' onChange={handleChange} />
        <textarea className={textAreaStyles} placeholder='review' name='review' onChange={handleChange} />
        <button type='submit' className='px-4 py-2 bg-main-orange text-white'>Add</button>
      </form>
    </div>
  )
}

export default bukuForm