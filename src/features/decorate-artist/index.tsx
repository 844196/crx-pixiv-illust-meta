import { createRoot } from 'react-dom/client';
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

    const container = document.createElement('span');
    a.appendChild(container);

    const userId = a.getAttribute('data-gtm-value') ?? '';
    createRoot(container).render(<ArtistBadge userId={userId} />);
  });
}

window.setInterval(main, 16.6);
