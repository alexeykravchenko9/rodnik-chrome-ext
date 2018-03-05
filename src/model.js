class Model{
    constructor(){

    }

    static addToStorage(data, key){

        const { savinings, summ_page } = data;


        if( localStorage.getItem('rodnik-ext-allSavinigs') !== null && localStorage.getItem('rodnik-ext-allSumm') !== null){

            let allSavinigs = parseInt(localStorage.getItem('rodnik-ext-allSavinigs'));
            let allSumm = parseInt(localStorage.getItem('rodnik-ext-allSumm'));

            localStorage.setItem('rodnik-ext-allSavinigs', allSavinigs += savinings );
            localStorage.setItem('rodnik-ext-allSumm', allSumm += summ_page );


        } else {

            localStorage.setItem('rodnik-ext-allSavinigs', savinings);
            localStorage.setItem('rodnik-ext-allSumm', summ_page);

        }

        const serialObj = JSON.stringify(data);

        this.localKey = key;

        localStorage.setItem(this.localKey, serialObj);

    }

    static getFromStorage(key){
        const obj = JSON.parse(localStorage.getItem(key));
        return obj;
    }


}

export default Model;