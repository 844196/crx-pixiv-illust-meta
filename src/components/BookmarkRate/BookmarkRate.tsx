type BookmarkRateProps = {
  viewCount: number;
  bookmarkCount: number;
};

export function BookmarkRate({ viewCount, bookmarkCount }: BookmarkRateProps) {
  if (viewCount === 0) {
    return null;
  }

  return <>{((bookmarkCount / viewCount) * 100).toFixed(2)}%</>;
}
