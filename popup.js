//wait for html and popup to load
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', onclick, false)

    function onclick() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, '', turnOn)
            })
    }

    function turnOn(res) {
        const div = document.createElement('div')
        div.textContent = `Filter is on!`
        document.body.appendChild(div)
    }

}, false)