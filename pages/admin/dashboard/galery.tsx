import React, { useEffect, useState } from 'react'
import Layout from '../../../components/admin/layout'
import axios from 'axios'
import cookies from 'next-cookies'
import GaleryForm from '../../../components/admin/galeryForm'

// {`http://localhost:3000/images/${item.filename}`}

const Galery = ({ data }: any) => {

  return (
    <Layout>
      <GaleryForm />
      <div className='flex w-fit gap-10'>
        {data && data.map((item: any, index: any) => {
          return (
            <div key={index} className='w-[200px]'>
              <p className='text-red-500'>{item.filename}</p>
              <img src={`http://localhost:4500/images/${item.filename}`} alt="" />
            </div>
          )
        })}
      </div>

      
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  const allCookies = cookies(context);
  const token = allCookies.token
  console.log(token);
  try {
    const res = await axios.get('http://localhost:4500/api/galery/admin', {
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