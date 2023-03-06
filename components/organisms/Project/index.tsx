import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProjectCard from "../../molecules/ProjectCard";
import { animateScroll as scroll } from 'react-scroll';

export default function Projects({ children }: any) {
  const handleScrollToTop = () => {
    scroll.scrollToTop({
      duration: 150
    });
  };

  const projectsData = [
    [
      {
        id: 1,
        thumbnail: "/images/fotoslider1.png",
        name: "Dari Donasi untuk Literasi",
        location: "Cikarang",
        date: "27 November 2021",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus dui, varius non quam in, viverra luctus lorem. Phasellus tincidunt placerat lectus sit amet venenatis. Maecenas tempus risus ac lectus laoreet, et laoreet massa ultricies. Aliquam nec odio ac arcu auctor rutrum. Etiam nec nibh eros. Nulla enim ante, vulputate eu diam quis, aliquet feugiat diam. Nullam auctor egestas arcu, suscipit ultrices nunc porta id.",
      },
      {
        id: 2,
        thumbnail: "/images/fotoslider2.png",
        name: "Peduli Literasi",
        location: "Bogor",
        date: "3 - 6 Februari 2022",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus dui, varius non quam in, viverra luctus lorem. Phasellus tincidunt placerat lectus sit amet venenatis. Maecenas tempus risus ac lectus laoreet, et laoreet massa ultricies. Aliquam nec odio ac arcu auctor rutrum. Etiam nec nibh eros. Nulla enim ante, vulputate eu diam quis, aliquet feugiat diam. Nullam auctor egestas arcu, suscipit ultrices nunc porta id.",
      },
      {
        id: 3,
        thumbnail: "/images/fotoslider1.png",
        name: "Dari Donasi untuk Literasi",
        location: "Cikarang",
        date: "27 November 2021",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus dui, varius non quam in, viverra luctus lorem. Phasellus tincidunt placerat lectus sit amet venenatis. Maecenas tempus risus ac lectus laoreet, et laoreet massa ultricies. Aliquam nec odio ac arcu auctor rutrum. Etiam nec nibh eros. Nulla enim ante, vulputate eu diam quis, aliquet feugiat diam. Nullam auctor egestas arcu, suscipit ultrices nunc porta id.",
      },
      {
        id: 4,
        thumbnail: "/images/fotoslider1.png",
        name: "Dari Donasi untuk Literasi",
        location: "Cikarang",
        date: "27 November 2021",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus dui, varius non quam in, viverra luctus lorem. Phasellus tincidunt placerat lectus sit amet venenatis. Maecenas tempus risus ac lectus laoreet, et laoreet massa ultricies. Aliquam nec odio ac arcu auctor rutrum. Etiam nec nibh eros. Nulla enim ante, vulputate eu diam quis, aliquet feugiat diam. Nullam auctor egestas arcu, suscipit ultrices nunc porta id.",
      },
      {
        id: 5,
        thumbnail: "/images/fotoslider1.png",
        name: "Dari Donasi untuk Literasi",
        location: "Cikarang",
        date: "27 November 2021",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus dui, varius non quam in, viverra luctus lorem. Phasellus tincidunt placerat lectus sit amet venenatis. Maecenas tempus risus ac lectus laoreet, et laoreet massa ultricies. Aliquam nec odio ac arcu auctor rutrum. Etiam nec nibh eros. Nulla enim ante, vulputate eu diam quis, aliquet feugiat diam. Nullam auctor egestas arcu, suscipit ultrices nunc porta id.",
      },
    ],
    [
      {
        id: 6,
        thumbnail: "/images/fotoslider1.png",
        name: "Dari Donasi untuk Literasi",
        location: "Cikarang",
        date: "27 November 2021",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus dui, varius non quam in, viverra luctus lorem. Phasellus tincidunt placerat lectus sit amet venenatis. Maecenas tempus risus ac lectus laoreet, et laoreet massa ultricies. Aliquam nec odio ac arcu auctor rutrum. Etiam nec nibh eros. Nulla enim ante, vulputate eu diam quis, aliquet feugiat diam. Nullam auctor egestas arcu, suscipit ultrices nunc porta id.",
      },
      {
        id: 7,
        thumbnail: "/images/fotoslider1.png",
        name: "Dari Donasi untuk Literasi",
        location: "Cikarang",
        date: "27 November 2021",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus dui, varius non quam in, viverra luctus lorem. Phasellus tincidunt placerat lectus sit amet venenatis. Maecenas tempus risus ac lectus laoreet, et laoreet massa ultricies. Aliquam nec odio ac arcu auctor rutrum. Etiam nec nibh eros. Nulla enim ante, vulputate eu diam quis, aliquet feugiat diam. Nullam auctor egestas arcu, suscipit ultrices nunc porta id.",
      },
      {
        id: 8,
        thumbnail: "/images/fotoslider1.png",
        name: "Dari Donasi untuk Literasi",
        location: "Cikarang",
        date: "27 November 2021",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus dui, varius non quam in, viverra luctus lorem. Phasellus tincidunt placerat lectus sit amet venenatis. Maecenas tempus risus ac lectus laoreet, et laoreet massa ultricies. Aliquam nec odio ac arcu auctor rutrum. Etiam nec nibh eros. Nulla enim ante, vulputate eu diam quis, aliquet feugiat diam. Nullam auctor egestas arcu, suscipit ultrices nunc porta id.",
      },
    ],
  ];
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const fetchData = async () => {
    const response = await axios.get(`http://localhost:4500/api/article/pagination?page=${pageNumber}&table=proyek&pageSize=3`);
    setData(response.data);
    setLoading(false)

  };
  useEffect(() => {
    fetchData();
  }, [pageNumber]);
  
  return (
    <>
      {loading ? (
        <div className='text-center'>
          <h1>Loading...</h1>
        </div>
      ) : (
        data.length > 0 && !loading ? (
          data.map((item: any) => {
            const dateStr = item.tanggal;
            const date = new Date(dateStr);
            const dayOfMonth = date.getDate();
            const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
            const year = date.getFullYear();
            const formattedDate = `${dayOfMonth} ${month} ${year}`;
            return (
              <><ProjectCard
                key={item.id}
                id={item.id}
                thumbnail={item.dokumentasi}
                name={item.nama}
                location={item.lokasi}
                date={formattedDate}
                content={item.content} />



              </>
            );
          })
        ) : ''
      )}
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
  );
}
