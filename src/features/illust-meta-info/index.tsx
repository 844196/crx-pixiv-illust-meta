import { Widget } from './Widget';
import { createRoot } from 'react-dom/client';
import { extend, locale } from 'dayjs';
import 'dayjs/locale/ja';
import relativeTime from 'dayjs/plugin/relativeTime';

locale('ja');
extend(relativeTime);

function main() {
  [...document.querySelectorAll('div[type]')].forEach(async (div) => {
    const a = div.nextElementSibling?.querySelector<HTMLAnchorElement>('a[href^="/artworks/"]:not([data-done])');
    if (!a) {
      return;
    }

    a.setAttribute('data-done', 'yes');

    const container = document.createElement('span');
    a.appendChild(container);

    const [_, illustId] = (/artworks\/([0-9]+)/.exec(a.getAttribute('href') ?? '') ?? []);
    createRoot(container).render(<Widget illustId={illustId} />);
  });
}

window.setInterval(main, 16.6);
