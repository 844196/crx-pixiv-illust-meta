import { Dayjs } from 'dayjs';
import { ReactNode } from 'react';

export type TimeProps = {
  dateTime: Dayjs;
  children: ReactNode;
};

export function Time({ dateTime, children }: TimeProps) {
  return (
    <time
      dateTime={dateTime.toISOString()}
      title={dateTime.local().format('lll z')}
    >
      {children}
    </time>
  );
}
