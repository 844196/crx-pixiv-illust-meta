import dayjs from 'dayjs';
import { rest } from 'msw';

import { db, mockedIllustIds } from '../../mocks/db';
import { server } from '../../mocks/server';
import { IllustIdSchema } from '../../types/IllustId';
import { IllustMeta } from '../../types/IllustMeta';

import { fetcher } from './fetcher';

describe('fetcher', () => {
  describe('エラー時', () => {
    it('エラー文言が含まれる場合は、それを文言としたErrorが送出されること', async () => {
      await expect(fetcher(mockedIllustIds['存在しない・削除された'])).rejects.toThrow('該当作品は削除されたか、存在しない作品IDです。');
    });

    it('未知のエラーの場合は、フォールバックエラー文言のErrorが送出されること', async () => {
      const illustId = IllustIdSchema.parse('844196');

      server.use(
        rest.get(`https://www.pixiv.net/ajax/illust/${illustId}`, (_, res, ctx) => res(
          ctx.status(500),
        )),
      );

      await expect(fetcher(illustId)).rejects.toThrow('Something went wrong.');
    });
  });

  describe('存在する', () => {
    it('ドメインオブジェクトが返ること', async () => {
      const illustId = mockedIllustIds['閲覧数1・ブックマーク数0'];

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const ajaxIllust = db.illust.findFirst({
        where: {
          id: {
            equals: illustId,
          },
        },
      })!;

      const expected: IllustMeta = {
        viewCount: ajaxIllust.viewCount,
        bookmarkCount: ajaxIllust.bookmarkCount,
        postedAt: dayjs(ajaxIllust.createDate),
      };

      await expect(fetcher(illustId)).resolves.toEqual(expected);
    });
  });
});
