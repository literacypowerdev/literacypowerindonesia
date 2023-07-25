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

    return {
        props: {
            

        }
    }
}

const Dashboard = ({ allBuku, allCookies }: any) => {
    return (
        <>
            <Layout>
                <h1 className='text-main-green font-bold text-[2rem] mb-5'>Dashboard</h1>
            </Layout>
        </>
    )
}

export default Dashboard