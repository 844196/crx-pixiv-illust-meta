import { FC } from 'react';
import { useAjaxUser } from './useAjaxUser';

export const ArtistBadge: FC<{ userId: string }> = ({ userId }) => {
  const ajaxUser = useAjaxUser(userId);
  if (!ajaxUser) {
    return null;
  }

  const { body: { illusts, novels, novelSeries }} = ajaxUser;
  const hasIllust = Array.isArray(illusts) === false;
  const hasNovel = Array.isArray(novels) === false || novelSeries.length > 0;

  return (
    <>
      {hasIllust && '🎨'}
      {hasNovel && '🖊️'}
    </>
  );
};
