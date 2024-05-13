import Link from 'next/link';

export default async function BlogsList() {
  const getAllBlogs = async () => {
    const res = await fetch(`${process.env.domain}/api/blogs`, {
      cache: 'no-store',
    });
    return await res.json();
  };

  const { blogs } = await getAllBlogs();

  return (
    <div role="list" className="ui divided relaxed list">
      {blogs.map((blog) => (
        <div className="ui text container" key={blog._id}>
          <div className="ui positive message" style={{ marginTop: '20px' }}>
            <Link className="header" href={`/blog/${blog._id}`}>
              {blog.title}
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetu ........
            </p>
            <p className="description">
              Updated at{' '}
              <span>{`${blog.createdAt
                .split('T')[0]
                .slice(5, 10)} ${blog.createdAt
                .split('T')[1]
                .slice(0, 5)}`}</span>{' '}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
