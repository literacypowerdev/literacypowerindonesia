import React from 'react'
import SearchFilter from '../../components/atoms/SearchFilter'
import AllAboutBook from '../../components/organisms/AllAboutBooks'
import Footer from '../../components/organisms/Footer'
import Navbar from '../../components/organisms/Navbar'
import Reviews from '../../components/organisms/Reviews'

const AllAboutBooks = () => {
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