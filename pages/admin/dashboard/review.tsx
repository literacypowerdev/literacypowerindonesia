import React, { useState } from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { useAppDispatch } from '../../../utils/hooks'
import { deleteReq } from '../../../store/features/reviewSlice'
import withTokenValidation from '../../../utils/tokenValidation'

import ReviewForm from '../../../components/admin/reviewForm'
import Layout from '../../../components/admin/layout'

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
      <h1 className='text-main-green font-bold text-[2rem] mb-5'>Reviews</h1>
      
      <div className='w-full flex flex-row gap-8'>
        <div className='w-3/5 flex flex-col gap-5'>

          <div className='flex flex-col gap-5'>
            {data && data.map((item: any) => {
              return (
                <div key={item.id} className="w-full max-w-[1100px] h-fit bg-white border border-main-orange rounded-xl p-4 flex flex-col gap-2">
                  <div>
                    <h2 className="font-bold text-[1.6rem] text-main-orange">{item.title}</h2>
                    <h3 className="font-semibold text-main-blue">{item.username}, {item.userProfession}</h3>
                  </div>
                  <p className="text-main-blue">“{item.testimoni}”</p>
                  <div className='bg-red-500 hover:bg-red-600 h-fit px-6 py-2 rounded-lg text-white self-end cursor-pointer'>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
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
          {showForm ? (<ReviewForm />) : ''}
        </div>
      </div>
    </Layout>
  )
}


export default withTokenValidation(Review)