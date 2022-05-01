import useSWR from 'swr';

import { IllustMeta } from '../../types/IllustMeta';

import { fetcher } from './fetcher';

export type UseIllustMetaReturn = {
  data: IllustMeta,
};

export function useIllustMeta(illustId: string): UseIllustMetaReturn {
  const { data } = useSWR<IllustMeta, Error>(illustId, fetcher, { suspense: true });

  return {
    // SEE: https://swr.bootcss.com/ja/docs/suspense
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    data: data!,
  };
}
