import { useIllustMeta } from '../../hooks/useIllustMeta';
import { BookmarkRate } from '../BookmarkRate';
import * as Icon from '../Icon';
import * as Layout from '../Layout';
import { Number } from '../Number';
import { Time } from '../Time';

export type IllustMetaProps = {
  illustId: string
};

export function IllustMeta({ illustId }: IllustMetaProps) {
  const { data: { viewCount, bookmarkCount, postedAt } } = useIllustMeta(illustId);

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
          <Icon.Eye width="12" height="10" />
          <Number data-testid="viewCount">{viewCount}</Number>
        </Layout.Column>
        <Layout.Column>
          <Icon.Heart width="10" height="10" />
          <Number data-testid="bookmarkCount">{bookmarkCount}</Number>
          {(viewCount > 0 && bookmarkCount > 0) && (
            <span data-testid="bookmarkRate">
              (
              <BookmarkRate viewCount={viewCount} bookmarkCount={bookmarkCount} />
              )
            </span>
          )}
        </Layout.Column>
      </Layout.Row>
    </Layout.Container>
  );
}
