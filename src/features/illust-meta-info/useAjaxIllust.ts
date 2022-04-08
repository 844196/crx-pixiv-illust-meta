import { useCallback } from 'react';
import { useCache } from '../../hooks/useCache';

// 参照するプロパティのみ定義
export type AjaxIllust = {
  body: {
    bookmarkCount: number,
    viewCount: number,
  },
};

export const useAjaxIllust = (illustId: string) => {
  const fetcher = useCallback(
    () => (
      fetch(`https://www.pixiv.net/ajax/illust/${illustId}`, { credentials: 'include' })
        .then<AjaxIllust>((res) => res.json())
        .then<AjaxIllust>(({ body: { bookmarkCount, viewCount } }) => ({ body: { bookmarkCount, viewCount }}))
    ),
    [illustId],
  );

  const ajaxIllust = useCache(`illustId-${illustId}`, fetcher);

  return ajaxIllust;
};
