gapi.load("client", loadClient);

function loadClient() {
    gapi.client.setApiKey("AIzaSyC6gMGG2cxbHMo3Aqp0H-zxfn8RU3EPaeg");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function () { console.log("GAPI client loaded for API"); },
            function (err) { console.error("Error loading GAPI client for API", err); });
}