'use strict';

(function () {

    var titles = [];

    var arr = [];

    var summ = 0;
    var savinings = 0;

    var thHtmlElements = document.querySelectorAll('.operations-table thead tr th');
    var trHtmlElements = document.querySelectorAll('.operations-table tbody tr');

    console.log(thHtmlElements);

    Object.keys(thHtmlElements).forEach(function (item, index) {
        return titles.push(thHtmlElements[index].innerText);
    });

    var indexSavinings = titles.indexOf('Скидка, грн');
    var indexSumm = titles.indexOf('Сумма');

    Object.keys(trHtmlElements).forEach(function (item, index) {

        summ += Math.round(trHtmlElements[index].children[indexSumm].innerText);
        savinings += Math.round(trHtmlElements[index].children[indexSavinings].innerText);
    });

    console.log('\u0421\u0443\u043C\u043C\u0430 - ' + summ + ' \u0433\u0440\u043D');
    console.log('\u0421\u043A\u0438\u0434\u043A\u0430 - ' + savinings + ' \u0433\u0440\u043D');

    var div = document.createElement('div');
    div.className = 'b-rodnikStats-bar';
    div.innerHTML = '<p>\u0421\u0443\u043C\u043C\u0430 - ' + summ + ' \u0433\u0440\u043D</p><p>\u0421\u043A\u0438\u0434\u043A\u0430 - ' + savinings + ' \u0433\u0440\u043D</p>';

    var parentDocument = document.querySelector('table.operations-table').parentNode;
    var table = document.querySelector('table.operations-table');

    parentDocument.insertBefore(div, table);
})();
//# sourceMappingURL=engine.js.map