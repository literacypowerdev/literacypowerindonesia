import React, { useState } from "react";
const Cookie = require("js-cookie");
import useSWR, { useSWRConfig } from "swr";
import Link from "next/link";
import axios from "axios";
import withTokenValidation from "../../../utils/tokenValidation";

import Layout from "../../../components/admin/layout";

const Article = () => {
  const CookieToken = Cookie.get("token");
  const [showForm, setShowForm] = useState(false);

  // fetch with useSWR =============================================
  const { mutate } = useSWRConfig();
  const endpoint = "https://api.literacypowerid.com/api/article/admin";
  const fetcher = async (url: string) => {
    const response = await fetch(endpoint, {
      headers: {
        Authorization: "Bearer " + CookieToken,
      },
    });
    const res = await response.json();
    return res.data;
  };
  const { data } = useSWR("article", fetcher);
  if (!data) return <h2>Loading...</h2>;
  // fetch with useSWR =============================================

  // handleDelete ==================================================
  const handleDelete = async (id: any) => {
    try {
      await axios.delete(`https://api.literacypowerid.com/api/article/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + CookieToken,
        },
      });
      mutate("article");
    } catch (err) {
      Cookie.remove("token");
    }
  };
  // handleDelete ==================================================

  const handleAdd = () => {
    setShowForm(!showForm);
  };

  const imageUrl = "https://api.literacypowerid.com/api/images/";

  return (
    <Layout>
      <h1 className="text-main-green font-bold text-[2rem] mb-5">Articles</h1>

      <div className="w-full flex flex-row gap-8">
        <div className="w-3/5 flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            {!data ? (
              <div>
                <h1>Loading</h1>
              </div>
            ) : (
              data.map((item: any, index: any) => {
                const content = item.content.slice(0, 350) + "...";
                return (
                  <div
                    key={item.id}
                    className="w-full max-w-[1100px] h-fit bg-white border border-main-orange rounded-xl p-4 flex flex-col gap-2"
                  >
                    <div className="flex flex-row gap-5 max-h-[204px] overflow-hidden">
                      <img
                        className="object-cover h-[200px]"
                        src={`${imageUrl}${item.coverUrl}`}
                        alt="Thumbnail"
                      />

                      <div className="content flex flex-col gap-2 text-justify">
                        <h2 className="font-bold text-[1.4rem] text-main-orange">
                          {item.title}
                        </h2>
                        <p className="text-main-blue">{item.author}</p>
                        <div
                          className="font-ptserif text-justify text-main-blue group-hover:text-white transition-all duration-150 ease-in-out"
                          dangerouslySetInnerHTML={{ __html: content }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-row gap-2 self-end">
                      <div
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 hover:bg-red-600 h-fit w-[90px] text-center py-2 rounded-lg text-white cursor-pointer"
                      >
                        <button>Delete</button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <Link href="/admin/create">
            <div
              onClick={handleAdd}
              className="h-fit text-white rounded-lg bg-main-green hover:bg-dark-green px-5 py-3 w-fit mb-5 cursor-pointer self-end"
            >
              <button>Add Article</button>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default withTokenValidation(Article);
