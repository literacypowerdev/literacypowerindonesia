import React, { SyntheticEvent, useState } from 'react';
import { postReview } from '../../store/features/reviewSlice';
import { useAppDispatch } from '../../utils/hooks';

const ReviewForm = () => {
    const dispatch = useAppDispatch();
    const [reviewData, setReviewData] = useState({
        username: "",
        userProfession: "",
        title: "",
        testimoni: ""
    });

    const handleChange = (e: { target: HTMLInputElement } | any) => {
        setReviewData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    };

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await dispatch(postReview(reviewData));
    };

    const inputStyles = 'py-2 rounded-md px-2 text-main-blue';
    
    return (
        <div className='bg-main-orange w-full p-5 rounded-lg'>
            <h2 className='text-[1.6rem] font-bold mb-5'>Review Form</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className='flex flex-col gap-1'>
                    <label>Name</label>
                    <input className={inputStyles} type="text" placeholder='Adin' name='username' onChange={handleChange} required/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label>Profession</label>
                    <input className={inputStyles} type="text" placeholder='Mahasiswa Universitas Pendidikan Indonesia' name='userProfession' onChange={handleChange} required/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label>Title</label>
                    <input className={inputStyles} type="text" placeholder='Good job for the team!' name='title' onChange={handleChange} required/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label>Review</label>
                    <textarea className="py-2 rounded-lg px-2 h-60 w-full text-main-blue" placeholder='Pengalaman memorable banget bisa mengikuti volunteering bersama Literacy Power, membagikan buku donasi untuk adik-adik di pesantren Para stakeholder pun sangat antusias membantu kami. Tempatnya pun sangat nyaman dan indah, masih hijau meskipun memakan cukup waktu yang lama dari kota.' name='testimoni' onChange={handleChange} required/>
                </div>
                <button type='submit' className='py-3 bg-main-green text-white rounded-lg mt-5'>Add</button>
            </form>
        </div>
    )
}

export default ReviewForm;