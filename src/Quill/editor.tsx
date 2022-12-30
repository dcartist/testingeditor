
import React, { useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
export default function Editor() {
    const [value, setValue] = useState('');
    console.log(value)
    console.log(typeof value)
  return (
    <div>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  )
}
