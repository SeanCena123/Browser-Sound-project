// chrome.tabs.update(tab.id, {url:'javascript:void window.stop();'})

// Add a listener for the browser action
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  let msg = {
    message: "user clicked!"
  }
  chrome.tabs.sendMessage(tab.id, msg);
}