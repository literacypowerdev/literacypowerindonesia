import React, { useState } from 'react'
import Layout from '../../../components/admin/layout'
import { unauthPageReverse } from '../../../utils/unauthPage'
import cookies from 'next-cookies'
import Link from 'next/link'
import { useAppDispatch } from '../../../utils/hooks'
import { deleteBuku } from '../../../store/features/bukuSlice'
const Cookie = require('js-cookie')
import axios from 'axios'
import BukuForm from '../../../components/admin/bukuForm'
import ProyekForm from '../../../components/admin/proyekForm'


const Buku = ({ allBuku }: any) => {
  const dispatch = useAppDispatch()
  const cookieToken = Cookie.get('token')

  const [showForm, setShowForm] = useState(false)
  const handleAdd = () => {
    setShowForm(!showForm);
  }

  

  const handleDelete = async (id: any) => {
    try {
      await axios.delete(`https://api.literacypowerid.com/api/buku/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + cookieToken
        }
        
      })
      window.location.reload();

    } catch (err) {
      Cookie.remove('token')
    }
  }
  const imageUrl = 'https://api.literacypowerid.com/images/'
  return (
    <Layout>
      <div className='flex gap-2 md:gap-3'>
        <div>
           {allBuku.map((item: any) => {
            const { id, judul, ringkasan, coverUrl } = item
            return (

              <div key={id} className='container p-3 flex flex-col md:flex-row mb-5 font-ptserif gap-4 rounded-md max-w-[771px] m-auto shadow-lg bg-white hover:bg-main-green hover:text-white transition-all duration-150 ease-in-out  text-black'>
                <Link href={`/allaboutbooks/${id}`}>
                  <a className='image w-full md:w-[512px] bg-slate-300 rounded-md'>
                    <img className='object-cover bg-contain' src={`${imageUrl}${coverUrl}`} alt="" />
                  </a>
                </Link>

                <div className='content flex flex-col gap-2 text-justify'>
                  <Link href={`/allaboutbooks/${id}`}><a><p className='font-bold text-main-orange cursor-pointer'>{judul}</p></a></Link>
                  <p>{ringkasan}</p>
                  <div className='tag-container text-white flex gap-3'>
                    <div className='bg-main-orange px-3 py-1 rounded-md inline-block'>
                      tag
                    </div>
                    <div className='bg-main-orange px-3 py-1 rounded-md inline-block'>
                      tag
                    </div>
                  </div>
                </div>
                <div onClick={() => handleDelete(id)} className='bg-red-500 hover:bg-red-300 h-fit px-3 py-1 rounded-sm text-white self-end'>
                  <button>delete</button>
                </div>
              </div>

            )
          })}
        </div>
        <div className='w-fit h-fit flex gap-2'>
          <div onClick={handleAdd} className='font-bold h-fit text-white rounded-lg bg-main-green px-5 py-3 w-fit mb-2 cursor-pointer shadow-md'>
            <button >Add</button>
          </div>
          <div className='w-fit'>
            {showForm ? (<BukuForm />) : ''}
          </div>
        </div>
      </div>
    </Layout>
  )
}


export const getServerSideProps = async (context: any) => {
  const allCookies = cookies(context);
  unauthPageReverse(context);

  const bukuReq = await fetch('https://api.literacypowerid.com/api/buku/admin', {
    headers: {
      'Authorization': 'Bearer ' + allCookies.token
    }
  });
  const buku = await bukuReq.json();
  return {
    props: {
      allBuku: buku.data
    }
  }
}



export default Buku

