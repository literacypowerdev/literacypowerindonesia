import React from 'react'
import Layout from '../../../components/admin/layout'

const Review = () => {
  return (
    <Layout>
      <h1 className='text-black font-bold'>ini Review</h1>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  try {


  } catch (err) {
    console.log(err)
  }



  return {
    props: {}
  }
}

export default Review