import { rest } from 'msw';

import { fetchAjaxIllust } from './fetchAjaxIllust';
import { db, mockedIllustIds, server } from './mock';
import { AjaxIllustResponse, IllustIdSchema } from './types';

describe('fetchAjaxIllust', () => {
  describe('エラー時', () => {
    it('エラー文言が含まれる場合は、それを文言としたErrorが送出されること', async () => {
      await expect(
        fetchAjaxIllust(mockedIllustIds['存在しない・削除された'])
      ).rejects.toThrow('該当作品は削除されたか、存在しない作品IDです。');
    });

    it('未知のエラーの場合は、フォールバックエラー文言のErrorが送出されること', async () => {
      const illustId = IllustIdSchema.parse('844196');

      server.use(
        rest.get(
          `https://www.pixiv.net/ajax/illust/${illustId}`,
          (_, res, ctx) => res(ctx.status(500))
        )
      );

      await expect(fetchAjaxIllust(illustId)).rejects.toThrow(
        'Something went wrong.'
      );
    });
  });

  describe('存在する', () => {
    it('レスポンスオブジェクトが返ること', async () => {
      const illustId = mockedIllustIds['閲覧数1・ブックマーク数0'];

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const expectedBody = db.illust.findFirst({
        where: {
          id: {
            equals: illustId,
          },
        },
      })!;

      const expected: AjaxIllustResponse = {
        error: false,
        message: '',
        body: {
          viewCount: expectedBody.viewCount,
          bookmarkCount: expectedBody.bookmarkCount,
          createDate: expectedBody.createDate,
        },
      };

      await expect(fetchAjaxIllust(illustId)).resolves.toEqual(expected);
    });
  });
});
