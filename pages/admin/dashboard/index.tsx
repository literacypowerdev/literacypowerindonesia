import cookies from 'next-cookies'
import Layout from '../../../components/admin/layout';
import { useAppSelector } from '../../../utils/hooks';

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
    return {
        props: {
            allBuku: buku.data
        }
    }
}

const Dashboard = ({ allBuku }: any) => {
    return (
        <>
            <Layout>
                <div className='font-bold text-black text-lg'>
                    <h1>THIS IS DASHBOARD</h1>
                </div>
            </Layout>
        </>
    )
}

export default Dashboard