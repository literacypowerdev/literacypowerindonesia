import React, { useEffect, useState } from 'react'
import Layout from '../../../components/admin/layout'
import useSWR, { useSWRConfig } from "swr";
import ProyekForm from '../../../components/admin/proyekForm'
import axios from 'axios';
const Cookie = require('js-cookie')
import withTokenValidation from '../../../utils/tokenValidation';



const Proyek = () => {
  const CookieToken = Cookie.get('token');
  const [showForm, setShowForm] = useState(false)

  // fetch with useSWR =============================================
  const { mutate } = useSWRConfig();
  const endpoint = "https://api.literacypowerid.com/api/proyek/admin"
  const fetcher = async (url: string) => {
    const response = await fetch(endpoint, {
      headers: {
        'Authorization': 'Bearer ' + CookieToken
      }
    })
    const res = await response.json();
    return res.data
    
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
      mutate('proyek')

    } catch (err) {
      Cookie.remove('token')
    }
  }
  // handleDelete ==================================================

  const handleAdd = () => {
    setShowForm(!showForm);
  }

  const imageUrl = 'https://api.literacypowerid.com/images/'


  return (
    <Layout>
      <div className='flex gap-4'>
        <div className='w-fit'>
          {data.map((item: any, index: any) => {
            const justifyClass = `${item.id % 2 != 0 ? "md:flex-row" : "md:flex-row-reverse"}`;
            return (
              <div
                key={item.id}
                className={`w-full max-w-[1100px] mx-auto h-fit md:h-fit bg-white shadow-lg my-5 rounded-[20px] overflow-hidden p-4 flex flex-col ${justifyClass} flex gap-3 md:gap-5 transition-all duration-150 ease-in-out group hover:bg-main-green cursor-pointer`}
              >
                <img
                  className="w-full md:w-[250px] h-[200px] md:h-[170px] object-cover rounded-t-[10px] md:rounded-[10px]"
                  src={`${imageUrl}${item.dokumentasi}`}
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
                <div onClick={() => handleDelete(item.id)} className='bg-red-500 hover:bg-red-300 h-fit px-3 py-1 rounded-sm text-white self-end'>
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
            {showForm ? (<ProyekForm />) : ''}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default withTokenValidation(Proyek)