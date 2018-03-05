import View from './view';
import Model from './model';

export default class Controller {
    constructor(name){
        this.name = name;
    }



    static view(){
        const { host, pathname } = window.location;

        if(host === 'my.rodnik.ua' && pathname == '/operations'){

            let data = View.getDataTab();

            View.printHtml(data);

        } else {
            console.log('Please, move to the Operations page.');
        }


    }

    static model(){

    }


}
