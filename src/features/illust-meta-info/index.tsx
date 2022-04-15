import { Widget } from './Widget';
import { render } from 'react-dom';
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

    const span = document.createElement('span');
    a.appendChild(span);

    const [_, illustId] = (/artworks\/([0-9]+)/.exec(a.getAttribute('href') ?? '') ?? []);
    render(<Widget illustId={illustId} />, span);
  });
}

window.setInterval(main, 16.6);
