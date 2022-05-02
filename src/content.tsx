import { render } from 'react-dom';

import { App } from './App';
import './vendors/setup-dayjs';

function main() {
  document.querySelectorAll<HTMLAnchorElement>('div[type] ~ div > a[href^="/artworks/"]:not([data-has-illust-meta])').forEach((a) => {
    a.setAttribute('data-has-illust-meta', 'yes');

    const container = document.createElement('span');
    a.appendChild(container);

    const illustId = (/artworks\/([0-9]+)/.exec(a.getAttribute('href') ?? '') ?? [])[1];
    render(<App illustId={illustId} />, container);
  });
}

window.setInterval(main, 16.6);
