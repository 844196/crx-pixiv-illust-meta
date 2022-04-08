import { useEffect, useState } from 'react';

export function useCache<T>(cacheKey: string, fetcher: () => Promise<T>): T | undefined {
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
