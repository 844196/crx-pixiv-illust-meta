import { useCallback } from 'react';

import { useCache } from './useCache';

// 参照するプロパティのみ定義
export type AjaxIllust = {
  body: {
    bookmarkCount: number,
    viewCount: number,
    createDate: string, // ISO8601
  },
};

export const useAjaxIllust = (illustId: string) => {
  const fetcher = useCallback(
    () => (
      fetch(`https://www.pixiv.net/ajax/illust/${illustId}`, { credentials: 'include' })
        .then<AjaxIllust>((res) => res.json())
        .then<AjaxIllust>(({ body: { bookmarkCount, viewCount, createDate } }) => ({ body: { bookmarkCount, viewCount, createDate } }))
    ),
    [illustId],
  );

  const ajaxIllust = useCache(`illustId-${illustId}`, fetcher);

  return ajaxIllust;
};
