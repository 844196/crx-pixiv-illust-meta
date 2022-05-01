import * as Icon from './components/Icon';
import * as Layout from './components/Layout';
import { Number } from './components/Number';
import { useIllustMeta } from './hooks/useIllustMeta';

export type AppProps = {
  illustId: string;
};

export function App({ illustId }: AppProps) {
  const { data: meta } = useIllustMeta(illustId);

  if (!meta) {
    return (
      <Layout.Container data-testid="loading">
        <Layout.Row>
          <Layout.Column>&nbsp;</Layout.Column>
        </Layout.Row>
        <Layout.Row>
          <Layout.Column>&nbsp;</Layout.Column>
        </Layout.Row>
      </Layout.Container>
    );
  }

  return (
    <Layout.Container data-testid="loaded">
      <Layout.Row>
        <Layout.Column>
          <time dateTime={meta.postedAt.toISOString()}>
            {meta.postedAt.format('YYYY年M月D日 HH:mm')}
          </time>
          <span>
            (
            <time dateTime={meta.postedAt.toISOString()}>
              {meta.postedAt.fromNow()}
            </time>
            )
          </span>
        </Layout.Column>
      </Layout.Row>
      <Layout.Row>
        <Layout.Column>
          <Icon.Eye width="12" height="10" />
          <Number>{meta.viewCount}</Number>
        </Layout.Column>
        <Layout.Column>
          <Icon.Heart width="10" height="10" />
          <Number>{meta.bookmarkCount}</Number>
          <span>
            {(meta.viewCount > 0 && meta.bookmarkCount > 0) && (
              <>
                (
                {((meta.bookmarkCount / meta.viewCount) * 100).toFixed(2)}
                %)
              </>
            )}
          </span>
        </Layout.Column>
      </Layout.Row>
    </Layout.Container>
  );
}
