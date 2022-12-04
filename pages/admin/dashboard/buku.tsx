import React from 'react'
import BukuForm from '../../../components/admin/bukuForm'
import Layout from '../../../components/admin/layout'

const Buku = () => {
  return (
    <Layout>
      <h1 className='text-black font-bold'>ini buku</h1>
      <div>
        <BukuForm />
      </div>
    </Layout>
  )
}

export default Buku