import dayjs from 'dayjs';

import { AjaxIllustErrorResponseSchema, AjaxIllustResponseSchema } from '../../types/AjaxIllust';
import { IllustMeta } from '../../types/IllustMeta';

/**
 * @throws {Error}
 */
export async function fetcher(illustId: string): Promise<IllustMeta> {
  const res = await fetch(`https://www.pixiv.net/ajax/illust/${illustId}`, { credentials: 'include' });
  if (res.ok) {
    const { body: { viewCount, createDate, bookmarkCount } } = AjaxIllustResponseSchema.parse(await res.json());

    return {
      viewCount,
      bookmarkCount,
      postedAt: dayjs(createDate),
    };
  }

  let message = 'Something went wrong.';

  const parseResult = AjaxIllustErrorResponseSchema.safeParse(await res.json().catch(() => {}));
  if (parseResult.success) {
    message = parseResult.data.message;
  }

  throw new Error(message);
}
