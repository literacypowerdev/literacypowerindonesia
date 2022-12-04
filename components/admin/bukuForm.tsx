import React, { SyntheticEvent, useState } from 'react'
const Cookie = require('js-cookie')






const BukuForm = () => {

  interface bookDataProps {
    coverUrl: string
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
    coverUrl: '',
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

  const cookieToken = Cookie.get('token')
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const create = await fetch('http://localhost:4500/api/buku', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + cookieToken
        },
        body: JSON.stringify(bookData)
      })
      const response = await create.json();
      console.log(response);
    } catch (err) {
      console.log(err)
    }
    console.log(bookData)
  }

  const handleChange = (e: any) => {
    setBookData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-very-light-orange p-5 w-fit text-black">
        <input type="text" placeholder='cover url' name='coverUrl' onChange={handleChange} />
        <input type="text" placeholder='judul' name='judul' onChange={handleChange} />
        <input type="text" placeholder='penulis' name='penulis' onChange={handleChange} />
        <input type="text" placeholder='negara' name='negara' onChange={handleChange} />
        <input type="text" placeholder='bahasa' name='bahasa' onChange={handleChange} />
        <input type="text" placeholder='genre' name='genre' onChange={handleChange} />
        <input type="text" placeholder='penerbit' name='penerbit' onChange={handleChange} />
        <input type="text" placeholder='tahun' name='tahun' onChange={handleChange} />
        <input type="text" placeholder='halaman' name='halaman' onChange={handleChange} />
        <textarea placeholder='ringkasan' name='ringkasan' onChange={handleChange} />
        <textarea placeholder='review' name='review' onChange={handleChange} />
        <button type='submit' className='px-4 py-2 bg-main-orange'>Add</button>
      </form>
    </div>
  )
}

export default BukuForm