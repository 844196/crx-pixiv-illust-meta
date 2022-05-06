import { render, screen } from '@testing-library/react';

import { BookmarkRate } from './BookmarkRate';

describe('<BookmarkRate />', () => {
  describe('閲覧数が0のとき', () => {
    const viewCount = 0;
    const bookmarkCount = 0;

    it('何も表示されないこと', () => {
      const { container } = render(
        <BookmarkRate viewCount={viewCount} bookmarkCount={bookmarkCount} />
      );
      expect(container).toBeEmptyDOMElement();
    });
  });

  test.each([
    [1, 0, '0.00%'],
    [1, 1, '100.00%'],
    [2, 1, '50.00%'],
    [3, 1, '33.33%'],
    [3, 2, '66.67%'],
  ])(
    '閲覧数:%i, ブックマーク数:%i -> %s',
    (viewCount, bookmarkCount, expected) => {
      render(
        <BookmarkRate viewCount={viewCount} bookmarkCount={bookmarkCount} />
      );
      expect(screen.getByText(expected)).toBeVisible();
    }
  );
});
