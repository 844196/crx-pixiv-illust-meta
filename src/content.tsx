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
      const container = document.createElement('span');
      a.appendChild(container);

      render(<App illustId={parsedIllustId.data} />, container);

      a.setAttribute('data-has-illust-meta', 'yes');
    } catch (err) {
      console.error(err);

      a.setAttribute('data-has-illust-meta', 'cancel');
    }
  });
}

window.setInterval(main, 16.6);
