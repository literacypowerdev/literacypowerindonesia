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

  const [items, setItems] = useState([]);

  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const total = reviewData.length;
      setPageCount(total / 5 + 1);

      setItems(reviewData[0]);
    };

    getData();
  }, []);

  const fetchData = async (currentPage) => {
    const data = reviewData[currentPage - 1];
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
      {items.map((item) => {
        return (
          <ReviewCard
            key={reviewData.id}
            name={item.name}
            occupation={item.occupation}
            title={item.title}
            content={item.content}
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
