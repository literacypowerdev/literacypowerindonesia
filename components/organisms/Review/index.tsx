import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProjectCard from "../../molecules/ProjectCard";
import ReviewCard from "../../molecules/ReviewCard";






export default function ReviewList() {
  const reviewData = [
    [
      {
        id: 1,
        name: "Adin",
        occupation: "Mahasiswa Universitas Pendidikan Indonesia",
        title: "Good job for the team!",
        content:
          "Pengalaman memorable banget bisa mengikuti volunteering bersama Literacy Power, membagikan buku donasi untuk adik-adik di pesantren Para stakeholder pun sangat antusias membantu kami. Tempatnya pun sangat nyaman dan indah, masih hijau meskipun memakan cukup waktu yang lama dari kota.",
      },
      {
        id: 2,
        name: "Adin",
        occupation: "Mahasiswa Universitas Pendidikan Indonesia",
        title: "Good job for the team!",
        content:
          "Pengalaman memorable banget bisa mengikuti volunteering bersama Literacy Power, membagikan buku donasi untuk adik-adik di pesantren Para stakeholder pun sangat antusias membantu kami. Tempatnya pun sangat nyaman dan indah, masih hijau meskipun memakan cukup waktu yang lama dari kota.",
      },
      {
        id: 3,
        name: "Adin",
        occupation: "Mahasiswa Universitas Pendidikan Indonesia",
        title: "Good job for the team!",
        content:
          "Pengalaman memorable banget bisa mengikuti volunteering bersama Literacy Power, membagikan buku donasi untuk adik-adik di pesantren Para stakeholder pun sangat antusias membantu kami. Tempatnya pun sangat nyaman dan indah, masih hijau meskipun memakan cukup waktu yang lama dari kota.",
      },
    ],
    [
      {
        id: 4,
        name: "Adin",
        occupation: "Mahasiswa Universitas Pendidikan Indonesia",
        title: "Good job for the team!",
        content:
          "Pengalaman memorable banget bisa mengikuti volunteering bersama Literacy Power, membagikan buku donasi untuk adik-adik di pesantren Para stakeholder pun sangat antusias membantu kami. Tempatnya pun sangat nyaman dan indah, masih hijau meskipun memakan cukup waktu yang lama dari kota.",
      },
      {
        id: 5,
        name: "Adin",
        occupation: "Mahasiswa Universitas Pendidikan Indonesia",
        title: "Good job for the team!",
        content:
          "Pengalaman memorable banget bisa mengikuti volunteering bersama Literacy Power, membagikan buku donasi untuk adik-adik di pesantren Para stakeholder pun sangat antusias membantu kami. Tempatnya pun sangat nyaman dan indah, masih hijau meskipun memakan cukup waktu yang lama dari kota.",
      },
    ],
  ];

  const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const fetchData = async () => {
        const response = await axios.get(`http://localhost:4500/api/review`);
        const data = await response.data.data
        setData(data);
    };
    useEffect(() => {
        fetchData();
        console.log(data)
    }, [pageNumber]);

  return (
    <>
      {data.map((item: any) => {
        return (
          <ReviewCard
            key={item.id}
            name={item.username}
            occupation={item.userProfession}
            title="Good job for the team!"
            content={item.testimoni}
          />
        );
      })}

      <ReactPaginate
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
  );
}

