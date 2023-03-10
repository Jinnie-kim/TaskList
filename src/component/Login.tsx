/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Wrapper from '../Layout/Wrapper';

const Login = () => {
  return (
    <main>
      <Wrapper>
        <div css={loginFormLayoutStyle}>
          <h1 css={loginFormTitleStyle}>Login... 😺</h1>
          <form css={loginFormStyle}>
            <div css={loginInputAreaStyle}>
              <label htmlFor="email" css={loginLabelStyle}>
                Email
              </label>
              <input type="text" placeholder="email..." css={loginInputStyle} />
            </div>
            <div css={loginInputAreaStyle}>
              <label htmlFor="password" css={loginLabelStyle}>
                Password
              </label>
              <input
                type="text"
                placeholder="password..."
                css={loginInputStyle}
              />
            </div>
            <button type="submit" css={loginButtonStyle}>
              Login
            </button>
          </form>
        </div>
      </Wrapper>
    </main>
  );
};

const loginFormLayoutStyle = css`
  display: flex;
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const loginFormTitleStyle = css`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 400;
`;

const loginFormStyle = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const loginInputAreaStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const loginInputStyle = css`
  width: 250px;
  padding: 5px 0px 5px 9px;
  border: 1px solid #000000;
  border-radius: 20px;
  font-size: 12px;
`;

const loginLabelStyle = css`
  font-size: 12px;
`;

const loginButtonStyle = css`
  width: 80px;
  margin: 10px auto 0;
  padding: 4px 16px;
  border: 1px solid #000000;
  border-radius: 20px;
  font-size: 12px;
`;

export default Login;
