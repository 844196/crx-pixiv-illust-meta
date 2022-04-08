// @ts-expect-error
import illustMetaInfo from './features/illust-meta-info?script';
// @ts-expect-error
import decorateArtist from './features/decorate-artist?script';

chrome.tabs.onUpdated.addListener((tabId, { status }, { url }) => {
  if (!url) {
    return;
  }
  if (!/https:\/\/www\.pixiv\.net/.test(url)) {
    return;
  }
  if (status === 'complete') {
    return;
  }

  chrome.scripting.executeScript({
    target: { tabId },
    files: [illustMetaInfo],
  });

  if (/https:\/\/www\.pixiv\.net\/users\/\d+\/followers/.test(url)) {
    chrome.scripting.executeScript({
      target: { tabId },
      files: [decorateArtist],
    });
  }
});
