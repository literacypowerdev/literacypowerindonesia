import { SyntheticEvent, useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
const Cookie = require('js-cookie');
import axios from 'axios';
import { useRouter } from 'next/router';
import withTokenValidation from '../../utils/tokenValidation';
import dynamic from 'next/dynamic';
import CKeditor from '../../components/admin/ckEditor';




const Create = () => {
  const CookieToken = Cookie.get('token');
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
      const res = await axios.post(
        'https://api.literacypowerid.com/api/article',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
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

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          className="px-3 py-2 w-fit"
          type="title"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="px-3 py-2 w-fit"
          type="author"
          placeholder="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <p className="text-red-600">*Wajib Upload Foto</p>
        <input type="file" onChange={(e) => setFiles(e.target.files)} />

        <div>
          <CKeditor
            value=''
            name="description"
            onChange={(data: any) => {
              setContent(data);
            }}
            editorLoaded={editorLoaded}
          />
          {JSON.stringify(content)}
        </div>
        <button className="px-3 py-2 bg-main-green text-white w-fit">Publish</button>
      </form>
    </div>
  );
};

export default withTokenValidation(Create);
