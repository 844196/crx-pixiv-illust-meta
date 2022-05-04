import clsx from 'clsx';

import { rowSkeletonStyle, rowStyle } from './style.css';

export type RowProps = JSX.IntrinsicElements['div'] & {
  loading?: boolean,
};

export function Row({ loading, className, ...props }: RowProps) {
  return (
    <div className={clsx(rowStyle, { [rowSkeletonStyle]: loading }, className)} {...props} />
  );
}
