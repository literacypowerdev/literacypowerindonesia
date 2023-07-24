import React, { useState } from 'react';
import Link from "next/link";
import Layout from '../../../components/admin/layout';
import useSWR, { useSWRConfig } from "swr";
import ProyekForm from '../../../components/admin/proyekForm';
import axios from 'axios';
const Cookie = require('js-cookie');
import withTokenValidation from '../../../utils/tokenValidation';

const Proyek = () => {
  const CookieToken = Cookie.get('token');
  const [showForm, setShowForm] = useState(false);

  // fetch with useSWR =============================================
  const { mutate } = useSWRConfig();
  const endpoint = "https://api.literacypowerid.com/api/proyek/";
  const fetcher = async (url: string) => {
  const response = await fetch(endpoint, {
    headers: {
      'Authorization': 'Bearer ' + CookieToken
    }
  });
  const res = await response.json();
  return res.data;
    
  }
  const { data } = useSWR("proyek", fetcher);
  if (!data) return <h2>Loading...</h2>;
  // fetch with useSWR =============================================

  // handleDelete ==================================================
  const handleDelete = async (id: any) => {
    try {
      await axios.delete(`https://api.literacypowerid.com/api/proyek/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + CookieToken
        }

      })
      mutate('proyek');
      window.location.reload();

    } catch (err) {
      Cookie.remove('token');
    }
  }
  // handleDelete ==================================================

  const handleAdd = () => {
    setShowForm(!showForm);
  }

  return (
    <Layout>
      <h1 className='text-main-green font-bold text-[2rem] mb-5'>Projects</h1>
      
      <div className='w-full flex flex-row gap-8'>
        <div className='w-3/5 flex flex-col gap-5'>

          <div className='flex flex-col gap-5'>

            {data.map((item: any, index: any) => {
              const cover = item.image.split('"')[1]
              const imageUrl = 'https://api.literacypowerid.com/api/images/' + cover           
              console.log(imageUrl);
              return (
                <div
                  key={item.id}
                  className="w-full max-w-[1100px] h-fit bg-white flex flex-col border border-main-orange rounded-xl p-4 gap-2"
                >

                  <div className='w-full max-h-[204px] overflow-hidden flex gap-4'>
                    <img
                      className="w-full h-[200px] hidden xl:flex object-cover rounded-md"
                      src={`${imageUrl}`}
                      alt="Thumbnail"
                    />

                    <div className="h-[258px] md:h-fit flex flex-col gap-2 md:gap-0 overflow-hidden ">
                      <h2 className="font-ptserif text-base group-hover:text-white font-bold text-main-orange transition-all duration-150 ease-in-out">
                        {item.nama} - {item.lokasi}
                      </h2>
                      <p className="font-ptserif text-light-orange group-hover:text-white transition-all duration-150 ease-in-out">
                        {item.tanggal}
                      </p>
                      <p className="font-ptserif text-justify text-main-blue group-hover:text-white transition-all duration-150 ease-in-out">
                        {item.content}
                      </p>
                    </div>
                  </div>
                  
                  <div className='width-full flex justify-end gap-2'>
                    <Link href={`/projects/${item.id}`}>
                      <div className='bg-yellow-500 hover:bg-yellow-600 h-fit w-[90px] text-center py-2 rounded-lg text-white cursor-pointer'>
                        <button>Visit</button>
                      </div>
                    </Link>
                    <div className='bg-red-500 hover:bg-red-600 h-fit px-6 py-2 rounded-lg text-white self-end cursor-pointer'>
                      <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                  </div>
                
                </div>
              )
            })}

          </div>

          <div onClick={handleAdd} className='h-fit text-white rounded-lg bg-main-green hover:bg-dark-green px-5 py-3 w-fit mb-5 cursor-pointer self-end'>
            <button >Add Review</button>
          </div>
            
        </div>

        <div className='w-2/5'>
          {showForm ? (<ProyekForm />) : ''}
        </div>
      </div>

    </Layout>
  )
}

export default withTokenValidation(Proyek);