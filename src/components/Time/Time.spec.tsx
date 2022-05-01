import { render, screen } from '@testing-library/react';
import dayjs from 'dayjs';

import { Time } from './Time';

describe('<Time />', () => {
  const dateTime = dayjs('1993-03-08T13:30:49.000+09:00');
  const text = 'My birthday!';

  it('all', () => {
    render(<Time dateTime={dateTime}>{text}</Time>);

    const timeElement = screen.queryByText(text);

    expect(timeElement).toBeVisible();
    expect(timeElement).toHaveAttribute('datetime', '1993-03-08T04:30:49.000Z');
    expect(timeElement).toHaveAttribute('title', '1993年3月8日 13:30 GMT+9');
  });
});
