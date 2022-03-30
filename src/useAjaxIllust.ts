import { useEffect, useState } from 'react';

// 参照するプロパティのみ定義
export type AjaxIllust = {
  body: {
    bookmarkCount: number,
    viewCount: number,
  },
};

export const useAjaxIllust = (illustId: string) => {
  const [ajaxIllust, setAjaxIllust] = useState<AjaxIllust>();

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://www.pixiv.net/ajax/illust/${illustId}`, { credentials: 'include' }).then<AjaxIllust>((res) => res.json());
      setAjaxIllust(res);
    })();
  }, [illustId, setAjaxIllust]);

  return ajaxIllust;
};
