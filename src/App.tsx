import dayjs from 'dayjs';

import * as Icon from './components/Icon';
import * as Layout from './components/Layout';
import { Number } from './components/Number';
import { useAjaxIllust } from './hooks/useAjaxIllust';

export type AppProps = {
  illustId: string;
};

export function App({ illustId }: AppProps) {
  const ajaxIllust = useAjaxIllust(illustId);

  if (!ajaxIllust) {
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

  const { body: { viewCount, bookmarkCount } } = ajaxIllust;
  const createDate = dayjs(ajaxIllust.body.createDate);

  return (
    <Layout.Container data-testid="loaded">
      <Layout.Row>
        <Layout.Column>
          <time dateTime={createDate.toISOString()}>
            {createDate.format('YYYY年M月D日 HH:mm')}
          </time>
          <span>
            (
            <time dateTime={createDate.toISOString()}>
              {createDate.fromNow()}
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
