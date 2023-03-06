import Head from 'next/head'
import React from 'react'
import ArticleComponent from '../../components/organisms/Article'
import Navbar from '../../components/organisms/Navbar'

const Article = () => {
    return (
        <>
            <Head>
                <title>Literacy Power | Article</title>
                <meta
                    name="description"
                    content="Project-project yang dijalankan oleh Literacy Power."
                />
            </Head>
            <Navbar active='Article' />
            <div className="w-full bg-body-doodle bg-contain bg-repeat py-7 lg:pb-20">
                <div className="w-11/12 md:w-10/12 mx-auto">
                    <h1 className="text-title3 my-2 lg:my-12 font-bold font-ptserif text-center text-main-green">
                        Article
                    </h1>
                    <div>
                        <ArticleComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Article