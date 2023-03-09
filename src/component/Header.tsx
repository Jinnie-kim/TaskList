/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Wrapper from '../Layout/Wrapper';

const Header = () => {
  return (
    <header>
      <Wrapper>
        <div css={headerStyle}>
          <h1 css={headerTitleStyle}>Task List</h1>
          <button type="button" css={headerButtonStyle}>
            Logout
          </button>
        </div>
      </Wrapper>
    </header>
  );
};

const headerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const headerTitleStyle = css`
  width: fit-content;
  padding: 10px;
  border-bottom: 1px solid #000000;
  font-size: 24px;
  font-weight: 400;
`;

const headerButtonStyle = css`
  width: 52px;
  height: 18px;
  position: absolute;
  right: 0;
  padding: 4px 12px;
  border: 1px solid #000000;
  border-radius: 20px;
  font-size: 8px;
`;

export default Header;
