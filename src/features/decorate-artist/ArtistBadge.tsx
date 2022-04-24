import { useAjaxUser } from './useAjaxUser';

export function ArtistBadge({ userId }: { userId: string }) {
  const ajaxUser = useAjaxUser(userId);
  if (!ajaxUser) {
    return null;
  }

  const { body: { illusts, novels, novelSeries } } = ajaxUser;
  const hasIllust = Array.isArray(illusts) === false;
  const hasNovel = Array.isArray(novels) === false || novelSeries.length > 0;

  return (
    <>
      {hasIllust && '🎨'}
      {hasNovel && '🖊️'}
    </>
  );
}
