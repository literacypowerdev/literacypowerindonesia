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


const kesehatan = () => {
    const headingContent = 'Literacy Power memberikan ruang bagi generasi muda untuk mengimplementasikan program kesehatan sesuai keahlian yang dimiliki. Relawan akan memiliki pengalaman dalam mengedukasi masyarakat, memberikan pelayanan kesehatan gratis, dan bagaimana menjaga pola hidup sehat di daerah yang berkekurangan. Tidak hanya itu, kemampuan untuk mengembangkan karakter pribadi dan membuka perspektif baru bisa didapatkan melalui program kerelawanan ini. Diharapkan relawan yang mengikuti bidang ini berasal dari lingkup kesehatan'

    // const dispatch = useAppDispatch();
    // useEffect(() => {
    //     dispatch(getDampak());
    // },[])

    let siapayangcocok =
        'Literacy Power membutuhkan pribadi yang berjiwa sosial dan memiliki passion untuk membantu sesama. Selain itu, seseorang yang bisa beradaptasi, menyukai anak-anak, dan memiliki keahlian di bidang tertentu (mengajar bahasa inggris, matematika, atau keterampilan hidup, dll).'

    const accorData = {
        judul: {
            judul1: "Bagaimana Kamu Bisa Berdampak?",
            judul2: "Apa Saja Syarat Menjadi Relawan?"
        },
        details: {
            
        }
    }
    return (
        <>
            <Navbar active='Programs' />
            <div className='m-auto mt-16 xl:text-xl font-ptserif'>
                <div className='container m-auto heading flex flex-col-reverse md:flex-row'>
                    <div className='left lg:pr-44 md:pr-24  flex flex-col gap-3'>
                        <h1 className='text-2xl font-bold'>
                            Program Kesehatan
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
                        <div className='left flex flex-col gap-2 w-[60%]'>
                            <h1 className='font-bold text-xl'>Siapa yang cocok dalam program ini?</h1>
                            <p className='!text-justify'>{siapayangcocok}</p>
                        </div>
                        <div className='right'>
                            <Image src={Logo} width={150} height={150} />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className='literacyFAQ container m-auto'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-xl font-semibold'>
                            Literacy Power F.A.Q
                        </h1>
                        <p className='text-justify w-[80%]'>
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        </p>
                        <div className='literacyfAQ mb-[50vh]'>
                            {
                                Object.keys(accorData).map((data, index) => {
                                    return (
                                        <>
                                        
                                        
                                        </>
                                    )
                                })
                            }
                            <LiteractFAQ />
                            <LiteractFAQ />
                            <LiteractFAQ />
                            <LiteractFAQ />
                            <LiteractFAQ />
                        </div>



                    </div>
                </div>

            </div>
            <Reviews />
            <Footer />




        </>
    )
}

export default kesehatan