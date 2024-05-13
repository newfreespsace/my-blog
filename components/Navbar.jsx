import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="ui container">
      <div className="ui large top fixed hidden menu">
        <div className="ui container">
          <Link className="active item" href="/">
            主页
          </Link>
          <a className="item">Work</a>
          <a className="item">Company</a>
          <a className="item">Careers</a>
          <div className="right menu">
            <div className="item">
              <Link
                className="ui button"
                style={{ marginRight: '0.5em' }}
                href="/login"
              >
                登录
              </Link>
              <Link className="ui primary button" href="/signup">
                注册
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
