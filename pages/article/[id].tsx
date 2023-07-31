import useSWR from 'swr';
import { useRouter } from 'next/router';

import Head from "next/head";
import Navbar from '../../components/organisms/Navbar';
import Footer from '../../components/organisms/Footer';
import Reviews from '../../components/organisms/Reviews';

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.data[0];
};

const ArticleSinglePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: article, error } = useSWR(`https://api.literacypowerid.com/api/article/${id}`, fetcher);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!article) {
    return <div>Loading...</div>;
  }

  const date = new Date(article.createdAt);
  const dayOfMonth = date.getDate();
  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
  const year = date.getFullYear();
  const formattedDate = `${dayOfMonth} ${month} ${year}`;

  return (
    <div>
      <Head>
        <title>{article.title}</title>
        <meta
            name="description"
            content="Project-project yang dijalankan oleh Literacy Power."
        />
        <link rel="icon" sizes="192x192" href="/icon/favicon.ico"></link>
      </Head>
      <Navbar active='Article' />
      <div className='px-3 lg:px-20 pb-16 font-ptserif'>
        <div className='Heading text-center py-16 flex flex-col gap-2 lg:text-xl'>
          <p className='text-main-orange font-medium'>Published {formattedDate}</p>
          <h1 className='text-2xl lg:text-5xl font-bold text-main-green'>{article.title}</h1>
          <p className='text-main-orange font-medium lg:text-xl'>by {article.author}</p>
        </div>
        <div className="max-w-5xl w-full lg:w-full mx-auto mb-10 lg:mb-20">
          <img src={`https://api.literacypowerid.com/api/images/${article.coverUrl}`} className="w-full h-auto rounded-lg lg:rounded-3xl" alt='' />
        </div>
        <div className='max-w-[1000px] mx-auto text-justify article' dangerouslySetInnerHTML={{ __html: article.content }}></div>
      </div>
      <Reviews />
      <Footer />
    </div>
  );
};

export default ArticleSinglePage;
