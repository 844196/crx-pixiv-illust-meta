import { IllustId } from '../../api';
import { useIllustMeta } from '../../hooks/useIllustMeta';
import { BookmarkRate } from '../BookmarkRate';
import * as Icon from '../Icon';
import * as Layout from '../Layout';
import { Number } from '../Number';
import { Time } from '../Time';

export type IllustMetaProps = {
  illustId: IllustId;
};

export function IllustMeta({ illustId }: IllustMetaProps) {
  const {
    data: { viewCount, bookmarkCount, postedAt },
  } = useIllustMeta(illustId);

  return (
    <Layout.Container role="contentinfo">
      <Layout.Row>
        <Layout.Column>
          <Time dateTime={postedAt} data-testid="absoluteTime">
            {postedAt.format('lll')}
          </Time>
          <span>
            (
            <Time dateTime={postedAt} data-testid="relativeTime">
              {postedAt.fromNow()}
            </Time>
            )
          </span>
        </Layout.Column>
      </Layout.Row>
      <Layout.Row>
        <Layout.Column>
          <Icon.Eye />
          <Number data-testid="viewCount">{viewCount}</Number>
        </Layout.Column>
        <Layout.Column
          as="a"
          href={`https://www.pixiv.net/bookmark_detail.php?illust_id=${illustId}`}
        >
          <Icon.Heart />
          <Number data-testid="bookmarkCount">{bookmarkCount}</Number>
          {viewCount > 0 && bookmarkCount > 0 && (
            <span data-testid="bookmarkRate">
              (
              <BookmarkRate
                viewCount={viewCount}
                bookmarkCount={bookmarkCount}
              />
              )
            </span>
          )}
        </Layout.Column>
      </Layout.Row>
    </Layout.Container>
  );
}
