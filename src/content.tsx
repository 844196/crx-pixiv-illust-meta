import { render } from 'react-dom';

import { App } from './App';
import { IllustIdSchema } from './types/IllustId';
import './vendors/setup-dayjs';

function main() {
  document.querySelectorAll<HTMLAnchorElement>('div[type="illust"] ~ div > a[href^="/artworks/"]:not([data-has-illust-meta])').forEach((a) => {
    const parsedIllustId = IllustIdSchema.safeParse((a.getAttribute('href') ?? '').replace('/artworks/', ''));
    if (!parsedIllustId.success) {
      a.setAttribute('data-has-illust-meta', 'skip');
      return;
    }

    a.setAttribute('data-has-illust-meta', 'processing');

    try {
      const container = document.createElement('div');
      a.parentElement?.after(container);

      render(<App illustId={parsedIllustId.data} />, container);

      a.setAttribute('data-has-illust-meta', 'yes');
    } catch (err) {
      console.error(err);

      a.setAttribute('data-has-illust-meta', 'cancel');
    }
  });
}

new MutationObserver(main).observe(document.body, { childList: true, subtree: true });
