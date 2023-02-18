import dynamic from 'next/dynamic';
import { SyntheticEvent, useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
const Cookie = require('js-cookie')
import axios from 'axios';
import { useRouter } from 'next/router'
import withTokenValidation from '../../utils/tokenValidation';

const modules = {
    toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link', 'image'],
        ['clean'],
    ],
};

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})


const Create = () => {
    const CookieToken = Cookie.get('token');
    const router = useRouter();

    const [files, setFiles] = useState<any>('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = async (e: SyntheticEvent) => {
        const data = new FormData();
        data.append('file', files[0]);
        data.append('title', title);
        data.append('author', author);
        data.append('content', content);

        try {
            e.preventDefault();
            const res = await axios.post(
                'http://localhost:4500/api/article',
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${CookieToken}`,
                    },
                }
            );
            router.push('/admin/dashboard/article')
            console.log(res)
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='p-5'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <input className='px-3 py-2 w-fit' type="title" placeholder='title' onChange={(e) => setTitle(e.target.value)} />
                <input className='px-3 py-2 w-fit' type="author" placeholder='author' onChange={(e) => setAuthor(e.target.value)} />
                <p className='text-red-600'>*Wajib Upload Foto</p>
                <input type="file" onChange={(e) => setFiles(e.target.files)} />
                <QuillNoSSRWrapper theme="snow" value={content} onChange={setContent} modules={modules} className='h-[500px] mb-10' />
                <button className='px-3 py-2 bg-main-green text-white w-fit '>Publish</button>
            </form>
        </div>
    )
}

export default withTokenValidation(Create);