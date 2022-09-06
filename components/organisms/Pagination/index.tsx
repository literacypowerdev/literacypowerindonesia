import React, { useState, useEffect } from 'react'
import contoh from './contohFile.json';
import ReactPaginate from 'react-paginate';
import axios from 'axios'



const Pagination = () => {
    const PER_PAGE = 10;
    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([]);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [currentPage]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        await axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err)
            });
    }
    const handlePageClick = ({ selected: selectedPage }: any) => {
        console.log("selectedPage", selectedPage);
        setCurrentPage(selectedPage);
    }
    const offset = currentPage * PER_PAGE;
    const currentPageData = Array.from(data).slice(offset, offset + PER_PAGE).map((result, index) =>
        <div key={index} className='font-bold text-center'  >
            <h1>{result.title}</h1>
        </div>)
    const pageCount = Math.ceil(data.length / PER_PAGE);













    return (
        <div className="App">
            



            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                containerClassName={"flex items-center justify-center gap-5 p-4 text-white w-fit m-auto"}
                pageClassName='bg-very-light-orange px-4 py-3 rounded-full flex text-center items-center'
                previousClassName='bg-very-light-orange px-4 py-3 rounded-full'
                nextClassName='bg-very-light-orange px-4 py-3 rounded-full'
                activeClassName='bg-[#DD8D5A]'
            />
        </div>
    );




}

export default Pagination