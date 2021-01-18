chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg = {
        txt: "turn on"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}