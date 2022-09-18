import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProjectCard from "../../molecules/ProjectCard";

export default function Projects() {
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

  const [items, setItems] = useState([]);

  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const total = projectsData.length;
      setPageCount(total / 5 + 1);

      setItems(projectsData[0]);
    };

    getData();
  }, []);

  const fetchData = async (currentPage) => {
    const data = projectsData[currentPage - 1];
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
          <ProjectCard
            key={item.id}
            id={item.id}
            thumbnail={item.thumbnail}
            name={item.name}
            location={item.location}
            date={item.date}
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
