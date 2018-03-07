import { getParamUrlVal, getPageNum } from './helpers/helpers';

class View {
    constructor(){

    }

    static getDataTab(){

        let titles = [];




        let data = {
            summ_page: 0,
            savinings: 0,
            allSumm: 0,
            allSavinings: 0,
            startDate: getParamUrlVal('startDate'),
            endDate: getParamUrlVal('endDate'),
            currentPage: `page=${getPageNum()}`
        };

        let thHtmlElements = document.querySelectorAll('.operations-table thead tr th');
        let trHtmlElements = document.querySelectorAll('.operations-table tbody tr');

        Object.keys(thHtmlElements).forEach( (item, index) => titles.push(thHtmlElements[index].innerText) );

        const indexSavinings = titles.indexOf('Скидка, грн');
        const indexSumm = titles.indexOf('Сумма');

        Object.keys(trHtmlElements).forEach( (item, index) => {

            data.summ_page += Math.round(trHtmlElements[index].children[indexSumm].innerText);
            data.savinings += Math.round(trHtmlElements[index].children[indexSavinings].innerText);

        });

        let { summ_page, savinings } = data;

        data.allSumm += summ_page;
        data.allSavinings += savinings;

        let { allSumm, allSavinings } = data;

        console.log(`Сумма - ${summ_page} грн`);
        console.log(`Скидка - ${savinings} грн`);
        console.log(`Общая сумма - ${allSumm} грн`);
        console.log(`Суммарная скидка - ${allSavinings} грн`);
        console.log(data);

        return data;

    }

    static printHtml(data){

        let allSavinigs = parseInt(localStorage.getItem('rodnik-ext-allSavinigs'));
        let allSumm = parseInt(localStorage.getItem('rodnik-ext-allSumm'));

        const div = document.createElement('div');
        div.className = 'b-rodnikStats-bar';
        div.id = 'rodnik-container';
        div.innerHTML = `<p>Общая сумма - ${allSumm} грн</p>
                         <p>Суммарная скидка - ${allSavinigs} грн</p>`;

        const parentDocument = document.querySelector('table.operations-table').parentNode;
        const table = document.querySelector('table.operations-table');

        parentDocument.insertBefore(div, table);

    }

}

export default View;