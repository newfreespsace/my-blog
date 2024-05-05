import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href={'/'}>
        <h1>我的博客</h1>
      </Link>
      <Link href={'/addBlog'}>
        <h1>发布新博客</h1>
      </Link>
    </nav>
  );
}
