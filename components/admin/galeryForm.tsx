import React, { SyntheticEvent, useState } from 'react'
const Cookie = require('js-cookie')

const GaleryForm = () => {
    const token = Cookie.get("token");
    const [image, setImage] = useState('https://fakeimg.pl/1280x720/')
    const [saveImage, setSaveImage] = useState<any>(null)
    const handleUploadImage = (e: SyntheticEvent | any) => {
        let uploaded = e.target.files[0];
        setImage(URL.createObjectURL(uploaded))
        setSaveImage(uploaded)
    }

    const handleSubmit = async () => {
        let formData = new FormData();
        formData.append("file", saveImage)
        try {
            const response = await fetch('https://api.literacypowerid.com/api/galery', {
                method: "POST",
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                body: formData
            })
            const res = await response.json;
            console.log(res);
            window.location.reload();
        } catch (err: any) {
            console.log('ERROR: ', err)
        }
    }

    return (
        <div className='bg-main-orange w-full p-5 rounded-lg'>
            <h2 className='text-[1.6rem] font-bold mb-5'>Gallery Form</h2>
            
            <div className="flex flex-col gap-2">
                <div>
                    <img className='w-[400px]' src={image} alt="" />
                </div>
                
                <div className='flex flex-col gap-1'>
                    <label>Image</label>
                    <input className="block w-full rounded-md cursor-pointer bg-white text-main-blue p-1" type="file" onChange={handleUploadImage} required/>
                </div>

                <button className='py-3 bg-main-green hover:bg-dark-green text-white rounded-lg mt-5 w-fit px-7' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default GaleryForm