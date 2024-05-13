'use client';
import { useRef } from 'react';

export default function SignUp() {
  const username = useRef();
  const userpassword = useRef();

  const handleSubmit = () => {};

  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column" style={{ maxWidth: '450px' }}>
        <h2 className="ui teal image header">
          <div className="content">Sign up your account</div>
        </h2>
        <form className="ui large form" onSubmit={handleSubmit}>
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input
                  type="text"
                  name="email"
                  placeholder="E-mail address"
                  ref={username}
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={userpassword}
                />
              </div>
            </div>
            <div className="ui fluid large teal submit button">Sign Up</div>
          </div>

          <div className="ui error message"></div>
        </form>
      </div>
    </div>
  );
}
