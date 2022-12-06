import React, { SyntheticEvent, useState } from 'react'

const ReviewForm = () => {

    const [reviewData, setReviewData] = useState({
        username: '',
        testimoni: ''
    })

    const handleChange = (e: SyntheticEvent) => {

    }

    const handleSubmit = async () => {

    }

    const inputStyles = 'py-2 rounded-md px-2'
    const textAreaStyles = 'py-2 rounded-sm px-2 h-60 w-72'
    return (

        <div className='mb-10'>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-very-light-orange p-5 w-fit text-black">
                <input className={inputStyles} type="text" placeholder='name & profession' name='username' onChange={handleChange} />
                <textarea className={textAreaStyles} placeholder='testimoni' name='testimoni' onChange={handleChange} />
                <button type='submit' className='px-4 py-2 bg-main-orange text-white'>Add</button>
            </form>
        </div>



    )
}

export default ReviewForm