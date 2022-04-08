import { Widget } from './Widget';
import { render } from 'react-dom';

function main() {
  [...document.querySelectorAll('div[type]')].forEach(async (div) => {
    const a = div.nextElementSibling?.querySelector<HTMLAnchorElement>('a[href^="/artworks/"]:not([data-done])');
    if (!a) {
      return;
    }

    a.setAttribute('data-done', 'yes');

    const br = document.createElement('br');
    a.appendChild(br);

    const span = document.createElement('span');
    a.appendChild(span);

    const [_, illustId] = (/artworks\/([0-9]+)/.exec(a.getAttribute('href') ?? '') ?? []);
    render(<Widget illustId={illustId} />, span);
  });
}

window.setInterval(main, 1000);
