import React, { useEffect, useState } from 'react'
import Layout from '../../../components/admin/layout'
import axios from 'axios'
import cookies from 'next-cookies'
import GaleryForm from '../../../components/admin/galeryForm'
const Cookie = require('js-cookie')


const Galery = ({ data }: any) => {
  const cookieToken = Cookie.get('token')
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`https://api.literacypowerid.com/api/galery/${id}`, {
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



  return (
    <Layout>
      <div className='w-full flex flex-col'>
        <GaleryForm />
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
          {data && data.map((item: any, index: any) => {
            return (
              <div className='max-w-[400px]' key={item.id_galery}>              
                  <p className='text-red-500 break-words'>{item.filename}</p>
                <div className='w-full h-auto'>
                  <img src={`https://api.literacypowerid.com/images/${item.filename}`} alt="" />
                </div>
                <div onClick={() => handleDelete(item.id_galery)} className='bg-red-500 hover:bg-red-300 h-fit w-fit px-3 py-1 rounded-sm text-white self-end'>
                  <button>delete</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>



    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  const allCookies = cookies(context);
  const token = allCookies.token
  console.log(token);
  try {
    const res = await axios.get('https://api.literacypowerid.com/api/galery/admin', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    const response = await res.data.data
    return {
      props: {
        data: response
      }
    }
  } catch (e: any) {
    console.log("ini responnya: ", e.response.status)
    if (e.response.status !== 200) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        }
      }
    }
  }
}

export default Galery