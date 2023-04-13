import React, { useEffect, useState, useRef } from 'react'
import SearchFilter from '../../components/atoms/SearchFilter'
import AllAboutBook from '../../components/organisms/AllAboutBooks'
import Footer from '../../components/organisms/Footer'
import Navbar from '../../components/organisms/Navbar'
import Reviews from '../../components/organisms/Reviews'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import { getBuku } from '../../store/features/bukuSlice'
import ReactPaginate from 'react-paginate';





const AllAboutBooks = ({ allBuku }: any) => {
    // const dataBuku = useAppSelector((state) => state.buku.data)
    // const dispatch = useAppDispatch()
    // useEffect(() => {
    //     dispatch(getBuku());
    //     console.log(allBuku)
    // }, [])

    return (
        <>
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

// kalau mau pake getStaticProps
export const getStaticProps = async () => {
    const bukuReq = await fetch('http://localhost:4500/api/buku', {
        headers: {
            "Content-Type": "application/json"
        }
    });
    const buku = await bukuReq.json();
    return {
        props: {
            allBuku: buku.data
        }
    }
}


export default AllAboutBooks