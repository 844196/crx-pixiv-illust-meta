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
  data: IllustMeta,
};

export function useIllustMeta(illustId: string): UseIllustMetaReturn {
  const { data } = useSWR<AjaxIllustResponse, Error>(illustId, fetcher, { suspense: true });

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { viewCount, bookmarkCount, createDate } = data!.body;

  return {
    data: {
      viewCount,
      bookmarkCount,
      postedAt: dayjs(createDate),
    },
  };
}
