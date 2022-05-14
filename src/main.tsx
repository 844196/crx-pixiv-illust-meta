import { createRoot } from 'react-dom/client';

import { IllustIdSchema } from './api';
import { App } from './App';
import './dayjs.setup';
import { css, theme } from './style';

export const DATA_NAME = 'data-illust-meta';

const rootStyle = css({
  // 親コンテナの高さを固定し、マウント直後にUIがガタガタするのを防ぐ
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  height: `calc(${theme.fontSizes.default} * ${theme.lineHeights.default} * 2)`,
})();

export function mount(a: HTMLAnchorElement) {
  a.setAttribute(DATA_NAME, 'processing');

  try {
    const illustId = IllustIdSchema.parse(a.href.split('/artworks/').pop());
    const rootContainer = document.createElement('div');
    rootContainer.classList.add(theme, rootStyle);

    // main() のクエリによって親が存在することは保証されている
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    a.parentElement!.after(rootContainer);
    createRoot(rootContainer).render(<App illustId={illustId} />);

    a.setAttribute(DATA_NAME, 'processed');
  } catch (err) {
    a.setAttribute(DATA_NAME, 'mount-failure');
    throw err;
  }
}

function main() {
  document
    .querySelectorAll<HTMLAnchorElement>(
      `div[type="illust"] ~ div > a[href*="/artworks/"]:not([${DATA_NAME}])`
    )
    .forEach(mount);
}

main();

new MutationObserver(main).observe(document.body, {
  childList: true,
  subtree: true,
});
