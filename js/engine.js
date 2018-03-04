(function(){

    let titles = [];

    let arr = [];

    let summ = 0;
    let savinings = 0;

    let thHtmlElements = document.querySelectorAll('.operations-table thead tr th');
    let trHtmlElements = document.querySelectorAll('.operations-table tbody tr');

    console.log( thHtmlElements );

    Object.keys(thHtmlElements).forEach( (item, index) => titles.push(thHtmlElements[index].innerText) );

    const indexSavinings = titles.indexOf('Скидка, грн');
    const indexSumm = titles.indexOf('Сумма');


    Object.keys(trHtmlElements).forEach( (item, index) => {

        summ += Math.round(trHtmlElements[index].children[indexSumm].innerText);
        savinings += Math.round(trHtmlElements[index].children[indexSavinings].innerText);

    });

    console.log(`Сумма - ${summ} грн`);
    console.log(`Скидка - ${savinings} грн`);

    const div = document.createElement('div');
    div.className = 'b-rodnikStats-bar';
    div.innerHTML = `<p>Сумма - ${summ} грн</p><p>Скидка - ${savinings} грн</p>`;

    const parentDocument = document.querySelector('table.operations-table').parentNode;
    const table = document.querySelector('table.operations-table');

    parentDocument.insertBefore(div, table);


})();
