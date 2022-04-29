import { render, screen } from '@testing-library/react';

import { Number } from './Number';

describe('<Number />', () => {
  test.each([
    [0, '0'],
    [1, '1'],
    [12, '12'],
    [123, '123'],
    [1234, '1,234'],
    [12345, '12,345'],
    [123456, '123,456'],
    [1234567, '1,234,567'],
  ])('%i -> %s', (num, expected) => {
    render(<Number>{num}</Number>);
    expect(screen.getByText(expected)).toBeVisible();
  });
});
