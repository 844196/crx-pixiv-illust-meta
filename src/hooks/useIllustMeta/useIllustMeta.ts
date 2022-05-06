import dayjs from 'dayjs';
import useSWRImmutable from 'swr/immutable';

import { AjaxIllustResponse, IllustId, fetchAjaxIllust } from '@external';

import { IllustMeta } from '../../types/IllustMeta';

export type UseIllustMetaReturn = {
  data: IllustMeta;
};

export function useIllustMeta(illustId: IllustId): UseIllustMetaReturn {
  const { data } = useSWRImmutable<AjaxIllustResponse, Error>(
    illustId,
    fetchAjaxIllust,
    { suspense: true }
  );

  // SEE: https://swr.bootcss.com/ja/docs/suspense
  const {
    body: { viewCount, bookmarkCount, createDate },
  } = data!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

  return {
    data: {
      viewCount,
      bookmarkCount,
      postedAt: dayjs(createDate),
    },
  };
}
