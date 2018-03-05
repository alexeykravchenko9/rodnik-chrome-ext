class View {
    constructor(){

    }

    static getDataTab(){

        let titles = [];


        let data = {
            summ: 0,
            savinings: 0,
            currentPage: ''
        };


        console.log(window);
        let valURL = window.location.href.split('&');


        let { summ, savinings } = data;

        let thHtmlElements = document.querySelectorAll('.operations-table thead tr th');
        let trHtmlElements = document.querySelectorAll('.operations-table tbody tr');

        Object.keys(thHtmlElements).forEach( (item, index) => titles.push(thHtmlElements[index].innerText) );

        const indexSavinings = titles.indexOf('Скидка, грн');
        const indexSumm = titles.indexOf('Сумма');


        Object.keys(trHtmlElements).forEach( (item, index) => {

            data.summ += Math.round(trHtmlElements[index].children[indexSumm].innerText);
            data.savinings += Math.round(trHtmlElements[index].children[indexSavinings].innerText);

        });

        console.log(`Сумма - ${summ} грн`);
        console.log(`Скидка - ${savinings} грн`);
        console.log(data);


        return data;


    }



    static printHtml(data){

        const div = document.createElement('div');
        div.className = 'b-rodnikStats-bar';
        div.innerHTML = `<p>Сумма - ${data.summ} грн</p><p>Скидка - ${data.savinings} грн</p>`;

        const parentDocument = document.querySelector('table.operations-table').parentNode;
        const table = document.querySelector('table.operations-table');

        parentDocument.insertBefore(div, table);

    }

}


export default View;
