chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    if (message.txt === 'turn on') {
        let keywords = document.querySelector('meta[name="keywords"]');
        console.log(keywords);
    }
}
