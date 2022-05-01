import dayjs from 'dayjs';
import useSWR from 'swr';

import { AjaxIllustErrorResponseSchema, AjaxIllustResponse, AjaxIllustResponseSchema } from '../types/AjaxIllust';
import { IllustMeta } from '../types/IllustMeta';

/**
 * @throws {Error}
 */
const fetcher = async (illustId: string): Promise<AjaxIllustResponse> => {
  const res = await fetch(`https://www.pixiv.net/ajax/illust/${illustId}`, { credentials: 'include' });
  if (res.ok) {
    return AjaxIllustResponseSchema.parse(await res.json());
  }

  let message = 'Something went wrong.';

  const parseResult = AjaxIllustErrorResponseSchema.safeParse(await res.json());
  if (parseResult.success) {
    message = parseResult.data.message;
  }

  throw new Error(message);
};

export type UseIllustMetaReturn = {
  error?: Error,
  data?: IllustMeta,
};

export function useIllustMeta(illustId: string): UseIllustMetaReturn {
  const { data, error } = useSWR<AjaxIllustResponse, Error>(illustId, fetcher);

  return {
    error,
    data: data ? {
      viewCount: data.body.viewCount,
      bookmarkCount: data.body.bookmarkCount,
      postedAt: dayjs(data.body.createDate),
    } : undefined,
  };
}
