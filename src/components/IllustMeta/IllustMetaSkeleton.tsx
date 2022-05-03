import { css, keyframes } from '@emotion/react';

import * as Layout from '../Layout';

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const skeletonStyle = css`
  width: 100%;
  background-color: #858585;
  position: relative;
  overflow: hidden;
  height: 1em;
  margin: 0.25em 0;
  border-radius: 999px;

  &::before {
    content: '';
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, transparent, rgba(204, 204, 204, 0.5), transparent);
    animation: ${shimmer} 1.2s linear infinite;
  }
`;

export function IllustMetaSkeleton() {
  return (
    <Layout.Container role="status">
      <Layout.Row css={skeletonStyle} />
      <Layout.Row css={skeletonStyle} />
    </Layout.Container>
  );
}
