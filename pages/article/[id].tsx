import React from 'react'
import Navbar from '../../components/organisms/Navbar'
import Image from 'next/image'
import Footer from '../../components/organisms/Footer'
import Review from '../reviews'
import Reviews from '../../components/organisms/Reviews'

const ArticleSinglePage = ({ article }: any) => {
  console.log(article)
  const dateStr = article.createdAt;
  const date = new Date(dateStr);
  const dayOfMonth = date.getDate();
  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
  const year = date.getFullYear();
  const formattedDate = `${dayOfMonth} ${month} ${year}`;
  {/* <div dangerouslySetInnerHTML={{ __html: article.content }}></div> */ }
  return (
    <div>
      <Navbar active='Article' />
      <div className='px-20 pb-16 font-ptserif'>
        <div className='Heading text-center py-16 flex flex-col gap-2 lg:text-xl'>
          <p className='text-main-orange font-medium'>Published {formattedDate}</p>
          <h1 className='text-2xl lg:text-5xl font-bold text-main-green'>{article.title}</h1>
          <p className='text-main-orange font-medium lg:text-xl'>by {article.author}</p>
        </div>
        <div className="max-w-6xl md:w-[800px] lg:w-full mx-auto mb-20">
          <img src={`https://api.literacypowerid.com/images/${article.coverUrl}`} className="w-full h-auto rounded-3xl " alt=''/>
        </div>
        <div className='max-w-[1000px] mx-auto text-justify' dangerouslySetInnerHTML={{ __html: article.content }}></div>
      </div>
      <Reviews />
      <Footer />
    </div>
  )
}



export const getServerSideProps = async ({ query }: any) => {
  console.log(query)
  const res = await fetch(`https://api.literacypowerid.com/api/article/${query.id}`);
  const result = await res.json();
  return {
    props: {
      article: result.data[0]
    }
  }
}





export default ArticleSinglePage