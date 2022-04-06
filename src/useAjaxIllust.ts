import { useCallback, useEffect, useState } from 'react';

function useCache<T>(cacheKey: string, fetcher: () => Promise<T>): T | undefined {
  type Cache = {
    item: T,
    expires: number,
  };

  const [item, setItem] = useState<T>();

  useEffect(() => {
    (async () => {
      const cachedRaw = window.sessionStorage.getItem(cacheKey);
      if (cachedRaw) {
        const cached: Cache = JSON.parse(cachedRaw);
        if (cached.expires > new Date().getTime()) {
          setItem(cached.item);
          return;
        }
      }

      const fetched = await fetcher();
      window.sessionStorage.setItem(cacheKey, JSON.stringify({
        item: fetched,
        expires: new Date().getTime() + (1000 * 60 * 3),
      }));
      setItem(fetched);
    })();
  }, [cacheKey, setItem, fetcher]);

  return item;
}

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

  const ajaxIllust = useCache(`chrome-pixiv-bookmark-rate-ext-${illustId}`, fetcher);

  return ajaxIllust;
};
