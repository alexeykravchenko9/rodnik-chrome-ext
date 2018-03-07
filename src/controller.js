import View from './view';
import Model from './model';
import { getParamUrlVal, clearLocalStorage, getPageNum } from './helpers/helpers';


const EVENTTAGS = {
    datepickerBtn: '#datepicker span.btn',
    dataRange: 'dateRangePreset',
    locationSelect: 'locationSelect',
    operationType: 'operationTypeSelect'
};


export default class Controller {
    constructor(){

    }

    static init(){

        let localStorageData = Model.getFromStorage(`rodnik-ext-page=${getPageNum()}`);

        if(localStorageData === null){
            let data = View.getDataTab();

            Model.addToStorage(data, `rodnik-ext-page=${getPageNum()}`);

            View.printHtml( Model.getFromStorage(`rodnik-ext-page=${getPageNum()}`) );

        } else {
            View.printHtml(localStorageData);
        }

        clearLocalStorage(EVENTTAGS);

    }

}
