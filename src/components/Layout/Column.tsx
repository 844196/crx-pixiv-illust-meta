import clsx from 'clsx';

import { columnStyle } from './style.css';

export function Column({ className, ...props }: JSX.IntrinsicElements['span']) {
  return (
    <span className={clsx(columnStyle, className)} {...props} />
  );
}
