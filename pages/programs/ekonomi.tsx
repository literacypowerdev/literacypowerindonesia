import React, { useState, useEffect } from 'react'
import Button from '../../components/atoms/Button'
import Navbar from '../../components/organisms/Navbar'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import type { AppDispatch, RootState } from '../../store'
import { getDampak } from '../../store/dampakData/dampakSlice'
import VerticalSlider from '../../components/molecules/VerticalSlider'
import LiteractFAQ from '../../components/organisms/LiteracyFAQ'
import Logo from '../../public/icon/logo.svg'
import Image from 'next/image'
import Footer from '../../components/organisms/Footer'
import Newsletter from '../../components/organisms/Newsletter'
import Review from '../reviews'
import Reviews from '../../components/organisms/Reviews'


const ekonomi = () => {
    const headingContent = 'Literacy Power memberikan ruang bagi generasi muda untuk mengimplementasikan program pendidikan sesuai keahlian yang dimiliki. Relawan akan memiliki pengalaman dalam mengajar anak-anak dan memberikan bantuan berupa edukasi maupun mentoring di daerah yang berkekurangan. Tidak hanya itu, kemampuan untuk mengembangkan karakter pribadi dan membuka perspektif baru bisa didapatkan melalui program kerelawanan ini.'
    // const dispatch = useAppDispatch();
    // useEffect(() => {
    //     dispatch(getDampak());
    // },[])

    let siapayangcocok =
        'Literacy Power membutuhkan pribadi yang berjiwa sosial dan memiliki passion untuk membantu sesama. Selain itu, seseorang yang bisa beradaptasi, menyukai anak-anak, dan memiliki keahlian di bidang tertentu (mengajar bahasa inggris, matematika, atau keterampilan hidup, dll).'
    const FAQContent = [
        {
            title: "Bagaimana Kamu Bisa Berdampak",
            details: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, error.'
            ],
        },
        {
            title: "Apa Saja Syarat Menjadi Relawan",
            details: [
                'Lorem ipsum dolor sit amet consectetur'
            ],
        },
        {
            title: "Contoh Jadwal Relawan",
            details: [
                'Lorem ipsum dolor sit amet consectetur'
            ],
        },
        {
            title: "Berapa Biaya Mengikuti Kegiatan Relawan?",
            details: [
                'Lorem ipsum dolor sit amet consectetur'
            ],
        },
        {
            title: "Apa Saja Benefit Yang Didapat?",
            details: [
                'Lorem ipsum dolor sit amet consectetur'
            ],
        },
    ];

    return (
        <>
            <Navbar active='Programs' />
            <div className='m-auto mt-16 xl:text-xl font-ptserif'>
                <div className='container m-auto heading flex flex-col-reverse md:flex-row md:w-[1300px] lg:w-10/12'>
                    <div className='left lg:pr-44 md:pr-24  flex flex-col gap-3'>
                        <h1 className='text-2xl font-bold'>
                            Program Ekonomi
                        </h1>
                        <p className='text-justify text-xl'>
                            {headingContent}
                        </p>
                        <div className='button w-full md:w-80 font-semibold'>
                            {/* button */}
                            <Button text='Lihat Program lainnya' border='full' size='normal' />
                        </div>
                    </div>
                    <div className='right'>
                        {/* vertical slider */}
                        <VerticalSlider />
                    </div>
                </div>
                <br />
                <div className='font-ptserif'>
                    {/* siapa yang cocok dalam program ini */}
                    <div className='py-10 flex flex-col-reverse md:flex-row text-white items-center justify-around bg-main-orange gap-2'>
                        <div className='content lg:w-[78%] w-10/12 flex flex-col md:flex-row items-center gap-3 justify-between'>
                            <div className='left flex flex-col gap-2 w-8/12'>
                                <h1 className='font-bold text-xl'>Siapa yang cocok dalam program ini?</h1>
                                <p className='!text-justify'>{siapayangcocok}</p>
                            </div>
                            <div className='right'>
                                <Image src={Logo} width={150} height={150} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative'>

                    <img src='/icon/doodle-bottom-left.svg'
                        alt=""
                        className='hidden md:block bottom-0 absolute'
                    />
                    <img src='/icon/doodle-bottom-right.svg'
                        alt=""
                        className='hidden md:block bottom-0 right-0 absolute'
                    />
                    <img src='/icon/doodle-top-left.svg'
                        alt=""
                        className='hidden md:block  top-0 absolute w-40'
                    />
                    <img src='/icon/doodle-top-right.svg'
                        alt=""
                        className='hidden md:block top-0 right-0 absolute w-40'
                    />
                    <div className='literacyFAQ container m-auto pt-16'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-xl font-semibold z-10'>
                                Literacy Power F.A.Q
                            </h1>
                            <p className='text-justify w-full'>
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est a neque ratione?
                            </p>
                            <div className='literacyfAQ mb-[50vh] mt-4'>
                                <LiteractFAQ title={FAQContent[0].title} details={FAQContent[0].details} />
                                <LiteractFAQ title={FAQContent[1].title} details={FAQContent[1].details} />
                                <LiteractFAQ title={FAQContent[2].title} details={FAQContent[2].details} />
                                <LiteractFAQ title={FAQContent[3].title} details={FAQContent[3].details} />
                                <LiteractFAQ title={FAQContent[4].title} details={FAQContent[4].details} />
                            </div>



                        </div>
                    </div>
                </div>


            </div>
            <Reviews />
            <Footer />




        </>
    )
}

export default ekonomi