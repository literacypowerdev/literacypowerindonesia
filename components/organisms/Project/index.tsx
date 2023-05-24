import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import ReactPaginate from "react-paginate";
import ProjectCard from "../../molecules/ProjectCard";
import { animateScroll as scroll } from 'react-scroll';

export default function Projects({ children }: any) {
  const handleScrollToTop = () => {
    scroll.scrollToTop({
      duration: 150
    });
  };

  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const fetchData = useCallback(async () => {
    const response = await axios.get(`https://api.literacypowerid.com/api/article/pagination?page=${pageNumber}&table=proyek&pageSize=3`);
    setData(response.data);
    setLoading(false);
  }, [pageNumber]);
  
  useEffect(() => {
    fetchData();
  }, [fetchData, pageNumber]);
  

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
            let formattedDate = '';
            if (!isNaN(dayOfMonth)) { // Check if dayOfMonth is a valid number
              const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
              const year = date.getFullYear();
              formattedDate = `${dayOfMonth} ${month} ${year}`;
            }
            const cover = item.image.split('"')[3]
            const imageUrl = 'https://api.literacypowerid.com/images/' + cover
            console.log(imageUrl)
            return (

              <>
                <ProjectCard
                  key={item.id}
                  id={item.id}
                  thumbnail={imageUrl}
                  name={item.nama}
                  location={item.lokasi}
                  date={formattedDate}
                  // date='2023-02-27T17:00:00.000Z'
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
