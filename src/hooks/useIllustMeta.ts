import dayjs from 'dayjs';
import useSWR from 'swr';

import { AjaxIllustResponse } from '../types/AjaxIllust';
import { IllustMeta } from '../types/IllustMeta';

const fetcher = (illustId: string) => (
  fetch(`https://www.pixiv.net/ajax/illust/${illustId}`, { credentials: 'include' })
    .then<AjaxIllustResponse>((res) => res.json())
);

export function useIllustMeta(illustId: string): { data?: IllustMeta } {
  const { data } = useSWR(illustId, fetcher);

  return {
    data: data ? {
      viewCount: data.body.viewCount,
      bookmarkCount: data.body.bookmarkCount,
      postedAt: dayjs(data.body.createDate),
    } : undefined,
  };
}
