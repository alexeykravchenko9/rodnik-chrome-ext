import Controller from './controller';

// let contr = new Controller('Test class');
// let dataTable = document.querySelectorAll('.operations-table tbody tr');

if( document.querySelectorAll('.operations-table tbody tr').length > 0 ){
 
    Controller.init();
} else {
    window.localStorage.clear();
}
// console.log(`Test config ${1+2}`);

//
// (function(){
//
//
//     //
//     // chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     //     let tab = tabs[0]
//     //     console.log(tab);
//     //
//     // });
//
//
//     // chrome.tabs.executeScript(null, {file: "./dist/js/engine.js"});
//
//     //
//     // document.addEventListener('DOMContentLoaded', () => {
//     //
//     // });
//
//
//
// })();
