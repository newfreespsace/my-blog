'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!newTitle || !description) {
      alert('Title and description are required!');
      return;
    }
    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error('Failed to update topic');
      }
      router.refresh();
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        className=" border border-slate-500 px-8 py-2"
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        className=" border border-slate-500 px-8 py-2"
        type="text"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button className=" bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Edit Topic
      </button>
    </form>
  );
}
