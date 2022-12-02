import axios from 'axios';
import React, { ReactNode, useState, useEffect } from 'react'
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
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4500/api/buku').then(res => {
      console.log("ini res ", res.data)
      setData(res.data.data)

      
    }).catch(err => console.log(err))
  }, [])


  console.log("isi data:  ", data)







  const dispatch = useAppDispatch()
  const dataProyek = useAppSelector((state) => state.proyek)


  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const result = await axios.post("http://localhost:4500/api/proyek", values);
      console.log(result.response.data);
    } catch (error) {
      console.error(error.response.data);
    }


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
        <div>

          {data.map((item: any, index) => {
            return (
              <div key={index}>
                <h1>{item.judul}</h1>
              </div>
            )
          })}



        </div>
      </div>
    </div>
  )
}

export default ProyekForm