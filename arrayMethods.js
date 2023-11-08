const { count } = require("console");

//split / join
let str = prompt('Enter you text', 'Example: my-first-string');

function camelize(str) {
    let arr = str.split('-');

    let newStr = arr
        .map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1))
        .join('');

    return newStr;
}

alert(camelize(str));

//filter in range
let arr = [];
let a;
let b;

function filterRange(arr, a, b) {
    for (; ;) {
        let n = prompt('Enter the number');

        if (n === null || n === '' || !isFinite(n)) break;

        arr.push(+n);
    }

    a = +prompt('Enter the first value');
    b = +prompt('Enter the second value');

    let filtered = arr.filter(item => item >= a && item <= b);

    return filtered;
}

alert(filterRange(arr, a, b));
alert(arr);

//delete values out of the range
function filterRangeInPlace(arr, a, b) {
    for (; ;) {
        let n = prompt('Enter the number');

        if (n === null || n === '' || !isFinite(n)) break;

        arr.push(+n);
    }

    a = +prompt('Enter the first value');
    b = +prompt('Enter the second value');

    for (n in arr) {
        arr.filter((n, index) => {
            if (n < a || n > b) {
                arr.splice(index, 1);
                index--;
                console.log(arr);
            }
        })
    }
}

filterRangeInPlace(arr, a, b);
console.log(arr);

//descending sort
function compareNumbers(a, b) {
    return a - b;
}

console.log(arr.sort(compareNumbers));

//copy and sort
let stringArr = ['c', 'w', 'A', 'a', 'j', 'Z'];
let sortedArr = stringyArr.toSorted();

console.log(sortedArr);
console.log(stringArr);

let numArr = [5, 1, 9, 18, -3, 0, -0.4, 1.1];
let sortedNumbers = numArr.toSorted((a, b) => a - b);

console.log(sortedNumbers);
console.log(numArr);

//old fashioned copy and sort
function copySortedStr(strArr) {
    return strArr.slice().sort();
}

function copySortedNum(numericArr) {
    return numericArr.slice().sort((a, b) => a - b);
}

let strArr = ['c', 'w', 'A', 'a', 'j', 'Z'];
let numericArr = [5, 1, 9, 18, -3, 0, -0.4, 1.1];

let sortedStr = copySortedStr(strArr);
let sortedNumeric = copySortedNum(numericArr);

console.log(strArr);
console.log(numericArr);

console.log(sortedStr);
console.log(sortedNumeric);

//shuffle array
let lilArr = [5, 7, 9];

function shuffle(lilArr) {
    lilArr.sort(() => Math.random() - 0.5);
}

let varCount = {
    '579': 0,
    '597': 0,
    '759': 0,
    '795': 0,
    '975': 0,
    '957': 0
};

for (let i = 0; i < 1000000; i++) {
    shuffle(lilArr);
    varCount[lilArr.join('')]++;
}

for (let key in varCount) {
    console.log(`${key}: ${varCount[key]}`);
}

//calculator
let x;
let y;

function Calculator() {

    this.methods = {
        '+': (x, y) => x + y,
        '-': (x, y) => x + y
    };

    this.calculate = function(str) {
        let split = str.split(' '),
        x = +split[0],
        operation = split[1],
        y = +split[2]

    if (!this.methods[operation] || isNaN(x) || isNaN(y)) {
        return NaN;
    }

    return this.methods[operation](x, y);
}

this.addMethod = function(name, func) {
    this.methods[name] = func;
};
}

let newCalc = new Calculator;
newCalc.addMethod('*', (x, y) => x * y);
newCalc.addMethod('/', (x, y) => x / y);
newCalc.addMethod('**', (x, y) => x ** y);

let result = newCalc.calculate('15 * 3');
console.log(result);

//transform to array
let wizard1 = { name: 'Harry', surname: 'Potter', age: 11, id: 1};
let wizard2 = { name: 'Minerva', surname: 'McGonagall', age: 88, id: 2};
let wizard3 = { name: 'Helena', surname: 'Ravenclaw', age: 1041, id: 3};
let wizard4 = { name: 'Bellatrix', surname: 'Lestrange', age: 72, id: 4};

let wizards = [wizard1, wizard2, wizard3, wizard4];

let names = wizards.map(wizard => wizard.name);

console.log(names);

//transform to objects
let wizardsMapped = wizards.map(wizard => ({
    fullName: `${wizard.name} ${wizard.surname}`, id: wizard.id
}));

console.log(wizardsMapped[2].fullName);
console.log(wizardsMapped[0].id);

//sort by age
function sortByAge(wizards) {
    let sortedWizards = wizards.toSorted((wizardA, wizardB) => wizardA.age - wizardB.age);

    return sortedWizards;
}

console.log(sortByAge(wizards));

//average age
function getAvgAge(wizards) {
    let avgAge = wizards.reduce((acc, wizard) => acc + wizard.age, 0) / wizards.length;
    
    return avgAge;
}
    
console.log(getAvgAge(wizards));

//keys from array
function groupById(wizards) {
    return wizards.reduce((obj, value) => {
       obj[value.name] = value;
        return obj;
    }, {})
}

//unique elements
let notUniqueArr = ['hello', 'world', 'world', 'world', 'Mike', 'man', 'dude', 'man'];

function unique(notUniqueArr) {
    let uniqueArr = [];

    for (let everyStr of notUniqueArr) {
        if (!uniqueArr.includes(everyStr)) {
            uniqueArr.push(everyStr);
        }
    }

    return uniqueArr;
}

console.log(unique(notUniqueArr));