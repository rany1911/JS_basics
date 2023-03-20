// simple object
let user = {};

user.name = "John";
user.surname = "Smith";

user.name = "Pete";

delete user.name;

//is empty
let list = {};

function isEmpty() {
    for (let key in list) {
        return false;
    }
    return true;
}

list.apples = 3;

isEmpty();

// summary of salaries
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
function summaryOfSalaries() {
    for (let key in salaries) {
        sum += salaries[key];
    }

    if (salaries === undefined) {
        sum = 0;
    }
}

summaryOfSalaries();
alert(sum);

// multiplication by 2
let catalog = {
    skirt: 500,
    hoody: 1000,
    jeans: 1500,
    title: "clothes"
}

function multiplyNumeric() {
    for (let key in catalog) {
        if (typeof catalog[key] == 'number') {
            catalog[key] = catalog[key] * 2;
        }
    }
}

multiplyNumeric(catalog);

alert(catalog.jeans);