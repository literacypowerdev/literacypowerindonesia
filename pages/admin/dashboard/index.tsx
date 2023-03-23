import cookies from 'next-cookies'
import { useEffect, useState } from 'react';
import Layout from '../../../components/admin/layout';
import { useAppSelector } from '../../../utils/hooks';
import { unauthPageReverse } from '../../../utils/unauthPage';
const Cookie = require('js-cookie')
import Router from 'next/router'

export const getServerSideProps = async (context: any) => {
    const allCookies = cookies(context);
    unauthPageReverse(context);

    const bukuReq = await fetch('https://api.literacypowerid.com/api/buku', {
        headers: {
            'Authorization': 'Bearer ' + allCookies.token
        }
    });
    const buku = await bukuReq.json();
    return {
        props: {
            allBuku: buku.data,
            allCookies

        }
    }
}

const Dashboard = ({ allBuku, allCookies }: any) => {
    const loginToken = useAppSelector(state => state.login.token)
    const kuki = Cookie.get('token')
    // useEffect(() => {
    //     if(kuki !== loginToken) {
    //         Router.push('/admin/login')
    //     } else {
    //         console.log('sama cu')
    //     }
    // },[])

    
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