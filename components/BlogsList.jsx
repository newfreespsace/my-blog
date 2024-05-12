import Link from 'next/link';
import { HiPencilAlt, HiOutlineTrash } from 'react-icons/hi';

export default async function BlogsList() {
  console.log('aa');
  const getAllBlogs = async () => {
    const res = await fetch(`${process.env.domain}/api/blogs`, {
      cache: 'no-store',
    });
    return await res.json();
  };

  const { blogs } = await getAllBlogs();
  console.log(blogs);

  return (
    <div role="list" class="ui divided relaxed list">
      {blogs.map((blog) => (
        <>
          <div role="listitem" class="item">
            <div class="content">
              <div class="header">
                <Link href={`/blog/${blog._id}`}>{blog.title}</Link>
              </div>
              <p class="description">
                Updated at{' '}
                <span>{`${blog.createdAt
                  .split('T')[0]
                  .slice(5, 10)} ${blog.createdAt
                  .split('T')[1]
                  .slice(0, 5)}`}</span>{' '}
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
