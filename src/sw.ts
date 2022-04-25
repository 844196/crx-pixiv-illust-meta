// @ts-expect-error https://dev.to/jacksteamdev/advanced-config-for-rpce-3966#dynamic-content-scripts
import content from './content?script';

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
      files: [content as string],
    })
    .catch(console.error);
});
