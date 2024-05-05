import Link from 'next/link';
export default function BlogsList() {
  return (
    <>
      <h3>
        <Link href="/blog/1">标题：今夕何夕</Link>
        发布时间：2024-5-3
        <Link href="editBlog/1">编辑</Link>
        <Link href="deleteBlog/1">删除</Link>
      </h3>
      <h3>
        <Link href="/blog/2">标题：今夕何夕</Link>
        发布时间：2024-5-3
        <Link href="editBlog/2">编辑</Link>
        <Link href="deleteBlog/2">删除</Link>
      </h3>
      <h3>
        <Link href="/blog/3">标题：今夕何夕</Link>
        发布时间：2024-5-3
        <Link href="editBlog/3">编辑</Link>
        <Link href="deleteBlog/3">删除</Link>
      </h3>
    </>
  );
}
