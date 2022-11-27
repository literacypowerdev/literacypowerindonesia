import React, { useState, useEffect } from 'react'
import ReactPaginate from "react-paginate";
import AllAboutBooksCard from '../../molecules/AllAboutBooksCard';
import ProjectCard from '../../molecules/ProjectCard';
import Link from 'next/link'




const AllAboutBook = () => {
    const booksData = [
        [
            {
                "id": 1,
                "title": "Men Without Women",
                "content": "kumpulan tujuh cerita pendek yang diwarnai oleh berbagai karakter dengan profesi yang berbeda-beda; mulai dari aktor, penulis, dokter kecantikan, ibu rumah tangga biasa sampai pemilik bar. Namun, tujuh kisah ini mempunyai satu benang merah, yaitu bagaimana kehadiran wanita yang sangat...",
                "email": "bspeere1@mail.ru",
                "gender": "Male"
            },
            {
                "id": 2,
                "title": "Men Without Women",
                "content": "kumpulan tujuh cerita pendek yang diwarnai oleh berbagai karakter dengan profesi yang berbeda-beda; mulai dari aktor, penulis, dokter kecantikan, ibu rumah tangga biasa sampai pemilik bar. Namun, tujuh kisah ini mempunyai satu benang merah, yaitu bagaimana kehadiran wanita yang sangat...",
                "email": "bspeere1@mail.ru",
                "gender": "Male"
            },
            {
                "id": 3,
                "title": "Men Without Women",
                "content": "bukadikit kumpulan tujuh cerita pendek yang diwarnai oleh berbagai karakter dengan profesi yang berbeda-beda; mulai dari aktor, penulis, dokter kecantikan, ibu rumah tangga biasa sampai pemilik bar. Namun, tujuh kisah ini mempunyai satu benang merah, yaitu bagaimana kehadiran wanita yang sangat...",
                "email": "bspeere1@mail.ru",
                "gender": "Male"
            },
            {
                "id": 4,
                "title": "Men Without Women",
                "content": "kumpulan tujuh cerita pendek yang diwarnai oleh berbagai karakter dengan profesi yang berbeda-beda; mulai dari aktor, penulis, dokter kecantikan, ibu rumah tangga biasa sampai pemilik bar. Namun, tujuh kisah ini mempunyai satu benang merah, yaitu bagaimana kehadiran wanita yang sangat...",
                "email": "bspeere1@mail.ru",
                "gender": "Male"
            },
            {
                "id": 5,
                "title": "Men Without Women",
                "content": "kumpulan tujuh cerita pendek yang diwarnai oleh berbagai karakter dengan profesi yang berbeda-beda; mulai dari aktor, penulis, dokter kecantikan, ibu rumah tangga biasa sampai pemilik bar. Namun, tujuh kisah ini mempunyai satu benang merah, yaitu bagaimana kehadiran wanita yang sangat...",
                "email": "bspeere1@mail.ru",
                "gender": "Male"
            },
            {
                "id": 6,
                "title": "Men Without Women",
                "content": "bukadikit kumpulan tujuh cerita pendek yang diwarnai oleh berbagai karakter dengan profesi yang berbeda-beda; mulai dari aktor, penulis, dokter kecantikan, ibu rumah tangga biasa sampai pemilik bar. Namun, tujuh kisah ini mempunyai satu benang merah, yaitu bagaimana kehadiran wanita yang sangat...",
                "email": "bspeere1@mail.ru",
                "gender": "Male"
            }
        ]
    ];

    const [items, setItems] = useState<any>([]);

    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        const getData = async () => {
            const total = booksData.length;
            setPageCount(total / 5 + 1);

            setItems(booksData[0]);
        };

        getData();
    }, []);

    const fetchData = async (currentPage: any) => {
        const data = booksData[currentPage - 1];
        return data;
    };

    const handlePageClick = async (data: any) => {
        console.log(data.selected);

        let currentPage = data.selected + 1;
        const dataFromServer = await fetchData(currentPage);
        setItems(dataFromServer);
    };

    return (
        <>
            {items?.map((item: any) => {
                return (
                    
                        <AllAboutBooksCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            content={item.content}
                            email={item.email}
                            gender={item.gender}
                        />
                );
            })}

            <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
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
    );

}

export default AllAboutBook