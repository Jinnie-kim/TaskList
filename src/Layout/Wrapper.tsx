/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

const wrapperStyle = css`
  width: 900px;
  margin: 0 auto;
`;

const Wrapper = ({ children }: PropsWithChildren) => {
  return <div css={wrapperStyle}>{children}</div>;
};

export default Wrapper;
