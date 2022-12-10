import axios, { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react'
import { getProyek, postProyek } from '../../store/features/proyekSlice'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'

interface valuesProps {
  nama: string;
  lokasi: string;
  content: string;
  dampak_sebelum: string;
  dampak_sesudah: string;
  dokumentasi: string;
}

const ProyekForm = () => {
  const [values, setValues] = useState<valuesProps>({
    nama: '',
    lokasi: '',
    content: '',
    dampak_sebelum: '',
    dampak_sesudah: '',
    dokumentasi: ''
  })
  const dispatch = useAppDispatch()
  const dataProyek = useAppSelector((state) => state.proyek.proyek)


  const handleSubmit = async (e: any) => {
    
  }

  const handleChange = (e: any) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }


  const handleGetProyek = () => {
    console.log('berhasil')
    dispatch(getProyek())
  }

  return (
    <div className='p-5 flex'>
      <div>
        <h1>post proyek</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-52'>
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
            placeholder="Book desc"
            name="content"
            onChange={handleChange}
          />
          <textarea
            rows={5}
            placeholder="Book desc"
            name="dampak_sebelum"
            onChange={handleChange}
          />
          <textarea
            rows={5}
            placeholder="Book desc"
            name="dampak_sesudah"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="isi url"
            name="dokumentasi"
            onChange={handleChange}
          />
          <button type='submit'>post</button>
        </form>
      </div>
      <div>
        <h1>get proyek</h1>
        <button onClick={handleSubmit} className='bg-slate-400 p-4'>get proyek here!</button>
      </div>
    </div>
  )
}

export default ProyekForm