//The first letter is capital
let str;

function ucFirst(str) {
    str = prompt('Enter your text');

    if (str === '') return str;

    return str[0].toUpperCase() + str.slice(1);
}

alert(`Text: ${ucFirst(str)}`);

//Spam check
let checkStr;

function checkSpam(checkStr) {
    checkStr = prompt('Enter your text');

    let lowerString = checkStr.toLowerCase();

    return lowerString.includes('pron') || lowerString.includes('cp');
}

alert(`Result: ${checkSpam(checkStr)}`);

//String truncation
let maxLength = 7;
let cutStr;

function truncate(cutStr, maxLength) {
    cutStr = prompt('Enter your text');

    return (cutStr.length < maxLength) ? cutStr : cutStr.slice(0, maxLength - 1) + '\u2026';
}

alert(`Your string: ${truncate(cutStr, maxLength)}`)

//Extract number
let nmbStr;

function extractCurrencyValue(nmbStr) {
    nmbStr = prompt('Enter your text');

    if (isNaN(parseInt(nmbStr.match(/\d+/)))) {
        for (let i = 0; i < nmbStr.length; i++) {
            if (!isNaN(parseInt(nmbStr[i]))) {
                alert('This string has not numbers');

                break;
            }
            return parseInt(nmbStr = nmbStr.slice(i));
        } 
    } else {
        return parseInt(nmbStr.match(/\d+/));
    }
}

alert(`Get number: ${extractCurrencyValue(nmbStr)}`)