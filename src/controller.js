import View from './view';
import Model from './model';
import { getParamUrlVal } from './helpers/helpers';


export default class Controller {
    constructor(name){
        this.name = name;

    }

    static init(){


        let localStorageData = Model.getFromStorage(`rodnik-ext-page=${getParamUrlVal('page')}`);

        if(localStorageData === null){
            let data = View.getDataTab();
        } else {
            View.printHtml(localStorageData);
            Model.addToStorage(data, `rodnik-ext-page=${getParamUrlVal('page')}`);
        }







    }

}
