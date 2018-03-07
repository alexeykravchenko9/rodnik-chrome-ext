export const getParamUrlVal = (nameParam) => {
    let paramArr = window.location.href.split('&').filter( (item) => (item.indexOf(nameParam) >= 0 ) ? item : '' );

    let text = paramArr.toString().split('=');

    return text[text.length - 1];
};

export const getPageNum = () => {
    let newPageNum = document.querySelectorAll('.pagination li.active a');
    return newPageNum[0].innerHTML;
}

export const clearLocalStorage = (elements) => {

    if( Object.keys(elements).length > 0 ){

        for( let key in elements){

            if( elements.hasOwnProperty(key)) {

                if(elements[key].split(' ').length > 1){

                    let selectorAll = document.querySelectorAll(elements[key]);

                    selectorAll[0].addEventListener('click', () =>  window.localStorage.clear());


                } else {

                    let elementByID = document.getElementById(elements[key]);

                    elementByID.addEventListener('change', () =>  window.localStorage.clear());

                }

            }
        }

    } else {
        throw new Error("Params aren't is object");
    }

    return console.log(elements);
};

