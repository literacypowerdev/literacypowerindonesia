import React, { useState } from 'react';
import { postProyek } from '../../store/features/proyekSlice';
import { useAppDispatch } from '../../utils/hooks';

interface valuesProps {
  thumbnail: number;
  nama: string;
  lokasi: string;
  tanggal: string;
  content: string;
  dampak_sebelum: string;
  dampak_sesudah: string;
  dokumentasi: string;
}

const ProyekForm = () => {
  const dispatch = useAppDispatch()
  const [coverFiles, setCoverFiles] = useState<any>([]);
  const [values, setValues] = useState<valuesProps>({
    thumbnail: 1,
    nama: '',
    lokasi: '',
    tanggal: '',
    content: '',
    dampak_sebelum: '',
    dampak_sesudah: '',
    dokumentasi: 'http://www.literacypowerid.com/admin/dashboard/galery'
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    for (let i = 0; i < coverFiles.length; i++) {
      data.append('file', coverFiles[i]);
    }
    Object.entries(values).forEach(([key, value]) => {
      data.append(key, value);
    });
    console.log(values);
    
    dispatch(postProyek(data));
  }

  const handleChange = (e: any) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleUploadImage = (e: any) => {
    let uploaded = e.target.files[0];
    setCoverFiles([...coverFiles, uploaded]);
    console.log(uploaded);
  }

  const fileInputStyles = "block w-full rounded-md cursor-pointer bg-white text-main-blue py-1";
  const inputStyles = 'py-2 rounded-md px-2 text-main-blue';

  return (
    <div className='bg-main-orange w-full p-5 rounded-lg'>
      <h2 className='text-[1.6rem] font-bold mb-5'>Project Form</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        
        <div className='flex flex-col gap-1'>
          <label>Thumbnail image</label>
          <input className={fileInputStyles} type="file" placeholder='thumbnail' name='thumbnail' onChange={handleUploadImage} required/>
        </div>

        <div className='flex flex-col gap-1'>
          <label>Before image</label>
          <input className={fileInputStyles} type="file" placeholder='thumbnail' name='thumbnail' onChange={handleUploadImage} required/>
        </div>

        <div className='flex flex-col gap-1'>
          <label>After image</label>
          <input className={fileInputStyles} type="file" placeholder='thumbnail' name='thumbnail' onChange={handleUploadImage} required/>
        </div>

        <div className='flex flex-col gap-1'>
          <label>Project name</label>
          <input className={inputStyles} type="text" placeholder='Dari Donasi untuk Literasi' name='nama' onChange={handleChange} required/>
        </div>

        <div className='flex flex-col gap-1'>
          <label>Location</label>
          <input className={inputStyles} type="text" placeholder='Cikarang' name='lokasi' onChange={handleChange} required/>
        </div>

        <div className='flex flex-col gap-1'>
          <label>Date</label>
          <input className={inputStyles} type="text" placeholder='27 November 2021' name='tanggal' onChange={handleChange} required/>
        </div>

        <div className='flex flex-col gap-1'>
          <label>Content</label>
          <textarea className="py-2 rounded-lg px-2 h-60 w-full text-main-blue" placeholder='Konten utama' name='content' onChange={handleChange} required/>
        </div>

        <div className='flex flex-col gap-1'>
          <label>Before content</label>
          <textarea className="py-2 rounded-lg px-2 h-60 w-full text-main-blue" placeholder='Konten dampak sebelum' name='dampak_sebelum' onChange={handleChange} required/>
        </div>

        <div className='flex flex-col gap-1'>
          <label>After content</label>
          <textarea className="py-2 rounded-lg px-2 h-60 w-full text-main-blue" placeholder='Konten dampak sesudah' name='dampak_sesudah' onChange={handleChange} required/>
        </div>

        <button type='submit' className='py-3 bg-main-green hover:bg-dark-green text-white rounded-lg mt-5'>Submit</button>
      </form>
    </div>
  )
};

export default ProyekForm;