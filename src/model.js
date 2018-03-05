class Model{
    constructor(){

    }

    static addToStorage(data, key){
        const serialObj = JSON.stringify(data);
        this.localKey = key;
        localStorage.setItem(this.localKey, serialObj);
    }

    static getFromStorage(key){

        const getData = JSON.parse(localStorage.getItem(key));
        return getData;
    }
}

export default Model;