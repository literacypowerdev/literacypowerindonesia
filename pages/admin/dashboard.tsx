import cookies from 'next-cookies'

export const getServerSideProps = async (context: any) => {
  const allCookies = cookies(context);
  if (!allCookies.token)
    return {
      redirect: {
        permanent: true,
        destination: '/admin/login'
      }
    }
  const bukuReq = await fetch('http://localhost:4500/api/buku', {
    headers: {
      'Authorization': 'Bearer ' + allCookies.token
    }
  });
  const buku = await bukuReq.json();
  console.log(buku)

  return {
    props: {
      allBuku: buku.data
    }
  }
}

interface allBukuProps {
  
}

const Dashboard = ({ allBuku }: any) => {

  return (
    <div className='p-5'>
      <div className='font-bold'>
        <h1>AllAboutBooks</h1>
      </div>
      {allBuku.map((item: any) => {
        return (
          <ul key={item.id}>
            <li>{item.judul}</li>
            <li>{item.genre}</li>
            <li>{item.ringkasan}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default Dashboard