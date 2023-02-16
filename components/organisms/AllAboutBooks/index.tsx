import React, { useState, useEffect } from 'react'
import ReactPaginate from "react-paginate";
import AllAboutBooksCard from '../../molecules/AllAboutBooksCard';
import ProjectCard from '../../molecules/ProjectCard';
import Link from 'next/link'
import axios from 'axios'
import { useAppSelector } from '../../../utils/hooks';




const AllAboutBook = ({ dataBuku }: any) => {
    const query = useAppSelector((state) => state.buku.query)
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const fetchData = async () => {
        const response = await axios.get(`http://localhost:4500/api/buku?page=${pageNumber}`);
        const data = await response.data.data
        setData(data);
    };
    useEffect(() => {
        fetchData();
    }, [pageNumber]);

    const filteredData = data.filter((item: any) => {
        return item.judul.toLowerCase().includes(query.toLowerCase());
    });

    return (
        <>
            <div>
                {filteredData.length > 0 ? (
                    filteredData.map((item: any, index: any) => {

                        return (
                            <AllAboutBooksCard
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
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                pageCount={2}
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


}

export default AllAboutBook