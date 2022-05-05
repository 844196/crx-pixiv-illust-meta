import useSWRImmutable from 'swr/immutable';

import { IllustId } from '../../types/IllustId';
import { IllustMeta } from '../../types/IllustMeta';

import { fetcher } from './fetcher';

export type UseIllustMetaReturn = {
  data: IllustMeta,
};

export function useIllustMeta(illustId: IllustId): UseIllustMetaReturn {
  const { data } = useSWRImmutable<IllustMeta, Error>(illustId, fetcher, { suspense: true });

  return {
    // SEE: https://swr.bootcss.com/ja/docs/suspense
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    data: data!,
  };
}
