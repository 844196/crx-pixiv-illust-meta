import { ReactElement } from 'react';

import type { ColumnProps } from './Column';

export type RowProps = {
  children:
  | ReactElement<ColumnProps>
  | ReactElement<ColumnProps>[];
};

export function Row({ children }: RowProps) {
  return (
    <span style={{ display: 'inline-flex', gap: '.5em', alignItems: 'center' }}>
      {children}
    </span>
  );
}
