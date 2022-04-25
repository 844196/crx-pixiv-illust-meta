import dayjs from 'dayjs';
import { ReactNode } from 'react';

import { useAjaxIllust } from './hooks/useAjaxIllust';

function WidgetLayout({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        display: 'flex',
        gap: '.5em',
        color: '#858585',
        fontSize: '13px',
      }}
    >
      {children}
    </span>
  );
}

function WidgetItem({ children }: { children: ReactNode }) {
  return (
    <span style={{ display: 'inline-flex', gap: '.25em', alignItems: 'center' }}>
      {children}
    </span>
  );
}

export function App({ illustId }: { illustId: string }) {
  const ajaxIllust = useAjaxIllust(illustId);
  if (!ajaxIllust) {
    return (
      <>
        <WidgetLayout>&nbsp;</WidgetLayout>
        <WidgetLayout>&nbsp;</WidgetLayout>
      </>
    );
  }

  const { body: { viewCount, bookmarkCount } } = ajaxIllust;
  const createDate = dayjs(ajaxIllust.body.createDate);

  return (
    <>
      <WidgetLayout>
        <WidgetItem>
          {createDate.format('YYYY年M月D日 HH:mm')}
          &nbsp;(
          {createDate.fromNow()}
          )
        </WidgetItem>
      </WidgetLayout>
      <WidgetLayout>
        <WidgetItem>
          <svg viewBox="0 0 14 12" width="12" height="10">
            <path fill="#858585" d="M0 6c2-3.333 4.333-5 7-5s5 1.667 7 5c-2 3.333-4.333 5-7 5S2 9.333 0 6z" />
            <path fill="#ccc" d="M7 8.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0-1a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          <span>
            {viewCount}
          </span>
        </WidgetItem>
        <WidgetItem>
          <svg viewBox="0 0 12 12" width="10" height="10">
            <path fill="currentColor" d="M9,0.75 C10.6568542,0.75 12,2.09314575 12,3.75 C12,6.68851315 10.0811423,9.22726429 6.24342696,11.3662534 L6.24342863,11.3662564 C6.09210392,11.4505987 5.90790324,11.4505988 5.75657851,11.3662565 C1.9188595,9.22726671 0,6.68851455 0,3.75 C1.1324993e-16,2.09314575 1.34314575,0.75 3,0.75 C4.12649824,0.75 5.33911281,1.60202454 6,2.66822994 C6.66088719,1.60202454 7.87350176,0.75 9,0.75 Z" />
          </svg>
          <span>
            {bookmarkCount}
            &nbsp;(
            {((bookmarkCount / viewCount) * 100).toFixed(2)}
            %)
          </span>
        </WidgetItem>
      </WidgetLayout>
    </>
  );
}
