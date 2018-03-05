export const getParamUrlVal = (nameParam) => {
    let paramArr = window.location.href.split('&').filter( (item) => (item.indexOf(nameParam) >= 0) ? item : '' );
    let text = paramArr.toString().split('=');

    return text[text.length - 1];
};

export const clearLocalStorage = (tags) => {



    // let datepickerBtn = document.querySelectorAll('#datepicker span.btn');
    // let selectBtn = document.getElementById('dateRangePreset');
    //
    //
    // console.log(Object.keys(datepickerBtn), 'Datepicker');
    // console.log(Object.keys(selectBtn), 'Select');
    //
    // selectBtn.addEventListener('change', () =>  window.localStorage.clear());
    //
    // datepickerBtn[0].addEventListener('click', () =>  window.localStorage.clear());


    return console.log(tags);
};

