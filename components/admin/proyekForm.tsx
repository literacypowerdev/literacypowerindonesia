import axios, { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react'
import { postProyek } from '../../store/features/proyekSlice'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'

interface valuesProps {
  thumbnail: any;
  nama: string;
  lokasi: string;
  content: string;
  dampak_sebelum: string;
  dampak_sesudah: string;
  dokumentasi: string;
}

const ProyekForm = () => {
  const dispatch = useAppDispatch()
  const [values, setValues] = useState<valuesProps>({
    thumbnail: '',
    nama: '',
    lokasi: '',
    content: '',
    dampak_sebelum: '',
    dampak_sesudah: '',
    dokumentasi: ''
  })
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(postProyek(values))
  }
  

  const handleChange = (e: any) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }




  return (
    <div className='p-5 flex text-black'>
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-52 text-black'>
        <input
            type="text"
            placeholder="thumbnail"
            name="thumbnail"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="isi nama"
            name="nama"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="isi lokasi"
            name="lokasi"
            onChange={handleChange}
          />
          <textarea
            rows={5}
            placeholder="konten"
            name="content"
            onChange={handleChange}
          />
          <textarea
            rows={5}
            placeholder="dampak sebelum"
            name="dampak_sebelum"
            onChange={handleChange}
          />
          <textarea
            rows={5}
            placeholder="dampak sesudah"
            name="dampak_sesudah"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="isi url"
            name="dokumentasi"
            onChange={handleChange}
          />
          <button className='bg-red-500' type='submit'>post</button>
        </form>
      </div>
    </div>
  )
}

export default ProyekForm