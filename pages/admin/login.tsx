import React, { SyntheticEvent, useState } from 'react';
import Router from 'next/router';
import { useAppDispatch } from '../../utils/hooks';
import { loginSetToken } from '../../store/features/loginSlice';
import { unauthPage } from '../../utils/unauthPage';
const Cookie = require('js-cookie');

import Head from "next/head";

export const getServerSideProps = async (context: any) => {
  unauthPage(context);
  return { props: {} };
}

const Login = () => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    password: ''
  });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('https://api.literacypowerid.com/api/admin/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      if (!response.ok) {
        setErrorMessage("Incorrect username or passowrd");
        return setStatus('error ' + response.status)
      };
      const loginRes = await response.json();
      // dispatch(loginSetToken(loginRes.data.token));
      Cookie.set('token', loginRes.data.token);
      setStatus('success');
      Router.push('/admin/dashboard/buku');
    } catch (err: any) {
      console.log(err);
    }
  }

  const handleChange = (e: any) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Head>
        <title>Admin Log In</title>
        <meta
        name="description"
        content="Project-project yang dijalankan oleh Literacy Power."
        />
        <link rel="icon" sizes="192x192" href="/icon/favicon.ico"></link>
      </Head>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="https://www.literacypowerid.com/" className="flex items-center mb-6">
                <img className="w-[200px] mr-2" src="/icon/logo-2.svg" alt="logo" />
            </a>
            <div className="w-full bg-main-orange rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Admin Sign In
                    </h1>
                    <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-white">First name</label>
                            <input type="text" name="firstName" id="firstName" onChange={handleChange} className="bg-white text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Your first name" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-white">Last name</label>
                            <input type="text" name="lastName" id="lastName" onChange={handleChange} className="bg-white text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Your last name" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-white">Password</label>
                            <input type="password" name="password" id="password" onChange={handleChange} placeholder="Your password" className="bg-white text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required />
                        </div>
                        {errorMessage !== "" ? <div className='w-full text-white bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>{ errorMessage }</div> : null}
                        <button type="submit" className="w-full text-white bg-main-green hover:bg-[#596E67] transition-colors duration-150 ease-in-out focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Login;