(function(){

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let tab = tabs[0]
        console.log(tab);

    });
    // chrome.tabs.executeScript(null, {file: "./dist/js/engine.js"});

    //
    // document.addEventListener('DOMContentLoaded', () => {
    //
    // });

})();
