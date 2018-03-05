import View from './view';
import Model from './model';
import { getParamUrlVal } from './helpers/helpers';


export default class Controller {
    constructor(name){
        this.name = name;

    }

    static init(){

        let localStorageData = Model.getFromStorage(`rodnik-ext-page=${getParamUrlVal('page')}`);
        console.log(localStorageData);

        if(localStorageData === null){
            let data = View.getDataTab();

            // Model.addCountSumm(`rodnik-ext-page=${getParamUrlVal('page')}`);

            Model.addToStorage(data, `rodnik-ext-page=${getParamUrlVal('page')}`);


            View.printHtml( Model.getFromStorage(`rodnik-ext-page=${getParamUrlVal('page')}`) );



        } else {
            View.printHtml(localStorageData);

        }








    }

}
