// @ts-expect-error
import main from './main?script';

chrome.tabs.onUpdated.addListener((tabId, { status }, { url }) => {
  if (!/https:\/\/www\.pixiv\.net/.test(url ?? '')) {
    return;
  }
  if (status === 'complete') {
    return;
  }

  chrome.scripting.executeScript({
    target: { tabId },
    files: [main],
  });
});
