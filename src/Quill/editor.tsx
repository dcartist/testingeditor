
import React, { useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
export default function Editor() {
    const [value, setValue] = useState('');
    console.log(value)
    console.log(typeof value)
   const  modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      }
    
      const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]
  return (
    <div>
        <ReactQuill theme="snow" value={value} onChange={setValue}  modules={modules} formats={formats} />
        {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}
    </div>
  )
}
