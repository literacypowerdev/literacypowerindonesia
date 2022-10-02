import React, { useState, useEffect } from 'react'
import Button from '../../components/atoms/Button'
import Navbar from '../../components/organisms/Navbar'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import type { AppDispatch, RootState } from '../../store'
import { getDampak } from '../../store/dampakData/dampakSlice'
import VerticalSlider from '../../components/molecules/VerticalSlider'

const kesehatan = () => {
    const headingContent = 'Literacy Power memberikan ruang bagi generasi muda untuk mengimplementasikan program kesehatan sesuai keahlian yang dimiliki. Relawan akan memiliki pengalaman dalam mengedukasi masyarakat, memberikan pelayanan kesehatan gratis, dan bagaimana menjaga pola hidup sehat di daerah yang berkekurangan. Tidak hanya itu, kemampuan untuk mengembangkan karakter pribadi dan membuka perspektif baru bisa didapatkan melalui program kerelawanan ini. Diharapkan relawan yang mengikuti bidang ini berasal dari lingkup kesehatan'
    
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getDampak());
    },[])

    return (
        <>
            <Navbar active='Programs' />
            <div className='container m-auto mt-16 xl:text-2xl'>
                <div className='heading flex flex-col-reverse md:flex-row'>
                    <div className='left md:pr-44 flex flex-col gap-3'>
                        <h1 className='text-2xl font-bold'>
                            Program Kesehatan
                        </h1>
                        <p className='text-justify'>
                            {headingContent}
                        </p>
                        <div className='button w-64 font-semibold'>
                            <Button text='Lihat Program lainnya' border='full' size='normal' />
                        </div>
                    </div>
                    <div className='right'>
                        {/* vertical slider */}
                        <VerticalSlider />
                    </div>
                </div>
                <div className=''>
                    {/* siapa yang cocok dalam program ini */}
                </div>
                <br />
                <br />
                <div className='literacyFAQ'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-xl font-semibold'>
                            Literacy Power F.A.Q
                        </h1>
                        <p className='text-justify w-[80%]'>
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        </p>
                        <div className='accordion'>
                            tes redux thunk
                        </div>
                        <div>
                        </div>

                    </div>
                </div>





            </div>


        </>
    )
}

export default kesehatan