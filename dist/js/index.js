"use strict";

(function () {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        console.log(tab);
    });
    // chrome.tabs.executeScript(null, {file: "./dist/js/engine.js"});

    //
    // document.addEventListener('DOMContentLoaded', () => {
    //
    // });
})();
//# sourceMappingURL=index.js.map