import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios'
import { unauthPageReverse } from '../../../utils/unauthPage';
import { useAppDispatch } from '../../../utils/hooks';
import cookies from 'next-cookies';
const Cookie = require('js-cookie')

import Layout from '../../../components/admin/layout';
import BukuForm from '../../../components/admin/bukuForm'

const Buku = ({ allBuku }: any) => {
  const dispatch = useAppDispatch();
  const cookieToken = Cookie.get('token');

  const [showForm, setShowForm] = useState(false);
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
      });
      window.location.reload();

    } catch (err) {
      Cookie.remove('token');
    }
  }

  const imageUrl = 'https://api.literacypowerid.com/images/'
  
  return (
    <Layout>
      <h1 className='text-main-green font-bold text-[2rem] mb-5'>Books</h1>

      <div className='w-full flex flex-row gap-8'>
        <div className='w-3/5 flex flex-col gap-5'>

          <div className='flex flex-col gap-5'>
            
            {allBuku.map((item: any) => {
              const { id, judul, ringkasan, coverUrl } = item;
              return (

                <div key={id} className='w-full max-w-[1100px] h-fit bg-white border border-main-orange rounded-xl p-4 flex flex-col gap-2'>
                  <div className='flex flex-row gap-5'>
                    <img className='object-cover h-[200px]' src={`${imageUrl}${coverUrl}`} alt="" />

                    <div className='content flex flex-col gap-2 text-justify'>
                      <h2 className='font-bold text-[1.4rem] text-main-orange'>{judul}</h2>
                      <p className='text-main-blue'>{ringkasan}</p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 self-end">
                    <Link href={`/allaboutbooks/${id}`}>
                      <div className='bg-yellow-500 hover:bg-yellow-600 h-fit w-[90px] text-center py-2 rounded-lg text-white cursor-pointer'>
                        <button>Visit</button>
                      </div>
                    </Link>
                    <div onClick={() => handleDelete(id)} className='bg-red-500 hover:bg-red-600 h-fit w-[90px] text-center py-2 rounded-lg text-white cursor-pointer'>
                      <button>Delete</button>
                    </div>
                  </div>
                </div>
              )
            })}
            
          </div>

          <div onClick={handleAdd} className='h-fit text-white rounded-lg bg-main-green hover:bg-dark-green px-5 py-3 w-fit mb-5 cursor-pointer self-end'>
            <button>Add Book</button>
          </div>

        </div>

        <div className='w-2/5'>
          {showForm ? (<BukuForm />) : ''}
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

export default Buku;

