import React, { useEffect } from 'react'
import AOS from "aos";

import Head from "next/head";
import AllAboutBook from '../../components/organisms/AllAboutBooks'
import SearchFilter from '../../components/atoms/SearchFilter'
import Navbar from '../../components/organisms/Navbar'
import Reviews from '../../components/organisms/Reviews'
import Footer from '../../components/organisms/Footer'

const AllAboutBooks = () => {
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <>
            <Head>
                <title>Literacy Power | All About Books</title>
                <meta
                name="description"
                content="Project-project yang dijalankan oleh Literacy Power."
                />
                <link rel="icon" sizes="192x192" href="/icon/favicon.ico"></link>
            </Head>
            <Navbar active='All About Books' />
            <div className='bg-body-doodle bg-contain bg-repeat w-full' >
                <div className='container w-[90%] m-auto'>
                    <div className='Heading text-center mt-20 mb-14 font-semibold font-ptserif text-4xl text-main-green'>
                        <h1>
                            All About Books
                        </h1>
                    </div>
                    <div>
                        <SearchFilter />
                    </div>
                    <br />
                    <br />
                    <div>
                        <AllAboutBook />
                    </div>
                    <br />
                    <br />
                </div>
                <div>
                    <Reviews />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default AllAboutBooks