export const getParamUrlVal = (nameParam) => {
    let paramArr = window.location.href.split('&').filter( (item) => (item.indexOf(nameParam) >= 0) ? item : '' );
    let text = paramArr.toString().split('=');

    return text[text.length - 1];
};

export const clearLocalStorage = () => {
    return localStorage.clear();
}
