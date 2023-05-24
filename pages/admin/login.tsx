import React, { SyntheticEvent, useState } from 'react'
import cookies from 'next-cookies'
import Router from 'next/router'
import { useAppDispatch } from '../../utils/hooks'
import { loginSetToken } from '../../store/features/loginSlice'
import { unauthPage } from '../../utils/unauthPage'
const Cookie = require('js-cookie')


export const getServerSideProps = async (context: any) => {
  unauthPage(context)
  return { props: {} }
}

const Login = () => {
  const dispatch = useAppDispatch()
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    password: ''
  })
  const [status, setStatus] = useState('idle')

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault()
    console.log('submitted')
    setStatus('loading')
    try {
      const response = await fetch('https://api.literacypowerid.com/api/admin/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      if (!response.ok) return setStatus('error ' + response.status)
      const loginRes = await response.json()
      dispatch(loginSetToken(loginRes.data.token))
      Cookie.set('token', loginRes.data.token)
      setStatus('success');
      Router.push('/admin/dashboard/buku')

    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e: any) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }


  return (
    <div className='w-[100vw] bg-red-50 h-[100vh] flex justify-center items-center'>
      <div className='py-8 px-5 bg-slate-400 m-auto flex flex-col items-center justify-center gap-4'>
        <h1>login</h1>
        <form onSubmit={handleLogin} className='flex flex-col gap-2 w-64 m-auto '>
          <input type="text" placeholder='firstName' name='firstName' onChange={handleChange} />
          <input type="text" placeholder='lastName' name='lastName' onChange={handleChange} />
          <input type="password" placeholder='password' name='password' onChange={handleChange} />
          <div className='flex justify-end'>
            <button type='submit' className='bg-red-300 w-20 p-1'>submit</button>
          </div>
          <h1>{status}</h1>
        </form>
      </div>
    </div>

  )
}

export default Login