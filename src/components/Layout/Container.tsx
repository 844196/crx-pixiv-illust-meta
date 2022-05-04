import clsx from 'clsx';

import { containerStyle } from './style.css';

export function Container({ className, ...props }: JSX.IntrinsicElements['div']) {
  return (
    <div className={clsx(containerStyle, className)} {...props} />
  );
}
