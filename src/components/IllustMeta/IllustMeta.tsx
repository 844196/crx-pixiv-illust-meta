import { IllustMeta as IllustMetaType } from '../../types/IllustMeta';
import * as Icon from '../Icon';
import * as Layout from '../Layout';
import { Number } from '../Number';

export type IllustMetaProps = IllustMetaType;

export function IllustMeta({ viewCount, bookmarkCount, postedAt }: IllustMetaProps) {
  return (
    <Layout.Container role="contentinfo">
      <Layout.Row>
        <Layout.Column>
          <time dateTime={postedAt.toISOString()}>
            {postedAt.format('YYYY年M月D日 HH:mm')}
          </time>
          <span>
            (
            <time dateTime={postedAt.toISOString()}>
              {postedAt.fromNow()}
            </time>
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
