import { ReactElement } from 'react';

import type { RowProps } from './Row';

type ContainerProps = {
  children:
  | ReactElement<RowProps>
  | ReactElement<RowProps>[];
};

export function Container({ children }: ContainerProps) {
  return (
    <span
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontSize: '13px',
        color: '#858585',
      }}
    >
      {children}
    </span>
  );
}
