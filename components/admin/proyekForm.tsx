import React, { useState } from 'react';
import { postProyek } from '../../store/features/proyekSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

interface valuesProps {
  nama: string;
  lokasi: string;
  tanggal: any;
  content: string;
  dampak_sebelum: string;
  dampak_sesudah: string;
  dokumentasi: string;
}

const ProyekForm = () => {
  const dispatch = useAppDispatch()
  const [coverFiles, setCoverFiles] = useState<any>([]);
  const [values, setValues] = useState<valuesProps>({
    nama: '',
    lokasi: '',
    tanggal: '',
    content: '',
    dampak_sebelum: '',
    dampak_sesudah: '',
    dokumentasi: ''
  })
  console.log(coverFiles);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    for (let i = 0; i < coverFiles.length; i++) {
      data.append('file', coverFiles[i]);
    }
    Object.entries(values).forEach(([key, value]) => {
      data.append(key, value);
    });
    dispatch(postProyek(data))
  }


  const handleChange = (e: any) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleUploadImage = (e: any) => {
    let uploaded = e.target.files[0];
    setCoverFiles([...coverFiles, uploaded])
    console.log(uploaded)
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

          <div>
            <p>*Thumbnail</p>
            <input
              type="file"
              placeholder="thumbnail"
              name="thumbnail"
              onChange={handleUploadImage}
            />
          </div>
          <div>
            <p>*dampak_sebelum</p>
            <input
              type="file"
              placeholder="thumbnail"
              name="thumbnail"
              onChange={handleUploadImage}
            />
          </div>
          <div>
            <p>*dampak_sesudah</p>
            <input
              type="file"
              placeholder="thumbnail"
              name="thumbnail"
              onChange={handleUploadImage}
            />
          </div>


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
          <input
            type="tanggal"
            placeholder="isi tanggal proyek"
            name="tanggal"
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
          <button className='bg-red-500 text-white font-semibold p-6' type='submit'>post</button>
        </form>
      </div>
    </div>
  )
}

export default ProyekForm