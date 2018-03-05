import { getParamUrlVal } from './helpers/helpers';

class View {
    constructor(){

    }

    static getDataTab(){

        let titles = [];

        let pageNum = window.location.href.split('&');
  
        let data = {
            summ_page: 0,
            savinings: 0,
            allSumm: 0,
            allSavinings: 0,
            startDate: getParamUrlVal('startDate'),
            endDate: getParamUrlVal('endDate'),
            currentPage: (pageNum[pageNum.length - 1].indexOf('page') >= 0 ) ? pageNum[pageNum.length - 1] : 'page=1'
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

        const div = document.createElement('div');
        div.className = 'b-rodnikStats-bar';
        div.innerHTML = `<p>Сумма - ${data.summ_page} грн</p>
                         <p>Скидка - ${data.savinings} грн</p>
                         <p>Общая сумма - ${data.allSumm} грн</p>
                         <p>Суммарная скидка - ${data.allSavinings} грн</p>`;

        const parentDocument = document.querySelector('table.operations-table').parentNode;
        const table = document.querySelector('table.operations-table');

        parentDocument.insertBefore(div, table);

    }

}


export default View;
