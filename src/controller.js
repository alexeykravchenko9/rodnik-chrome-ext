import View from './view';
import Model from './model';
import { getParamUrlVal, clearLocalStorage } from './helpers/helpers';
import { EVENTTAGS } from './index';

export default class Controller {
    constructor(){

    }

    init(){

        let localStorageData = Model.getFromStorage(`rodnik-ext-page=${getParamUrlVal('page')}`);

        if(this.localStorageData === null){
            let data = View.getDataTab();

            Model.addToStorage(data, `rodnik-ext-page=${getParamUrlVal('page')}`);

            View.printHtml( Model.getFromStorage(`rodnik-ext-page=${getParamUrlVal('page')}`) );

        } else {
            View.printHtml(localStorageData);
        }

        clearLocalStorage(EVENTTAGS);
 
    }

}
