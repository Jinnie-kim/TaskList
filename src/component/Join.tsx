/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Wrapper from '../Layout/Wrapper';

const Join = () => {
  return (
    <main>
      <Wrapper>
        <div css={joinFormLayoutStyle}>
          <h1 css={joinFormTitleStyle}>Join... 😺</h1>
          <form css={joinFormStyle}>
            <div css={joinInputAreaStyle}>
              <label htmlFor="email" css={loginLabelStyle}>
                Email
              </label>
              <input type="text" placeholder="email..." css={joinInputStyle} />
            </div>
            <div css={joinInputAreaStyle}>
              <label htmlFor="password" css={loginLabelStyle}>
                Password
              </label>
              <input
                type="text"
                placeholder="password..."
                css={joinInputStyle}
              />
            </div>
            <button type="submit" css={joinButtonStyle}>
              Join
            </button>
          </form>
        </div>
      </Wrapper>
    </main>
  );
};

const joinFormLayoutStyle = css`
  display: flex;
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const joinFormTitleStyle = css`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 400;
`;

const joinFormStyle = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const joinInputAreaStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const joinInputStyle = css`
  width: 250px;
  padding: 5px 0px 5px 9px;
  border: 1px solid #000000;
  border-radius: 20px;
  font-size: 12px;
`;

const loginLabelStyle = css`
  font-size: 12px;
`;

const joinButtonStyle = css`
  width: 80px;
  margin: 10px auto 0;
  padding: 4px 16px;
  border: 1px solid #000000;
  border-radius: 20px;
  font-size: 12px;
`;

export default Join;
