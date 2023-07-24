import { SyntheticEvent, useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
const Cookie = require('js-cookie');
import axios from 'axios';
import { useRouter } from 'next/router';
import withTokenValidation from '../../utils/tokenValidation';

import CKeditor from '../../components/admin/ckEditor';
import Layout from '../../components/admin/layout';

const Create = () => {
  const CookieToken = Cookie.get('token');
  console.log(CookieToken)
  const router = useRouter();
  const [editorLoaded, setEditorLoaded] = useState(false);
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
      console.log(title)
      console.log(author)
      console.log(content)
      const res = await axios.post(
        'https://api.literacypowerid.com/api/article',
        data,
        {
          headers: {
            Authorization: `Bearer ${CookieToken}`,
          },
        }
      );
      router.push('/admin/dashboard/article');
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileChange = (e: any) => {
    const selectedFiles = e.target.files;
    setFiles(selectedFiles);
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <Layout>
      <h2 className="ml-10 mt-10 text-main-green font-bold text-[2rem] mb-5">Article Form</h2>
      <div className="m-10 p-6 rounded-lg bg-main-orange">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className='flex flex-col gap-1'>
            <label>Title</label>
            <input className="py-2 rounded-md px-2 text-main-blue" type="title" placeholder='Mengenal Writer’s Block yang Sering Dialami Penulis' onChange={(e) => setTitle(e.target.value)} required/>
          </div>

          <div className='flex flex-col gap-1'>
            <label>Author</label>
            <input className="py-2 rounded-md px-2 text-main-blue" type="author" placeholder='Literacy Power Indonesia' onChange={(e) => setAuthor(e.target.value)} required/>
          </div>

          <div className='flex flex-col gap-1'>
            <label>Image</label>
            <input className="block w-full rounded-md cursor-pointer bg-white text-main-blue py-1" type="file" placeholder='Image file' onChange={handleFileChange} required/>
          </div>

          <div className='flex flex-col gap-1 text-main-blue'>
            <label>Content</label>
            <CKeditor
              value=''
              name="description"
              onChange={(data: any) => {
                setContent(data);
              }}
              editorLoaded={editorLoaded}
            />
          </div>
          <button type="submit" className='py-3 bg-main-green hover:bg-dark-green text-white rounded-lg mt-5 px-5 w-fit self-end'>Publish</button>
        </form>
      </div>
    </Layout>
  );
};

export default withTokenValidation(Create);
