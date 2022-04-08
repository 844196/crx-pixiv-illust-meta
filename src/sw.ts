// @ts-expect-error
import illustMetaInfo from './features/illust-meta-info?script';

chrome.tabs.onUpdated.addListener((tabId, { status }, { url }) => {
  if (!/https:\/\/www\.pixiv\.net/.test(url ?? '')) {
    return;
  }
  if (status === 'complete') {
    return;
  }

  chrome.scripting.executeScript({
    target: { tabId },
    files: [illustMetaInfo],
  });
});
