import { rest } from 'msw';

import { AjaxIllustErrorResponse, AjaxIllustResponse } from '../api';

import { db } from './db';

export const handlers = [
  rest.get<
    any,
    { illustId: string },
    AjaxIllustResponse | AjaxIllustErrorResponse
  >(
    'https://www.pixiv.net/ajax/illust/:illustId',
    ({ params: { illustId } }, res, ctx) => {
      const illust = db.illust.findFirst({
        where: {
          id: {
            equals: illustId,
          },
        },
      });

      if (!illust) {
        return res(
          ctx.status(404),
          ctx.json({
            error: true,
            message: '該当作品は削除されたか、存在しない作品IDです。',
            body: [],
          })
        );
      }

      return res(
        ctx.status(200),
        ctx.json({
          error: false,
          message: '',
          body: illust,
        })
      );
    }
  ),
];
