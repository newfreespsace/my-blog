'use client';

import { useRef } from 'react';

export default function AddBlog({ params }) {
  const titleInputRef = useRef();
  const contentInputRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = titleInputRef.current.value;
    const content = contentInputRef.current.value;

    console.log(title, content);

    const res = await fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <h1>{`这里是新增blog页面`}</h1>

      <form onSubmit={handleSubmit}>
        <label>
          标题
          <input ref={titleInputRef} />
        </label>
        <label>
          正文
          <input type="text" ref={contentInputRef} />
        </label>
        <button type="submit">Add Blog</button>
      </form>
    </>
  );
}
