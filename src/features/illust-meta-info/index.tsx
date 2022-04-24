import { extend, locale } from 'dayjs';
import 'dayjs/locale/ja';
import relativeTime from 'dayjs/plugin/relativeTime';
import { createRoot } from 'react-dom/client';

import { Widget } from './Widget';

locale('ja');
extend(relativeTime);

function main() {
  [...document.querySelectorAll('div[type]')].forEach((div) => {
    const a = div.nextElementSibling?.querySelector<HTMLAnchorElement>('a[href^="/artworks/"]:not([data-done])');
    if (!a) {
      return;
    }

    a.setAttribute('data-done', 'yes');

    const container = document.createElement('span');
    a.appendChild(container);

    const illustId = (/artworks\/([0-9]+)/.exec(a.getAttribute('href') ?? '') ?? [])[1];
    createRoot(container).render(<Widget illustId={illustId} />);
  });
}

window.setInterval(main, 16.6);
