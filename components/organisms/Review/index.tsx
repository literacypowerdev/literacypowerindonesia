import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { animateScroll as scroll } from "react-scroll";

import ReviewCard from "../../molecules/ReviewCard";

export default function ReviewList() {
  const handleScrollToTop = () => {
    scroll.scrollToTop({
      duration: 150,
    });
  };
  
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const fetchData = useCallback(async () => {
    const response = await axios.get(
      `https://api.literacypowerid.com/api/article/pagination?page=${pageNumber}&table=review&pageSize=5`
    );
    setData(response.data);
  }, [pageNumber]);
  
  useEffect(() => {
    fetchData();
  }, [fetchData, pageNumber]);

  return (
    <>
      {data.length > 0 ? (
        data.map((item: any) => {
          return (
            <ReviewCard
              key={item.id}
              name={item.username}
              occupation={item.userProfession}
              title={item.title}
              content={item.testimoni}
            />
          );
        })
      ) : (
        <div className="text-center">
          <h1>No review yet</h1>
        </div>
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
