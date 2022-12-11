import React, { SyntheticEvent, useState } from 'react'
const Cookie = require('js-cookie')


const GaleryForm = () => {
    const token = Cookie.get("token");
    const [image, setImage] = useState('https://fakeimg.pl/350x200/')
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
            const response = await fetch('http://localhost:4500/api/galery', {
                method: "POST",
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                body: formData
            })
            const res = await response.json;
            console.log(res);
        } catch (err: any) {
            console.log('ERROR: ', err)
        }
    }

    return (
        <div className='text-black flex flex-col gap-5'>
            <div >
                <img className='w-[400px]' src={image} alt="" />
            </div>
            <input type="file" onChange={handleUploadImage} />
            <button className='text-white px-4 py-2 rounded-lg bg-main-green w-fit' onClick={handleSubmit}>submit gambar</button>
        </div>
    )
}

export default GaleryForm