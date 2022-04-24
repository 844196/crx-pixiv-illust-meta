import { useCallback } from 'react';

import { useCache } from '../../hooks/useCache';

// 参照するプロパティのみ定義
export type AjaxUser = {
  body: {
    // 以下のいずれかの場合は空配列になる
    //   * 一つも作品を投稿していない場合
    //   * R-18作品しか投稿していない場合 (未ログイン時)
    illusts: (
      | []
      | {
        [illustId: string]: null,
      }
    ),
    novels: (
      | []
      | {
        [novelId: string]: null,
      }
    ),
    novelSeries: unknown[],
  },
};

export const useAjaxUser = (userId: string) => {
  const fetcher = useCallback(
    () => (
      fetch(`https://www.pixiv.net/ajax/user/${userId}/profile/all`, { credentials: 'include' })
        .then<AjaxUser>((res) => res.json())
        .then<AjaxUser>(({ body: { illusts, novels, novelSeries } }) => ({ body: { illusts, novels, novelSeries } }))
    ),
    [userId],
  );

  const ajaxIllust = useCache(`userId-${userId}`, fetcher);

  return ajaxIllust;
};
