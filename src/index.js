import Controller from './controller';
import axios from 'axios';
//
// export const EVENTTAGS = {
//     tags: '#datepicker span.btn',
//     id: ['dateRangePreset', 'locationSelect', 'operationTypeSelect']
// };

if( document.querySelectorAll('.operations-table tbody tr').length > 0 ){
    Controller.init();
} else {
    window.localStorage.clear();
}


// Version 2 with Parsing
// axios.get( window.location.href )
//     .then(function (response) {
//         document.getElementById('rodnik-container').innerHTML = response.data;
//
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });



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
