class Model{
    constructor(){

    }

    static addToStorage(data, key){

        let localObj = {};

        for(let i = 1; i <= localStorage.length; i++){
            localObj[i] = (JSON.parse(localStorage.getItem(`rodnik-ext-page=${i}`)));
        }
        console.log('addToStorage', localObj);

        Object.keys(localObj).forEach( (item) => {
            data.allSavinings += localObj[item].savinings;
            data.allSumm += localObj[item].summ_page;

        });


        const serialObj = JSON.stringify(data);

        this.localKey = key;

        localStorage.setItem(this.localKey, serialObj);

    }

    static getFromStorage(key){
        const obj = JSON.parse(localStorage.getItem(key));
        return obj;
    }

    // static addCountSumm(local_id){
    //
    //     if(local_id == null){
    //
    //     let localObj = {};
    //
    //     for(let i = 1; i <= localStorage.length; i++){
    //         localObj[i] = (JSON.parse(localStorage.getItem(`rodnik-ext-page=${i}`)));
    //     }
    //     console.log(localObj);
    //
    //     Object.keys(localObj).forEach( (item) => data.allSavinings += localObj[item].savinings );
    //     Object.keys(localObj).forEach( (item) => data.allSumm += localObj[item].summ_page );
    //
    //     }
    //
    //
    //     return report;
    // }
}

export default Model;