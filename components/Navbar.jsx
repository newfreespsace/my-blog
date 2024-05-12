import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="ui large top fixed hidden menu">
      <div className="ui container">
        <Link className="item" href={'/'}>
          我的博客
        </Link>
        <Link href="/" className="item">
          发布新博客
        </Link>
        <Link href="/" className="item">
          Upcoming Events
        </Link>
      </div>
    </nav>
  );
}
