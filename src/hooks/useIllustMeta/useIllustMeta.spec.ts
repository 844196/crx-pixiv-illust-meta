import { renderHook, waitFor } from '@testing-library/react';
import dayjs from 'dayjs';

import { db, mockedIllustIds } from '../../api/mock';

import { UseIllustMetaReturn, useIllustMeta } from './useIllustMeta';

describe('useIllustMeta', () => {
  describe('given illust id data does exist', () => {
    const illustId = mockedIllustIds['閲覧数1・ブックマーク数1'];

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const existsIllust = db.illust.findFirst({
      where: {
        id: {
          equals: illustId,
        },
      },
    })!;

    it('return converted object', async () => {
      const expected: UseIllustMetaReturn = {
        data: {
          viewCount: existsIllust.viewCount,
          bookmarkCount: existsIllust.bookmarkCount,
          postedAt: dayjs(existsIllust.createDate),
        },
      };

      const { result } = renderHook(() => useIllustMeta(illustId));
      const currentResult = result.current;
      await waitFor(() => {
        expect(result.current).not.toBe(currentResult);
      });

      expect(result.current).toEqual(expected);
    });
  });
});
