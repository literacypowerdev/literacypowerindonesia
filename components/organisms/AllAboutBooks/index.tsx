import React, { useState, useEffect, useCallback } from 'react'
import ReactPaginate from "react-paginate";
import axios from 'axios'
import { useAppSelector } from '../../../utils/hooks';
import { animateScroll as scroll } from 'react-scroll';

import AllAboutBooksCard from '../../molecules/AllAboutBooksCard';

interface BookData {
    id: number;
    judul: string;
    ringkasan: string;
    coverUrl: string;
};

const AllAboutBook = () => {
    const handleScrollToTop = () => {
        scroll.scrollToTop({
            duration: 150
        });
    };
    const query = useAppSelector((state) => state.buku.query)
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const fetchData = useCallback(async () => {
        const response = await axios.get(`https://api.literacypowerid.com/api/article/pagination?page=${pageNumber}&table=buku&pageSize=5`);
        setData(response.data);
      }, [pageNumber])
      
      useEffect(() => {
        fetchData();
      }, [fetchData, pageNumber]);
    
    const filteredData = data && data.filter((item: BookData) => {
        if (query === '') {
            return item.judul.toLowerCase().includes(query.toLowerCase());
        } else {
            return item.judul.toLowerCase().includes(query.toLowerCase());
        }

    });

    console.log(data);

    return (
        <>
            <div>
                {filteredData?.length > 0 ? (
                    filteredData.map((item: BookData, index: number) => {
                        return (
                            <AllAboutBooksCard
                                key={index}
                                id={item.id}
                                title={item.judul}
                                content={item.ringkasan}
                                image={item.coverUrl}
                            />
                        )
                    })
                ) : (
                    <div className='text-center'>
                        <h1>There is no data</h1>
                    </div>
                )}



            </div>
            <ReactPaginate
                onClick={handleScrollToTop}
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                pageCount={3}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={(data) => {
                    setPageNumber(data.selected);
                }}

                containerClassName={"flex gap-2 mt-2 lg:mt-12 justify-center"}
                activeClassName={"underline bg-main-orange "}
                pageClassName={
                    "w-7 h-7 bg-very-light-orange rounded-lg hover:bg-main-orange"
                }
                pageLinkClassName={
                    "text-white font-ptserif w-full h-full flex justify-center items-center"
                }
                previousClassName={
                    "w-7 h-7 bg-very-light-orange rounded-lg hover:bg-main-orange"
                }
                previousLinkClassName={
                    "text-white font-ptserif w-full h-full flex justify-center items-center"
                }
                nextClassName={
                    "w-7 h-7 bg-very-light-orange rounded-lg hover:bg-main-orange"
                }
                nextLinkClassName={
                    "text-white font-ptserif w-full h-full flex justify-center items-center"
                }
                breakClassName={"w-7 h-7"}
                breakLinkClassName={
                    "text-very-light-orange font-ptserif w-full h-full flex justify-center items-center cursor-default"
                }
            />
        </>
    )
};

export default AllAboutBook;