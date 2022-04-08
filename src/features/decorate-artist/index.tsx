import { render } from 'react-dom';
import { ArtistBadge } from './ArtistBadge';

function main() {
  if (!/https:\/\/www\.pixiv\.net\/users\/\d+\/followers/.test(location.href)) {
    return;
  }

  [...document.querySelectorAll('div[aria-haspopup] > a[href^="/users/"]:not([data-has-artist-badge])')].forEach((a) => {
    if (a.querySelector('div[role="img"]')) {
      return;
    }

    a.setAttribute('data-has-artist-badge', 'yes');

    const root = document.createElement('span');
    a.appendChild(root);

    const userId = a.getAttribute('data-gtm-value') ?? '';
    render(<ArtistBadge userId={userId} />, root);
  });
}

window.setInterval(main, 1000);
