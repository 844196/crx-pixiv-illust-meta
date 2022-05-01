import { render } from 'react-dom';

import { App } from './App';
import './vendors/setup-dayjs';

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
    render(<App illustId={illustId} />, container);
  });
}

window.setInterval(main, 16.6);
