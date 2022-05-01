import { Dayjs } from 'dayjs';

export type TimeProps = Omit<JSX.IntrinsicElements['time'], 'dateTime'> & {
  dateTime: Dayjs;
};

export function Time({ dateTime, children, ...props }: TimeProps) {
  return (
    <time
      dateTime={dateTime.toISOString()}
      title={dateTime.local().format('lll z')}
      {...props}
    >
      {children}
    </time>
  );
}
