import { ReactNode } from 'react';

export type ColumnProps = {
  children?: ReactNode;
};

export function Column({ children }: ColumnProps) {
  return (
    <span style={{ display: 'inline-flex', gap: '.25em', alignItems: 'center' }}>
      {children}
    </span>
  );
}
