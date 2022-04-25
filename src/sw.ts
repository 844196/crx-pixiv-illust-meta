// @ts-expect-error https://dev.to/jacksteamdev/advanced-config-for-rpce-3966#dynamic-content-scripts
import illustMetaInfo from './features/illust-meta-info?script';

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

  chrome.scripting
    .executeScript({
      target: { tabId },
      files: [illustMetaInfo as string],
    })
    .catch(console.error);
});
