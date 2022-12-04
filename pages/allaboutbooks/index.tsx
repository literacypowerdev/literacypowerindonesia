import React, { useEffect } from 'react'
import SearchFilter from '../../components/atoms/SearchFilter'
import AllAboutBook from '../../components/organisms/AllAboutBooks'
import Footer from '../../components/organisms/Footer'
import Navbar from '../../components/organisms/Navbar'
import Reviews from '../../components/organisms/Reviews'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import { getBuku } from '../../store/features/bukuSlice'





const AllAboutBooks = ({ buku }: any) => {
    console.log(buku)
    const dataBuku = useAppSelector((state) => state.buku.data)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getBuku());
    }, [])

    return (
        <>
            <Navbar active='All About Books' />
            <div className='bg-body-doodle bg-contain bg-repeat w-full'>
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
                        <AllAboutBook dataBuku={dataBuku} />
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
    const response = await fetch('http://localhost:4500/api/buku')
    const data = await response.json();
    const datas = data.data
    return {
        props: {
            buku: datas
        }
    }
}


export default AllAboutBooks