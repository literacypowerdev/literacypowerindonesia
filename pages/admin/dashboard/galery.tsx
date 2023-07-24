import React, { useState } from "react";
import Layout from "../../../components/admin/layout";
import axios from "axios";
import cookies from "next-cookies";
import GaleryForm from "../../../components/admin/galeryForm";
const Cookie = require("js-cookie");

const Galery = ({ data }: any) => {
  const [showForm, setShowForm] = useState(false);

  const handleAdd = () => {
    setShowForm((prev) => !prev);
  }

  const cookieToken = Cookie.get("token");
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`https://api.literacypowerid.com/api/galery/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + cookieToken,
        },
      });
      window.location.reload();
    } catch (err) {
      Cookie.remove("token");
    }
  };

  return (
    <Layout>
      <h2 className="text-main-green font-bold text-[2rem] mb-5">Gallery</h2>

      <div className="w-full flex flex-row gap-8">
        <div className="w-3/5 flex flex-col gap-5">
          <div className='flex flex-wrap gap-5 bg-white border border-main-orange rounded-xl p-4'>
          {data &&
            data.map((item: any, index: any) => {
              return (
                <div className="group" key={item.id_galery}>
                  <div className="h-[200px] relative">
                    <div className="bg-slate-800/90 h-full w-full absolute top-0 hidden group-hover:flex flex-col gap-5 items-center justify-center">
                      <h3 className="text-white text-center font-bold">
                        {item.filename}
                      </h3>
                      <div onClick={() => handleDelete(item.id_gallery)} className='bg-red-500 hover:bg-red-600 h-fit w-[90px] text-center py-2 rounded-lg text-white cursor-pointer'>
                        <button>Delete</button>
                      </div>
                    </div>

                    <img
                      src={`https://api.literacypowerid.com/api/images/${item.filename}`}
                      alt=""
                      className="h-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div onClick={handleAdd} className='h-fit text-white rounded-lg bg-main-green hover:bg-dark-green px-5 py-3 w-fit mb-5 cursor-pointer self-end'>
            <button>Add Book</button>
          </div>
        </div>

        <div className='w-2/5'>
          {showForm ? (<GaleryForm />) : ''}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  const allCookies = cookies(context);
  const token = allCookies.token;
  console.log(token);
  try {
    const res = await axios.get(
      "https://api.literacypowerid.com/api/galery/admin",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    const response = await res.data.data;
    return {
      props: {
        data: response,
      },
    };
  } catch (e: any) {
    console.log("ini responnya: ", e.response.status);
    if (e.response.status !== 200) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }
};

export default Galery;
