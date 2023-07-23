import React, { useState } from 'react'
import useSWR from 'swr'
import axios from 'axios'
import Layout from '../../../components/admin/layout'
import ReviewForm from '../../../components/admin/reviewForm'
import { useAppDispatch } from '../../../utils/hooks'
import { deleteReq } from '../../../store/features/reviewSlice'
import withTokenValidation from '../../../utils/tokenValidation'


const Review = () => {
  const dispatch = useAppDispatch()
  const [showForm, setShowForm] = useState(false)
  const handleAdd = () => {
    setShowForm(!showForm)
  }

  const url = "https://api.literacypowerid.com/api/review"
  const fetcher = async (url: string) => await axios.get(url).then((res) => res.data.data)
  const { data, error } = useSWR(url, fetcher)
  
  const handleDelete = (id: any) => {
    dispatch(deleteReq(id))
  }

  return (
    <Layout>
      <div className='flex gap-5'>
        <div className='flex flex-col gap-5 mb-5'>
          {data && data.map((item: any) => {
            return (
              <div key={item.id} className="w-full max-w-[1100px] text-center ml-5 h-fit bg-white shadow-lg  rounded-[20px] overflow-hidden p-4 pb-6 flex flex-col md:gap-2 transition-all duration-150 ease-in-out">
                <div>
                  <h3 className="font-ptserif font-bold text-main-blue">{item.username}</h3>
                </div>
                <h2 className="font-ptserif font-bold text-base text-main-orange">
                </h2>
                <p className="font-ptserif text-main-blue">“{item.testimoni}”</p>
                <div className='bg-red-500 hover:bg-red-300 h-fit px-3 py-1 rounded-sm text-white self-end'>
                  <button onClick={() => handleDelete(item.id)}>delete</button>
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
            {showForm ? (<ReviewForm />) : ''}
          </div>
        </div>
      </div>
    </Layout>
  )
}


export default withTokenValidation(Review)