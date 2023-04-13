import React, { SyntheticEvent, useState } from 'react'
const Cookie = require('js-cookie')

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
  const [coverFiles, setCoverFiles] = useState<string>('');

  const cookieToken = Cookie.get('token')
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const data = new FormData();
    
    data.append('file', coverFiles);
    
    Object.entries(bookData).forEach(([key, value]) => {
      data.append(key, value);
    });
    try {
      await fetch('http://localhost:4500/api/buku/', {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + cookieToken
        },
        body: data
      })


    } catch (err) {
      console.log(err)
    }
    window.location.reload();
  }
  const handleChange = (e: any) => {
    setBookData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleUploadImage = (e: any) => {
    let uploaded = e.target.files[0];
    setCoverFiles(uploaded)
    console.log(uploaded)
  }

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