import React, { useState } from 'react'
import Layout from '../../../components/admin/layout'
const Cookie = require('js-cookie')
import useSWR from 'swr'
import Link from 'next/link'

const Article = () => {

    // fetch with useSWR =============================================
    const CookieToken = Cookie.get('token');
    const url = "http://localhost:4500/api/article"
    const fetcher = async (url: string) => {
        const response = await fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + CookieToken
            }
        })
        const res = await response.json();
        return res.data
    }
    const { data, error } = useSWR([url, CookieToken], fetcher)
    console.log(data)
    // ===============================================================

    const [showForm, setShowForm] = useState(false)
    const handleAdd = () => {
        setShowForm(!showForm);
    }



    const imageUrl = 'http://localhost:4500/images/'


    return (
        <Layout>
            <div className='flex gap-4'>
                <div className='w-fit'>
                    {!data ? <div><h1>loading</h1></div> : data.map((item: any, index: any) => {
                        const justifyClass = `${item.id % 2 != 0 ? "md:flex-row" : "md:flex-row-reverse"}`;
                        const content = item.content
                        return (
                            <div
                                key={index}
                                className={`w-full max-w-[1100px] mx-auto h-fit md:h-fit bg-white shadow-lg my-5 rounded-[20px] overflow-hidden p-4 flex flex-col ${justifyClass} flex gap-3 md:gap-5 transition-all duration-150 ease-in-out group hover:bg-main-green cursor-pointer`}
                            >
                                <img
                                    className="w-full md:w-[250px] h-[200px] md:h-[170px] object-cover rounded-t-[10px] md:rounded-[10px]"
                                    src={`${imageUrl}${item.coverUrl}`}
                                    alt="Thumbnail"
                                />
                                <div className="h-[258px] md:h-fit flex flex-col gap-2 md:gap-0 overflow-hidden ">
                                    <h2 className="font-ptserif text-base group-hover:text-white font-bold text-main-orange transition-all duration-150 ease-in-out">
                                        {item.title}
                                    </h2>
                                    <p className="font-ptserif text-light-orange group-hover:text-white transition-all duration-150 ease-in-out">
                                        {item.author}
                                    </p>
                                    <div className="font-ptserif text-justify text-main-blue group-hover:text-white transition-all duration-150 ease-in-out" dangerouslySetInnerHTML={{ __html: content }} />
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className='w-fit h-fit flex gap-2'>
                    <div onClick={handleAdd} className='font-bold h-fit text-white rounded-lg bg-main-green px-5 py-3 w-fit mb-2 cursor-pointer shadow-md'>
                        <Link href="/admin/create"><button>Create Article</button></Link>
                    </div>
                </div>
            </div>


        </Layout>
    )
}

export default Article