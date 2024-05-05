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
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>标题</th>
            <th>最后更新时间</th>
            <th>删除</th>
            <th>更新</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id}>
              <td>
                <h3>
                  <Link href="/">{blog.title}</Link>
                </h3>
              </td>
              <td>
                <span>{`${blog.createdAt
                  .split('T')[0]
                  .slice(5, 10)} ${blog.createdAt
                  .split('T')[1]
                  .slice(0, 5)}`}</span>
              </td>
              <td>
                <HiOutlineTrash size={24} />
              </td>
              <td>
                <HiPencilAlt size={24} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
