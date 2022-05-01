import { useIllustMeta } from '../../hooks/useIllustMeta';
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
          <Time dateTime={postedAt}>
            {postedAt.format('lll')}
          </Time>
          <span>
            (
            <Time dateTime={postedAt}>
              {postedAt.fromNow()}
            </Time>
            )
          </span>
        </Layout.Column>
      </Layout.Row>
      <Layout.Row>
        <Layout.Column>
          <Icon.Eye width="12" height="10" />
          <Number>{viewCount}</Number>
        </Layout.Column>
        <Layout.Column>
          <Icon.Heart width="10" height="10" />
          <Number>{bookmarkCount}</Number>
          <span>
            {(viewCount > 0 && bookmarkCount > 0) && (
              <>
                (
                {((bookmarkCount / viewCount) * 100).toFixed(2)}
                %)
              </>
            )}
          </span>
        </Layout.Column>
      </Layout.Row>
    </Layout.Container>
  );
}
