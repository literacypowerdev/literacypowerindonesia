import React, { useState, useEffect } from 'react'
import ReactPaginate from "react-paginate";
import AllAboutBooksCard from '../../molecules/AllAboutBooksCard';
import ProjectCard from '../../molecules/ProjectCard';
import Link from 'next/link'




const AllAboutBook = ({ dataBuku }: any) => {
    console.log(dataBuku)

    return (
        <>
            <div>
               {
                dataBuku.map((item: any, index: any) => {
                    return (
                        <div key={index}>
                            <AllAboutBooksCard 
                            id={item.id}
                            title={item.judul}
                            content={item.ringkasan}
                            image={item.coverUrl}
                            />
                        </div>
                    )
                })
               }
            </div>





        </>
    )


}

export default AllAboutBook